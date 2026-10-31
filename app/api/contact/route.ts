import { NextResponse } from "next/server";
import { LIMITS, validateContact } from "@/lib/contact";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Best-effort limiter: per server instance, resets on cold start. With the honeypot and minimum
// fill time it blunts casual abuse; a shared store (e.g. Netlify Blobs) would be needed for more.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function hostOf(origin: string) {
  try {
    return new URL(origin).host;
  } catch {
    return null;
  }
}

function str(v: unknown) {
  return typeof v === "string" ? v : "";
}

export async function POST(request: Request) {
  // Reject cross-site posts from other origins.
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && hostOf(origin) !== host) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 20_000) return NextResponse.json({ error: "too_large" }, { status: 413 });
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("not an object");
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Bots fill the hidden field or submit instantly. Pretend success so they don't adapt.
  const startedAt = Number(body.startedAt);
  if (str(body.website) || !Number.isFinite(startedAt) || Date.now() - startedAt < LIMITS.minFillMs) {
    return NextResponse.json({ ok: true });
  }

  // Prefer the host's own client-IP header; x-forwarded-for can be set by the client.
  const ip =
    request.headers.get("x-nf-client-connection-ip") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim() ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const input = { name: str(body.name), email: str(body.email), message: str(body.message) };
  const errors = validateContact(input);
  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "invalid", fields: errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const name = input.name.trim().replace(/[\r\n]+/g, " ");
  const email = input.email.trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || "henrykay53@gmail.com"],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        // Plain text only: nothing the visitor types is ever rendered as HTML.
        text: `${input.message.trim()}\n\n— ${name} <${email}>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("contact: resend responded", res.status);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("contact: send error", err instanceof Error ? err.name : "unknown");
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
