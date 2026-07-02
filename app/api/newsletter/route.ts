import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const RESEND_SEGMENT_ID = process.env.RESEND_SEGMENT_ID;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;


function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email) && email.length <= 254;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (await rateLimit(`newsletter:${ip}`, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid or missing email" },
        { status: 400 }
      );
    }

    if (resend) {
      const payload: { email: string; unsubscribed: boolean; segments?: { id: string }[] } = {
        email,
        unsubscribed: false,
      };
      if (RESEND_SEGMENT_ID) {
        payload.segments = [{ id: RESEND_SEGMENT_ID }];
      }
      const { error } = await resend.contacts.create(payload);

      if (error) {
        console.error("[newsletter] Resend error:", error);
        return NextResponse.json(
          { error: "Subscription failed" },
          { status: 500 }
        );
      }
    } else {
      // Brak klucza – zapis „na sucho”, formularz i tak zwraca sukces (np. dev)
      if (process.env.NODE_ENV === "development") {
        console.log("[newsletter] No RESEND_API_KEY – would subscribe:", email);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[newsletter]", e);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
