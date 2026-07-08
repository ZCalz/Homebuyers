# Conversion Funnel & UX Strategy

## Who the visitor is

The typical visitor is a homeowner under time or financial pressure — probate, a foreclosure notice, a tenant problem, a fixed move date — usually on a phone, often skeptical of "we buy houses" companies. The funnel is designed around three constraints that follow from that:

1. **Speed of first action.** The first conversion step must be effortless and non-threatening.
2. **Trust before contact info.** Skeptical users won't hand over a phone number until the site has earned it.
3. **Mobile-first everything.** Layouts, tap targets, and payload sizes assume a mid-tier phone on cellular.

## The 4-step gated lead form (`components/LeadForm.tsx`)

Instead of one intimidating form, the funnel opens with the lowest-commitment question and escalates:

```text
Step 1: Zip code            → zero personal info; feels like a lookup, not a signup
Step 2: Property condition  → 4 tappable cards, no typing
Step 3: Reason for selling  → 8 tappable cards; doubles as lead qualification
Step 4: Name + phone        → asked only after 3 steps of investment (sunk-cost momentum)
```

Design details that matter:

- **Progress bar** across the top shows 4 segments, so the user always knows the end is near.
- **Steps 2–3 are single-tap advances** — choosing an option moves you forward; no "Next" button friction.
- **The address field is optional** and placed above name/phone; requiring it costs conversions.
- **Microcopy under the submit button** answers the three silent objections at the exact moment of hesitation: no obligation, no selling of data, a fast callback.
- **The confirmation screen names the routed territory** ("routed to our Baltimore, MD team"), converting an abstract form submission into a concrete next step with a specific team.

The same component embeds everywhere with context pre-filled: city pages pass their primary zip as `defaultZip` and their market name as `territory`, so a visitor on the Baltimore page starts one step deeper.

## Above the fold, on every page type

- **Homepage / state / city pages:** two-column hero — value proposition left, lead form right (form stacks on top of the fold on mobile). The form is visible without scrolling on both breakpoints.
- **Situation pages:** sticky sidebar form that follows the reader through the long-form content.
- **Header:** persistent "Get My Offer" button plus a tel: link — the two conversion paths (form and call) are never more than one glance away.
- **Every page ends in a `CtaBand`** with both paths, localized with the territory phone number where applicable.

## Trust architecture

Skepticism of cash buyers is the funnel's biggest leak, so trust signals are structural, not decorative:

- **"Show the math" positioning** — the offer formula (renovated value − repairs − stated margin) is explained on `/how-it-works` and referenced in city-page FAQs. Transparency is the differentiator against lowball-reputation competitors.
- **Honesty about the discount.** The FAQ and How It Works pages state plainly that a cash offer is usually below renovated retail value and explain what the gap buys. Counterintuitively, admitting this raises conversion among the qualified and filters out the unqualified.
- **Three-business-day cancellation window**, stated wherever the contract is discussed.
- **Localized testimonials** — every city page carries a review referencing that market's specific problem (ground rent, trustee sale, septic failure), which reads as far more credible than generic five-star praise.
- **Regulation callouts** (TOPA, 120-day rule, mediation programs) prove local competence before the user ever talks to anyone.

## Lead routing and the velocity metric

In this niche, the first buyer to call back wins the majority of deals, so the intake endpoint (`app/api/leads/route.ts`) is built around response speed:

1. **Validate** zip/name/phone server-side.
2. **Route** the zip against city-level zip lists, falling back to state-level 3-digit prefix ranges (`routeZip` in `lib/data/index.ts`).
3. **Score** priority: foreclosure or not-livable answers flag `high`, jumping the callback queue.
4. **Dispatch** (stubbed): the logged payload is the exact contract for a CRM webhook plus a Twilio SMS to the territory's acquisition agent.

## Performance as CRO

Every marketing page is fully static; the only hydrated component is the lead form. There are no web fonts (the display face is a system serif stack), no images above the fold, no third-party scripts. This keeps LCP near-instant on cellular connections — which is both a Core Web Vitals ranking input and a direct conversion factor for users in a hurry.

## Measurement plan (production)

- Per-step funnel events (zip entered → condition → reason → submitted) to find the exact drop-off step.
- Territory-level dashboards: submissions and calls (via per-state tracking numbers) per market page.
- A/B candidates, in expected-impact order: hero headline framing (speed vs. no-repairs vs. transparency), step order (condition vs. reason first), showing an offer-range estimate before the contact step.
