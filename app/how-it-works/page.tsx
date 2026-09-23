import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "How Cash Home Buyers Work | Fair As-Is Offer",
  description:
    "Learn how cash home buyers work: our transparent 4-step as-is buying process across DC, MD, VA & DE. Walkthrough, offer formula, and settlement on your date.",
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
          How selling to us actually works
        </h1>
        <p className="mt-4 text-lg text-pine-800/85 max-w-2xl leading-relaxed">
          Most &quot;we buy houses&quot; companies keep the process vague on
          purpose. We do the opposite — here&apos;s every step, including the
          math behind the offer and the protections you keep along the way.
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

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand />
      </section>
    </>
  );
}
