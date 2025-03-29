import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, services, preferredTime, message } = body;

    if (!name || !email || !phone || !address) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // Log the booking data (for now, until email service is configured)
    console.log('Booking received:', {
      name,
      email,
      phone,
      address,
      services,
      preferredTime,
      message
    });

    // In production, we would integrate with a compatible email service
    // For now, we'll just return success and handle emails via Supabase triggers

    return NextResponse.json({ 
      success: true,
      message: 'Booking data received successfully'
    });
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
} 