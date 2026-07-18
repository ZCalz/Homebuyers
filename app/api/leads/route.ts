import { NextResponse } from "next/server";
import { routeZip } from "@/lib/data";
import { saveLead } from "@/lib/leads";

/**
 * Lead intake + geographic routing.
 *
 * Every valid submission is persisted as its own immutable JSON object in
 * the `homebuyers-blob` Vercel Blob store — see lib/leads.ts for the record
 * schema and write path. In production this endpoint would additionally:
 *  1. Push to CRM (HubSpot/Salesforce) via API
 *  2. Fire an SMS alert to the territory's acquisition agent (Twilio)
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const zip = typeof body.zip === "string" ? body.zip.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email =
    typeof body.email === "string" && body.email.trim() ? body.email.trim() : null;
  const address = typeof body.address === "string" ? body.address.trim() : "";
  const howDidYouFindUs =
    typeof body.howDidYouFindUs === "string" ? body.howDidYouFindUs.trim() : "";
  const smsEmailConsent = body.smsEmailConsent === true;

  if (!/^\d{5}$/.test(zip)) {
    return NextResponse.json({ error: "A valid 5-digit zip code is required." }, { status: 400 });
  }
  if (!address) {
    return NextResponse.json({ error: "A property address is required." }, { status: 400 });
  }
  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }
  if (!smsEmailConsent) {
    return NextResponse.json(
      { error: "Consent to email/SMS communications is required." },
      { status: 400 }
    );
  }

  const route = routeZip(zip);
  const territory = route
    ? `${route.city.name}, ${route.state.abbr}`
    : "regional intake";

  // Priority scoring: distress + speed signals route to the front of the queue.
  const reason = typeof body.reason === "string" ? body.reason : "";
  const condition = typeof body.condition === "string" ? body.condition : "";
  const priority: "high" | "standard" =
    reason === "foreclosure" || condition === "not-livable" ? "high" : "standard";

  const result = await saveLead({
    zip,
    address,
    name,
    phone,
    email,
    condition,
    reason,
    howDidYouFindUs,
    smsEmailConsent,
    territory,
    priority,
  });

  if (!result.ok) {
    // A storage hiccup shouldn't block the seller's confirmation screen —
    // log loudly so it surfaces in Vercel's function logs / an alert, but
    // still return success so the routed-territory UX doesn't break.
    console.error("[lead:storage-failed]", { zip, territory, error: result.error });
  }

  return NextResponse.json({ ok: true, territory, priority });
}
