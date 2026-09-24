import Link from "next/link";
import { SITE, states } from "@/lib/data";
import { situations } from "@/lib/data/situations";

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-sand-100/80 mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-xl text-sand-50">{SITE.name}</p>
            <p className="mt-3 text-sm leading-relaxed">
              Direct home buyers serving Washington DC, Maryland, Virginia, and
              Delaware. Fair as-is offers with no commissions and no repair
              requests.
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-4 inline-block font-semibold text-sand-300 hover:text-sand-200"
            >
              {SITE.phoneDisplay}
            </a>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-amber-400 text-sm tracking-wider font-bold" aria-hidden>
                ★★★★★
              </span>
              <span className="text-xs text-sand-300">
                <strong className="text-sand-100 font-semibold">4.9/5</strong> (147+ verified homeowner reviews)
              </span>
            </div>
            <p className="mt-4 text-xs text-sand-100/60 leading-relaxed">
              USHomeBuy is a direct cash home buyer purchasing houses as-is with zero realtor commissions, zero repair requirements, and guaranteed closings in 14 to 30 days.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-sand-400 mb-3">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-sand-200">How It Works</Link></li>
              <li><Link href="/seller-net-proceeds-calculator" className="hover:text-sand-200">Net Proceeds Calculator</Link></li>
              <li><Link href="/compare/opendoor-offerpad-alternatives" className="hover:text-sand-200">Compare vs iBuyers</Link></li>
              <li><Link href="/about" className="hover:text-sand-200">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-sand-200">FAQ</Link></li>
              <li><Link href="/get-offer" className="hover:text-sand-200">Get an Offer</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-sand-400 mb-3">
              Situations
            </p>
            <ul className="space-y-2 text-sm">
              {situations.map((s) => (
                <li key={s.slug}>
                  <Link href={`/situations/${s.slug}`} className="hover:text-sand-200">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-sand-400 mb-3">
              Where We Buy
            </p>
            <ul className="space-y-4 text-sm">
              {states.map((st) => (
                <li key={st.slug}>
                  <Link
                    href={`/${st.slug}`}
                    className="font-semibold text-sand-200 hover:text-sand-100"
                  >
                    {st.name}
                  </Link>
                  <ul className="mt-1.5 space-y-1 text-sand-100/60">
                    {st.cities.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/${st.slug}/${c.slug}`}
                          className="hover:text-sand-200"
                        >
                          Sell a house in {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sand-100/10 text-xs leading-relaxed text-sand-100/50">
          <p className="flex flex-wrap gap-x-4 gap-y-1 text-sand-300">
            <Link href="/privacy-policy" className="hover:text-sand-100 underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-sand-100 underline underline-offset-2">
              Terms and Conditions
            </Link>
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {SITE.name}. Offers described on
            this site are typically below full retail market value in
            exchange for speed, certainty, and as-is condition. Nothing on
            this site is legal, tax, or financial advice; consult a
            licensed professional about your situation.
          </p>
          <p className="mt-3">
            Site designed by{" "}
            <a
              href="https://daszy.studio"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-sand-300 hover:text-sand-200 underline underline-offset-2"
            >
              Daszy Studio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
