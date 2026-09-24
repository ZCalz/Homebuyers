import Link from "next/link";
import { SITE, states } from "@/lib/data";
import { situations } from "@/lib/data/situations";

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-sand-100/80 mt-24 border-t-2 border-clay-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        {/* Top Section: Brand + Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Contact Info (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                {SITE.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-sand-200/90 max-w-sm">
              Direct cash home buyers operating across Washington DC, Maryland, Virginia, and Delaware. We purchase residential properties in 100% as-is condition with zero commissions, zero fees, and no repair requests.
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-lg bg-pine-900/80 border border-sand-100/10 px-3 py-2">
              <span className="text-amber-400 text-sm tracking-wider font-bold" aria-hidden>
                ★★★★★
              </span>
              <span className="text-xs text-sand-200">
                <strong className="text-white font-semibold">4.9 / 5.0</strong> (147+ verified homeowner reviews)
              </span>
            </div>

            {/* Direct Contact Block */}
            <div className="pt-2 space-y-2 text-xs text-sand-300">
              <div className="flex items-center gap-2">
                <span className="text-clay-400 font-bold">Call / Text:</span>
                <a
                  href={`tel:${SITE.phone}`}
                  className="font-semibold text-white hover:text-sand-300 transition-colors"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-clay-400 font-bold">Email:</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-clay-400 font-bold">Headquarters:</span>
                <span>1300 I St NW, Washington, DC 20005</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-clay-400 font-bold">Operating Hours:</span>
                <span>Mon – Sun: 8:00 AM – 8:00 PM EST</span>
              </div>
              <p className="text-[11px] text-sand-400/80 pt-1">
                Operated by {SITE.legalEntity} · Registered in VA, MD, DC & DE
              </p>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-sand-400 font-semibold mb-3">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  All Locations Directory
                </Link>
              </li>
              <li>
                <Link href="/situations" className="hover:text-white transition-colors">
                  All Situations Handled
                </Link>
              </li>
              <li>
                <Link
                  href="/get-offer"
                  className="inline-block font-semibold text-clay-400 hover:text-clay-300 transition-colors"
                >
                  Get Cash Offer →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Calculators & Resources */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-sand-400 font-semibold mb-3">
              Tools & Comparison
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/seller-net-proceeds-calculator"
                  className="hover:text-white transition-colors"
                >
                  Net Proceeds Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/house-sale-calculator"
                  className="hover:text-white transition-colors"
                >
                  House Sale Profit Tool
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/opendoor-offerpad-alternatives"
                  className="hover:text-white transition-colors"
                >
                  USHomeBuy vs Opendoor
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/opendoor-offerpad-alternatives"
                  className="hover:text-white transition-colors"
                >
                  USHomeBuy vs Offerpad
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors text-xs text-sand-300 pt-2 block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-white transition-colors text-xs text-sand-300 block"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Situations */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-sand-400 font-semibold mb-3">
              Situations We Solve
            </p>
            <ul className="space-y-2 text-sm">
              {situations.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/situations/${s.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section: Full-Width Local Markets Grid */}
        <div className="mt-14 pt-10 border-t border-sand-100/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-clay-400 font-bold">
                Local Cash Home Buying Markets
              </p>
              <h3 className="font-display text-lg text-white mt-0.5">
                Where We Buy Houses As-Is Across DC, Maryland, Virginia & Delaware
              </h3>
            </div>
            <Link
              href="/locations"
              className="text-xs font-semibold text-sand-300 hover:text-white underline underline-offset-4"
            >
              View Full Interactive Coverage Map →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
            {states.map((st) => (
              <div key={st.slug} className="space-y-3">
                <Link
                  href={`/${st.slug}`}
                  className="font-display text-sm font-bold text-white hover:text-clay-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>{st.name}</span>
                  <span className="text-xs font-normal text-sand-400">({st.abbr})</span>
                </Link>
                <ul className="space-y-1.5 text-xs text-sand-200/80">
                  {st.cities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/${st.slug}/${c.slug}`}
                        className="hover:text-white transition-colors block py-0.5"
                      >
                        Sell House in {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Legal Disclaimers & Copyright */}
        <div className="mt-14 pt-8 border-t border-sand-100/10 text-xs leading-relaxed text-sand-300/60 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sand-300 text-xs">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <Link href="/privacy-policy" className="hover:text-white underline underline-offset-2">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-white underline underline-offset-2">
                Terms and Conditions
              </Link>
              <Link href="/seller-net-proceeds-calculator" className="hover:text-white underline underline-offset-2">
                Proceeds Calculator
              </Link>
              <Link href="/compare/opendoor-offerpad-alternatives" className="hover:text-white underline underline-offset-2">
                Compare iBuyers
              </Link>
            </div>
            <p className="flex items-center gap-1.5 text-sand-200">
              <span className="inline-block text-clay-400 font-bold">⌂</span>
              <span>Equal Housing Opportunity</span>
            </p>
          </div>

          <p className="pt-2">
            © {new Date().getFullYear()} {SITE.name} ({SITE.legalEntity}). All rights reserved. Offers described on this site are direct cash purchases for investment purposes and are typically below full retail market value in exchange for speed, certainty, zero commissions, and 100% as-is condition. Nothing on this website constitutes legal, tax, or financial advice. Homeowners should consult licensed legal, tax, or financial counsel regarding their specific situation.
          </p>

          <p className="text-[11px] text-sand-400/50">
            Site operated by {SITE.legalEntity} · Washington DC, Maryland, Virginia & Delaware.
          </p>
        </div>
      </div>
    </footer>
  );
}
