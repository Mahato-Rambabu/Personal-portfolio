import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); 
export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, budget, timeline, message } =
      await req.json();

    // Basic validation (optional but recommended)
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const htmlBody = `
      <div style="font-family: sans-serif;">
        <h2 style="color:#6C63FF;">🚀 New Enquiry for Hiring</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
        <p><strong>Message:</strong><br />${message}</p>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Client Inquiry <onboarding@resend.dev>", // can be customized on Resend dashboard
      to: "mahatorambabu114@gmail.com",
      subject: "📩 Client Enquiry - New Hiring Request",
      html: htmlBody,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
