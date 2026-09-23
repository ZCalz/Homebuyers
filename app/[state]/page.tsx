import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getState, states } from "@/lib/data";
import { situations } from "@/lib/data/situations";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import ProcessSteps from "@/components/ProcessSteps";
import { localBusinessSchema } from "@/lib/schema";

interface Params {
  state: string;
}

export function generateStaticParams(): Params[] {
  return states.map((s) => ({ state: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) return {};
  return {
    title: state.metaTitle || `Sell My House Fast in ${state.name} | Cash`,
    description:
      state.metaDescription ||
      `Sell your house fast in ${state.name}. We buy houses cash as-is across ${state.cities
        .slice(0, 2)
        .map((c) => c.name)
        .join(", ")}. Zero repairs, no fees, fast closing dates.`,
    alternates: { canonical: `/${state.slug}` },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) notFound();

  return (
    <>
      <JsonLd data={localBusinessSchema(state)} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: state.name, url: `/${state.slug}` }]} />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-14">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-pine-600 font-semibold">
              {state.name} · Local team
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-pine-950">
              We buy houses across {state.name} — in any condition
            </h1>
            <p className="mt-5 text-lg text-pine-800/85 leading-relaxed">
              {state.intro}
            </p>
            <p className="mt-5 text-sm text-pine-700">
              Prefer to talk it through? Call our {state.abbr} team directly at{" "}
              <a
                href={`tel:${state.phone}`}
                className="font-semibold text-pine-800 underline underline-offset-4"
              >
                {state.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <LeadForm territory={state.name} />
        </div>
      </section>

      {/* Regulation callout — the local-expertise trust signal */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-pine-100/70 ring-1 ring-pine-300/50 p-6 sm:p-8">
          <h2 className="font-display text-xl text-pine-900">
            {state.regulationNote.title}
          </h2>
          <p className="mt-3 text-pine-900/80 leading-relaxed max-w-3xl">
            {state.regulationNote.body}
          </p>
        </div>
      </section>

      {/* City directory */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          {state.name} markets we buy in
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-2xl">
          Each market has its own dedicated buying team and its own page with
          neighborhood-level details.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {state.cities.map((c) => (
            <Link
              key={c.slug}
              href={`/${state.slug}/${c.slug}`}
              className="group rounded-2xl bg-white ring-1 ring-pine-900/10 hover:ring-pine-500/50 p-6 transition-all hover:shadow-lg hover:shadow-pine-900/5"
            >
              <h3 className="font-display text-lg text-pine-950 group-hover:text-pine-700">
                Sell a house in {c.name}
              </h3>
              <p className="mt-1 text-xs text-pine-600">
                {c.county} County area · closes in ~{c.medianDaysToClose} days
              </p>
              <p className="mt-3 text-sm text-pine-800/75 leading-relaxed line-clamp-3">
                {c.intro}
              </p>
              <p className="mt-3 text-xs text-pine-600/80">
                {c.neighborhoods.slice(0, 3).join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparison: Cash Sale vs Agent Listing in State */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Selling directly to USHomeBuy vs. listing with a {state.name} real estate agent
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-3xl leading-relaxed">
          Selling a home through traditional MLS brokerages across {state.name} requires months of patience, staging, cleaning, continuous open houses, and paying 5% to 6% in commissions plus closing costs. Discover how a direct cash sale provides certainty and speed.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-8">
            <h3 className="font-display text-xl text-pine-950 font-bold">Traditional Real Estate Listing</h3>
            <ul className="mt-5 space-y-3 text-sm text-pine-800/80">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>5%–6% Agent Commissions:</strong> Averages $20,000 to $30,000 deducted directly from your sale proceeds.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Seller Paid Closing Fees:</strong> Sellers in {state.name} typically cover title fees, transfer taxes, and doc stamps.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Mandatory Inspection Credits:</strong> Buyers frequently demand roof replacements, plumbing repairs, or price concessions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Financing &amp; Appraisal Delays:</strong> Retail buyers require bank underwriting, which can fall through weeks into escrow.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-pine-950 text-sand-50 p-6 sm:p-8 ring-2 ring-pine-800 shadow-xl">
            <h3 className="font-display text-xl text-sand-50 font-bold">Direct Cash Sale to USHomeBuy</h3>
            <ul className="mt-5 space-y-3 text-sm text-sand-100/85">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>$0 Commissions &amp; Fees:</strong> No listing fees, broker administrative fees, or marketing expenses.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>100% Closing Costs Paid:</strong> We pay standard title search, settlement attorney, and transfer recording fees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Zero Repair Requests:</strong> Buy completely as-is. Leave behind furniture, debris, or broken appliances.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Guaranteed Private Cash:</strong> No bank delays or appraisal contingencies. You choose your closing date.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950 mb-8">
          How it works in {state.name}
        </h2>
        <ProcessSteps />
      </section>

      {/* Situation links for internal linking */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-2xl text-pine-950">
          Common reasons {state.abbr} homeowners sell to us
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {situations.map((s) => (
            <Link
              key={s.slug}
              href={`/situations/${s.slug}`}
              className="rounded-full bg-white ring-1 ring-pine-900/15 hover:ring-pine-500/50 px-4 py-2 text-sm text-pine-800 transition-all"
            >
              {s.shortTitle}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand
          heading={`Get a no-obligation offer on your ${state.name} house`}
          phone={state.phone}
          phoneDisplay={state.phoneDisplay}
        />
      </section>
    </>
  );
}
