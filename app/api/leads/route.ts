import { NextResponse } from "next/server";
import { routeZip } from "@/lib/data";

/**
 * Lead intake + geographic routing.
 *
 * In production this endpoint would:
 *  1. Validate and score the lead
 *  2. Look up the owning territory/franchisee for the zip
 *  3. Push to CRM (HubSpot/Salesforce) via API
 *  4. Fire an SMS alert to the territory's acquisition agent (Twilio)
 *
 * For this demo it performs the territory lookup and logs the routed lead.
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

  if (!/^\d{5}$/.test(zip)) {
    return NextResponse.json({ error: "A valid 5-digit zip code is required." }, { status: 400 });
  }
  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const route = routeZip(zip);
  const territory = route
    ? `${route.city.name}, ${route.state.abbr}`
    : "regional intake";

  // Priority scoring: distress + speed signals route to the front of the queue.
  const reason = typeof body.reason === "string" ? body.reason : "";
  const condition = typeof body.condition === "string" ? body.condition : "";
  const priority =
    reason === "foreclosure" || condition === "not-livable" ? "high" : "standard";

  // Demo stand-in for CRM webhook + SMS dispatch.
  console.log("[lead:routed]", {
    zip,
    territory,
    priority,
    reason,
    condition,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, territory, priority });
}
