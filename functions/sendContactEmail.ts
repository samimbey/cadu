import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import { Resend } from 'npm:resend@3.0.0';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    const body = await req.json();
    const { inquiryType, firstName, lastName, email, phone, jobTitle, company, message } = body;

    // Determine recipient email based on inquiry type
    let recipientEmail;
    let subject;

    switch (inquiryType) {
      case 'partnership':
        recipientEmail = 'partnerships@cadunow.com';
        subject = 'Strategic Partnership Inquiry';
        break;
      case 'support':
        recipientEmail = 'support@cadunow.com';
        subject = 'Support Request';
        break;
      default:
        return Response.json({ error: 'Invalid inquiry type' }, { status: 400 });
    }

    // Build email body
    const emailBody = `
New Contact Form Submission

From: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Job Title: ${jobTitle || 'Not provided'}
Company: ${company || 'Not provided'}

Inquiry Type: ${inquiryType}

Message:
${message || 'No message provided'}
    `.trim();

    // Initialize Resend with API key
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'Cadu <noreply@cadunow.com>',
      to: recipientEmail,
      subject: subject,
      text: emailBody,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});