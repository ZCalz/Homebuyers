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
              {state.h1 || `Sell My House Fast in ${state.name} | Cash Home Buyers — We Buy Houses As-Is`}
            </h1>
            <p className="mt-5 text-lg text-pine-800/85 leading-relaxed">
              Need to <strong>sell your house fast in {state.name}</strong>? USHomeBuy makes fair cash offers for homes in any condition. You pay zero fees and make no repairs. {state.intro}
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
          <h2 className="font-display text-xl text-pine-900 font-bold">
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
          We have local cash buying teams across {state.name}. Click your city below to see neighborhood details.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {state.cities.map((c) => (
            <Link
              key={c.slug}
              href={`/${state.slug}/${c.slug}`}
              className="group rounded-2xl bg-white ring-1 ring-pine-900/10 hover:ring-pine-500/50 p-6 transition-all hover:shadow-lg hover:shadow-pine-900/5"
            >
              <h3 className="font-display text-lg text-pine-950 group-hover:text-pine-700 font-bold">
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
          Listing a home with a {state.name} real estate agent takes time and money. You must clean, stage, host open houses, and pay 5% to 6% in commissions. A direct cash sale to USHomeBuy gives you speed, certainty, and peace of mind.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-8">
            <h3 className="font-display text-xl text-pine-950 font-bold">Traditional Real Estate Listing</h3>
            <ul className="mt-5 space-y-3 text-sm text-pine-800/80">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>5%–6% Agent Commissions:</strong> Deducts $20,000 to $30,000 from your sale proceeds.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Closing Costs:</strong> Sellers in {state.name} pay transfer taxes and title fees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Repair Demands:</strong> Buyers often ask for roof, plumbing, or heating fixes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Loan Delays:</strong> Bank loan approvals can fail weeks into escrow.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-pine-950 text-sand-50 p-6 sm:p-8 ring-2 ring-pine-800 shadow-xl">
            <h3 className="font-display text-xl text-sand-50 font-bold">Direct Cash Sale to USHomeBuy</h3>
            <ul className="mt-5 space-y-3 text-sm text-sand-100/85">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Zero Fees or Commissions:</strong> You pay no agent fees or hidden costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>All Closing Costs Paid:</strong> We pay standard title and recording fees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Sold 100% As-Is:</strong> You make no repairs. Leave behind any unwanted items.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Fast Cash Closing:</strong> We close with verified private cash on the day you pick.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Delaware Specific Market Spotlight */}
      {state.slug === "delaware" && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
          <div className="rounded-3xl bg-sand-50/90 ring-1 ring-pine-900/10 p-6 sm:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-pine-600 font-bold">
              Local Market Spotlight
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-pine-950">
              Delaware Real Estate Spotlight: 1209 Barley Mill Rd &amp; New Castle County Cash Buyers
            </h2>
            <div className="mt-6 space-y-5 text-pine-800/85 text-sm sm:text-base leading-relaxed">
              <p>
                Barley Mill Road is a well-known real estate corridor in New Castle County. Whether you own a home on 1209 Barley Mill Road or nearby in Greenville, our cash buying team can help. We buy homes in any condition with fair cash offers.
              </p>
              <p>
                Properties along 1209 Barley Mill Road often feature large grounds and classic architecture. If your house near 1209 Barley Mill Rd needs costly updates, we buy 100% as-is. You do not have to spend money on a new roof, plumbing, or landscaping.
              </p>
              <p>
                Listing a property on 1209 Barley Mill Road with an agent can take many months. High-end buyers often demand big inspection repairs. Financing can fall through late in escrow.
              </p>
              <p>
                Selling your property on 1209 Barley Mill Road directly to USHomeBuy gives you a fast cash closing without open houses. We make cash offers on homes near 1209 Barley Mill Rd Wilmington DE 19807 in any condition. From 1209 Barley Mill Rd to Wilmington rowhomes, we purchase houses with zero commissions and flexible closing dates.
              </p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4 pt-2">
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">Barley Mill &amp; Greenville</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    Cash buyouts for estate properties and older single-family homes near 1209 Barley Mill Rd.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">Wilmington DE 19807</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    Discreet cash sales for homeowners looking to skip showings and long escrow periods.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">New Castle County</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    Fast closings in 14 to 21 days with 100% of standard closing costs paid by us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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

      {/* Comprehensive State-Wide Guide */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-3xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl text-pine-950">
            Everything You Need to Know About Selling a House For Cash in {state.name}
          </h2>
          <div className="mt-6 space-y-5 text-pine-800/85 text-sm sm:text-base leading-relaxed">
            <p>
              Selling real estate in {state.name} can feel overwhelming. You may have an inherited home, costly repair bills, or problem tenants. Selling directly to a cash home buyer gives you speed and peace of mind. Here is how our process works.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Sell 100% As-Is With Zero Disclosure Stress
            </h3>
            <p>
              In a traditional sale, sellers must fill out detailed property disclosure forms. You must list every known issue with the roof, plumbing, and foundation. If an issue is missed, buyers may file a lawsuit later.
            </p>
            <p>
              USHomeBuy buys your home completely as-is. We inspect the property ourselves during a single visit. You never have to fix anything or worry about future claims.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              We Pay Standard Closing Costs in {state.name}
            </h3>
            <p>
              In conventional sales, closing costs add up fast. Sellers often pay 2% to 4% in transfer taxes, title fees, and attorney costs on top of agent commissions.
            </p>
            <p>
              We cover standard closing costs for you. The cash offer on your contract is the exact sum you receive on closing day. There are no surprise deductions.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Direct Cash Buyers vs. Wholesalers
            </h3>
            <p>
              Many &quot;we buy houses&quot; advertisers are middleman wholesalers. They do not have cash to buy your home. Instead, they try to resell your contract to other investors. If they cannot find a buyer, they cancel the contract at the last minute.
            </p>
            <p>
              USHomeBuy is a direct buyer. We use our own capital to buy your property. We put down real earnest money and close on schedule every time.
            </p>
          </div>
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
