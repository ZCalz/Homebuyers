import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Get Fair Cash Offer On Your House Fast | No Fees",
  description:
    "Request your no-obligation cash offer today. Answer 4 quick questions and connect directly with a local buyer in your zip code. Zero fees, fast response.",
  alternates: { canonical: "/get-offer" },
};

const reassurance = [
  {
    title: "No obligation, ever",
    body: "The walkthrough and offer are free. Decline it and you'll never hear from us again — we don't do follow-up call campaigns.",
  },
  {
    title: "Your info stays here",
    body: "One local buying team receives your request. We never sell or share leads with other investors.",
  },
  {
    title: "Three-day review window",
    body: "Even after signing, you have three business days to cancel in writing for any reason.",
  },
];

export default function GetOfferPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "Get an Offer", url: "/get-offer" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl leading-[1.1] text-pine-950">
              Four questions. One transparent offer.
            </h1>
            <p className="mt-5 text-lg text-pine-800/85 leading-relaxed">
              Tell us where the property is, what shape it&apos;s in, and
              what&apos;s prompting the sale. The team that covers your zip
              code will call to schedule a single walkthrough — and you&apos;ll
              have a written offer within about 48 hours of the visit.
            </p>
            <div className="mt-8 space-y-4">
              {reassurance.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-0.5 grid place-items-center shrink-0 w-8 h-8 rounded-full bg-pine-100 text-pine-700 font-bold"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-pine-950">{r.title}</p>
                    <p className="text-sm text-pine-800/80 leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-pine-700">
              Rather talk to a person first? Call{" "}
              <a
                href={`tel:${SITE.phone}`}
                className="font-semibold text-pine-800 underline underline-offset-4"
              >
                {SITE.phoneDisplay}
              </a>{" "}
              and we&apos;ll route you to your local team.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* What Happens Next Guide */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <div className="border-t border-pine-900/10 pt-16">
          <h2 className="font-display text-3xl text-pine-950">
            What happens after submitting your property details
          </h2>
          <p className="mt-3 text-pine-800/80 max-w-3xl leading-relaxed">
            We understand that requesting an offer on your home is an important decision. We keep every interaction confidential, pressure-free, and straightforward:
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
              <span className="text-xs font-bold text-pine-600 uppercase tracking-wider">Phase 1</span>
              <h3 className="mt-2 font-display text-lg text-pine-950 font-bold">Local Market Analysis</h3>
              <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
                Your zip code routes to our designated regional acquisition desk in DC, MD, VA, or DE. We examine recent neighborhood comp sales and historical tax assessments.
              </p>
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
              <span className="text-xs font-bold text-pine-600 uppercase tracking-wider">Phase 2</span>
              <h3 className="mt-2 font-display text-lg text-pine-950 font-bold">15-Minute As-Is Walkthrough</h3>
              <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
                We coordinate a quick private visit at your convenience to verify major mechanical systems, roof age, and foundation. You never clean or repair anything beforehand.
              </p>
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
              <span className="text-xs font-bold text-pine-600 uppercase tracking-wider">Phase 3</span>
              <h3 className="mt-2 font-display text-lg text-pine-950 font-bold">Firm Cash Offer &amp; Closing</h3>
              <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
                We present an all-cash agreement with zero financing contingencies. If you accept, you choose the closing date and settlement takes place at an established local title company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
