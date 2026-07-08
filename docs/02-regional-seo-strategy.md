# Regional SEO Strategy: Programmatic Localization for DC, MD, VA & DE

## The core thesis

Nobody searches "sell my house fast mid-atlantic." They search **"sell my house fast Baltimore"**, **"we buy houses Arlington VA"**, or **"stop foreclosure Wilmington DE"**. Google rewards pages that are explicitly about the searcher's place, so the site is architected as a network of hyper-local landing pages sharing one domain's authority — not one generic homepage trying to rank everywhere.

## URL siloing

The URL hierarchy mirrors how people (and Google) organize geography:

```text
/                              → regional hub (brand + generic regional terms)
/maryland                      → state hub ("we buy houses maryland")
/maryland/baltimore            → city money page ("sell my house fast baltimore")
/situations/avoid-foreclosure  → intent page ("stop foreclosure maryland/va/de/dc")
```

Design decisions:

- **States live at the root** (`/maryland`, not `/locations/maryland`). Shorter URLs, keyword closer to the domain, one less click from the homepage.
- **DC uses `/washington-dc`** rather than pretending to be a state — it matches the query phrasing ("we buy houses washington dc") and keeps the template uniform.
- **Every city page is ≤2 clicks from the homepage** (home → state → city), and the footer + `/locations` directory link to all 19 city pages from every page on the site, so crawl depth is effectively 1 for the whole geo network.
- `dynamicParams = false` guarantees no thin auto-generated pages exist for slugs we didn't author — every indexed URL is a deliberate, complete page.

## Beating the duplicate-content trap

Programmatic local pages fail when they're the same paragraph with the city name swapped. Each city record in `lib/data/` carries **six hand-written localization fields** that make the page unique in substance, not just in variables:

| Field | Example (Baltimore) | SEO function |
| --- | --- | --- |
| `intro` | Rowhome stock, formstone, vacant/fire-damaged | Unique lead paragraph; matches condition-related long-tails |
| `localAngle` | Ground rent + SDAT redemption process | Proves genuine local expertise; unmatchable by scraped content |
| `neighborhoods` | Highlandtown, Pigtown, Belair-Edison… | Neighborhood-level query coverage ("we buy houses highlandtown") |
| `landmark` | Patterson Park | Natural local entity mention for relevance signals |
| `zips` | 21224, 21230… | Zip-level queries + powers actual lead routing |
| `testimonial` | Ground-rent + non-paying tenant story | Localized social proof; unique review text per page |

The `localAngle` field is the differentiator. Each one addresses a real jurisdiction-specific seller problem:

- **DC:** TOPA tenant purchase rights, historic-district HPRB approvals, heirs' property east of the river, unlicensed basement units
- **Maryland:** ground rent redemption, the 120-day foreclosure rule and pre-file mediation, PG County rental licensing, FEMA flood-zone insurance
- **Virginia:** non-judicial trustee sales (the fastest foreclosure clock in the region), PCS/military timelines, HOA lien arrears, vacant-building registries
- **Delaware:** judicial foreclosure + mediation program, Wilmington vacant-property fees, Sussex County septic transfer inspections, leasehold-land communities

This content can't be produced by a scraper or a generic national template — which is exactly the point, for both rankings and user trust.

## Long-tail intent pages

The `/situations/*` silo targets the pain-point queries that convert highest:

| Page | Target query families |
| --- | --- |
| `inherited-house` | "sell inherited house [state]", probate timelines per jurisdiction |
| `avoid-foreclosure` | "stop foreclosure [city]", trustee sale, pre-foreclosure sale |
| `house-needs-repairs` | "sell house as is", foundation/fire/septic-specific queries |
| `tired-landlord` | "sell rental property with tenants", TOPA, mid-eviction sales |
| `relocating` | "sell house fast PCS", military relocation |
| `divorce` | "selling house during divorce [state]" |
| `downsizing` | "sell parents house", senior transition, POA sales |

Each situation page contrasts **all four jurisdictions** (e.g., the foreclosure page explains why Virginia's clock is months faster than Maryland's), which earns state-modified long-tails on a single URL and demonstrates regional authority.

## Structured data (JSON-LD)

Injected per page from `lib/schema.ts`:

- **`RealEstateAgent`** — org-level on the homepage; territory-scoped with local phone + geo-coordinates on state and city pages (map-pack eligibility).
- **`BreadcrumbList`** — on every state/city/situation page, matching the visible breadcrumb trail (Home → Maryland → Baltimore).
- **`FAQPage`** — on city pages (4 localized Q&As per city) and situation pages (3 Q&As each), targeting rich-result eligibility for question queries.

## Metadata patterns

- City pages: `Sell My House Fast in {City}, {ST} — Cash Offer in 48 Hours` — the primary query verbatim plus a speed hook for CTR.
- Descriptions embed neighborhoods, median days-to-close, and the territory phone number — all unique per page because they're template-injected from unique data.
- Every page sets a self-referencing `canonical` to guard against parameterized duplicates.
- `sitemap.ts` and `robots.ts` generate from the same dataset as the routes: priorities weight city pages (0.85–0.9) just under the homepage, and `/api/` is disallowed.

## Local phone numbers as a trust + measurement layer

Each state has its own tracking number (fictional here), displayed on its state/city pages and embedded in that territory's `LocalBusiness` schema. In production these become call-tracking numbers, giving per-territory attribution for calls the same way the zip-routed form gives it for submissions.

## Scaling the network

To add a market: add one `City` object (with all six localization fields written by someone who knows the market) to the state file. Route, sitemap entry, footer link, schema, breadcrumbs, and zip routing all generate automatically. The dataset is deliberately the bottleneck — it forces every new page to be born with unique local substance, which is the entire strategy.
