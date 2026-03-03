import { Resend } from 'npm:resend@3.0.0';

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

Deno.serve(async (req) => {
  try {
    const body = await req.json();
    const { inquiryType, firstName, lastName, email, phone, jobTitle, company, message } = body;

    let recipientEmail;
    let subject;

    if (inquiryType === 'partnership') {
      recipientEmail = 'partnerships@cadunow.com';
      subject = 'Strategic Partnership Inquiry';
    } else if (inquiryType === 'support') {
      recipientEmail = 'support@cadunow.com';
      subject = 'Support Request';
    } else {
      return Response.json({ error: 'Invalid inquiry type' }, { status: 400 });
    }

    const emailBody = `
New Contact Form Submission

From: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Job Title: ${jobTitle || 'Not provided'}
Company: ${company || 'Not provided'}

Inquiry Type: ${inquiryType === 'partnership' ? 'Strategic Partnership Interest' : 'Support'}

Message:
${message || 'No message provided'}
    `.trim();

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