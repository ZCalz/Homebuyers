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
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import type { StateData } from "@/lib/data/types";

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

function stateFaq(state: StateData) {
  return [
    {
      q: `How quickly can you buy my house in ${state.name}?`,
      a: `We can complete a cash purchase on your ${state.name} home in as few as 7 to 14 days, or on the exact future date that suits your relocation schedule. Because we use private cash capital, there are no bank loan underwriting delays, mortgage appraisal contingencies, or administrative holdbacks.`,
    },
    {
      q: `Do I have to make repairs or clean out the house before selling in ${state.name}?`,
      a: `No. We purchase residential properties across ${state.name} in 100% as-is condition. You never need to paint, hire contractors, replace roofs or HVAC systems, or remediate code violations. Any unwanted furniture, appliances, debris, or trash can be left behind for our team to handle at zero expense to you.`,
    },
    {
      q: `Who pays the closing costs and transfer taxes in ${state.name}?`,
      a: `USHomeBuy covers all standard buyer and seller title fees, recording charges, and closing expenses. There are no 5% to 6% realtor commissions and no hidden transaction fees deducted from your proceeds. The cash amount agreed upon in our written contract is the net payout you receive at closing.`,
    },
    {
      q: `How do you determine the cash offer price for ${state.name} properties?`,
      a: `Our acquisition specialists evaluate recent sales of renovated homes in your immediate neighborhood to establish the property's After-Repair Value (ARV). We subtract necessary repair and renovation costs, holding expenses (property taxes, insurance, utilities), and our modest profit margin, giving you a fair and transparent cash offer.`,
    },
    {
      q: `Can you help if my ${state.name} house is in probate or foreclosure?`,
      a: `Yes. We have extensive experience assisting ${state.name} homeowners navigating probate court, inherited properties with multiple heirs, and pre-foreclosure deadlines. We coordinate with local estate and title attorneys to resolve liens, clear tangled titles, and ensure a smooth closing that protects your equity.`,
    },
    {
      q: `What types of homes do you purchase across ${state.name}?`,
      a: `We buy single-family houses, townhomes, rowhouses, multi-family properties, condos, and vacant land throughout ${state.name}. We purchase properties regardless of physical condition, occupancy status (vacant, owner-occupied, or tenant-occupied), or financial distress.`,
    },
  ];
}

export default async function StatePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) notFound();
  const faqs = stateFaq(state);

  return (
    <>
      <JsonLd data={localBusinessSchema(state)} />
      <JsonLd data={faqSchema(faqs)} />

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

      {/* State-Specific Market & Legal Spotlights */}
      {state.slug === "washington-dc" && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
          <div className="rounded-3xl bg-sand-50/90 ring-1 ring-pine-900/10 p-6 sm:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-pine-600 font-bold">
              District Real Estate Spotlight
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-pine-950 font-bold">
              Washington, DC Real Estate Guide: Navigating TOPA, Superior Court Probate &amp; Historic Districts
            </h2>
            <div className="mt-6 space-y-5 text-pine-800/85 text-sm sm:text-base leading-relaxed">
              <p>
                Selling residential real estate in the District of Columbia requires navigating legal frameworks that exist nowhere else in the United States. Whether you are selling an inherited Victorian rowhouse in Capitol Hill, a detached home in Petworth, or a family property east of the Anacostia River in Congress Heights, local regulations dictate strict compliance for tenant rights, historic preservation, and tax assessments.
              </p>
              <h3 className="font-display text-xl text-pine-950 font-bold pt-1">
                TOPA (Tenant Opportunity to Purchase Act) Compliance
              </h3>
              <p>
                Under DC Code § 42-3404.02, tenants in residential rental properties possess statutory rights of first refusal when an owner intends to sell. While single-family accommodations now enjoy a streamlined exemption process following recent legislative amendments, multi-family and 2-to-4 unit properties require formal Offers of Sale, notice delivery to the DC Department of Housing and Community Development (DHCD), and mandatory negotiation periods ranging from 45 to 120 days.
              </p>
              <p>
                Attempting an MLS listing with existing tenants often collapses because retail buyers cannot wait out the statutory TOPA timeline. USHomeBuy has closed dozens of TOPA-affected transactions across all eight wards. We coordinate directly with DHCD, structure fair tenant buyout agreements where appropriate, and handle the formal statutory notices so you never risk unlawful transfer penalties.
              </p>
              <h3 className="font-display text-xl text-pine-950 font-bold pt-1">
                DC Superior Court Probate &amp; Tangled Titles
              </h3>
              <p>
                Heirs&apos; property and tangled titles represent significant hurdles in Ward 7 and Ward 8. When property passes through generations without formal probate administration, the legal deed cannot transfer until the DC Superior Court Probate Division (located at 515 5th Street NW) opens the estate and issues Letters of Administration. Our legal and title specialists regularly facilitate probate filings, clear Medicaid estate recovery liens, and fund necessary estate legal fees directly out of settlement proceeds.
              </p>
              <h3 className="font-display text-xl text-pine-950 font-bold pt-1">
                Historic Preservation Review Board (HPRB) &amp; Vacant Tax Rates
              </h3>
              <p>
                Much of historic DC sits under the jurisdiction of the Historic Preservation Review Board. Exterior alterations, window replacements, and brick repointing require specialized historic permits. Retail buyers often demand tens of thousands in repair concessions when historic citations exist. Furthermore, DC assesses Class 3 vacant properties at $5.00 per $100 and Class 4 blighted buildings at $10.00 per $100 of assessed value (compared to the standard Class 1 residential rate of $0.85). Selling directly to USHomeBuy stops these punitive tax rates and transfers all municipal compliance duties to our team upon closing.
              </p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4 pt-2">
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">TOPA Specialists</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    Seamless navigation of DHCD notices, single-family exemptions, and tenant buyout agreements across all wards.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">DC Probate Division</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    Resolving tangled titles, heirs&apos; property, and court Letters of Administration without out-of-pocket costs.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">Vacant Tax Halts</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    Immediate relief from Class 3 and Class 4 punitive property tax rates on vacant or distressed DC rowhouses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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

      {state.slug === "maryland" && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
          <div className="rounded-3xl bg-sand-50/90 ring-1 ring-pine-900/10 p-6 sm:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-pine-600 font-bold">
              Statewide Real Estate Spotlight
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-pine-950 font-bold">
              Maryland Real Estate Guide: Ground Rent, Circuit Court Foreclosure Mediation &amp; County Taxes
            </h2>
            <div className="mt-6 space-y-5 text-pine-800/85 text-sm sm:text-base leading-relaxed">
              <p>
                Maryland real estate transactions encompass unique regional legal complexities. From historical ground rent encumbrances on tens of thousands of Baltimore properties to judicial foreclosure mediation and substantial county-level recordation taxes, navigating a home sale requires seasoned expertise.
              </p>
              <h3 className="font-display text-xl text-pine-950 font-bold pt-1">
                Baltimore Ground Rent Redemption (SDAT)
              </h3>
              <p>
                In Baltimore City and Baltimore County, many older rowhomes and detached houses remain subject to colonial-era ground rent leases. When ground rent is unredeemed or unregistered with the State Department of Assessments and Taxation (SDAT), conventional mortgage lenders will refuse to issue financing. We purchase ground-rent properties routinely and handle statutory redemption directly through SDAT at settlement, absorbing the legal costs ourselves.
              </p>
              <h3 className="font-display text-xl text-pine-950 font-bold pt-1">
                Maryland Foreclosure Protections: Order to Docket &amp; Mediation
              </h3>
              <p>
                Under Maryland law, lenders cannot initiate foreclosure until a mortgage is at least 120 days delinquent. The lender must file an Order to Docket in the Circuit Court and offer formal pre-file mediation. This structured judicial framework gives homeowners a vital window of opportunity to sell the property for cash, pay off the loan balance in full, protect their credit rating, and walk away with their remaining equity before an auction is scheduled.
              </p>
              <h3 className="font-display text-xl text-pine-950 font-bold pt-1">
                County Transfer Taxes &amp; Rental Licensing
              </h3>
              <p>
                Transfer and recordation tax rates vary sharply across Maryland counties, from Montgomery and Prince George&apos;s to Baltimore City and Anne Arundel. In addition, jurisdictions require strict rental licenses and lead-paint certifications under the Maryland Department of the Environment (MDE). USHomeBuy covers standard seller transfer and recordation taxes, and we buy tenant-occupied properties without requiring prior municipal rental inspections.
              </p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4 pt-2">
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">Ground Rent Cleared</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    We manage the complete SDAT redemption process for Baltimore City and County ground rents.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">Circuit Court Mediation</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    Stopping foreclosure clocks and paying off mortgages in full before auction dates.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">Taxes Paid by Us</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    We cover standard Maryland state and county transfer taxes and settlement fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {state.slug === "virginia" && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
          <div className="rounded-3xl bg-sand-50/90 ring-1 ring-pine-900/10 p-6 sm:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-pine-600 font-bold">
              Commonwealth Real Estate Spotlight
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-pine-950 font-bold">
              Virginia Real Estate Guide: Non-Judicial Foreclosure, Military PCS Orders &amp; HOA Liens
            </h2>
            <div className="mt-6 space-y-5 text-pine-800/85 text-sm sm:text-base leading-relaxed">
              <p>
                Real estate in the Commonwealth of Virginia operates under non-judicial foreclosure rules, meaning transactions move far more rapidly than in neighboring states. Whether you are dealing with military orders in Hampton Roads or an inherited home in Northern Virginia, speed and certainty are paramount.
              </p>
              <h3 className="font-display text-xl text-pine-950 font-bold pt-1">
                Virginia Non-Judicial Foreclosure: Trustee Sales
              </h3>
              <p>
                Because Virginia mortgages are executed via Deeds of Trust, lenders do not have to sue in court to foreclose. A trustee&apos;s sale can be scheduled after as few as 60 to 90 days of default, requiring only 14 days of published public notice. Homeowners facing an auction notice have very little time to market through an agent. USHomeBuy regularly closes transactions in as few as 7 to 10 days, satisfying the trustee and preserving seller equity before the foreclosure sale occurs.
              </p>
              <h3 className="font-display text-xl text-pine-950 font-bold pt-1">
                Military Relocations &amp; PCS Timelines
              </h3>
              <p>
                Virginia is home to premier military installations, including Naval Station Norfolk, the Pentagon, Fort Belvoir, and Marine Corps Base Quantico. Service members receiving sudden Permanent Change of Station (PCS) orders or deployments cannot afford to wait six months for an open-market sale or risk paying double housing expenses. We work around military orders, close on your target departure date, and ensure prompt VA loan payoff so your full entitlement is restored for your next assignment.
              </p>
              <h3 className="font-display text-xl text-pine-950 font-bold pt-1">
                HOA Liens &amp; Coastal Flood Zone Considerations
              </h3>
              <p>
                Northern Virginia planned communities often feature strict HOA covenants where unpaid assessments escalate into recorded liens that derail conventional sales. Meanwhile, coastal properties in Virginia Beach and Norfolk confront escalating flood insurance requirements that cause bank mortgage applications to collapse. Our direct cash purchases require no lender flood certifications or HOA repair sign-offs.
              </p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4 pt-2">
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">Trustee Sale Stops</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    Fast cash payoffs that halt Virginia non-judicial trustee auctions in 7 to 10 days.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">Military PCS Flexible</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    Closing dates aligned to deployment orders and prompt restoration of VA loan entitlement.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                  <h4 className="font-bold text-pine-950 text-sm">No Flood Insurance Rules</h4>
                  <p className="mt-1 text-xs text-pine-800/80">
                    We underwrite coastal properties directly without bank flood certification hurdles.
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
          <h2 className="font-display text-2xl sm:text-3xl text-pine-950 font-bold">
            Everything You Need to Know About Selling a House For Cash in {state.name}
          </h2>
          <div className="mt-6 space-y-5 text-pine-800/85 text-sm sm:text-base leading-relaxed">
            <p>
              Selling real estate in {state.name} can feel overwhelming when dealing with inherited estates, expensive repair estimates, divorce, or problem tenants. Selling directly to an established cash home buyer gives you speed, financial certainty, and peace of mind. Here is what you need to know about the legal, financial, and procedural mechanics of an as-is sale.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Sell 100% As-Is With Zero Disclosure Stress
            </h3>
            <p>
              In a traditional real estate transaction, sellers must complete exhaustive residential property disclosure forms. You are legally required to disclose every known past and present defect with the roof, foundation, plumbing, HVAC, electrical wiring, and environmental conditions. If an unforeseen problem surfaces after closing, buyers frequently threaten or file costly post-closing lawsuits.
            </p>
            <p>
              USHomeBuy purchases your property completely as-is with no warranties required. We conduct our own thorough inspection during a single 15-minute walkthrough. You never spend a dime on repairs, painting, cleaning, or staging, and you walk away with zero future liability.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              We Cover Standard Title &amp; Closing Costs in {state.name}
            </h3>
            <p>
              In conventional sales, closing costs significantly reduce your final payout. Sellers across {state.name} are typically responsible for deed preparation fees, title examination, municipal lien search fees, and state/county transfer taxes. Combined with 5% to 6% realtor commissions, these expenses often devour 8% to 10% of the gross sale price.
            </p>
            <p>
              USHomeBuy covers all standard closing expenses for you. The net cash figure specified on your written purchase agreement is the exact amount wired into your bank account on closing day. There are no hidden fees or surprise deductions.
            </p>
            <h3 className="font-display text-xl text-pine-950 font-bold pt-2">
              Direct Cash Buyers vs. Wholesalers &amp; Middlemen
            </h3>
            <p>
              Many &quot;we buy houses&quot; solicitations come from unlicensed wholesalers who do not have the funds to buy your property. Instead, they tie up your home under a speculative contract and spend 30 to 60 days trying to assign that contract to a third party for an assignment fee. If they cannot find an investor to take over the deal, they invoke arbitrary inspection clauses to cancel the contract at the last minute.
            </p>
            <p>
              USHomeBuy is a direct cash buyer. We deploy our own private capital, deposit real earnest money with trusted local title companies, and close on schedule every time.
            </p>
          </div>
        </div>
      </section>

      {/* State FAQ Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Frequently asked questions about selling a house in {state.name}
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
