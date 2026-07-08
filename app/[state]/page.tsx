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
    title: `We Buy Houses in ${state.name} — Sell Fast for Cash`,
    description: `Sell your ${state.name} house as-is for cash. Local buyers in ${state.cities
      .map((c) => c.name)
      .slice(0, 3)
      .join(", ")} and beyond. No repairs, no commissions. Call ${state.phoneDisplay}.`,
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
