# USHomeBuy — Localized Lead-Gen Funnel

A Next.js demonstration of a regional cash-home-buyer lead-generation site covering **Washington DC, Maryland, Virginia, and Delaware**, built around programmatic local SEO and a low-friction multi-step conversion funnel.

> Demo project: company name, phone numbers, and testimonials are fictional. All copy is original.

## Highlights

- **19 statically generated city landing pages** across 4 state silos, each with hand-written local content: neighborhoods, zip codes, jurisdiction-specific regulations (TOPA, ground rent, trustee sales, septic transfer rules), and a localized testimonial.
- **4-step gated lead form** (zip → condition → reason → contact) with zip-based geographic routing and priority scoring via a Next.js route handler.
- **Full structured-data layer**: `RealEstateAgent`, `BreadcrumbList`, and `FAQPage` JSON-LD generated per page from one typed dataset.
- **Single source of truth**: routes, sitemap, footer links, schema, and lead routing all derive from `lib/data/` — adding a city is one object in one file.
- **Zero images, zero webfonts, one hydrated component** — effectively perfect Core Web Vitals by construction.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verify all routes generate
```

## Documentation

Detailed strategy write-ups live in [`docs/`](./docs/README.md):

1. [Architecture](./docs/01-architecture.md)
2. [Regional SEO strategy](./docs/02-regional-seo-strategy.md)
3. [Conversion funnel](./docs/03-conversion-funnel.md)
4. [Market localization playbook](./docs/04-market-localization-playbook.md)
5. [Design system](./docs/05-design-system.md)
