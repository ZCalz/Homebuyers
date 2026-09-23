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
            National iBuyers and out-of-state real estate investors often make automated, algorithm-based offers that change dramatically after a physical walkthrough. Our approach is straightforward and transparent. We have dedicated local acquisition teams living and working directly in Washington DC, Maryland, Virginia, and Delaware. We understand local neighborhood property values, historic building requirements, zoning laws, and county transfer tax structures. When we make a cash offer, it is backed by our own liquid reserves and guaranteed not to change at settlement.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Washington DC */}
            <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-6">
              <h3 className="font-display text-lg text-pine-950 font-bold flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Washington, DC Real Estate Buying
              </h3>
              <p className="mt-2 text-sm text-pine-800/85 leading-relaxed">
                Selling a residential property in the District requires specialized knowledge of local statutes, historic preservation guidelines, and municipal transfer requirements.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-pine-800/85 list-disc pl-5">
                <li><strong>All 8 Wards Covered:</strong> From historic brick rowhomes in Capitol Hill, Georgetown, and Petworth to single-family colonials and duplexes in Anacostia, Brookland, and Deanwood.</li>
                <li><strong>Tenant Rights &amp; TOPA:</strong> We manage full statutory compliance with the Tenant Opportunity to Purchase Act (TOPA), tenant notices, buyout agreements, and lease assignments.</li>
                <li><strong>Probate &amp; Estates:</strong> We work directly with the DC Superior Court Probate Division to purchase inherited homes smoothly without requiring heirs to conduct estate cleanouts.</li>
              </ul>
            </div>

            {/* Maryland */}
            <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-6">
              <h3 className="font-display text-lg text-pine-950 font-bold flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Maryland Cash Home Sales
              </h3>
              <p className="mt-2 text-sm text-pine-800/85 leading-relaxed">
                From Baltimore City rowhomes to suburban neighborhoods across Montgomery and Prince George&apos;s counties, our Maryland desk resolves complex title clouds and property hurdles.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-pine-800/85 list-disc pl-5">
                <li><strong>Counties Covered:</strong> Baltimore City, Baltimore County, Montgomery, Prince George&apos;s, Anne Arundel, Charles, Howard, and Frederick counties.</li>
                <li><strong>Historic Ground Rent Redemption:</strong> We locate ground rent owners, coordinate verification filings with SDAT, and satisfy redemptions directly at settlement.</li>
                <li><strong>As-Is Property Purchases:</strong> Zero repairs required for aging roofs, wet basements, plumbing problems, or municipal code inspection violation notices.</li>
              </ul>
            </div>

            {/* Virginia */}
            <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-6">
              <h3 className="font-display text-lg text-pine-950 font-bold flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Virginia Direct Property Purchases
              </h3>
              <p className="mt-2 text-sm text-pine-800/85 leading-relaxed">
                Virginia operates under non-judicial foreclosure rules with rapid trustee sale timelines. Our Virginia team provides urgent closing capabilities to preserve homeowner equity.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-pine-800/85 list-disc pl-5">
                <li><strong>Key Regional Hubs:</strong> Northern Virginia (Fairfax, Arlington, Alexandria, Loudoun, Prince William), Richmond Metro (Chesterfield, Henrico), and Hampton Roads (Norfolk, Virginia Beach).</li>
                <li><strong>Expedited Closings:</strong> We can close sales in as few as 10 to 14 days to pay off delinquent mortgages and stop scheduled trustee foreclosure auctions.</li>
                <li><strong>Zero Agent Fees:</strong> Save 5% to 6% in real estate agent commissions and avoid standard seller closing costs.</li>
              </ul>
            </div>

            {/* Delaware */}
            <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-6">
              <h3 className="font-display text-lg text-pine-950 font-bold flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Delaware Statewide Home Buying
              </h3>
              <p className="mt-2 text-sm text-pine-800/85 leading-relaxed">
                Covering all three counties in Delaware, we purchase properties ranging from historic townhomes in Wilmington to coastal beach homes and rural farmhouses on septic.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-pine-800/85 list-disc pl-5">
                <li><strong>Counties Covered:</strong> New Castle County (Wilmington, Newark), Kent County (Dover, Smyrna), and Sussex County (Milford, Seaford, Georgetown, Rehoboth Beach).</li>
                <li><strong>Septic &amp; Well Transfers:</strong> We acquire properties with failing or non-compliant Class H septic systems without requiring expensive engineered replacements prior to sale.</li>
                <li><strong>Estate Administration:</strong> We coordinate with the Delaware Register of Wills to purchase estate properties with clear title.</li>
              </ul>
            </div>
          </div>

          {/* Additional Guidance & FAQs for Locations */}
          <div className="mt-12 pt-8 border-t border-pine-900/10 space-y-6">
            <h3 className="font-display text-xl sm:text-2xl text-pine-950 font-bold">
              Frequently Asked Questions About Selling Across Our Coverage Areas
            </h3>
            <div className="space-y-4 text-sm text-pine-800/85">
              <div className="rounded-xl bg-sand-50/60 p-4 ring-1 ring-pine-900/10">
                <h4 className="font-semibold text-pine-950 mb-1">
                  How does selling to USHomeBuy compare to listing with a traditional real estate agent?
                </h4>
                <p className="leading-relaxed">
                  When listing with a realtor, homeowners typically spend thousands of dollars on cosmetic repairs, painting, deep cleaning, and staging. The home is subjected to weeks of public showings and open houses. Once an offer is accepted, buyers require 45 to 60 days for mortgage underwriting and home inspection negotiations. If the appraisal comes in low or inspection issues arise, the deal can collapse. In contrast, selling to USHomeBuy gives you a firm, guaranteed cash offer in 24 hours, zero commissions, zero repair requirements, and a closing scheduled on the exact date of your choice.
                </p>
              </div>

              <div className="rounded-xl bg-sand-50/60 p-4 ring-1 ring-pine-900/10">
                <h4 className="font-semibold text-pine-950 mb-1">
                  Are there any fees, commissions, or closing costs when I sell my home?
                </h4>
                <p className="leading-relaxed">
                  None whatsoever. We charge zero real estate commissions, zero listing fees, zero administration charges, and zero hidden inspection costs. Furthermore, USHomeBuy covers standard seller closing costs, transfer charges, and settlement fees. The net cash figure agreed upon in your purchase agreement is the exact amount delivered to you via wire transfer or cashier&apos;s check at settlement.
                </p>
              </div>

              <div className="rounded-xl bg-sand-50/60 p-4 ring-1 ring-pine-900/10">
                <h4 className="font-semibold text-pine-950 mb-1">
                  What condition does the property need to be in for an offer?
                </h4>
                <p className="leading-relaxed">
                  We purchase homes in 100% as-is condition. You do not need to clean out old furniture, paint walls, fix plumbing leaks, replace broken HVAC units, or repair damaged roofs. Even if the property has suffered fire damage, flood damage, foundation shifting, termite infestation, or has open municipal building code violations, our acquisition team will evaluate the property and provide a fair cash offer.
                </p>
              </div>

              <div className="rounded-xl bg-sand-50/60 p-4 ring-1 ring-pine-900/10">
                <h4 className="font-semibold text-pine-950 mb-1">
                  How fast can we complete the sale and receive funds?
                </h4>
                <p className="leading-relaxed">
                  Because we purchase properties directly with our own funds without relying on bank mortgages or mortgage underwriters, we can close in as few as 7 to 14 days once title search verification is complete. Alternatively, if you need 30, 60, or 90 days to arrange your move, pack personal belongings, or transition into senior living, we will set the settlement date according to your exact preferred timeline.
                </p>
              </div>
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
