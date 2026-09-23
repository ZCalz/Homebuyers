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
              Sell My House Fast in {state.name} | Cash Home Buyers — We Buy Houses As-Is
            </h1>
            <p className="mt-5 text-lg text-pine-800/85 leading-relaxed">
              When you need to <strong>sell your house fast in {state.name}</strong> or seek trusted <strong>cash home buyers</strong> who buy houses in any condition, USHomeBuy provides a direct, transparent cash solution. {state.intro}
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

      {/* Comprehensive State-Wide Guide */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-3xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl text-pine-950">
            Everything You Need to Know About Selling a House For Cash in {state.name}
          </h2>
          <div className="mt-6 space-y-5 text-pine-800/85 text-sm sm:text-base leading-relaxed">
            <p>
              Navigating a residential property sale across {state.name} requires understanding local statutes, transfer tax customs, and title clearance procedures. Whether you are dealing with an aging family estate, mounting repair estimates, pre-foreclosure notifications, or difficult rental tenants, selling directly to an established cash house buyer provides certainty and eliminates traditional market friction.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              As-Is Sales and Property Disclosure Regulations in {state.name}
            </h3>
            <p>
              In traditional real estate transactions in {state.name}, sellers are typically required to complete extensive statutory property condition disclosure statements detailing known defects with the roof, foundation, plumbing, electrical, and environmental hazards. Failure to disclose minor issues can result in post-closing buyer lawsuits and costly arbitration disputes.
            </p>
            <p>
              When you sell to USHomeBuy, we purchase the property in 100% as-is condition under standard commercial investor terms. We conduct our own professional due diligence during a single walkthrough, eliminating the risk of future inspection disputes, post-sale liability, or mandatory seller repair credits.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              How Transfer Taxes, Title Fees, and Closing Costs Work in {state.name}
            </h3>
            <p>
              In a conventional real estate transaction across {state.name}, closing expenses can consume 2% to 4% of the total purchase price on top of the 5% to 6% agent commission fees. These include county and state deed transfer taxes, title examination fees, settlement attorney fees, and municipal recording charges.
            </p>
            <p>
              USHomeBuy covers all standard seller closing costs. The cash price on our written agreement represents the exact net sum delivered to you at the settlement table, ensuring total financial predictability from day one.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Why Balance-Sheet Cash Buyers Outperform Middleman Wholesalers
            </h3>
            <p>
              Many online &quot;we buy houses&quot; advertisers operating in {state.name} are unlicensed wholesalers who do not have the capital to close. They attempt to place your home under contract and then spend 30 days searching for a third-party investor to assign the contract to. If they fail, they cancel the deal days before closing, leaving you in a financial bind.
            </p>
            <p>
              USHomeBuy is a direct balance-sheet property buyer. We sign purchase agreements as the actual buyer, place legitimate earnest money deposits into escrow with reputable local title companies, and close using our own verified private funds.
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
