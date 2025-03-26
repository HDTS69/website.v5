import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const booking_id = searchParams.get('booking_id');

    if (!booking_id) {
      return NextResponse.json({ error: 'Booking ID is required' }, { status: 400 });
    }

    const { data: booking, error } = await supabase
      .from('bookings')
      .select('name, email, booking_id')
      .eq('booking_id', booking_id)
      .single();

    if (error || !booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://hdtradeservices.com.au';
    const paymentUrl = `${websiteUrl}/attendance-fee?booking_id=${booking.booking_id}`;

    await resend.emails.send({
      from: 'HD Trade Services <office@hdtradeservices.com.au>',
      to: booking.email,
      subject: 'Pay Your Attendance Fee - HD Trade Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Attendance Fee Payment</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p>Hi ${booking.name},</p>
            <p>Thank you for booking with HD Trade Services. Please click the button below to pay your attendance fee.</p>
            <p><strong>Booking ID:</strong> ${booking.booking_id}</p>
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <a href="${paymentUrl}"
               style="display: inline-block; background-color: #00E6CA; color: black; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Pay Attendance Fee
            </a>
          </div>
        </div>
      `,
    });

    // Update booking status
    await supabase
      .from('bookings')
      .update({ status: 'awaiting_payment' })
      .eq('booking_id', booking_id);

    return NextResponse.json({ message: 'Payment email sent successfully' });
  } catch (error) {
    console.error('Error sending payment email:', error);
    return NextResponse.json(
      { error: 'Failed to send payment email' },
      { status: 500 }
    );
  }
} 