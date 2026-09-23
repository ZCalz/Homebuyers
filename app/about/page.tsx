import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Local Cash Home Buyers | Meet Our Regional Team",
  description:
    "Meet our local cash home buyers serving DC, Maryland, Virginia, and Delaware. Dedicated regional acquisition teams with transparent, zero-commission offers.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Show the math",
    body: "Every offer comes with the renovated value, the repair budget, and our margin in writing. Sellers who can verify a number trust it — and sellers who trust the number refer their neighbors.",
  },
  {
    title: "Know the jurisdiction",
    body: "DC's TOPA, Maryland's ground rents and 120-day foreclosure rule, Virginia's trustee sales, Delaware's septic transfer inspections — each team works one territory and knows its rules cold.",
  },
  {
    title: "Say when listing is better",
    body: "A cash sale trades price for speed and certainty. When the trade doesn't favor you, we say so at the walkthrough and point you to a good local agent instead.",
  },
  {
    title: "Never resell your information",
    body: "Your form submission goes to one local buying team and nowhere else. We are the buyer — not a lead-generation site auctioning your phone number to twelve investors.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "About", url: "/about" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <h1 className="font-display text-4xl text-pine-950">
          Local Cash Home Buyers | Meet USHomeBuy — As-Is House Buyers
        </h1>
        <div className="mt-5 max-w-3xl space-y-4 text-lg text-pine-800/85 leading-relaxed">
          <p>
            When you need reputable <strong>local cash home buyers</strong> who purchase properties as-is across Washington DC, Maryland, Virginia, and Delaware, you deserve direct access to the actual decision-makers. National home-buying franchises treat our diverse Mid-Atlantic region as one monolithic market from distant call centers. We do the exact opposite.
          </p>
          <p>
            As direct <strong>cash buyers for houses</strong>, we maintain dedicated regional acquisition specialists in every market we serve. A historic rowhome in Baltimore with ground rent, a tenanted rental property in Washington DC subject to TOPA, a damaged colonial in Northern Virginia, or a coastal home in Delaware require nuanced legal and local understanding. The local specialist who evaluates your property is the exact person whose signature appears on your purchase agreement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-14">
        <h2 className="font-display text-3xl text-pine-950">How we operate</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
              <h3 className="font-display text-xl text-pine-950">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-800/80">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Footprint Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Our regional footprint across the Mid-Atlantic
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-3xl leading-relaxed">
          Real estate laws, closing customs, and property dynamics change drastically when crossing state and county lines. Our regional team structures ensure local expertise on every deal:
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Washington, DC</h3>
            <p className="mt-2 text-xs text-pine-800/80 leading-relaxed">
              Specialized in historic rowhome restorations, District tenant opportunity to purchase regulations (TOPA), and DC Superior Court probate filings across Northwest, Northeast, Southeast, and Southwest.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Maryland</h3>
            <p className="mt-2 text-xs text-pine-800/80 leading-relaxed">
              Covering Baltimore City rowhomes, colonial ground rent redemptions, 120-day foreclosure delinquency rules, and suburban properties across Prince George&apos;s, Montgomery, and Charles Counties.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Virginia</h3>
            <p className="mt-2 text-xs text-pine-800/80 leading-relaxed">
              Deep expertise in Northern Virginia markets (Arlington, Fairfax), Richmond City revivals, military relocations across Hampton Roads (Norfolk, Virginia Beach), and expedited trustee sale workouts.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">Delaware</h3>
            <p className="mt-2 text-xs text-pine-800/80 leading-relaxed">
              Handling New Castle single-family homes, Kent County estate sales, coastal Sussex County vacation bungalows, manufactured homes on owned land, and Class H septic inspections.
            </p>
          </div>
        </div>
      </section>

      {/* Our Direct Buyer Guarantee */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-2xl bg-pine-100/70 ring-1 ring-pine-300/50 p-6 sm:p-8 max-w-3xl">
          <h2 className="font-display text-2xl text-pine-900">
            Why direct buying beats middleman wholesalers
          </h2>
          <p className="mt-3 text-pine-900/85 text-sm leading-relaxed">
            In today&apos;s market, many online &quot;home buyers&quot; are actually unlicensed wholesalers who tie up your home under contract and attempt to sell the contract to a third party for a fee. If they can&apos;t find an investor, they cancel the deal at the last minute, leaving you stranded.
          </p>
          <p className="mt-3 text-pine-900/85 text-sm leading-relaxed">
            At USHomeBuy, we purchase properties directly with our own verified capital. We sign the purchase agreement as the buyer, hold earnest money in escrow with a reputable local title company, and close on schedule.
          </p>
        </div>
      </section>

      {/* 5-Point Homeowner Bill of Rights */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Our Homeowner Bill of Rights: How Companies That Buy Homes As-Is Should Operate
        </h2>
        <div className="mt-6 max-w-4xl space-y-4 text-pine-800/85 leading-relaxed text-sm sm:text-base">
          <p>
            Selling a property is one of the most significant financial transactions of your life. Whether you are seeking <strong>companies that buy distressed properties</strong>, selling an inherited estate, or looking to <strong>buy home for cash</strong> without agent commissions, here are the standards we hold ourselves to on every transaction:
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">1. Written Valuation Transparency</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              We never give random or deceptive ballpark estimates. Every offer includes actual MLS neighborhood comparable sales, our detailed repair itemization, and our holding cost calculations so you see exactly how your number was derived.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">2. Zero Hidden Fees or Retrading</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Predatory buyers lock houses up under contract, then demand $30,000 price drops days before closing. At USHomeBuy, our single walkthrough sets the price. The cash offer on your contract is the exact amount wired at settlement.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">3. Verifiable Proof of Funds</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Before you sign any purchase agreement, we provide bank statements verifying available liquidity to close. You never have to worry about whether a lender will approve your buyer’s loan or whether an appraisal will come in short.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-display text-lg text-pine-950 font-bold">4. Flexible Timeline On Your Terms</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Need to close in 14 days to stop a foreclosure auction or settle court obligations? We can expedite. Need 60 days to find your next residence, coordinate estate items, or arrange senior living? We schedule closing around your exact life needs.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand />
      </section>
    </>
  );
}
