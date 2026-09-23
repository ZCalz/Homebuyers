import Link from "next/link";
import type { Metadata } from "next";
import { situations } from "@/lib/data/situations";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Sell House Fast Situations | As-Is Solutions",
  description:
    "Explore as-is cash home sale solutions for foreclosure, probate, fire damage, major repairs, tired landlords, divorce, and job relocation in DC, MD, VA & DE.",
  alternates: { canonical: "/situations" },
};

export default function SituationsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "Situations", url: "/situations" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <h1 className="font-display text-4xl text-pine-950">
          Sell House Fast Situations | As-Is Cash Solutions From Direct Home Buyers
        </h1>
        <p className="mt-4 text-lg text-pine-800/85 max-w-3xl leading-relaxed">
          Homeowners rarely seek out direct cash home buyers when life is completely predictable. Whether you are facing impending pre-foreclosure auction dates, settling an estate through probate court, unburdening yourself from a severe hoarder cleanout, or walking away from problem rental tenants, our local acquisition teams purchase homes 100% as-is across Washington DC, Maryland, Virginia, and Delaware.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-12 grid md:grid-cols-2 gap-5">
        {situations.map((s) => (
          <Link
            key={s.slug}
            href={`/situations/${s.slug}`}
            className="group rounded-2xl bg-white ring-1 ring-pine-900/10 hover:ring-pine-500/50 p-6 transition-all hover:shadow-lg hover:shadow-pine-900/5"
          >
            <h2 className="font-display text-xl text-pine-950 group-hover:text-pine-700">
              {s.shortTitle}
            </h2>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed line-clamp-3">
              {s.lede}
            </p>
            <p className="mt-3 text-sm font-semibold text-pine-700">
              Read the guide →
            </p>
          </Link>
        ))}
      </section>

      {/* Comprehensive Situation Guidance & Comparison */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-3xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-pine-950 font-bold">
              Why Complex Real Estate Situations Need Direct Cash Home Buyers
            </h2>
            <p className="mt-3 text-pine-800/85 text-sm sm:text-base leading-relaxed">
              When a house faces severe deferred maintenance, structural defects, open building code violations, or complicated title encumbrances, listing on the Multiple Listing Service (MLS) with a traditional real estate agent rarely succeeds. Retail buyers require standard FHA, VA, or conventional mortgage financing, which mandate strict habitability guidelines. If the roof leaks, the furnace is decommissioned, or unauthorized tenant occupants refuse interior showings, bank loan underwriters will immediately halt loan funding.
            </p>
            <p className="mt-3 text-pine-800/85 text-sm sm:text-base leading-relaxed">
              When you sell to USHomeBuy, <strong>we buy homes in 100% as-is condition</strong>. We do not require you to evict non-paying tenants, spend tens of thousands on mold remediation, or spend weeks clearing out decades of inherited estate belongings. Our local attorneys coordinate title clearance, municipal lien payoffs, and settlement on your exact timetable.
            </p>
          </div>

          {/* Jurisdictional Nuances */}
          <div className="border-t border-pine-900/10 pt-8">
            <h3 className="font-display text-xl sm:text-2xl text-pine-950 font-bold">
              Regional Legal Nuances Handled Across DC, MD, VA, and DE
            </h3>
            <p className="mt-2 text-sm text-pine-800/85 leading-relaxed">
              Every jurisdiction in our Mid-Atlantic service area enforces distinct real estate statutes. Our dedicated local acquisition desks handle all municipal requirements on your behalf:
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-5 text-sm text-pine-900/85">
              <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-5">
                <h4 className="font-bold text-pine-950 text-base flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Washington, DC Requirements
                </h4>
                <p className="mt-2 text-xs text-pine-800/85 leading-relaxed">
                  We navigate mandatory Tenant Opportunity to Purchase Act (TOPA) compliance, execute tenant buyout agreements, and work directly with the DC Superior Court Probate Division to transfer clear title on inherited and tenanted properties.
                </p>
              </div>

              <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-5">
                <h4 className="font-bold text-pine-950 text-base flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Maryland Statutes &amp; Ground Rents
                </h4>
                <p className="mt-2 text-xs text-pine-800/85 leading-relaxed">
                  We verify and satisfy century-old ground rent claims through the State Department of Assessments and Taxation (SDAT), manage pre-foreclosure mediation timelines, and clear county utility liens prior to closing.
                </p>
              </div>

              <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-5">
                <h4 className="font-bold text-pine-950 text-base flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Virginia Non-Judicial Foreclosures
                </h4>
                <p className="mt-2 text-xs text-pine-800/85 leading-relaxed">
                  Virginia allows trustees to schedule foreclosure auctions rapidly. Our Virginia closing team operates with urgent speed, executing cash purchases in as few as 10 to 14 days to satisfy delinquent notes and preserve homeowner equity.
                </p>
              </div>

              <div className="rounded-2xl bg-sand-50/70 ring-1 ring-sand-300/60 p-5">
                <h4 className="font-bold text-pine-950 text-base flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Delaware Septic &amp; Probate Regulations
                </h4>
                <p className="mt-2 text-xs text-pine-800/85 leading-relaxed">
                  We coordinate with county Register of Wills offices across New Castle, Kent, and Sussex counties, purchasing estate properties and homes with failing or non-compliant Class H septic systems without requiring repair delays.
                </p>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions on Situations */}
          <div className="border-t border-pine-900/10 pt-8 space-y-4">
            <h3 className="font-display text-xl sm:text-2xl text-pine-950 font-bold">
              Frequently Asked Questions About Selling in Complex Situations
            </h3>
            <div className="space-y-3 text-sm text-pine-800/85">
              <div className="rounded-xl bg-sand-50/60 p-4 ring-1 ring-pine-900/10">
                <h4 className="font-semibold text-pine-950 mb-1">
                  Can I sell my property if there are tax liens, mechanics liens, or second mortgages?
                </h4>
                <p className="leading-relaxed">
                  Yes. Our local settlement attorneys perform a comprehensive title search to identify all outstanding liens and encumbrances. At the closing table, proceeds from the cash sale are used to pay off existing mortgage balances, municipal utility bills, and tax liens directly. Any remaining equity is paid directly to you.
                </p>
              </div>

              <div className="rounded-xl bg-sand-50/60 p-4 ring-1 ring-pine-900/10">
                <h4 className="font-semibold text-pine-950 mb-1">
                  What if the house is occupied by difficult tenants who refuse to leave or pay rent?
                </h4>
                <p className="leading-relaxed">
                  We purchase tenant-occupied properties across DC, Maryland, Virginia, and Delaware with leases in place or during active eviction proceedings. You do not need to confront tenants or attend landlord-tenant court hearings. We take over existing leases and manage all tenant transitions post-closing.
                </p>
              </div>

              <div className="rounded-xl bg-sand-50/60 p-4 ring-1 ring-pine-900/10">
                <h4 className="font-semibold text-pine-950 mb-1">
                  Do I have to clean out years of furniture, hoarded items, or trash?
                </h4>
                <p className="leading-relaxed">
                  No. Take whatever personal mementos, important documents, and family heirlooms you wish to keep, and leave everything else behind. Our acquisition team manages total property cleanout, donation, and debris disposal at our own expense following settlement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand />
      </section>
    </>
  );
}
