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
          Whatever&apos;s behind the sale
        </h1>
        <p className="mt-4 text-lg text-pine-800/85 max-w-2xl leading-relaxed">
          People rarely sell to a cash buyer because everything is going great.
          These guides cover the situations we handle every week — with the
          state-specific rules for DC, Maryland, Virginia, and Delaware spelled
          out.
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

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand />
      </section>
    </>
  );
}
