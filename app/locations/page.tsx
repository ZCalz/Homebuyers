import Link from "next/link";
import type { Metadata } from "next";
import { states } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "We Buy Houses Locations | Cash Home Buyers",
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
          We Buy Houses Locations | Cash Home Buyers Near You
        </h1>
        <p className="mt-4 text-lg text-pine-800/85 max-w-3xl leading-relaxed">
          When you need reputable <strong>cash home buyers</strong> who purchase properties for cash across Washington DC, Maryland, Virginia, and Delaware, our local teams are ready. Every regional office understands local zoning, historical disclosure requirements, and county transfer tax rules to ensure a seamless, as-is cash sale on your schedule.
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

      {/* Property Types Handled Across All Markets */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Property types we purchase across all service areas
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-3xl leading-relaxed">
          From historic urban rowhomes to suburban single-family houses and coastal cottages, our acquisition teams evaluate properties in any condition:
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Single-Family Detached Homes</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Ramblers, split-levels, colonials, and bungalows needing substantial structural renovation, foundation repair, or modernization throughout suburban DC, MD, VA, and DE.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Urban Townhomes &amp; Rowhouses</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Historic brick rowhouses in Baltimore and Washington DC, suburban townhomes in Northern Virginia, and multi-story rowhomes in Wilmington with code violations or tenant occupancy.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Small Multifamily &amp; Duplexes</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              2-unit to 4-unit residential investment buildings with deferred maintenance, non-paying tenants, or expiring leases across all four states.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Inherited &amp; Estate Properties</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Homes caught in probate court or estate administration where heirs live out of state and need a fast, clean cash sale without handling cleanouts or property repairs.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Severely Damaged Properties</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Houses with major fire and smoke damage, mold infestations, burst pipe water damage, termite destruction, or condemned red-tag code violations.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Manufactured Homes on Land</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Modular and manufactured houses on privately-deeded acreage across rural Delaware, Maryland Eastern Shore, and Central/Southern Virginia.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Regulations Handled */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-2xl bg-pine-100/70 ring-1 ring-pine-300/50 p-6 sm:p-8">
          <h2 className="font-display text-2xl text-pine-900">
            Local legal requirements we handle for you
          </h2>
          <p className="mt-2 text-sm text-pine-800/85">
            Every state has different real estate rules. We take care of the paperwork, liens, and disclosures:
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm text-pine-900/90">
            <div className="rounded-xl bg-white/80 p-4 border border-pine-200">
              <strong className="block text-pine-950 font-semibold mb-1">Washington, DC</strong>
              We handle TOPA tenant notices, tenant buyout agreements, and historic district permits.
            </div>
            <div className="rounded-xl bg-white/80 p-4 border border-pine-200">
              <strong className="block text-pine-950 font-semibold mb-1">Maryland</strong>
              We resolve old ground rent claims with SDAT, clear municipal liens, and manage pre-foreclosure files.
            </div>
            <div className="rounded-xl bg-white/80 p-4 border border-pine-200">
              <strong className="block text-pine-950 font-semibold mb-1">Virginia</strong>
              We expedite trustee sales to stop auctions and coordinate directly with local title attorneys.
            </div>
            <div className="rounded-xl bg-white/80 p-4 border border-pine-200">
              <strong className="block text-pine-950 font-semibold mb-1">Delaware</strong>
              We manage mandatory septic checks (Class H) and coordinate estate filings with the Register of Wills.
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Regional Cash Home Buying Directory Guide */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-3xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl text-pine-950 font-bold">
            Mid-Atlantic Cash Home Buyer Directory &amp; State Breakdown
          </h2>
          <p className="mt-3 text-pine-800/85 text-sm sm:text-base leading-relaxed">
            National iBuyers often give automated offers that change after an inspection. We work differently. Our local buyers live in these communities, know market values by street, and guarantee fair cash offers with zero surprise fees.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Washington DC */}
            <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-6">
              <h3 className="font-display text-lg text-pine-950 font-bold flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Washington, DC
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-pine-800/85 list-disc pl-5">
                <li><strong>All 8 Wards:</strong> From Capitol Hill rowhomes to Anacostia single-family houses.</li>
                <li><strong>Tenant Issues:</strong> We handle full TOPA compliance and tenant transitions.</li>
                <li><strong>Probate:</strong> We work directly with the DC Superior Court Probate Division.</li>
              </ul>
            </div>

            {/* Maryland */}
            <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-6">
              <h3 className="font-display text-lg text-pine-950 font-bold flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Maryland
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-pine-800/85 list-disc pl-5">
                <li><strong>Counties Covered:</strong> Baltimore City/County, Montgomery, Prince George&apos;s, Charles, Anne Arundel, and Frederick.</li>
                <li><strong>Ground Rent:</strong> We verify and redeem ground rent accounts before closing.</li>
                <li><strong>As-Is Sales:</strong> No repairs or county inspection work orders required.</li>
              </ul>
            </div>

            {/* Virginia */}
            <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-6">
              <h3 className="font-display text-lg text-pine-950 font-bold flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Virginia
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-pine-800/85 list-disc pl-5">
                <li><strong>Key Regions:</strong> Northern Virginia (Fairfax, Arlington, Loudoun), Richmond Metro, and Hampton Roads.</li>
                <li><strong>Fast Closings:</strong> We can close in 10 to 14 days to stop scheduled foreclosure auctions.</li>
                <li><strong>No Commissions:</strong> Save 6% in agent fees plus standard closing expenses.</li>
              </ul>
            </div>

            {/* Delaware */}
            <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-6">
              <h3 className="font-display text-lg text-pine-950 font-bold flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Delaware
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-pine-800/85 list-disc pl-5">
                <li><strong>Counties Covered:</strong> New Castle, Kent, and Sussex counties.</li>
                <li><strong>Property Types:</strong> City rowhomes in Wilmington, suburban split-levels in Newark, and coastal cottages in Rehoboth Beach.</li>
                <li><strong>Septic &amp; Wells:</strong> We buy homes as-is with aging or failing septic systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand heading="Don't see your town? We buy across all four states." sub="Start with your zip code and we'll route you to the closest buying team." />
      </section>
    </>
  );
}
