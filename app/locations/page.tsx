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
            Local legal requirements we manage on your behalf
          </h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6 text-sm text-pine-900/85 leading-relaxed">
            <p>
              In Washington DC, we handle compliance with the Tenant Opportunity to Purchase Act (TOPA) and historic preservation district guidelines. In Maryland, we resolve colonial-era ground rent redemption filings with the State Department of Assessments and Taxation (SDAT).
            </p>
            <p>
              In Virginia, our closing attorneys navigate expedited trustee deed of trust foreclosures and HOA resale disclosure requirements. In Delaware, we manage Sussex County septic inspection compliance and Kent/New Castle transfer requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Regional Cash Home Buying Directory Guide */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-3xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl text-pine-950">
            Mid-Atlantic Cash Home Buyer Directory: Local Insights by State &amp; County
          </h2>
          <div className="mt-6 space-y-5 text-pine-800/85 text-sm sm:text-base leading-relaxed">
            <p>
              When evaluating companies that purchase houses for cash across the Mid-Atlantic, working with localized acquisition teams makes an enormous financial difference. National real estate tech platforms rely on algorithmic automated valuation models (AVMs) that cannot account for hyper-local quirks: block-by-block historic rowhome variations in Baltimore, strict zoning and tenant laws in Washington DC, septic transfer certifications in Delaware, or county tax assessment cycles in Virginia.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Washington, DC Market Dynamics
            </h3>
            <p>
              Properties in the District of Columbia frequently involve historic district architectural preservation review, multi-family flat conversions, and complex tenant occupancy laws under TOPA. USHomeBuy maintains dedicated legal resources in DC to resolve tenant waivers, manage Superior Court probate filings, and execute title conveyances cleanly at established DC settlement offices.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Maryland Metropolitan &amp; Suburban Markets
            </h3>
            <p>
              From historic rowhomes in Baltimore City (Pigtown, Highlandtown, Canton) to single-family colonials across Montgomery and Prince George&apos;s counties, Maryland sellers face distinct closing customs. Our acquisitions team resolves historic ground rents, handles pre-foreclosure mediation requirements, and coordinates directly with Maryland title attorneys to satisfy municipal water and tax liens prior to closing.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Virginia Northern &amp; Coastal Markets
            </h3>
            <p>
              Virginia is a non-judicial foreclosure state where trustee auctions can occur in as few as 60 days following loan default. Our Virginia specialists in Fairfax, Arlington, Richmond, Norfolk, and Virginia Beach operate with urgent speed, frequently closing transactions in 10 to 14 days to preserve seller equity before auction dates.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Delaware Statewide Coverage
            </h3>
            <p>
              Covering New Castle, Kent, and Sussex counties, we purchase suburban subdivisions, older Wilmington townhomes, rural farmhouses, and coastal beach cottages. We navigate Delaware Register of Wills probate administration and coordinate mandatory Class H septic inspections so you don&apos;t have to manage them yourself.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand heading="Don't see your town? We buy across all four states." sub="Start with your zip code and we'll route you to the closest buying team." />
      </section>
    </>
  );
}
