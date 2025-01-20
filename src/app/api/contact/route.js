import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    console.log(name, email, message);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });
    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Replace with your email
      subject: "New Contact Form Submission",
      text: `You have a new message from:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Email sending failed!" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
