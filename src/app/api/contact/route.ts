import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = ["gashkov321@gmail.com", "roman.krivda87@gmail.com"];

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Claude Devs <onboarding@resend.dev>",
    to: RECIPIENTS,
    replyTo: email,
    subject: `New message from ${name} — Claude Devs`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#7c3aed;margin-bottom:4px">New Contact Form Submission</h2>
        <p style="color:#6b7280;font-size:14px;margin-top:0">via claude-devs.com</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
        <table style="width:100%;font-size:15px">
          <tr><td style="color:#6b7280;padding:6px 0;width:80px">Name</td><td style="color:#111827;font-weight:600">${name}</td></tr>
          <tr><td style="color:#6b7280;padding:6px 0">Email</td><td><a href="mailto:${email}" style="color:#7c3aed">${email}</a></td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
        <p style="color:#6b7280;font-size:13px;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em">Message</p>
        <p style="color:#111827;font-size:15px;line-height:1.6;white-space:pre-wrap">${message}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
        <p style="color:#9ca3af;font-size:12px">Hit Reply to respond directly to ${name}.</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
