# Documentation Index

Strategy and implementation docs for the Chesapeake Home Buyers regional lead-generation site.

| Doc | Covers |
| --- | --- |
| [01-architecture.md](./01-architecture.md) | Stack choices, directory layout, single-source-of-truth dataset, rendering strategy, DB/CMS migration path |
| [02-regional-seo-strategy.md](./02-regional-seo-strategy.md) | URL siloing, programmatic localization, duplicate-content defense, long-tail intent pages, JSON-LD, internal linking |
| [03-conversion-funnel.md](./03-conversion-funnel.md) | The 4-step gated lead form, trust architecture, zip-based lead routing, priority scoring, performance-as-CRO |
| [04-market-localization-playbook.md](./04-market-localization-playbook.md) | Per-jurisdiction research behind the copy (TOPA, ground rent, trustee sales, septic rules) + new-market checklist |
| [05-design-system.md](./05-design-system.md) | Visual identity rationale, tokens, recurring patterns, accessibility and performance choices |

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # statically generates all 36 routes
```

## Site map at a glance

- `/` — regional hub
- `/washington-dc`, `/maryland`, `/virginia`, `/delaware` — state hubs (4)
- `/{state}/{city}` — city landing pages (19)
- `/situations/{slug}` — pain-point guides (7)
- `/locations`, `/situations` — directory hubs
- `/how-it-works`, `/faq`, `/reviews`, `/about`, `/get-offer` — core pages
- `/api/leads` — lead intake + geographic routing
- `/sitemap.xml`, `/robots.txt` — generated from the dataset
