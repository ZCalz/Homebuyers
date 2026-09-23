import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "How Cash Home Buyers Work | Fair As-Is Offer",
  description:
    "Learn how cash home buyers work: our 4-step as-is buying process in DC, MD, VA & DE. Free walkthrough, fair offer formula, and closing on your exact date.",
  alternates: { canonical: "/how-it-works" },
};

const offerMath = [
  {
    label: "Renovated value",
    detail:
      "What fully-updated comparable homes in your immediate neighborhood have actually sold for in the last six months. We share the comps.",
  },
  {
    label: "− Repair budget",
    detail:
      "A realistic contractor-priced estimate of the work, from one walkthrough. Not a lowball inflated punch list — a real budget we'd hand our own crews.",
  },
  {
    label: "− Our margin & carrying costs",
    detail:
      "We hold, insure, renovate, and resell the property. Our margin covers that risk and is shown as its own line, not hidden inside the repair number.",
  },
  {
    label: "= Your cash offer",
    detail:
      "The number on the contract is the number at settlement. No inspection re-trades, no financing contingencies, no last-minute credits.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "How It Works", url: "/how-it-works" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <h1 className="font-display text-4xl text-pine-950">
          How Cash Home Buyers Work | Sell Your House Fast For Cash
        </h1>
        <p className="mt-4 text-lg text-pine-800/85 max-w-3xl leading-relaxed">
          Understanding how local cash home buyers operate shouldn&apos;t be a mystery. When you need to sell your house fast for cash or buy homes for cash without realtors, we provide complete transparency: our exact pricing formula, no-commission contract terms, and how companies that buy homes as-is complete closings in as few as 14 days.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-10">
        <ProcessSteps />
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          The offer math, line by line
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-2xl">
          Every offer we present includes these four numbers in writing. If
          another buyer&apos;s total beats ours, take it — a good deal should
          survive comparison.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {offerMath.map((row) => (
            <div key={row.label} className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
              <p className="font-display text-xl text-pine-800">{row.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-pine-800/80">
                {row.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-2xl bg-pine-100/70 ring-1 ring-pine-300/50 p-6 sm:p-8 max-w-3xl">
          <h2 className="font-display text-xl text-pine-900">
            You get a three-business-day review window
          </h2>
          <p className="mt-3 text-pine-900/80 leading-relaxed">
            After you sign, you have three business days to change your mind
            for any reason — run the contract past an attorney, compare other
            offers, or just sleep on it. Cancel in writing within that window
            and the contract is void with nothing owed. We&apos;d rather lose a
            deal than close one a seller regrets.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          What we&apos;re honest about
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-pine-800/85 leading-relaxed">
          <p>
            A direct cash offer is usually below what a fully renovated,
            professionally listed version of your house would fetch. That gap
            pays for speed, certainty, and skipping the repairs, commissions,
            showings, and months of carrying costs a traditional sale requires.
          </p>
          <p>
            For some sellers the listing route nets more and is worth the wait
            — and when that&apos;s true for you, we&apos;ll say so at the
            walkthrough. Our model only works long-term if sellers who chose us
            would choose us again.
          </p>
        </div>
      </section>

      {/* The Closing Process: Contract to Settlement */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          From contract to cash in hand: the title &amp; escrow process
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-3xl leading-relaxed">
          Selling a property involves legal title transfers, municipal lien verifications, and formal deed recording. Here is how our closing attorneys handle every detail on your behalf with zero stress:
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">1. Independent Title Search</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              We send the executed agreement to a reputable local title company or real estate attorney in your county. They conduct a standard title search to verify ownership and uncover any outstanding mortgages, tax liens, or judgments.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">2. Payoff Coordination</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              If you have an active mortgage balance, second loan, or property tax arrears, the title company requests formal payoff statements directly from your lenders. These debts are paid directly out of the sale proceeds at closing.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">3. Settlement &amp; Disbursement</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              On closing day, you sign the deed transfer documents in person or via mobile notary at your kitchen table. Your net cash proceeds are wired directly to your bank account or issued via bank cashier&apos;s check immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Seller Checklist */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-2xl bg-pine-950 text-sand-50 p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl text-sand-50">
            What you need to provide (and what you can completely ignore)
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-bold text-emerald-400 uppercase tracking-wider text-xs">What We Need From You</p>
              <ul className="mt-3 space-y-2.5 text-sand-100/85">
                <li className="flex items-start gap-2">✓ Valid government-issued photo ID (driver&apos;s license or passport)</li>
                <li className="flex items-start gap-2">✓ Mortgage account information (if you have an existing loan balance)</li>
                <li className="flex items-start gap-2">✓ HOA contact information (if applicable to your community)</li>
                <li className="flex items-start gap-2">✓ Your preferred closing date and bank wiring instructions</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-rose-400 uppercase tracking-wider text-xs">What You Can Completely Forget About</p>
              <ul className="mt-3 space-y-2.5 text-sand-100/85">
                <li className="flex items-start gap-2">✕ Zero cleaning, scrubbing, vacuuming, or trash removal</li>
                <li className="flex items-start gap-2">✕ Zero painting, cosmetic touch-ups, or staging furniture</li>
                <li className="flex items-start gap-2">✕ Zero plumbing, electrical, HVAC, or roof repairs</li>
                <li className="flex items-start gap-2">✕ Zero paying for inspections, appraisals, or closing attorney fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Informative Deep-Dive: Cash Buy House vs Listing */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Why Homeowners Choose Companies That Buy Homes As-Is
        </h2>
        <div className="mt-6 max-w-4xl space-y-5 text-pine-800/85 leading-relaxed text-sm sm:text-base">
          <p>
            When homeowners search for <strong>companies that buy houses for cash</strong> or need to <strong>sell houses for cash</strong>, they are usually balancing speed, certainty, and out-of-pocket costs. Traditional MLS listings require deep pockets: modern buyers demand upgraded granite countertops, modern HVAC units, passed municipal occupancy inspections, and pristine staging. If a house requires major structural, roofing, or plumbing overhauls, traditional mortgage lenders will flatly deny loan approval.
          </p>
          <p>
            As direct <strong>cash buyers for houses</strong>, we bypass banks, appraisals, and retail financing contingencies entirely. Because we purchase with internal capital, <strong>we buy homes in any condition</strong> — including storm damage, foundation settlement, code violations, termite damage, and unfinished additions. You do not need to spend thousands fixing up the property or waiting months hoping an open house buyer’s mortgage is approved.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-pine-900/10 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-pine-50 border-b border-pine-900/10 text-pine-950 font-semibold">
              <tr>
                <th className="p-4">Key Factor</th>
                <th className="p-4 text-emerald-800">USHomeBuy Direct Cash Offer</th>
                <th className="p-4 text-pine-700">Traditional Realtor / MLS Listing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pine-900/5 text-pine-800/85">
              <tr>
                <td className="p-4 font-semibold">Realtor Commissions</td>
                <td className="p-4 text-emerald-700 font-medium">0% — Zero commissions or agent fees</td>
                <td className="p-4">5% to 6% of sales price ($20,000–$30,000)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Repairs &amp; Cleanout</td>
                <td className="p-4 text-emerald-700 font-medium">None required — Buy houses in any condition</td>
                <td className="p-4">Required by buyers and mortgage underwriters</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Closing Timeline</td>
                <td className="p-4 text-emerald-700 font-medium">14 to 30 days (You choose the date)</td>
                <td className="p-4">60 to 90+ days after finding an approved buyer</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Financing Contingency</td>
                <td className="p-4 text-emerald-700 font-medium">None — Guaranteed balance-sheet cash</td>
                <td className="p-4">High risk of deal falling through if loan denied</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Closing Costs &amp; Fees</td>
                <td className="p-4 text-emerald-700 font-medium">We pay standard seller closing costs</td>
                <td className="p-4">Seller pays 2% to 4% in title &amp; transfer taxes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand />
      </section>
    </>
  );
}
