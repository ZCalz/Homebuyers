import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allCityParams, getCity } from "@/lib/data";
import { situations } from "@/lib/data/situations";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { faqSchema, localBusinessSchema } from "@/lib/schema";

interface Params {
  state: string;
  city: string;
}

export function generateStaticParams(): Params[] {
  return allCityParams();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const match = getCity(stateSlug, citySlug);
  if (!match) return {};
  const { state, city } = match;

  const defaultTitle = `Sell My House Fast in ${city.name} ${state.abbr} | Cash`;
  const calibratedTitle =
    city.metaTitle ||
    (defaultTitle.length + 12 < 50
      ? `Sell My House Fast in ${city.name} ${state.abbr} | Cash Offer`
      : defaultTitle);

  const hoods = city.neighborhoods.slice(0, 2).join(", ");
  const baseDesc = `Sell your house fast in ${city.name}, ${state.abbr}. We buy houses cash as-is in ${hoods} & nearby.`;
  let defaultDesc = `${baseDesc} Zero repairs, no fees, fast closing dates.`;
  if (defaultDesc.length < 140) {
    defaultDesc = `${baseDesc} Zero repairs, no agent fees, and fast closing dates. Call now.`;
  }
  if (defaultDesc.length > 158) {
    defaultDesc = `Sell your house fast in ${city.name}, ${state.abbr}. We buy houses cash as-is in ${hoods}. Zero repairs, no fees, fast closing. Call today.`;
  }

  return {
    title: calibratedTitle,
    description: city.metaDescription || defaultDesc,
    alternates: { canonical: `/${state.slug}/${city.slug}` },
  };
}

function cityFaq(cityName: string, abbr: string, days: number) {
  return [
    {
      q: `How fast can you close on a house in ${cityName}?`,
      a: `Our median closing in the ${cityName} market is about ${days} days from signed contract. If you need longer — for probate, a move, or an estate — we hold the date open at the same price.`,
    },
    {
      q: `Do I need to make repairs before selling my ${cityName}, ${abbr} house?`,
      a: `No. We buy strictly as-is, including houses with structural issues, code violations, or full contents left behind. Our offer already accounts for the work.`,
    },
    {
      q: `Are there fees or commissions when I sell to you?`,
      a: `None. We are the buyer, not an agent, so there is no commission, and we cover standard closing costs. The offer you accept is the amount on your settlement statement, minus any payoff of existing liens.`,
    },
    {
      q: `How do you calculate your offer for a ${cityName} property?`,
      a: `We start with renovated comparable sales in your immediate neighborhood, subtract realistic repair costs from a single walkthrough, and subtract our margin. We show you all three numbers.`,
    },
  ];
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { state: stateSlug, city: citySlug } = await params;
  const match = getCity(stateSlug, citySlug);
  if (!match) notFound();
  const { state, city } = match;
  const faqs = cityFaq(city.name, state.abbr, city.medianDaysToClose);
  const nearbyCities = city.nearby
    .map((slug) => state.cities.find((c) => c.slug === slug))
    .filter((c) => c !== undefined);

  return (
    <>
      <JsonLd data={localBusinessSchema(state, city)} />
      <JsonLd data={faqSchema(faqs)} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs
          items={[
            { name: state.name, url: `/${state.slug}` },
            { name: city.name, url: `/${state.slug}/${city.slug}` },
          ]}
        />
      </div>

      {/* Hero with localized H1 */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-14">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-pine-600 font-semibold">
              {city.county} County · {state.abbr} · Median close ~
              {city.medianDaysToClose} days
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-pine-950">
              Sell My House Fast in {city.name}, {state.abbr} | Cash Home Buyers — We Buy Houses
            </h1>
            <p className="mt-5 text-lg text-pine-800/85 leading-relaxed">
              When you need to <strong>sell your house fast in {city.name}, {state.abbr}</strong> for cash, work with local <strong>cash home buyers</strong> who purchase properties 100% as-is. {city.intro}
            </p>
            <p className="mt-4 text-sm text-pine-700">
              We buy throughout {city.neighborhoods.join(", ")}, and the
              surrounding {city.county} County area near {city.landmark}.
            </p>
            <p className="mt-4 text-sm text-pine-700">
              Talk to the local team:{" "}
              <a
                href={`tel:${state.phone}`}
                className="font-semibold text-pine-800 underline underline-offset-4"
              >
                {state.phoneDisplay}
              </a>
            </p>
          </div>
          <LeadForm
            territory={`${city.name}, ${state.abbr}`}
            defaultZip={city.zips[0]}
          />
        </div>
      </section>

      {/* Local expertise block — unique per market */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-pine-100/70 ring-1 ring-pine-300/50 p-6 sm:p-8">
          <h2 className="font-display text-xl text-pine-900">
            What&apos;s different about selling in {city.name}
          </h2>
          <p className="mt-3 text-pine-900/80 leading-relaxed max-w-3xl">
            {city.localAngle}
          </p>
        </div>
      </section>

      {/* Step-by-Step Cash Sale Process */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-14">
        <h2 className="font-display text-3xl text-pine-950">
          How to sell your house fast for cash in {city.name}, {state.abbr}
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-3xl leading-relaxed">
          Selling a house through an agent can take months. Open houses, repair requests, and bank delays cause stress. At USHomeBuy, we make it simple. We buy your house directly with our own cash.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 shadow-sm">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-pine-600 bg-pine-50 px-2.5 py-1 rounded-md">Step 1</span>
            <h3 className="mt-3 font-display text-lg text-pine-950 font-bold">Request Your Offer</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Submit your {city.name} address online or call us. We review local sales and public records to build your offer fast.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 shadow-sm">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-pine-600 bg-pine-50 px-2.5 py-1 rounded-md">Step 2</span>
            <h3 className="mt-3 font-display text-lg text-pine-950 font-bold">Simple Walkthrough</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              We do one quick walkthrough. You do not clean, paint, or fix anything. We view the home strictly as-is.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 shadow-sm">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-pine-600 bg-pine-50 px-2.5 py-1 rounded-md">Step 3</span>
            <h3 className="mt-3 font-display text-lg text-pine-950 font-bold">Written Cash Offer</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Get a fair, written cash offer in 24 hours. The price you see is the cash you keep. No fees. No commissions.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 shadow-sm">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-pine-600 bg-pine-50 px-2.5 py-1 rounded-md">Step 4</span>
            <h3 className="mt-3 font-display text-lg text-pine-950 font-bold">Close &amp; Get Paid</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Close with a trusted local title company. Pick your own closing day and get your money wired.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison: Cash Buyer vs Traditional Agent */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Comparing your selling options in {city.name}
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-3xl leading-relaxed">
          Before signing with an agent in {city.name}, compare your choices. Here is how an agent listing compares to a direct cash sale:
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-8">
            <h3 className="font-display text-xl text-pine-950 font-bold flex items-center justify-between">
              <span>Traditional Agent Listing</span>
              <span className="text-xs uppercase font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full">High Fees &amp; Delays</span>
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-pine-800/80">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>6% Realtor Fees:</strong> Costs $24,000 on a $400,000 {city.name} house.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Seller Closing Costs:</strong> Deducts 2% to 3% more from your cash.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Mandatory Repairs:</strong> Buyers ask for expensive fixes after inspections.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Open Houses:</strong> Weekend showings disrupt your daily life.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Bank Loan Delays:</strong> Buyer mortgages often fail before settlement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Months on Market:</strong> You pay extra mortgage, tax, and utility bills.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-pine-950 text-sand-50 p-6 sm:p-8 ring-2 ring-pine-800 shadow-xl">
            <h3 className="font-display text-xl text-sand-50 font-bold flex items-center justify-between">
              <span>Direct Cash Sale to USHomeBuy</span>
              <span className="text-xs uppercase font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full">Guaranteed Net Cash</span>
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-sand-100/85">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Zero Realtor Fees:</strong> No commission, no agent fees, and no marketing costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>We Pay Closing Costs:</strong> Standard title and transfer fees are paid for you.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Sold 100% As-Is:</strong> No cleaning, painting, or repair bills.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>One Quick Visit:</strong> No open houses or lockboxes on your door.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>No Bank Loans:</strong> We buy with our own private cash reserves.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Pick Your Close Date:</strong> Close in ~{city.medianDaysToClose} days or take your time.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Local Situations Handled */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Situations we solve for {city.name} property owners
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-3xl leading-relaxed">
          Life happens. Whatever your situation, our local {state.abbr} team can help you sell quickly and walk away with cash.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Inherited &amp; Probate Homes</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Sell during probate court in {city.county} County. Leave unwanted furniture and clutter behind.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Pre-Foreclosure &amp; Liens</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Stop foreclosure sales fast. Pay off the lender in full and protect your remaining home equity.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Major Repairs Needed</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Do zero repairs. We buy homes with leaking roofs, wet basements, or foundation cracks strictly as-is.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Tired Landlords &amp; Tenants</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Tired of bad tenants or unpaid rent? We buy tenant-occupied homes and take over existing leases.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Relocation &amp; Job Moves</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Moving on military PCS orders or a job transfer? Close fast and avoid paying two mortgages.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Downsizing &amp; Retirement</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Transition to senior living easily. Skip open houses, estate sales, and contractor hassles.
            </p>
          </div>
        </div>
      </section>

      {/* Zip coverage + testimonial */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-14 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-8">
          <h2 className="font-display text-xl text-pine-950">
            Zip codes we cover in {city.name}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {city.zips.map((z) => (
              <span
                key={z}
                className="rounded-full bg-sand-100 ring-1 ring-sand-300/60 px-3.5 py-1.5 text-sm font-medium text-pine-800"
              >
                {z}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-pine-700/80 leading-relaxed">
            Just outside these zips? We still buy across {city.county} County —
            start the form with your zip and we&apos;ll route you to the right
            buyer.
          </p>
        </div>

        <figure className="rounded-2xl bg-pine-900 text-sand-50 p-6 sm:p-8">
          <blockquote className="text-lg leading-relaxed font-display">
            “{city.testimonial.quote}”
          </blockquote>
          <figcaption className="mt-4 text-sm text-sand-200">
            <span className="font-semibold">{city.testimonial.name}</span> ·{" "}
            {city.testimonial.area}
          </figcaption>
        </figure>
      </section>

      {/* FAQ (matches injected FAQPage schema) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Selling a {city.name} house: common questions
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6"
            >
              <h3 className="font-semibold text-pine-950">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-800/80">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links: situations + nearby markets */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-xl text-pine-950">
              Situations we handle in {city.name}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
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
          </div>
          {nearbyCities.length > 0 && (
            <div>
              <h2 className="font-display text-xl text-pine-950">
                Nearby markets
              </h2>
              <ul className="mt-4 space-y-2">
                {nearbyCities.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/${state.slug}/${n.slug}`}
                      className="text-sm font-medium text-pine-700 hover:text-pine-600 underline underline-offset-4"
                    >
                      Sell a house in {n.name}, {state.abbr}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`/${state.slug}`}
                    className="text-sm font-medium text-pine-700 hover:text-pine-600 underline underline-offset-4"
                  >
                    All {state.name} markets
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Comprehensive Local Market & Seller Guide */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-3xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl text-pine-950 font-bold">
            Complete Guide to Selling Your House Fast in {city.name}, {state.abbr}
          </h2>
          <div className="mt-6 space-y-6 text-pine-800/85 text-sm sm:text-base leading-relaxed">
            <p>
              Selling a house in {city.name} does not have to be stressful. Many owners face a big choice. Should you list with an agent, try rent-to-own, or sell directly for cash? Here is what you need to know to make the best choice.
            </p>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Why Sell for Cash Instead of Listing on the MLS?
            </h3>
            <p>
              Listing with a real estate agent works well for brand new or fully updated homes. But it takes time and money. Most buyers in {city.neighborhoods.slice(0, 3).join(", ")} use bank loans. Bank lenders have strict inspection rules. If your roof is old, your AC is dated, or your basement has moisture, the bank will refuse the loan.
            </p>
            <p>
              Selling directly to USHomeBuy solves these problems:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-pine-800/85">
              <li><strong>No repair costs:</strong> You do not fix a single thing. We buy 100% as-is.</li>
              <li><strong>Zero commissions:</strong> You keep all your money. There are no 6% agent fees.</li>
              <li><strong>No showings:</strong> You skip open houses and weekend strangers in your home.</li>
              <li><strong>Fast closing:</strong> We close in as few as {city.medianDaysToClose} days, or on the date you pick.</li>
            </ul>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Cash Sale vs. Rent-to-Own in {city.name}
            </h3>
            <p>
              Some homeowners consider rent-to-own or lease options when they cannot find a buyer right away. While rent-to-own sounds easy, it carries high risks for sellers:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm pt-2">
              <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-5">
                <h4 className="font-bold text-rose-950 mb-2">Risks of Rent-to-Own:</h4>
                <ul className="space-y-1.5 text-rose-900/90 list-disc pl-4 text-xs sm:text-sm">
                  <li>Tenant-buyers often fail to qualify for a mortgage later.</li>
                  <li>You remain legally responsible for the mortgage, taxes, and insurance.</li>
                  <li>Tenants may damage your property and stop paying rent.</li>
                  <li>Evictions can take months in Maryland court.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-5">
                <h4 className="font-bold text-emerald-950 mb-2">Benefits of a Direct Cash Sale:</h4>
                <ul className="space-y-1.5 text-emerald-900/90 list-disc pl-4 text-xs sm:text-sm">
                  <li>You get your cash payout immediately at closing.</li>
                  <li>Your mortgage is paid off in full on day one.</li>
                  <li>Zero landlord duties, zero repairs, and zero eviction risks.</li>
                  <li>Clean break with total peace of mind.</li>
                </ul>
              </div>
            </div>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              How We Calculate Your Cash Offer in {city.name}
            </h3>
            <p>
              We believe in honest, clear math. Our cash offer is based on four simple numbers:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm pt-1">
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">1. Market Value (ARV)</strong>
                What renovated homes in your {city.name} neighborhood sell for today.
              </div>
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">2. Repair Cost</strong>
                The wholesale cost for our crew to update and fix the home.
              </div>
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">3. Holding Costs</strong>
                Property taxes, insurance, and utility bills while we remodel.
              </div>
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">4. Your Cash Offer</strong>
                Our fair profit margin is subtracted, leaving your guaranteed cash payout.
              </div>
            </div>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Common Property Types We Buy in {city.county} County
            </h3>
            <p>
              We buy all residential property types across {city.name} and nearby towns:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-pine-800/85">
              <li><strong>Single-Family Homes:</strong> Older colonials, split-levels, and ranches needing new roofs or HVAC units.</li>
              <li><strong>Townhouses &amp; Condos:</strong> Homes in master-planned neighborhoods with active HOAs.</li>
              <li><strong>Inherited Homes:</strong> Properties in probate court or estate administration with full contents inside.</li>
              <li><strong>Rental Units:</strong> Houses with non-paying tenants, broken leases, or heavy wear and tear.</li>
            </ul>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Simple Step-by-Step Closing Process
            </h3>
            <p>
              Closing on your {city.name} home is fast and secure. Here is how it works:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm text-pine-800/85">
              <li><strong>Call or submit your address:</strong> Tell us about the house.</li>
              <li><strong>Quick 15-minute visit:</strong> We view the property in person. No cleaning required.</li>
              <li><strong>Get your written offer:</strong> Review our clear cash number with zero pressure.</li>
              <li><strong>Choose your close date:</strong> Close with a local title company and get your funds wired.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand
          heading={`Get your ${city.name} cash offer`}
          sub={`One walkthrough, a transparent number, and a closing in as little as ${city.medianDaysToClose} days.`}
          phone={state.phone}
          phoneDisplay={state.phoneDisplay}
        />
      </section>
    </>
  );
}
