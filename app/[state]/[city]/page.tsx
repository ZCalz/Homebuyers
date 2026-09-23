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
          Traditional real estate sales in {city.county} County can drag on for months with open houses, repair demands, buyer mortgage contingencies, and unexpected appraisal shortfalls. At USHomeBuy, we have eliminated the middlemen, banks, and delays so you can sell directly on your terms.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 shadow-sm">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-pine-600 bg-pine-50 px-2.5 py-1 rounded-md">Step 1</span>
            <h3 className="mt-3 font-display text-lg text-pine-950 font-bold">Request Your Offer</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Submit your {city.name} property details online or call us directly. We evaluate current neighborhood comps and public records to build an initial valuation in minutes.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 shadow-sm">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-pine-600 bg-pine-50 px-2.5 py-1 rounded-md">Step 2</span>
            <h3 className="mt-3 font-display text-lg text-pine-950 font-bold">Simple Walkthrough</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Our local {state.abbr} acquisitions team conducts a quick, single walkthrough. You never clean up, paint, or make repairs. Everything is evaluated strictly as-is.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 shadow-sm">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-pine-600 bg-pine-50 px-2.5 py-1 rounded-md">Step 3</span>
            <h3 className="mt-3 font-display text-lg text-pine-950 font-bold">Written Cash Agreement</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Receive a written, no-obligation cash offer within 24–48 hours. What you see is your exact net payout at settlement — zero commissions and zero hidden fees.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 shadow-sm">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-pine-600 bg-pine-50 px-2.5 py-1 rounded-md">Step 4</span>
            <h3 className="mt-3 font-display text-lg text-pine-950 font-bold">Close &amp; Get Paid</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Settlement takes place with a reputable local title company in {city.name} or {city.county} County. Close in as little as {city.medianDaysToClose} days or pick your preferred date.
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
          Before signing a 6-month listing contract with a real estate agent in {city.name}, consider the real costs of commissions, closing fees, holding costs, and repair demands against a direct cash sale.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-8">
            <h3 className="font-display text-xl text-pine-950 font-bold flex items-center justify-between">
              <span>Traditional Agent Listing</span>
              <span className="text-xs uppercase font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full">High Fees &amp; Delays</span>
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm text-pine-800/80">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>6% Real Estate Commissions:</strong> Costs $24,000+ on a $400,000 {city.name} home.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Seller Closing Costs:</strong> Typically 2% to 3% deducted from your proceeds at settlement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Expensive Mandatory Repairs:</strong> Buyers demand thousands in credits following home inspection reports.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Dozens of Open Houses:</strong> Strangers walking through your bedrooms, closets, and living areas for months.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Financing Contingencies:</strong> 15% to 20% of retail mortgage contracts fall through before closing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>60 to 90+ Days on Market:</strong> Continued mortgage payments, property taxes, insurance, and utilities.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-pine-950 text-sand-50 p-6 sm:p-8 ring-2 ring-pine-800 shadow-xl">
            <h3 className="font-display text-xl text-sand-50 font-bold flex items-center justify-between">
              <span>Direct Cash Sale to USHomeBuy</span>
              <span className="text-xs uppercase font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full">Guaranteed Net Cash</span>
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm text-sand-100/85">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Zero Realtor Commissions:</strong> No broker fees, no listing fees, and no marketing costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>100% Closing Costs Covered:</strong> We pay standard title search, settlement, and transfer recording fees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Strictly 100% As-Is Purchase:</strong> No painting, cleanouts, trash disposal, or contractor estimates required.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Just One Private Walkthrough:</strong> No public open houses or continuous lockbox showings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Zero Mortgage Contingencies:</strong> We purchase with verified private capital — no bank loan approvals needed.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Close on Your Timeline:</strong> Median closing in ~{city.medianDaysToClose} days or any future date you choose.</span>
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
          Regardless of what life circumstances or property challenges you face, our local {state.abbr} investment team has the experience, capital, and legal knowledge to create a fast, clean exit.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Inherited &amp; Probate Homes</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Navigating estate distribution across multiple heirs or probate court filings in {city.county} County. We buy the property with all unwanted contents and furniture left behind.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Pre-Foreclosure &amp; Liens</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Facing missed mortgage payments, tax delinquency, or auction deadlines. A fast cash closing pays off the lender in full and protects your remaining equity.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Extensive Deferred Repairs</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              From failing roofs and water-damaged basements to foundation cracks, outdated plumbing, or electrical code violations that prevent retail buyers from securing mortgages.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Tired Landlords &amp; Tenants</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Managing non-paying tenants, lease violations, or difficult evictions. We purchase rental properties occupied by tenants and assume the existing lease agreements.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Relocation &amp; Job Transfer</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Need to relocate quickly for military PCS orders, corporate transfers, or family reasons. Eliminate double mortgage payments with an expedited cash closing.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Downsizing &amp; Retirement</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Transitioning to senior living or a smaller home without the stress of managing contractors, estate sales, or months of invasive buyer showings.
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
