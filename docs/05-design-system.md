# Design System: A Different Feel for the Same Job

## Positioning the visual identity

The dominant aesthetic in the cash-home-buyer category is loud: primary-color palettes, mascots, ALL-CAPS urgency, stock photos of grinning families. It reads as high-pressure — which is exactly the association a skeptical seller already has. This site deliberately goes the other direction: a calm, editorial, almost "regional bank meets field guide" identity that signals *steady, local, transparent*.

The reference site's approach and this one solve the same conversion problem with opposite emotional registers:

| Dimension | Category norm | This site |
| --- | --- | --- |
| Palette | High-saturation primaries, red CTAs | Editorial navy (`pine`), warm paper (`sand`), flag-red accent (`clay`) — drawn from the ushomebuy.com brand mark |
| Typography | Bold geometric sans everywhere | Serif display (Iowan/Palatino system stack) + system sans body |
| Tone | Urgency, exclamation points | Candor: "we'll tell you when listing is better" |
| Trust device | Badges and press logos | Showing the offer math; naming local regulations |
| Imagery | Stock photography, mascots | None — typography, color, and content carry the design |

## Tokens

Defined in `app/globals.css` via Tailwind v4's `@theme`:

- **`pine` scale (50–950):** brand navy, matched to the logo mark. `pine-950` is body text, `pine-900` is the dark band/footer surface, `pine-100` tints callout boxes.
- **`sand` scale (50–900):** warm neutrals. `sand-50` is the page background (warmer than white, reads "paper" not "SaaS"), `sand-500/600` for accent numerals and eyebrow text.
- **`clay-500/600`:** the logo's flag red, reserved **exclusively for conversion actions** (form CTAs, "Get My Offer"). Because nothing else on the site is red, the eye finds the conversion path instantly on every page.
- **Type:** display serif via a system font stack (Iowan Old Style → Palatino → Georgia) — zero webfont bytes, distinct character. Body stays system sans for legibility at small sizes.

## Recurring patterns

- **White cards on sand** (`bg-white ring-1 ring-pine-900/10 rounded-2xl`) — the default content container; hover states tighten the ring to `pine-500/50` on interactive cards.
- **Regulation callout** (`bg-pine-100/70 ring-pine-300/50`) — the visually distinct "local expertise" block on every state and city page; its consistency across pages teaches returning users where the substance lives.
- **Dark bands** (`bg-pine-900` / `pine-950`) — the CTA band and footer bracket every page with high-contrast conversion and navigation zones.
- **Eyebrow labels** — uppercase, letter-spaced `pine-600` micro-headers carry the geographic context (state · county · median close) without stealing hierarchy from the H1.
- **Progress segments** on the lead form — four rounded bars, filled in `clay`, communicating "this is short" without numbers.

## Accessibility & performance choices

- Text contrast: `pine-950` on `sand-50` and `sand-50` on `pine-900` both clear WCAG AA comfortably.
- The lead form is fully keyboard-operable; steps use real `fieldset`/`legend`, errors use `role="alert"`, FAQ accordions are native `<details>`.
- No images, no webfonts, no third-party scripts: the design's entire cost is one small CSS file, keeping LCP/CLS effectively perfect — a deliberate strategy since Core Web Vitals feed both rankings and ad quality scores.
