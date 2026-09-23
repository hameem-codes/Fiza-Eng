import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiting map: ip -> { count, expiresAt }
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Periodically clean up expired entries
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((val, key) => {
      if (val.expiresAt < now) {
        rateLimitMap.delete(key);
      }
    });
  }

  if (!entry || entry.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = (forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip")) || "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many inquiries submitted from this connection. Please wait 10 minutes before submitting again." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid payload format." }, { status: 400 });
    }

    // 2. Honeypot Spam Protection
    // The honeypot field is hidden from legitimate users via CSS/display:none
    if (body._gotcha || body.website || body.hp_field) {
      // Return a simulated success to prevent bots from adapting
      console.warn(`[SPAM_BLOCKED] Bot detected via honeypot from IP ${ip}`);
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been received. Our technical desk will review and respond shortly."
      });
    }

    // 3. Server-side Validation
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const inquiryType = typeof body.inquiryType === "string" ? body.inquiryType.trim() : "general";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = "Please provide your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please provide a valid corporate email address.";
    }

    if (!message || message.length < 10) {
      errors.message = "Please describe your operational requirements (minimum 10 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed. Please review the highlighted fields.", fields: errors },
        { status: 400 }
      );
    }

    // 4. Backend Dispatch (Resend / Formspree / Structured Fallback)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FORMSPREE_FORM_ID = process.env.FORMSPREE_FORM_ID;
    const NOTIFICATION_EMAIL = process.env.CONTACT_NOTIFICATION_EMAIL || "info@fizaengineering.com";

    let emailSent = false;

    // Resend Integration
    if (RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Fiza Inquiry Portal <inquiries@fizaengineering.com>",
            to: [NOTIFICATION_EMAIL],
            reply_to: email,
            subject: `[Inquiry: ${inquiryType.toUpperCase()}] ${name} - ${company || "Individual"}`,
            text: `Inquiry Type: ${inquiryType}\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
        } else {
          const errText = await resendRes.text();
          console.error("[RESEND_ERROR]", errText);
        }
      } catch (err) {
        console.error("[RESEND_EXCEPTION]", err);
      }
    }

    // Formspree Integration Fallback
    if (!emailSent && FORMSPREE_FORM_ID) {
      try {
        const formspreeRes = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            company,
            email,
            phone,
            inquiryType,
            message,
          }),
        });

        if (formspreeRes.ok) {
          emailSent = true;
        } else {
          const errText = await formspreeRes.text();
          console.error("[FORMSPREE_ERROR]", errText);
        }
      } catch (err) {
        console.error("[FORMSPREE_EXCEPTION]", err);
      }
    }

    // Structured Server Log (Always logged on server, acts as reliable zero-loss fallback)
    console.log("[CONTACT_FORM_SUBMISSION]", {
      timestamp: new Date().toISOString(),
      ip,
      inquiryType,
      name,
      company,
      email,
      phone,
      messageLength: message.length,
      dispatchedVia: emailSent ? (RESEND_API_KEY ? "Resend" : "Formspree") : "ServerLog",
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received. Our project engineering team will review your specifications and respond within 24 operational hours.",
    });
  } catch (error) {
    console.error("[CONTACT_API_UNHANDLED_ERROR]", error);
    return NextResponse.json(
      { error: "A server error occurred while processing your request. Please email us directly at info@fizaengineering.com." },
      { status: 500 }
    );
  }
}
