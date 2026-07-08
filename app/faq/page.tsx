import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about selling your house for cash in DC, Maryland, Virginia, and Delaware: fees, timelines, as-is condition, tenants, probate, and how offers are priced.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Who are you, exactly?",
    a: "We're a regional direct home-buying company with local acquisition teams in Washington DC, Maryland, Virginia, and Delaware. We buy properties with our own funds, renovate them, and resell or rent them. We are the actual buyer — not an agent listing your house, and not a lead reseller shipping your information to strangers.",
  },
  {
    q: "Does it cost anything to get an offer?",
    a: "No. The walkthrough, the offer, and the consultation are free, and there's no obligation at any step. If you accept, we also pay standard closing costs — there are no commissions because there are no agents involved.",
  },
  {
    q: "What kinds of properties do you buy?",
    a: "Single-family houses, rowhomes, townhouses, condos, small multifamily buildings, and manufactured homes on owned land. Condition doesn't matter: vacant, fire-damaged, hoarding situations, code violations, mid-eviction, or perfectly fine but dated.",
  },
  {
    q: "Do I need to clean out the house?",
    a: "No. Take what you want and leave the rest — furniture, appliances, whatever is in the attic. Cleanout is handled by us after closing at our expense.",
  },
  {
    q: "How fast can you actually close?",
    a: "Our regional median is about three weeks from signed contract. The practical minimum is 10–14 days, driven by title work. The maximum is whatever you need — we regularly hold closings open for months while probate completes or a seller finds their next home.",
  },
  {
    q: "Is your offer negotiable?",
    a: "Yes. Our first number is built from comps, repair costs, and margin — and we show all three. If you have information that changes the math (a newer roof, a recent HVAC), tell us and we'll rerun it.",
  },
  {
    q: "Will your offer match what an agent says my house is worth?",
    a: "Usually not, and it's important to understand why. An agent quotes the price of your house renovated, staged, and marketed for months. We quote a price for the house today, as it stands, with a guaranteed close. For some sellers the listing route nets more; when we think that's you, we'll say so.",
  },
  {
    q: "My house has tenants. Can I still sell?",
    a: "Yes — this is one of our specialties. In DC that involves the TOPA process, which we handle regularly. In Maryland, Virginia, and Delaware, leases generally transfer with the property, and we take over as landlord at settlement.",
  },
  {
    q: "I'm behind on my mortgage. Is it too late?",
    a: "It depends on your state's timeline. Virginia moves fastest — if you have a trustee sale date, call today. Maryland, Delaware, and DC processes run through courts or mediation and usually leave more runway. Either way, a closed sale pays the loan off and stops the foreclosure.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Your zip code routes your request to the local team that covers your market. They'll call to ask a few questions and schedule a walkthrough — usually within one business day. You'll typically have a written offer within 48 hours of the visit.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />
      </div>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
        <h1 className="font-display text-4xl text-pine-950">
          Questions sellers actually ask
        </h1>
        <p className="mt-4 text-lg text-pine-800/85 leading-relaxed">
          Straight answers, including the ones that don&apos;t flatter us.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl bg-white ring-1 ring-pine-900/10 px-5 py-4"
            >
              <summary className="cursor-pointer font-semibold text-pine-950 list-none flex justify-between items-center gap-4">
                {f.q}
                <span
                  aria-hidden
                  className="text-sand-600 group-open:rotate-45 transition-transform text-xl leading-none"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-pine-800/80">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand />
      </section>
    </>
  );
}
