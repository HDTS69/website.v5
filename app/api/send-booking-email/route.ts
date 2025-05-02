import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import type { FormData } from '@/components/ui/BookingForm/types'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json()

    // Format services array into a readable string
    const servicesString = formData.services.join(', ')

    // Admin email HTML template
    const adminEmailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Booking Request</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #000000;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #333;
        }
        .email-header {
          background-color: #000000;
          padding: 30px 30px 20px;
          text-align: center;
          border-bottom: 1px solid #333;
        }
        .logo {
          max-width: 200px;
          margin-bottom: 20px;
        }
        .email-body {
          padding: 30px;
          color: #e5e5e5;
        }
        .email-footer {
          background-color: #111;
          padding: 20px 30px;
          text-align: center;
          color: #888;
          font-size: 12px;
          border-top: 1px solid #333;
        }
        h1 {
          color: #00E6CA;
          font-size: 24px;
          margin: 0 0 20px;
          font-weight: 600;
        }
        h2 {
          color: #00E6CA;
          font-size: 18px;
          margin: 25px 0 15px;
          font-weight: 500;
        }
        p {
          margin: 0 0 15px;
          color: #e5e5e5;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
        }
        .data-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #333;
        }
        .data-table tr:last-child td {
          border-bottom: none;
        }
        .label {
          color: #00E6CA;
          font-weight: 500;
          width: 40%;
        }
        .value {
          color: #e5e5e5;
        }
        .button {
          display: inline-block;
          background-color: #00E6CA;
          color: #000000;
          text-decoration: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: 600;
          margin-top: 15px;
          text-align: center;
        }
        .highlight-box {
          background-color: rgba(0, 230, 202, 0.1);
          border-left: 4px solid #00E6CA;
          padding: 15px;
          border-radius: 8px;
          margin: 25px 0;
        }
        .message-box {
          background-color: #111;
          padding: 15px;
          border-radius: 8px;
          margin-top: 15px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <img src="https://hdtradeservices.com.au/images/icon-logo.webp" alt="HD Trade Services Logo" class="logo" style="width: 100px; height: auto;">
          <h1>New Booking Request</h1>
        </div>
        <div class="email-body">
          <p>A new booking request has been submitted through the website.</p>
          
          <h2>Customer Information</h2>
          <table class="data-table">
            <tr>
              <td class="label">Name</td>
              <td class="value">${formData.name}</td>
            </tr>
            <tr>
              <td class="label">Email</td>
              <td class="value">${formData.email}</td>
            </tr>
            <tr>
              <td class="label">Phone</td>
              <td class="value">${formData.phone}</td>
            </tr>
            <tr>
              <td class="label">Address</td>
              <td class="value">${formData.address}</td>
            </tr>
          </table>
          
          <h2>Service Details</h2>
          <table class="data-table">
            <tr>
              <td class="label">Services Requested</td>
              <td class="value">${servicesString || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Preferred Time</td>
              <td class="value">${formData.preferredTime || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Preferred Date</td>
              <td class="value">${formData.preferredDate || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Urgency</td>
              <td class="value">${formData.urgency || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Newsletter Subscription</td>
              <td class="value">${formData.newsletter ? 'Yes' : 'No'}</td>
            </tr>
          </table>
          
          ${
            formData.message
              ? `
          <h2>Additional Message</h2>
          <div class="message-box">
            <p>${formData.message}</p>
          </div>
          `
              : ''
          }
          
          <div class="highlight-box">
            <p>Please contact the customer as soon as possible to confirm their booking.</p>
          </div>
        </div>
        <div class="email-footer">
          <p>© ${new Date().getFullYear()} HD Trade Services. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `

    // Customer email HTML template
    const customerEmailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Confirmation - HD Trade Services</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #000000;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #333;
        }
        .email-header {
          background-color: #000000;
          padding: 30px 30px 20px;
          text-align: center;
          border-bottom: 1px solid #333;
        }
        .logo {
          max-width: 200px;
          margin-bottom: 20px;
        }
        .email-body {
          padding: 30px;
          color: #e5e5e5;
        }
        .email-footer {
          background-color: #111;
          padding: 20px 30px;
          text-align: center;
          color: #888;
          font-size: 12px;
          border-top: 1px solid #333;
        }
        h1 {
          color: #00E6CA;
          font-size: 24px;
          margin: 0 0 20px;
          font-weight: 600;
        }
        h2 {
          color: #00E6CA;
          font-size: 18px;
          margin: 25px 0 15px;
          font-weight: 500;
        }
        p {
          margin: 0 0 15px;
          color: #e5e5e5;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
        }
        .data-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #333;
        }
        .data-table tr:last-child td {
          border-bottom: none;
        }
        .label {
          color: #00E6CA;
          font-weight: 500;
          width: 40%;
        }
        .value {
          color: #e5e5e5;
        }
        .button {
          display: inline-block;
          background-color: #00E6CA;
          color: #000000;
          text-decoration: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: 600;
          margin-top: 15px;
          text-align: center;
        }
        .highlight-box {
          background-color: rgba(0, 230, 202, 0.1);
          border-left: 4px solid #00E6CA;
          padding: 15px;
          border-radius: 8px;
          margin: 25px 0;
        }
        .contact {
          background-color: #111;
          padding: 20px;
          border-radius: 8px;
          margin: 25px 0 15px;
          text-align: center;
        }
        .phone {
          color: #00E6CA;
          font-size: 20px;
          font-weight: 600;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <img src="https://hdtradeservices.com.au/images/icon-logo.webp" alt="HD Trade Services Logo" class="logo" style="width: 100px; height: auto;">
          <h1>Booking Confirmation</h1>
        </div>
        <div class="email-body">
          <p>Dear ${formData.name},</p>
          
          <p>Thank you for booking with HD Trade Services. We have received your request and will contact you shortly to confirm your appointment.</p>
          
          <div class="highlight-box">
            <p>A member of our team will call you at <strong>${formData.phone}</strong> to confirm details and provide you with a time estimate.</p>
          </div>
          
          <h2>Your Booking Details</h2>
          <table class="data-table">
            <tr>
              <td class="label">Services</td>
              <td class="value">${servicesString || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Preferred Time</td>
              <td class="value">${formData.preferredTime || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Preferred Date</td>
              <td class="value">${formData.preferredDate || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Address</td>
              <td class="value">${formData.address}</td>
            </tr>
          </table>
          
          <div class="contact">
            <p>Need urgent help? Call us directly:</p>
            <div class="phone">1300 420 911</div>
          </div>
          
          <p>If you need to make any changes to your booking or have any questions, please don't hesitate to contact us.</p>
          
          <p>Best regards,<br>HD Trade Services Team</p>
        </div>
        <div class="email-footer">
          <p>© ${new Date().getFullYear()} HD Trade Services. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'HD Trade Services <admin@hdtradeservices.com.au>',
      to: 'admin@hdtradeservices.com.au',
      subject: 'New Booking Request',
      html: adminEmailHtml,
    })

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: 'HD Trade Services <admin@hdtradeservices.com.au>',
      to: formData.email,
      subject: 'Booking Confirmation - HD Trade Services',
      html: customerEmailHtml,
    })

    return NextResponse.json({
      success: true,
      adminEmail,
      customerEmail,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
