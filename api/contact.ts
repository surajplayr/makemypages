import mongoose from 'mongoose';

export default async function handler(req: any, res: any) {
  // Sirf POST request allow karega
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  // 1. MONGODB DATABASE LOGIC (Agar Vercel mein MONGODB_URI daala hoga toh DB mein save hoga)
  const MONGODB_URI = process.env.MONGODB_URI;
  if (MONGODB_URI) {
    try {
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 3000 });
      }
      const InquirySchema = new mongoose.Schema({
        name: String, email: String, phone: String, service: String, message: String, createdAt: { type: Date, default: Date.now }
      });
      const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);
      await new Inquiry({ name, email, phone, service, message }).save();
      console.log('Saved to DB');
    } catch (err) {
      console.error("DB Error:", err);
    }
  }

  // 2. RESEND EMAIL LOGIC
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipient = 'iam.monotosh13@gmail.com'; // Aapka email jo code mein tha

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #2563eb;">New Lead Captured! 🚀</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service || 'General'}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <h3>Client Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  `;

  if (resendApiKey) {
    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'MakeMyPages Inquiry <onboarding@resend.dev>',
          to: [recipient],
          reply_to: email,
          subject: `⚡ New MakeMyPages Inquiry from ${name}`,
          html: emailHtml
        })
      });

      if (resendResponse.ok) {
        return res.status(200).json({ message: 'Email sent successfully!' });
      } else {
        const errorText = await resendResponse.text();
        return res.status(500).json({ error: 'Resend API Error', details: errorText });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    return res.status(500).json({ error: 'RESEND_API_KEY is missing in Vercel settings' });
  }
}
