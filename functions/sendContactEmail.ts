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

    const emailBody = `New Contact Form Submission

From: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Job Title: ${jobTitle || 'Not provided'}
Company: ${company || 'Not provided'}

Inquiry Type: ${inquiryType === 'partnership' ? 'Strategic Partnership Interest' : 'Support'}

Message:
${message || 'No message provided'}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Cadu <noreply@cadunow.com>',
        to: recipientEmail,
        subject: subject,
        text: emailBody,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});