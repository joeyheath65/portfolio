import { NextResponse } from "next/server";
import { Resend } from "resend";

// Server-side contact endpoint. The Resend API key stays on the server and is
// never exposed to the browser (unlike the previous EmailJS NEXT_PUBLIC_* keys).
const TO_EMAIL = "joseph.r.heath@gmail.com";
const FROM_EMAIL = "Portfolio Contact <contact@lawndart.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Key not configured yet — fail loudly server-side, generic message to client.
    // (Instantiated lazily here so a missing key never breaks the build.)
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email is not configured yet." },
      { status: 503 }
    );
  }
  const resend = new Resend(apiKey);

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.user_name ?? "").trim();
  const email = String(data.user_email ?? "").trim();
  const service = String(data.service ?? "").trim();
  const message = String(data.message ?? "").trim();
  const honeypot = String(data.company ?? "").trim();

  // Honeypot: bots fill the hidden "company" field. Pretend success, drop it.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide your name, a valid email, and a message." },
      { status: 400 }
    );
  }

  if (name.length > 100 || email.length > 200 || service.length > 100 || message.length > 5000) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email, // reply goes straight to the sender
      subject: `Portfolio inquiry from ${name}${service ? ` — ${service}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Needs: ${service || "(not specified)"}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend threw:", err);
    return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
  }
}
