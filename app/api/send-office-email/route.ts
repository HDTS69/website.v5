import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { booking_id } = await req.json();

    if (!booking_id) {
      return NextResponse.json({ error: 'Booking ID is required' }, { status: 400 });
    }

    const { data: booking, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('booking_id', booking_id)
      .single();

    if (error || !booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://hdtradeservices.com.au';
    const paymentEmailUrl = `${websiteUrl}/api/send-payment-email?booking_id=${booking.booking_id}`;

    await resend.emails.send({
      from: 'HD Trade Services <system@hdtradeservices.com.au>',
      to: 'admin@hdtradeservices.com.au',
      subject: `New Booking: ${booking.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Booking Details</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${booking.name}</p>
            <p><strong>Email:</strong> ${booking.email}</p>
            <p><strong>Phone:</strong> ${booking.phone}</p>
            <p><strong>Address:</strong> ${booking.address}</p>
            <p><strong>Services:</strong> ${booking.services || 'N/A'}</p>
            <p><strong>Preferred Time:</strong> ${booking.preferred_time || 'N/A'}</p>
            <p><strong>Urgency:</strong> ${booking.urgency || 'N/A'}</p>
            <p><strong>Preferred Date:</strong> ${booking.preferred_date || 'N/A'}</p>
            <p><strong>Preferred Date Type:</strong> ${booking.preferred_date_type || 'N/A'}</p>
            <p><strong>Preferred Date Range:</strong> ${booking.preferred_date_range || 'N/A'}</p>
            <p><strong>Message:</strong> ${booking.message || 'N/A'}</p>
            <p><strong>Newsletter:</strong> ${booking.newsletter ? 'Yes' : 'No'}</p>
            <p><strong>Terms Accepted:</strong> ${booking.terms_accepted ? 'Yes' : 'No'}</p>
            <p><strong>Booking ID:</strong> ${booking.booking_id}</p>
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <form action="${paymentEmailUrl}" method="GET" style="display: inline;">
              <button type="submit"
                style="display: inline-block; background-color: #00E6CA; color: black; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; border: none; cursor: pointer;">
                Send Attendance Fee Email
              </button>
            </form>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Office email sent successfully' });
  } catch (error) {
    console.error('Error sending office email:', error);
    return NextResponse.json(
      { error: 'Failed to send office email' },
      { status: 500 }
    );
  }
} 