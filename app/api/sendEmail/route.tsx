"use server";
import nodemailer from 'nodemailer';

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // or 587 for non-secure connections
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function POST(request: Request) {
  try {
    const { senderEmail, firstName, lastName, message, phone, company, country, consent } = await request.json();

    // Create the HTML content for the email
    const emailHtml = `
      <html>
      <body>
        <h1>New message from ${firstName} ${lastName}</h1>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong> </p>
        <p>${message}</p>
        <p>${consent}</p>
      </body>
      </html>
    `;

    const mailOptions = {
      from: senderEmail, 
      to: process.env.EMAIL, 
      subject: `New message from ${firstName} ${lastName}`,
      replyTo: senderEmail,
      html: emailHtml
    };

    // Send the email using nodemailer
    const info = await transporter.sendMail(mailOptions);

    if (!info) {
      throw new Error('Failed to send the email');
    }

    // console.log('Verification email sent:', info.response);

    return new Response(JSON.stringify({ messageId: info.messageId }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
}
