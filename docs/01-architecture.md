# Architecture Overview

## What this site is

A regional cash-home-buyer lead-generation funnel covering Washington DC, Maryland, Virginia, and Delaware. It borrows the *structural* playbook of large national buyers (programmatic local landing pages, zip-based lead routing, distress-situation content) but is written, designed, and organized as an independent regional brand ("USHomeBuy") with entirely original copy and a distinct visual identity.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 15 (App Router) | Static generation of every landing page at build time; ISR-ready if the dataset later moves to a database or CMS. |
| Language | TypeScript, strict | The geo dataset is typed (`lib/data/types.ts`), so a missing field on a new city fails the build instead of shipping a broken page. |
| Styling | Tailwind CSS v4 | Tiny CSS payload, mobile-first utilities, and a custom theme defined in `app/globals.css` via `@theme`. |
| Data | Typed TypeScript modules in `lib/data/` | For 19 cities across 4 states, files beat a database: zero infrastructure, versioned in git, and trivially portable to Postgres/Sanity later since everything already flows through one typed interface. |
| Lead intake | Next.js route handler at `app/api/leads/route.ts` | Validates, routes by zip, scores priority. CRM/SMS dispatch is stubbed with a logged payload showing exactly where HubSpot/Twilio calls plug in. |

## Directory map

```text
app/
├── page.tsx                  # Homepage (regional hub)
├── [state]/page.tsx          # 4 state pages (washington-dc, maryland, virginia, delaware)
├── [state]/[city]/page.tsx   # 19 city landing pages, statically generated
├── situations/[slug]/        # 7 long-tail pain-point pages
├── locations/                # HTML directory of every market (crawl hub)
├── how-it-works/ faq/ reviews/ about/ get-offer/
├── api/leads/route.ts        # Lead intake + geographic routing
├── sitemap.ts  robots.ts     # Generated from the same dataset as the pages
components/                   # Header, Footer, LeadForm, CtaBand, Breadcrumbs, JsonLd, ...
lib/
├── data/                     # The geo dataset: one file per state + situations content
└── schema.ts                 # JSON-LD builders (RealEstateAgent, BreadcrumbList, FAQPage)
docs/                         # You are here
```

## The single-source-of-truth principle

Every geographic surface on the site — page routes, `generateStaticParams`, metadata, footer links, the locations directory, the sitemap, breadcrumbs, JSON-LD, and zip-code lead routing — derives from the **same dataset** in `lib/data/`. Adding a city means adding one object to one array; the route, sitemap entry, footer link, schema markup, and routing table all appear automatically. Nothing can drift out of sync.

## Rendering strategy

- All marketing pages are **statically generated at build time** (`generateStaticParams` + `dynamicParams = false`). There is no per-request data fetching, so TTFB is CDN-speed everywhere — critical because distressed sellers are disproportionately on mobile connections.
- The only server code that runs per-request is the lead intake endpoint.
- The only client-side JavaScript on marketing pages is the `LeadForm` component; everything else is server components with zero hydration cost.

## Migration path to a database/CMS

The plan (see `_refs/Plan.txt`) calls for PostgreSQL + a headless CMS at scale. This codebase is deliberately shaped for that migration:

1. `StateData`/`City` interfaces become the DB schema or CMS content model verbatim.
2. `getState`, `getCity`, `allCityParams`, and `routeZip` in `lib/data/index.ts` are the only data-access functions; swap their bodies for SQL/CMS queries and enable ISR (`revalidate`) — no page code changes.
3. The lead route already isolates territory lookup and priority scoring, so CRM and Twilio calls slot in behind the existing response contract.
