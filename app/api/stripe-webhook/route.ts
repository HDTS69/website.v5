import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const dynamic = 'force-static';

// This is necessary to handle raw body in Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'No Stripe signature found' },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      console.error('Error verifying webhook signature:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    console.log('Processing webhook event:', event.type);

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const booking_id = session.metadata?.booking_id;
        const customerEmail = session.customer_email;
        const paymentAmount = session.amount_total;

        if (!booking_id || !customerEmail || !paymentAmount) {
          console.error('Missing required session data:', { booking_id, customerEmail, paymentAmount });
          return NextResponse.json(
            { error: 'Missing required session data' },
            { status: 400 }
          );
        }

        // Get booking details
        const { data: booking, error: bookingError } = await supabase
          .from('bookings')
          .select('name, email')
          .eq('booking_id', booking_id)
          .single();

        if (bookingError || !booking) {
          console.error('Booking not found:', bookingError);
          return NextResponse.json(
            { error: 'Booking not found' },
            { status: 404 }
          );
        }

        try {
          // Create or get customer
          let customer = (await stripe.customers.list({ email: customerEmail })).data[0];
          if (!customer) {
            customer = await stripe.customers.create({
              email: customerEmail,
              name: booking.name,
            });
          }

          // Create invoice
          const invoice = await stripe.invoices.create({
            customer: customer.id,
            collection_method: 'send_invoice',
            due_date: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60, // 7 days from now
            metadata: { booking_id },
          });

          // Add invoice item
          await stripe.invoiceItems.create({
            customer: customer.id,
            invoice: invoice.id,
            amount: paymentAmount,
            currency: 'aud',
            description: `Attendance Fee - Booking ID: ${booking_id}`,
          });

          // Finalize and mark invoice as paid
          const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id, {
            auto_advance: true,
          });
          await stripe.invoices.pay(invoice.id);

          // Update booking status in Supabase
          await supabase
            .from('bookings')
            .update({
              payment_status: 'paid',
              status: 'confirmed',
              invoice_url: finalizedInvoice.hosted_invoice_url,
            })
            .eq('booking_id', booking_id);

          // Send invoice email
          await resend.emails.send({
            from: 'HD Trade Services <billing@hdtradeservices.com.au>',
            to: booking.email,
            subject: `Invoice for Attendance Fee - Booking ${booking_id}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">Payment Confirmation</h2>
                <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
                  <p>Hi ${booking.name},</p>
                  <p>Thank you for your payment! Here's your invoice:</p>
                  <p><strong>Booking ID:</strong> ${booking_id}</p>
                  <p><strong>Amount:</strong> $${(paymentAmount / 100).toFixed(2)} AUD</p>
                </div>
                <div style="margin-top: 20px; text-align: center;">
                  <a href="${finalizedInvoice.hosted_invoice_url}"
                     style="display: inline-block; background-color: #00E6CA; color: black; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    View Invoice
                  </a>
                </div>
              </div>
            `,
          });
        } catch (error) {
          console.error('Error processing payment completion:', error);
          return NextResponse.json(
            { error: 'Failed to process payment completion' },
            { status: 500 }
          );
        }
        break;
      }

      // Handle other event types with a default response
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
} 