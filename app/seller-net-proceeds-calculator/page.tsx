import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SellerProceedsCalculator from "@/components/SellerProceedsCalculator";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Seller Net Proceeds Calculator | House Sale Profit Calculator",
  description:
    "Free home sale net proceeds calculator. Calculate your exact walkaway cash selling traditional vs direct cash buyer in DC, MD, VA & DE. Zero hidden fees.",
  alternates: { canonical: "/seller-net-proceeds-calculator" },
};

const calculatorFaqs = [
  {
    q: "How are seller net proceeds calculated?",
    a: "Seller net proceeds represent the actual cash you walk away with after all deductions. The formula is: Final Sale Price minus Mortgage Payoff minus Real Estate Agent Commissions (5%–6%) minus Seller Closing Costs & Transfer Taxes (1.5%–3%) minus Pre-Sale Repair Costs minus Holding Costs during the listing period.",
  },
  {
    q: "How much does a seller realistically pay in closing costs in DC, MD, VA, and DE?",
    a: "Closing fees vary by state: Virginia has state and county recordation taxes (~1%–1.5%); Maryland charges state transfer tax plus local county transfer taxes (often totaling 2%–2.5%); DC levies recordation taxes ranging from 1.1% to 1.45%; and Delaware has a 4% total realty transfer tax split between buyer and seller. When you sell directly to USHomeBuy, we pay all standard closing costs on your behalf.",
  },
  {
    q: "Why is the net walkaway cash between a cash offer and a retail sale so close?",
    a: "While a retail MLS listing may achieve a higher gross offer, the seller typically forfeits 5% to 6% in realtor commissions, 2% to 3% in closing costs, thousands in home inspection repair concessions, and 2 to 4 months of mortgage payments while the home sits on the market. Direct cash buyers eliminate all commissions, closing costs, and repairs, resulting in a net payout that is often surprisingly comparable with zero hassle.",
  },
  {
    q: "Do I have to pay for an appraisal or home inspection when selling for cash?",
    a: "No. When you sell to USHomeBuy, there are no bank appraisals, no lender inspection hurdles, and no renegotiation credits before closing. The number agreed upon in our contract is the net amount disbursed to you at settlement.",
  },
  {
    q: "How fast can I receive cash proceeds after settlement?",
    a: "Cash proceeds are wired directly to your verified bank account by the settlement attorney on closing day, or provided as an official cashier's check.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={faqSchema(calculatorFaqs)} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs
          items={[
            {
              name: "Seller Net Proceeds Calculator",
              url: "/seller-net-proceeds-calculator",
            },
          ]}
        />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-pine-600 font-bold">
            Free Financial Planning Tool
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl text-pine-950 leading-tight">
            Seller Net Proceeds Calculator | House Sale Profit & Walkaway Cash
          </h1>
          <p className="mt-4 text-lg text-pine-800/85 leading-relaxed">
            Wondering how much cash you actually walk away with when selling your home? Use our interactive <strong>house sale calculator</strong> to compare a traditional real estate agent listing against a guaranteed as-is cash sale across DC, Maryland, Virginia, and Delaware.
          </p>
        </div>

        {/* Interactive Calculator Tool */}
        <div className="mt-10">
          <SellerProceedsCalculator />
        </div>
      </section>

      {/* Educational Breakdown & Guide */}
      <section className="bg-white border-y border-pine-900/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl text-pine-950">
              Where Does the Money Go in a Traditional Home Sale?
            </h2>
            <p className="mt-3 text-pine-800/85 leading-relaxed">
              Many homeowners calculate their profit by simply subtracting their mortgage balance from their home’s estimated value. Unfortunately, traditional open-market listings come with steep friction costs that substantially diminish your net proceeds:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="rounded-xl border border-pine-900/10 p-6 bg-sand-50/50">
              <span className="text-2xl font-bold text-clay-600">5% to 6%</span>
              <h3 className="font-display text-lg text-pine-950 font-bold mt-2">
                Realtor Commissions
              </h3>
              <p className="text-sm text-pine-800/80 mt-2 leading-relaxed">
                Listing and buyer agent commissions take a massive bite out of your equity. On a $500,000 home, agent fees alone cost $25,000 to $30,000 at the closing table.
              </p>
            </div>

            <div className="rounded-xl border border-pine-900/10 p-6 bg-sand-50/50">
              <span className="text-2xl font-bold text-clay-600">$10,000 to $35,000+</span>
              <h3 className="font-display text-lg text-pine-950 font-bold mt-2">
                Repairs & Inspection Addendums
              </h3>
              <p className="text-sm text-pine-800/80 mt-2 leading-relaxed">
                Financed buyers demand repairs before settlement: roof patches, HVAC upgrades, painting, and plumbing. Plus, buyers often request price drops after their home inspection.
              </p>
            </div>

            <div className="rounded-xl border border-pine-900/10 p-6 bg-sand-50/50">
              <span className="text-2xl font-bold text-clay-600">60 to 90 Days</span>
              <h3 className="font-display text-lg text-pine-950 font-bold mt-2">
                Carrying Costs & Mortgage
              </h3>
              <p className="text-sm text-pine-800/80 mt-2 leading-relaxed">
                While your house is staged and listed, you must pay mortgage interest, property taxes, home insurance, and utilities each month. If a buyer's financing falls through, the clock resets.
              </p>
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-pine-950 text-sand-50 p-8 sm:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs uppercase tracking-widest text-sand-400 font-semibold">
                  The USHomeBuy Advantage
                </span>
                <h3 className="text-2xl sm:text-3xl font-display text-white mt-1">
                  Keep 100% of Your Cash Offer With Zero Deductions
                </h3>
                <p className="text-sand-200/85 text-sm sm:text-base mt-3 leading-relaxed">
                  When you sell directly to USHomeBuy, the cash amount on your contract is the exact figure paid to you at closing. No surprises, no hidden line items, and no repair credits.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>$0 Real Estate Agent Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>100% Covered Closing Costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Zero Repairs or Cleanout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Close in 7 to 14 Days</span>
                  </div>
                </div>
              </div>
              <div className="lg:border-l lg:border-sand-800/50 lg:pl-8">
                <p className="text-sand-200 font-semibold text-sm">
                  Get a firm written cash offer on your house today:
                </p>
                <Link
                  href="/get-offer"
                  className="mt-4 block w-full text-center rounded-xl bg-clay-500 hover:bg-clay-600 text-white font-bold py-3.5 px-6 text-base transition-colors"
                >
                  Request Your No-Obligation Cash Offer →
                </Link>
                <p className="text-center text-xs text-sand-400 mt-2">
                  Or call directly: <a href="tel:+15712760986" className="text-sand-200 underline font-semibold">(571) 276-0986</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-pine-600 font-bold">
            Frequently Asked Questions
          </p>
          <h2 className="mt-1 font-display text-3xl text-pine-950">
            Net Proceeds & House Sale Calculator FAQs
          </h2>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {calculatorFaqs.map((faq) => (
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

      {/* Embedded Lead Capture Section */}
      <section className="bg-sand-100/70 border-t border-pine-900/10 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl text-pine-950">
              Ready to See Your Real Cash Offer?
            </h2>
            <p className="mt-2 text-pine-800/80 text-sm max-w-xl mx-auto">
              Skip the calculator estimates and get a firm, written as-is cash offer tailored to your property's exact location and condition.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
