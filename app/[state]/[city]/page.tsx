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

function cityFaq(cityName: string, stateName: string, abbr: string, county: string, days: number) {
  return [
    {
      q: `How fast can you close on a house in ${cityName}?`,
      a: `Our median closing in the ${cityName} market is about ${days} days from signed contract. Because we use private cash capital rather than bank financing, we can close as fast as 7 to 10 days if your title is clear. If you need more time to relocate, arrange estate affairs, or settle probate in ${county} County, we let you choose the exact settlement date and hold our cash offer firm.`,
    },
    {
      q: `Do I need to make repairs or clean out my ${cityName}, ${abbr} house before selling?`,
      a: `No. You do not need to clean, paint, or make any repairs. We purchase properties in 100% as-is condition throughout ${cityName} and ${county} County, including homes with major structural issues, leaking roofs, dated HVAC systems, water damage, foundation cracks, and active code violations. You can also leave behind unwanted furniture, trash, and personal items at no extra charge.`,
    },
    {
      q: `Are there any hidden fees, commissions, or closing costs when I sell to you?`,
      a: `None. When you sell directly to USHomeBuy, you pay zero realtor commissions (saving the typical 5% to 6% agent fee) and zero administrative fees. Furthermore, we cover all standard title and settlement closing costs. The cash figure on your written purchase agreement is the net amount you receive at settlement, minus only any existing mortgage payoff or property tax liens.`,
    },
    {
      q: `How do you calculate your cash offer for a property in ${cityName}?`,
      a: `We calculate your cash offer using a transparent, market-tested formula. We analyze recent sales of renovated homes in your specific ${cityName} neighborhood to determine the After-Repair Value (ARV). Then we subtract our wholesale construction costs to bring the property to top condition, our holding costs (taxes, insurance, utilities), and our minimum required profit margin. We share our math with you so you see exactly how we arrived at our number.`,
    },
    {
      q: `What paperwork do I need to sell my ${cityName} house for cash?`,
      a: `Getting started is simple. You only need a government-issued photo ID and proof of property ownership (or letters of administration if you are an executor of an estate). Our local settlement attorney and title company handle the deed preparation, title search, municipal lien certifications, and payoff requests with your lender. You do not need to order inspections or pay for appraisals.`,
    },
    {
      q: `Can I sell my ${cityName} property if it is tenant-occupied or has problem tenants?`,
      a: `Yes. We buy rental properties with tenants in place throughout ${cityName} and across ${stateName}. Whether you have tenants on month-to-month leases, long-term leases, or tenants who are months behind on rent, we take over the lease agreements and security deposits at closing. You do not have to undergo stressful eviction proceedings in ${stateName} court or force anyone to vacate before selling.`,
    },
    {
      q: `How does selling an inherited or probate property work in ${county} County?`,
      a: `If you have inherited a house in ${cityName} that is currently in probate, our acquisitions team can help guide you through the process. We regularly coordinate with probate attorneys and the ${county} County court. We can issue a binding cash purchase agreement before probate is fully concluded, allowing the estate to secure a guaranteed buyer and distribute proceeds as soon as letters of administration are granted.`,
    },
    {
      q: `How and when do I get paid when closing on my ${cityName} house?`,
      a: `Settlement occurs at a reputable local title company in ${county} County, or via a remote mobile notary if you live out of state. Funds are disbursed on closing day. You can choose to have your cash proceeds wired immediately into your bank account or receive an official bank cashier's check. Your mortgage lender and any recorded liens are paid off directly by the title company.`,
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
  const faqs = cityFaq(city.name, state.name, state.abbr, city.county, city.medianDaysToClose);
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
              {city.h1 || `Sell My House Fast in ${city.name}, ${state.abbr} | Cash Home Buyers — We Buy Houses`}
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
              Selling a property in {city.name} does not have to be an exhausting, months-long ordeal. Homeowners across {city.county} County frequently find themselves weighing whether to list with a traditional real estate agent, attempt a risky lease-option or rent-to-own arrangement, or sell directly to an established local cash home buyer. Understanding local market conditions, mandatory disclosure laws, holding expenses, and closing mechanics in {state.name} helps you make the most profitable and stress-free decision for your family.
            </p>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Local Real Estate Dynamics &amp; Housing Stock in {city.name}
            </h3>
            <p>
              The housing inventory across {city.name} and neighboring communities like {city.neighborhoods.slice(0, 4).join(", ")} features a wide variety of architectural styles, ranging from historic brick rowhouses and mid-century colonials to split-levels and ranch homes. While turnkey, fully remodeled residences with high-end designer finishes attract strong retail interest, properties with deferred maintenance often languish on the open market.
            </p>
            <p>
              In {city.county} County, retail buyers almost always finance their home purchases through conventional, FHA, or VA mortgage loans. These institutional lenders enforce rigorous property appraisal standards. If an inspection uncovers an aging roof nearing the end of its 20-year lifespan, outdated knob-and-tube or aluminum wiring, an aging HVAC condenser, moisture intrusion in the basement, or structural foundation movement, the lender will refuse to approve the loan until repairs are completed and paid for. For an owner who cannot afford to invest $20,000 to $60,000 out of pocket in pre-listing renovations, a retail listing quickly stalls.
            </p>
            <p>
              USHomeBuy solves this problem by purchasing residential properties in 100% as-is condition. Because we utilize our own private cash reserves rather than relying on mortgage approvals, we never require lender-ordered appraisal inspections, municipal code repairs, or cosmetic upgrades. You sell the property exactly as it stands today, near {city.landmark} or anywhere in {city.county} County.
            </p>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Net Financial Walkthrough: Traditional Listing vs. Direct Cash Sale
            </h3>
            <p>
              Many homeowners mistakenly assume that the highest headline offer on an MLS listing produces the largest amount of cash in their pocket. In reality, retail sales incur substantial deductions that reduce your net settlement proceeds. Here is an honest financial comparison of selling a typical $400,000 home in {city.name}:
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-2xl bg-sand-50/80 ring-1 ring-pine-900/10 p-6">
                <h4 className="font-bold text-pine-950 text-base mb-3">Traditional Real Estate Listing</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-pine-800/80">
                  <li className="flex justify-between border-b border-pine-900/10 pb-1">
                    <span>Assumed Contract Price:</span>
                    <span className="font-semibold text-pine-950">$400,000</span>
                  </li>
                  <li className="flex justify-between border-b border-pine-900/10 pb-1 text-rose-700">
                    <span>Realtor Commissions (6%):</span>
                    <span>-$24,000</span>
                  </li>
                  <li className="flex justify-between border-b border-pine-900/10 pb-1 text-rose-700">
                    <span>Seller Closing Costs &amp; Transfer Taxes (2%):</span>
                    <span>-$8,000</span>
                  </li>
                  <li className="flex justify-between border-b border-pine-900/10 pb-1 text-rose-700">
                    <span>Buyer Inspection Repair Demands / Credits:</span>
                    <span>-$10,000</span>
                  </li>
                  <li className="flex justify-between border-b border-pine-900/10 pb-1 text-rose-700">
                    <span>Holding Costs (4 mos. mortgage, tax, insurance):</span>
                    <span>-$8,000</span>
                  </li>
                  <li className="flex justify-between pt-2 font-bold text-sm sm:text-base text-pine-950">
                    <span>Estimated Net Proceeds:</span>
                    <span>~$350,000</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-pine-700/70 italic">
                  *Requires 90 to 120 days on market, dozens of open houses, intrusive showings, and risk of buyer loan denial.
                </p>
              </div>

              <div className="rounded-2xl bg-pine-950 text-sand-50 p-6 ring-2 ring-pine-800 shadow-lg">
                <h4 className="font-bold text-sand-50 text-base mb-3">Direct Cash Sale to USHomeBuy</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-sand-100/85">
                  <li className="flex justify-between border-b border-sand-100/10 pb-1">
                    <span>Fair As-Is Cash Offer:</span>
                    <span className="font-semibold text-emerald-400">Net Guaranteed</span>
                  </li>
                  <li className="flex justify-between border-b border-sand-100/10 pb-1 text-emerald-300">
                    <span>Realtor Commissions:</span>
                    <span>$0 (Zero)</span>
                  </li>
                  <li className="flex justify-between border-b border-sand-100/10 pb-1 text-emerald-300">
                    <span>Standard Title &amp; Closing Costs:</span>
                    <span>$0 (Paid by Buyer)</span>
                  </li>
                  <li className="flex justify-between border-b border-sand-100/10 pb-1 text-emerald-300">
                    <span>Pre-Listing Repairs or Staging:</span>
                    <span>$0 (100% As-Is)</span>
                  </li>
                  <li className="flex justify-between border-b border-sand-100/10 pb-1 text-emerald-300">
                    <span>Holding Delay / Extra Payments:</span>
                    <span>$0 (Closed in ~{city.medianDaysToClose} days)</span>
                  </li>
                  <li className="flex justify-between pt-2 font-bold text-sm sm:text-base text-emerald-400">
                    <span>Your Net Payout:</span>
                    <span>Full Agreed Amount</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-sand-200/70 italic">
                  *No public showings, single 15-minute visit, flexible closing date, and funds wired directly on settlement day.
                </p>
              </div>
            </div>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Navigating Complex Property Situations in {city.county} County, {state.abbr}
            </h3>
            <p>
              Every homeowner’s situation is unique. Our local acquisition team specializes in resolving complex title, legal, and property challenges that make traditional agent listings impossible:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-1">
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">Inherited Estates &amp; Probate</strong>
                Settling an estate after the loss of a family member in {city.county} County often involves clearing title among multiple heirs, sorting through decades of personal property, and working with probate court. We coordinate directly with estate attorneys and executors to facilitate a clean buyout.
              </div>
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">Pre-Foreclosure &amp; Payment Default</strong>
                Falling behind on mortgage payments causes immense stress. In {state.name}, lenders can initiate legal foreclosure proceedings once default occurs. Selling directly for cash satisfies your lender in full before the auction date, protects your credit rating, and preserves your remaining equity.
              </div>
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">Tenant-Occupied &amp; Eviction Headaches</strong>
                Problem tenants, expired leases, or non-payment of rent can leave landlords trapped. Evictions in {state.name} court can take months of costly legal filings. We purchase tenant-occupied properties as-is, take over the leases, and assume all tenant management responsibilities.
              </div>
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">Municipal Liens &amp; Code Violations</strong>
                Properties with city citations, unpermitted basement additions, open building permits, or delinquent property tax liens are difficult to transfer. Our title team clears municipal violations and resolves encumbrances directly at the closing table.
              </div>
            </div>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Cash Sale vs. Rent-to-Own in {city.name}
            </h3>
            <p>
              Some homeowners consider rent-to-own or lease-option contracts when their house needs work. While lease-purchase arrangements may sound tempting, they expose property owners to severe legal and financial risks:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm pt-1">
              <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-5">
                <h4 className="font-bold text-rose-950 mb-2">Risks of Rent-to-Own:</h4>
                <ul className="space-y-1.5 text-rose-900/90 list-disc pl-4 text-xs sm:text-sm">
                  <li>Tenant-buyers frequently fail to secure mortgage financing when the lease expires.</li>
                  <li>You remain legally and financially responsible for property taxes, insurance, and existing liens.</li>
                  <li>Tenants may neglect maintenance, damage fixtures, or abandon the house midway.</li>
                  <li>Evictions for non-payment require lengthy legal court proceedings in {state.name}.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-5">
                <h4 className="font-bold text-emerald-950 mb-2">Benefits of a Direct Cash Sale:</h4>
                <ul className="space-y-1.5 text-emerald-900/90 list-disc pl-4 text-xs sm:text-sm">
                  <li>Guaranteed cash disbursement wired directly to your account on settlement day.</li>
                  <li>Existing mortgages and liens are completely paid off at the title company.</li>
                  <li>Zero ongoing landlord liabilities, maintenance costs, or tenant communication.</li>
                  <li>Complete closure, peace of mind, and the freedom to move forward immediately.</li>
                </ul>
              </div>
            </div>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Deed Transfers, County Recordings &amp; Property Taxes in {city.county} County
            </h3>
            <p>
              Finalizing a real estate transaction in {city.name} requires proper recording with the {city.county} County deed recording office. At settlement, our dedicated title attorney verifies that all outstanding obligations are resolved so the deed transfers with free and clear title:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-pine-800/85">
              <li>
                <strong>Mortgage Payoffs:</strong> The title company orders an official payoff demand statement directly from your current lender or loan servicer. Outstanding principal, accrued interest, and escrow balances are settled directly from proceeds at closing.
              </li>
              <li>
                <strong>Property Tax Proration:</strong> County and municipal property taxes in {city.name} are calculated and prorated down to the exact day of closing. Any prepaid taxes are credited back to you, while delinquent tax balances are paid off so no future tax liability follows you.
              </li>
              <li>
                <strong>Municipal Water &amp; Utility Clearances:</strong> In {city.county} County, final water meter readings and sewer charges must be certified before deed recordation. We coordinate with the local utility authority to ensure final bills are paid directly at closing.
              </li>
              <li>
                <strong>Lien Resolution &amp; Title Insurance:</strong> Any contractor mechanics&apos; liens, judgment liens, or past HOA dues attached to the property are paid and released from proceeds, providing a clean title transfer to USHomeBuy.
              </li>
            </ul>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Property Conditions We Buy Across {city.name}
            </h3>
            <p>
              We regularly purchase homes across {city.name} that traditional realtors cannot sell without substantial investments. Regardless of condition, we make fair, transparent cash offers:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-1">
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">Structural &amp; Foundation Damage</strong>
                Horizontal foundation cracks, bowing cinder block walls, uneven subflooring, or settling chimneys.
              </div>
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">Roofing, Water &amp; Storm Damage</strong>
                Active roof leaks, missing shingles, rotting eaves, water-damaged ceilings, or flooded basements.
              </div>
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">Outdated Plumbing &amp; Electrical</strong>
                Knob-and-tube wiring, Zinsco or Federal Pacific panels, cast-iron drain line failures, or galvanized water pipes.
              </div>
              <div className="rounded-xl bg-sand-50 p-4 border border-pine-900/10">
                <strong className="block text-pine-950 mb-1">Hoarder &amp; Trash-Out Properties</strong>
                Severe clutter, accumulated personal possessions, non-functional appliances, or years of deferred cleaning.
              </div>
            </div>

            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Step-by-Step Checklist for Selling Your {city.name} Home
            </h3>
            <p>
              Selling your house directly to USHomeBuy follows a clear, predictable timeline designed around your convenience:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-pine-800/85">
              <li>
                <strong>Submit Your Property Details:</strong> Fill out our simple online form or call our local team at {state.phoneDisplay}. Tell us about the house, its current condition, and your ideal timeline.
              </li>
              <li>
                <strong>Initial Valuation &amp; Walkthrough:</strong> We review recent comparable sales across {city.name} and conduct a single, brief 15-minute visit. You do not need to clean, paint, or stage anything.
              </li>
              <li>
                <strong>Receive Your Written Cash Offer:</strong> Within 24 hours of viewing the property, we present a formal, written cash offer with zero financing contingencies, zero inspection renegotiations, and zero hidden fees.
              </li>
              <li>
                <strong>Title Examination &amp; Closing Preparation:</strong> A reputable local title company in {city.county} County performs the title search, prepares transfer documents, and orders lender payoffs.
              </li>
              <li>
                <strong>Closing &amp; Immediate Cash Disbursement:</strong> Choose your closing date in as little as {city.medianDaysToClose} days. Sign the settlement documents and receive your funds via direct bank wire or certified cashier&apos;s check.
              </li>
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
