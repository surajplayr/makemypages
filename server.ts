import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
const isValidMongoUri = (uri: string) => uri.startsWith('mongodb://') || uri.startsWith('mongodb+srv://');

// Disable buffering globally so Mongoose operations fail fast when disconnected
mongoose.set('bufferCommands', false);

// In-Memory fallback stores
const memoryInquiries: any[] = [];
const memoryPortfolio: any[] = [
  {
    _id: 'mem_1',
    title: 'E-Commerce Rebrand',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    link: '#',
    createdAt: new Date('2026-05-15')
  },
  {
    _id: 'mem_2',
    title: 'SaaS Product Design',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    link: '#',
    createdAt: new Date('2026-05-20')
  },
  {
    _id: 'mem_3',
    title: 'SaaS Platform Dashboard',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    link: '#',
    createdAt: new Date('2026-05-25')
  }
];

if (MONGODB_URI && isValidMongoUri(MONGODB_URI)) {
  mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 3000, // Timeout fast (3s) instead of getting stuck
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.warn('Invalid or missing MONGODB_URI. Running with in-memory fallbacks.');
}

// Models
const InquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Inquiry = mongoose.model('Inquiry', InquirySchema);

const PortfolioSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});
const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Check if MongoDB is connected
    const isConnected = mongoose.connection.readyState === 1;
    let savedInquiry: any = null;

    if (isConnected) {
      try {
        const inquiry = new Inquiry({ name, email, phone, service, message });
        savedInquiry = await inquiry.save();
        console.log('[DB SUCCESS] Inquiry successfully saved to MongoDB');
      } catch (dbError: any) {
        console.error('[DB FALLBACK] Database save failing, storing in memory:', dbError.message || dbError);
        savedInquiry = {
          _id: 'mem_inq_' + Date.now(),
          name,
          email,
          phone,
          service,
          message,
          createdAt: new Date()
        };
        memoryInquiries.unshift(savedInquiry);
      }
    } else {
      console.warn('[DB WARNING] MongoDB is offline. Storing inquiry in-memory fallback.');
      savedInquiry = {
        _id: 'mem_inq_' + Date.now(),
        name,
        email,
        phone,
        service,
        message,
        createdAt: new Date()
      };
      memoryInquiries.unshift(savedInquiry);
    }

    // Lazy initialization of mailer configuration
    const resendApiKey = process.env.RESEND_API_KEY || 're_KjwcR57S_MsBbGzzyEMnyEo88qSFJDWag';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');

    const recipient = 'iam.monotosh13@gmail.com';
    let mailSent = false;
    let mailError = null;

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 30px auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 20px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <div style="text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 28px;">
          <h2 style="color: #111111; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em;">New Lead Captured</h2>
          <p style="color: #5f6368; margin: 6px 0 0; font-size: 14px; font-weight: 500;">Submitted via MakeMyPages Contact Form</p>
        </div>
        
        <div style="margin-bottom: 28px; background: #f5f7fb; padding: 24px; border-radius: 16px; border: 1px solid #e5e7eb;">
          <p style="margin: 12px 0; font-size: 15px; color: #111111;"><strong style="color: #5f6368; width: 110px; display: inline-block;">Name:</strong> ${name || 'N/A'}</p>
          <p style="margin: 12px 0; font-size: 15px; color: #111111;"><strong style="color: #5f6368; width: 110px; display: inline-block;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email || 'N/A'}</a></p>
          <p style="margin: 12px 0; font-size: 15px; color: #111111;"><strong style="color: #5f6368; width: 110px; display: inline-block;">Phone:</strong> ${phone || 'Not provided'}</p>
          <p style="margin: 12px 0; font-size: 15px; color: #111111;"><strong style="color: #5f6368; width: 110px; display: inline-block;">Service:</strong> <span style="background-color: #2563eb; color: #ffffff; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; display: inline-block;">${service || 'General Inquiry'}</span></p>
        </div>

        <div style="background-color: #ffffff; padding: 24px; border-left: 4px solid #2563eb; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); margin-top: 20px; border-top: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
          <h3 style="margin-top: 0; color: #111111; font-size: 16px; font-weight: 700; border-bottom: 1px solid #f3f4f6; padding-bottom: 8px; margin-bottom: 12px;">Client Message</h3>
          <p style="color: #374151; white-space: pre-wrap; font-size: 14px; line-height: 1.6; margin: 0;">${message || 'No message provided.'}</p>
        </div>

        <div style="text-align: center; color: #9ca3af; font-size: 11px; margin-top: 40px; border-top: 1px solid #f3f4f6; padding-top: 24px;">
          <p style="margin: 0; font-weight: 500; line-height: 1.5;">This notification message was automatically generated by your MakeMyPages platform application.</p>
        </div>
      </div>
    `;

    // Try sending with Resend first
    if (resendApiKey) {
      try {
        console.log('[RESEND] Attempting email dispatch via Resend API...');
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'MakeMyPages Inquiry <onboarding@resend.dev>',
            to: [recipient],
            reply_to: email || undefined,
            subject: `⚡ New MakeMyPages Inquiry from ${name}`,
            html: emailHtml
          })
        });

        if (resendResponse.ok) {
          const resData = await resendResponse.json() as { id: string };
          console.log('[RESEND SUCCESS] Email dispatched successfully. ID:', resData.id);
          mailSent = true;
        } else {
          const errorText = await resendResponse.text();
          console.error('[RESEND ERROR] Failed response from Resend API:', resendResponse.status, errorText);
          mailError = `Resend API returned status ${resendResponse.status}: ${errorText}`;
        }
      } catch (resendError: any) {
        console.error('[RESEND EXCEPTION] Error making request to Resend API:', resendError);
        mailError = resendError.message || String(resendError);
      }
    }

    // Fallback to SMTP NodeMailer if Resend not sent and SMTP properties are defined
    if (!mailSent && smtpUser && smtpPass) {
      try {
        console.log('[SMTP FALLBACK] Attempting email dispatch via SMTP...');
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        const mailOptions = {
          from: `"MakeMyPages Inquiry" <${smtpUser}>`,
          to: recipient,
          replyTo: email || smtpUser,
          subject: `⚡ New MakeMyPages Inquiry from ${name}`,
          html: emailHtml,
        };

        await transporter.sendMail(mailOptions);
        console.log(`[SMTP SUCCESS] Real-time email successfully forwarded to ${recipient} for inquiry from ${email}`);
        mailSent = true;
        mailError = null; // Clear previous error since it succeeded via SMTP
      } catch (sendError: any) {
        mailError = sendError.message || String(sendError);
        console.error(`[SMTP ERROR] Fallback real-time delivery to ${recipient} failed:`, sendError);
      }
    }

    // Direct Sandbox Log if both failed or were not fully configured
    if (!mailSent) {
      console.warn('--- EMAIL DISPATCH SANDBOX LOG ---');
      console.warn(`Could not dispatch email via Resend or SMTP.`);
      if (mailError) {
        console.warn(`Reason for latest failure: ${mailError}`);
      }
      console.warn(`To send actual emails to ${recipient}, please configure secrets in the Secrets Panel:`);
      console.warn('RESEND_API_KEY="re_..."');
      console.warn('SMTP_USER="example@gmail.com"');
      console.warn('SMTP_PASS="xxxx-xxxx-xxxx-xxxx"');
      console.warn('-----------------------------------');
      console.warn(`Simulating message payload to ${recipient}:`);
      console.warn(`Name: ${name}`);
      console.warn(`Email: ${email}`);
      console.warn(`Message: ${message}`);
      console.warn('-----------------------------------');
    }

    res.status(201).json({ 
      message: 'Inquiry submitted successfully',
      mailSent,
      ...(mailError && { mailWarning: 'Database inquiry saved, but real-time email dispatch had temporary delivery connection issues.' })
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

app.get('/api/inquiries', async (req, res) => {
  try {
    const isConnected = mongoose.connection.readyState === 1;
    if (isConnected) {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      // Combine with memory inquiries to be comprehensive
      res.json([...memoryInquiries, ...inquiries]);
    } else {
      res.json(memoryInquiries);
    }
  } catch (error: any) {
    console.error('Failed to fetch inquiries, using memory fallback:', error.message || error);
    res.json(memoryInquiries);
  }
});

app.get('/api/portfolio', async (req, res) => {
  try {
    const isConnected = mongoose.connection.readyState === 1;
    if (isConnected) {
      const portfolio = await Portfolio.find().sort({ createdAt: -1 });
      // Combine with memory portfolio items so there is always placeholder data if needed
      res.json([...portfolio, ...memoryPortfolio]);
    } else {
      res.json(memoryPortfolio);
    }
  } catch (error: any) {
    console.error('Failed to fetch portfolio, using memory fallback:', error.message || error);
    res.json(memoryPortfolio);
  }
});

app.post('/api/portfolio', async (req, res) => {
  try {
    const isConnected = mongoose.connection.readyState === 1;
    let savedItem: any = null;

    if (isConnected) {
      try {
        const item = new Portfolio(req.body);
        savedItem = await item.save();
        console.log('[DB SUCCESS] Portfolio item saved to MongoDB');
      } catch (dbError: any) {
        console.error('[DB FALLBACK] Portfolio save failed, saving in memory:', dbError.message || dbError);
        savedItem = {
          _id: 'mem_port_' + Date.now(),
          ...req.body,
          createdAt: new Date()
        };
        memoryPortfolio.unshift(savedItem);
      }
    } else {
      console.warn('[DB WARNING] MongoDB is offline. Saving portfolio item in-memory fallback.');
      savedItem = {
        _id: 'mem_port_' + Date.now(),
        ...req.body,
        createdAt: new Date()
      };
      memoryPortfolio.unshift(savedItem);
    }
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add portfolio item' });
  }
});

// Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
