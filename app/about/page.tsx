import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Local Cash Home Buyers | Meet Our DMV & DE Team",
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
          Built for one region, staffed like it
        </h1>
        <div className="mt-5 max-w-3xl space-y-4 text-lg text-pine-800/85 leading-relaxed">
          <p>
            National home-buying brands treat the Chesapeake region as one
            market. It isn&apos;t. A rowhouse in Baltimore with a colonial-era
            ground rent, a tenanted condo in DC subject to TOPA, a Norfolk
            bungalow in a flood zone, and a Sussex County farmhouse on a
            failing septic system are four completely different transactions —
            and pricing them from a call center in another time zone is how
            sellers get lowballed.
          </p>
          <p>
            So we organized the company the other way around: four states,
            four dedicated acquisition teams, each responsible for knowing its
            territory&apos;s regulations, housing stock, and closing quirks.
            The person who walks your property is the person whose name is on
            the offer.
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

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand />
      </section>
    </>
  );
}
