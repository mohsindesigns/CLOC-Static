import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter outside the handler to reuse connection
let transporter = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
    });
  }
  return transporter;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fname,
      lname,
      name, // for forms that use 'name' instead of fname/lname
      email,
      phone,
      address,
      city,
      budget,
      notes,
      message,
      lightingAreas,
      service
    } = body;

    const fullName = name || `${fname} ${lname}`;
    const businessEmail = 'Info@lightsovercolumbus.com';
    const transporter = getTransporter();

    // Prepare email content
    let areasStr = '';
    if (lightingAreas) {
      areasStr = Object.entries(lightingAreas)
        .filter(([_, value]) => value === true)
        .map(([key, _]) => key.charAt(0).toUpperCase() + key.slice(1))
        .join(', ');
    }

    const mailOptions = {
      from: `"Christmas Lights" <${process.env.GMAIL_USER}>`,
      to: businessEmail,
      subject: `🎄 New Quote/Contact Request: ${fullName}`,
      html: `
        <div style="font-family: Arial; max-width: 600px;">
          <h2 style="color: #ef4444;">New Inquiry from ${fullName}</h2>
          <p><strong>📧</strong> ${email}</p>
          <p><strong>📞</strong> ${phone}</p>
          ${address ? `<p><strong>🏠</strong> ${address}, ${city || ''}</p>` : ''}
          ${service ? `<p><strong>🛠️</strong> Service: ${service}</p>` : ''}
          ${budget ? `<p><strong>💰</strong> Budget: ${budget}</p>` : ''}
          ${areasStr ? `<p><strong>✨</strong> Areas: ${areasStr}</p>` : ''}
          ${(notes || message) ? `<p><strong>💬</strong> Message: ${notes || message}</p>` : ''}
          <hr>
          <a href="mailto:${email}" style="background:#ef4444; color:white; padding:10px 20px; text-decoration:none; border-radius:5px;">Reply to Customer</a>
        </div>
      `,
    };

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    } else {
      console.log('Email credentials missing, logging:', { fullName, email });
      return NextResponse.json({ message: 'Success (Logged)' }, { status: 200 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
