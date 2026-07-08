import Link from "next/link";
import { SITE } from "@/lib/data";

interface CtaBandProps {
  heading?: string;
  sub?: string;
  phone?: string;
  phoneDisplay?: string;
}

export default function CtaBand({
  heading = "Ready for a number you can actually plan around?",
  sub = "One walkthrough. One transparent offer. A closing date you choose.",
  phone = SITE.phone,
  phoneDisplay = SITE.phoneDisplay,
}: CtaBandProps) {
  return (
    <section className="rounded-3xl bg-pine-900 text-sand-50 px-6 py-12 sm:px-12 text-center">
      <h2 className="font-display text-2xl sm:text-3xl">{heading}</h2>
      <p className="mt-3 text-sand-100/80 max-w-xl mx-auto">{sub}</p>
      <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/get-offer"
          className="rounded-lg bg-clay-500 hover:bg-clay-600 text-white font-semibold px-7 py-3.5 transition-colors"
        >
          Get My Cash Offer
        </Link>
        <a
          href={`tel:${phone}`}
          className="rounded-lg ring-1 ring-sand-100/30 hover:bg-pine-800 font-semibold px-7 py-3.5 transition-colors"
        >
          Call {phoneDisplay}
        </a>
      </div>
    </section>
  );
}
