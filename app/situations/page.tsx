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

      {/* Informative Guidance: Why Cash Buyers for Complex Situations */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl text-pine-950">
            Why Difficult Property Situations Need Companies That Buy Homes As-Is
          </h2>
          <div className="mt-6 space-y-4 text-pine-800/85 text-sm sm:text-base leading-relaxed max-w-4xl">
            <p>
              When a house faces severe deferred maintenance, structural defects, code violations, or title clouds, listing on the Multiple Listing Service (MLS) with a traditional real estate agent rarely succeeds. Retail buyers require standard FHA, VA, or conventional mortgage loans, which mandate rigid property inspection standards. If the roof leaks, the furnace is decommissioned, or unauthorized tenant occupants refuse interior showings, bank loan underwriters will refuse mortgage approval.
            </p>
            <p>
              When you sell to USHomeBuy, <strong>we buy homes in any condition</strong>. We do not require you to evict non-paying tenants, spend thousands on mold remediation, or spend weeks clearing out decades of inherited estate belongings. Our local attorneys coordinate title clearance, payoffs, and closing on your exact timetable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand />
      </section>
    </>
  );
}
