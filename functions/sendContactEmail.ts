import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

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
      case 'sales':
        recipientEmail = 'partnerships@cadunow.com';
        subject = 'Sales Inquiry';
        break;
      case 'other':
        recipientEmail = 'partnerships@cadunow.com';
        subject = 'General Inquiry';
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

    // Send email using the SendEmail integration
    await base44.integrations.Core.SendEmail({
      to: recipientEmail,
      subject: subject,
      body: emailBody,
      from_name: 'Cadu Contact Form',
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});