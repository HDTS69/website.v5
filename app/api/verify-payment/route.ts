import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the latest API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const paymentIntentId = searchParams.get('payment_intent');

  if (!paymentIntentId) {
    return NextResponse.json(
      { error: 'Payment intent ID is required' },
      { status: 400 }
    );
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    return NextResponse.json({
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    });
  } catch (err) {
    console.error('Error verifying payment:', err);
    const error = err as Error;
    return NextResponse.json(
      { error: error.message || 'Error verifying payment' },
      { status: 500 }
    );
  }
} 