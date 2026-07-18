import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us — Regional Buyers, Local Teams | ${SITE.name}`,
  description:
    "USHomeBuy (US Home Buy) is a direct US home buying company built for the DMV and Delaware, with one dedicated acquisition team per state and a transparent-offer policy.",
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

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand />
      </section>
    </>
  );
}
