import Link from "next/link";
import type { Metadata } from "next";
import { states } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "We Buy Houses Locations | DC, MD, VA & DE Buyers",
  description:
    "Explore every city where we buy houses for cash across Washington DC, Maryland, Virginia, and Delaware. Fast as-is sales with zero commissions or fees.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "Where We Buy", url: "/locations" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <h1 className="font-display text-4xl text-pine-950">
          Where we buy houses
        </h1>
        <p className="mt-4 text-lg text-pine-800/85 max-w-2xl leading-relaxed">
          Four states, one standard: a local buyer who knows the market, a
          transparent offer, and a closing on your schedule. Find your market
          below — every page covers the neighborhoods, zip codes, and local
          rules that affect your sale.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-12 space-y-12">
        {states.map((st) => (
          <div key={st.slug}>
            <div className="border-b border-pine-900/10 pb-3">
              <h2 className="font-display text-2xl text-pine-950">
                <Link href={`/${st.slug}`} className="hover:text-pine-700">
                  {st.name}
                </Link>
              </h2>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {st.cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${st.slug}/${c.slug}`}
                  className="rounded-xl bg-white ring-1 ring-pine-900/10 hover:ring-pine-500/50 px-5 py-4 transition-all"
                >
                  <p className="font-semibold text-pine-900">
                    Sell a house in {c.name}
                  </p>
                  <p className="mt-1 text-xs text-pine-600">
                    {c.neighborhoods.slice(0, 3).join(" · ")}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand heading="Don't see your town? We buy across all four states." sub="Start with your zip code and we'll route you to the closest buying team." />
      </section>
    </>
  );
}
