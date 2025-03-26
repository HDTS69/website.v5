import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-static';

// Initialize Stripe with the latest API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { amount, booking_id, email } = await req.json();

    if (!amount || !booking_id || !email) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Verify booking exists and belongs to this email
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .select('id')
      .eq('booking_id', booking_id)
      .eq('email', email)
      .single();

    if (bookingError || !booking) {
      return NextResponse.json(
        { error: 'Invalid booking ID or email' },
        { status: 404 }
      );
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'aud',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        booking_id,
      },
      receipt_email: email,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
} 