import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              line-height: 1.6;
              color: #1a1a1a;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              -webkit-font-smoothing: antialiased;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: linear-gradient(145deg, #ffffff, #f8faff);
              border-radius: 16px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
              padding: 40px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              background: linear-gradient(135deg, #4f46e5, #6366f1);
              margin: -40px -40px 40px -40px;
              padding: 40px;
              border-radius: 16px 16px 0 0;
              position: relative;
            }
            .logo {
              font-size: 28px;
              font-weight: 800;
              color: #ffffff;
              margin-bottom: 10px;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .subtitle {
              color: rgba(255, 255, 255, 0.9);
              font-size: 16px;
              font-weight: 500;
            }
            .title {
              font-size: 24px;
              font-weight: 700;
              color: #2d3748;
              margin: 0 0 30px 0;
              text-align: center;
            }
            .content {
              background: #ffffff;
              border-radius: 12px;
              padding: 30px;
              margin-bottom: 30px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
            }
            .field {
              margin-bottom: 25px;
              position: relative;
            }
            .field:last-child {
              margin-bottom: 0;
            }
            .field-label {
              font-size: 13px;
              font-weight: 600;
              color: #6b7280;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              margin-bottom: 8px;
              display: flex;
              align-items: center;
              gap: 6px;
            }
            .field-label::before {
              content: '';
              display: inline-block;
              width: 4px;
              height: 4px;
              background-color: #6366f1;
              border-radius: 50%;
            }
            .field-value {
              font-size: 16px;
              color: #1e293b;
              background-color: #f8fafc;
              padding: 16px;
              border-radius: 12px;
              border: 1px solid #e2e8f0;
              transition: all 0.2s ease;
            }
            .field-value:hover {
              border-color: #6366f1;
              box-shadow: 0 2px 4px rgba(99, 102, 241, 0.1);
            }
            .message-box {
              white-space: pre-wrap;
              line-height: 1.8;
            }
            .footer {
              text-align: center;
              font-size: 14px;
              color: #64748b;
              padding-top: 30px;
              margin-top: 30px;
              border-top: 1px solid #e5e7eb;
            }
            .timestamp {
              display: inline-block;
              color: #94a3b8;
              font-size: 12px;
              margin-top: 10px;
              padding: 6px 12px;
              background-color: #f8fafc;
              border-radius: 20px;
              border: 1px solid #e2e8f0;
            }
            .badge {
              display: inline-block;
              padding: 4px 12px;
              background-color: #818cf8;
              color: white;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 500;
              margin-top: 10px;
            }
            @media (max-width: 600px) {
              .container {
                margin: 10px;
                padding: 20px;
              }
              .header {
                margin: -20px -20px 30px -20px;
                padding: 30px;
              }
              .content {
                padding: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">📬 New Message on ScholarAI</div>
              <div class="subtitle">Contact Form Submission</div>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">${email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Message Content</div>
                <div class="field-value message-box">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <div class="badge">New Contact Request</div>
              <p>This message was automatically generated from your website's contact form.</p>
              <div class="timestamp">📅 Received on ${new Date().toLocaleString()}</div>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "✨ New Contact Form Submission",
      html: htmlContent,
      text: `New Contact Form Submission

From: ${name}
Email: ${email}
Message: ${message}

Received on ${new Date().toLocaleString()}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ success: false, message: "Email sending failed!" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}