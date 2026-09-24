import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "USHomeBuy vs Opendoor & Offerpad | Cash Buyer Comparison",
  description:
    "Compare USHomeBuy vs Opendoor, Offerpad, and national iBuyers. See service fees, repair deductions, preliminary vs final offers, and local DMV benefits.",
  alternates: { canonical: "/compare/opendoor-offerpad-alternatives" },
};

const comparisonFaqs = [
  {
    q: "Why do Opendoor preliminary offers differ from final offers?",
    a: "National iBuyers like Opendoor generate automated online preliminary offers using generic algorithmic estimates. Once an in-person or virtual walkthrough is performed, they typically issue repair assessments and service fee adjustments that can reduce your final net proceeds by 5% to 10% or more. In contrast, USHomeBuy conducts a single walkthrough and provides a firm, binding cash offer with zero surprise repair deductions.",
  },
  {
    q: "What fees does Opendoor charge compared to USHomeBuy?",
    a: "Opendoor and Offerpad typically charge a 5% service fee plus estimated repair deductions and standard seller closing costs. USHomeBuy charges 0% in service fees, 0% in agent commissions, and pays all standard seller closing costs on your behalf.",
  },
  {
    q: "Does Opendoor buy houses that need major repairs in DC, Maryland, or Virginia?",
    a: "Generally, no. National iBuyers maintain strict 'buy boxes'—they prefer newer, cookie-cutter single-family homes that require only cosmetic refresh. They routinely reject older rowhouses, properties with foundation or structural issues, fire damage, hoarder conditions, or complicated title situations like probate or DC TOPA tenant rights. USHomeBuy purchases properties in 100% as-is condition regardless of age or physical state.",
  },
  {
    q: "Can an iBuyer cancel their purchase contract before closing?",
    a: "Yes. Many iBuyer contracts contain extensive inspection contingencies that permit them to cancel the contract or demand tens of thousands in repair credits shortly before settlement. USHomeBuy buys with private cash capital—once our contract is signed, our closing is guaranteed.",
  },
];

export default function ComparePage() {
  return (
    <>
      <JsonLd data={faqSchema(comparisonFaqs)} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs
          items={[
            {
              name: "Compare Cash Buyers",
              url: "/compare/opendoor-offerpad-alternatives",
            },
          ]}
        />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-14">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-pine-600 font-bold">
            Competitor Analysis & Honest Comparison
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl text-pine-950 leading-tight">
            USHomeBuy vs Opendoor, Offerpad & National iBuyers
          </h1>
          <p className="mt-4 text-lg text-pine-800/85 leading-relaxed">
            Considering selling your house to an online instant buyer like <strong>Opendoor</strong> or <strong>Offerpad</strong>? Before accepting a preliminary automated estimate, see how fees, repair deductions, contract cancellations, and local market expertise compare.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-lg border border-pine-900/10">
            <thead>
              <tr className="bg-pine-950 text-white">
                <th className="py-5 px-6 font-display text-base font-semibold w-1/4">
                  Feature / Factor
                </th>
                <th className="py-5 px-6 font-display text-lg font-bold bg-clay-500 text-white w-1/4 border-x border-clay-400">
                  USHomeBuy (Local Cash Buyer)
                </th>
                <th className="py-5 px-6 font-display text-base font-semibold w-1/4">
                  Opendoor
                </th>
                <th className="py-5 px-6 font-display text-base font-semibold w-1/4">
                  Offerpad
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pine-900/10 text-sm bg-white">
              {/* Service Fees */}
              <tr className="hover:bg-sand-50/50">
                <td className="py-4 px-6 font-semibold text-pine-950">
                  Service / Transaction Fee
                </td>
                <td className="py-4 px-6 bg-clay-500/5 font-bold text-emerald-700 border-x border-clay-500/20">
                  0% (Zero Fees)
                </td>
                <td className="py-4 px-6 text-pine-800">
                  5% Service Fee
                </td>
                <td className="py-4 px-6 text-pine-800">
                  5% Service Fee
                </td>
              </tr>

              {/* Repair Deductions */}
              <tr className="hover:bg-sand-50/50">
                <td className="py-4 px-6 font-semibold text-pine-950">
                  Repair Deductions After Walkthrough
                </td>
                <td className="py-4 px-6 bg-clay-500/5 font-bold text-emerald-700 border-x border-clay-500/20">
                  $0 (100% As-Is, No Re-Trades)
                </td>
                <td className="py-4 px-6 text-clay-700 font-medium">
                  5%–10% deducted from preliminary offer
                </td>
                <td className="py-4 px-6 text-clay-700 font-medium">
                  Repair credit deducted or requested
                </td>
              </tr>

              {/* Seller Closing Costs */}
              <tr className="hover:bg-sand-50/50">
                <td className="py-4 px-6 font-semibold text-pine-950">
                  Seller Closing Costs & Transfer Taxes
                </td>
                <td className="py-4 px-6 bg-clay-500/5 font-bold text-emerald-700 border-x border-clay-500/20">
                  100% Paid by USHomeBuy
                </td>
                <td className="py-4 px-6 text-pine-800">
                  Seller pays ~1%–3% standard closing costs
                </td>
                <td className="py-4 px-6 text-pine-800">
                  Seller pays ~1%–3% standard closing costs
                </td>
              </tr>

              {/* Acceptable Property Condition */}
              <tr className="hover:bg-sand-50/50">
                <td className="py-4 px-6 font-semibold text-pine-950">
                  Acceptable Property Condition
                </td>
                <td className="py-4 px-6 bg-clay-500/5 font-bold text-pine-950 border-x border-clay-500/20">
                  Any condition: fire damage, structural, probate, clutter, roof leaks
                </td>
                <td className="py-4 px-6 text-pine-800">
                  Strict "buy box" (only newer homes, minor cosmetic wear)
                </td>
                <td className="py-4 px-6 text-pine-800">
                  Strict criteria (rejects homes needing major repairs)
                </td>
              </tr>

              {/* Preliminary vs Final Offer Reality */}
              <tr className="hover:bg-sand-50/50">
                <td className="py-4 px-6 font-semibold text-pine-950">
                  Offer Certainty
                </td>
                <td className="py-4 px-6 bg-clay-500/5 font-bold text-emerald-700 border-x border-clay-500/20">
                  Guaranteed written cash contract
                </td>
                <td className="py-4 px-6 text-pine-800">
                  Preliminary algorithm offer frequently renegotiated
                </td>
                <td className="py-4 px-6 text-pine-800">
                  Subject to home assessment inspection credits
                </td>
              </tr>

              {/* Speed to Close */}
              <tr className="hover:bg-sand-50/50">
                <td className="py-4 px-6 font-semibold text-pine-950">
                  Closing Timeline
                </td>
                <td className="py-4 px-6 bg-clay-500/5 font-bold text-pine-950 border-x border-clay-500/20">
                  7 to 14 days (or your chosen date)
                </td>
                <td className="py-4 px-6 text-pine-800">
                  14 to 60 days
                </td>
                <td className="py-4 px-6 text-pine-800">
                  8 to 90 days
                </td>
              </tr>

              {/* Regional Legal Expertise */}
              <tr className="hover:bg-sand-50/50">
                <td className="py-4 px-6 font-semibold text-pine-950">
                  Local DMV & DE Legal Expertise
                </td>
                <td className="py-4 px-6 bg-clay-500/5 font-bold text-pine-950 border-x border-clay-500/20">
                  Local team handles DC TOPA, MD ground rent, VA trustee foreclosure
                </td>
                <td className="py-4 px-6 text-pine-800">
                  National call centers, struggles with local jurisdictional quirks
                </td>
                <td className="py-4 px-6 text-pine-800">
                  Out-of-market underwriting desks
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Explanatory Sections */}
      <section className="bg-white border-y border-pine-900/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-clay-600 font-bold">
                The iBuyer Reality
              </span>
              <h2 className="mt-2 font-display text-3xl text-pine-950 leading-tight">
                Why National iBuyers Often Cost Homeowners More Than They Expect
              </h2>
              <p className="mt-4 text-pine-800/85 text-base leading-relaxed">
                Companies like Opendoor and Offerpad revolutionized online real estate with instant automated offers. However, the business model relies heavily on corporate fees and post-inspection repair deductions:
              </p>
              <ul className="mt-6 space-y-3 text-sm text-pine-900">
                <li className="flex items-start gap-3">
                  <span className="text-clay-600 font-bold">✕</span>
                  <span><strong>The 5% Service Fee:</strong> That is virtually identical to a full real estate agent commission, eliminating the cost advantage of selling direct.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay-600 font-bold">✕</span>
                  <span><strong>Post-Inspection Slashes:</strong> The preliminary offer looks generous until their inspector visits. Typical repair deductions range from $15,000 to $35,000, deducted directly from your net payout.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay-600 font-bold">✕</span>
                  <span><strong>Rigid Cancellation Clauses:</strong> If market conditions shift or an older house has complex issues, iBuyers can cancel with short notice, leaving you stranded.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-pine-950 text-sand-50 p-8 sm:p-10 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-sand-400 font-semibold">
                The Local Difference
              </span>
              <h3 className="text-2xl sm:text-3xl font-display text-white mt-1">
                Direct, Transparent, Local Cash Purchasing
              </h3>
              <p className="mt-3 text-sm sm:text-base text-sand-200/85 leading-relaxed">
                At USHomeBuy, you work directly with experienced local investors who know Washington DC, Maryland, Virginia, and Delaware inside and out.
              </p>
              <div className="mt-6 space-y-3 text-sm border-t border-sand-800/60 pt-4">
                <p>✓ <strong>Single walkthrough:</strong> No multiple open houses or endless inspection crews.</p>
                <p>✓ <strong>Firm cash offer:</strong> The price we write is the price on the settlement check.</p>
                <p>✓ <strong>Any condition:</strong> From hoarder cleanouts to total gut jobs, you leave behind whatever you don’t want.</p>
              </div>
              <div className="mt-8">
                <Link
                  href="/get-offer"
                  className="block w-full text-center rounded-xl bg-clay-500 hover:bg-clay-600 text-white font-bold py-3.5 px-6 text-base transition-colors"
                >
                  Get Your Fair Cash Offer Today →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-pine-600 font-bold">
            Got Questions?
          </p>
          <h2 className="mt-1 font-display text-3xl text-pine-950">
            Frequently Asked Questions About iBuyer Alternatives
          </h2>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {comparisonFaqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-pine-900/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-base font-bold text-pine-950">
                {faq.q}
              </h3>
              <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Lead Capture */}
      <section className="bg-sand-100/70 border-t border-pine-900/10 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl text-pine-950">
              Skip Corporate iBuyer Fees
            </h2>
            <p className="mt-2 text-pine-800/80 text-sm max-w-xl mx-auto">
              Get an honest, transparent cash offer from a local investment team. Zero service fees, zero repair reductions, and closing on your exact schedule.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
