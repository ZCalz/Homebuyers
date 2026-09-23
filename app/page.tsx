import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import GoogleReviews from "@/components/GoogleReviews";
import ProcessSteps from "@/components/ProcessSteps";
import TrustBar from "@/components/TrustBar";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { orgSchema } from "@/lib/schema";
import { SITE, states } from "@/lib/data";
import { situations } from "@/lib/data/situations";

export const metadata: Metadata = {
  title: "Sell My House Fast For Cash Near Me | As-Is",
  description:
    "Need to sell your house fast for cash near you? We buy homes as-is in DC, Maryland, Virginia & Delaware with zero fees, no repairs, and fast closing dates.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={orgSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-pine-100),_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-pine-600 font-semibold">
                Serving DC · Maryland · Virginia · Delaware
              </p>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-pine-950">
                Sell My House Fast For Cash | Local Cash Home Buyers — We Buy Houses As-Is
              </h1>
              <p className="mt-3 text-sm sm:text-base text-pine-800 leading-relaxed">
                When you need to <strong>sell your house fast for cash</strong> or work with reputable <strong>companies that buy homes as is</strong>, USHomeBuy provides fair balance-sheet cash offers across Washington DC, Maryland, Virginia, and Delaware. <strong>We buy homes in any condition</strong> with zero realtor commissions, zero fees, and closings on your exact timeline.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["No repairs", "No commissions", "You pick the closing date"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-pine-100 px-3.5 py-1.5 text-xs font-semibold text-pine-800"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 -mt-4">
        <TrustBar />
      </section>

      {/* Landing image */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-14">
        <figure className="relative overflow-hidden rounded-3xl ring-1 ring-pine-900/10">
          <Image
            src="/images/hero-family.png"
            alt="A smiling couple in front of their home, their young son laughing on his father's shoulders"
            width={1536}
            height={1024}
            priority
            className="w-full h-auto object-cover max-h-[520px]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-950/80 to-transparent px-6 pt-16 pb-5 sm:px-8">
            <p className="font-display text-lg sm:text-2xl text-sand-50 max-w-2xl">
              A sale should end with your family moving forward — not with
              months of repairs, showings, and second-guessing.
            </p>
          </figcaption>
        </figure>
      </section>

      {/* Google reviews */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-14">
        <h2 className="font-display text-3xl text-pine-950 text-center">
          What sellers are saying
        </h2>
        <div className="mt-8">
          <GoogleReviews />
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-pine-950">
            Three steps. No surprises at the settlement table.
          </h2>
          <p className="mt-3 text-pine-800/80">
            Every offer we make is built to survive scrutiny — from you, your
            attorney, or anyone else you want to run it past.
          </p>
        </div>
        <div className="mt-8">
          <ProcessSteps />
        </div>
        <div className="mt-6">
          <Link
            href="/how-it-works"
            className="text-sm font-semibold text-pine-700 hover:text-pine-600 underline underline-offset-4"
          >
            See the full process, including how we price offers →
          </Link>
        </div>
      </section>

      {/* Where we buy */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <h2 className="font-display text-3xl text-pine-950">
          Local buyers, not a national call center
        </h2>
        <p className="mt-3 text-pine-800/80 max-w-2xl">
          Every market in our footprint has its own rules — DC&apos;s tenant
          purchase rights, Baltimore&apos;s ground rents, Virginia&apos;s fast
          foreclosure clock, Delaware&apos;s septic inspections. Our teams work
          one region each, so they know yours.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {states.map((st) => (
            <Link
              key={st.slug}
              href={`/${st.slug}`}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-pine-900/10 hover:ring-pine-500/50 transition-all hover:shadow-lg hover:shadow-pine-900/5"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={st.image}
                  alt={st.imageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-3 rounded-full bg-sand-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pine-800">
                  {st.cities.length} markets
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-pine-950 group-hover:text-pine-700">
                  {st.name}
                </h3>
                <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
                  {st.heroBlurb}
                </p>
                <p className="mt-4 text-xs text-pine-600">
                  {st.cities.map((c) => c.name).join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Situations */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <h2 className="font-display text-3xl text-pine-950">
          Whatever&apos;s behind the sale, we&apos;ve closed one like it
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {situations.map((s) => (
            <Link
              key={s.slug}
              href={`/situations/${s.slug}`}
              className="rounded-xl bg-white ring-1 ring-pine-900/10 hover:ring-pine-500/50 px-5 py-4 transition-all"
            >
              <p className="font-semibold text-pine-900">{s.shortTitle}</p>
              <p className="mt-1 text-xs text-pine-700/70 leading-relaxed line-clamp-2">
                {s.lede}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-pine-950">
            Compare selling directly to USHomeBuy vs. listing with a realtor
          </h2>
          <p className="mt-3 text-pine-800/80 leading-relaxed">
            Listing on the MLS works well for fully renovated homes in pristine condition whose owners have months to spare. If you want speed, privacy, and zero out-of-pocket expenses, see how a direct cash sale compares.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-8">
            <h3 className="font-display text-xl text-pine-950 font-bold">Traditional MLS Listing</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-pine-800/80">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>6% Realtor Commissions:</strong> Averages $24,000 on a $400,000 property deducted at closing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Seller Closing Costs:</strong> 2% to 3% in title, settlement, and transfer taxes paid by the seller.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Mandatory Repair Credits:</strong> Buyers demand expensive roof, HVAC, or structural repairs after inspections.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>60 to 90+ Days Waiting:</strong> Continuous mortgage payments, insurance, and utilities while waiting for a buyer.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                <span><strong>Financing Risk:</strong> Up to 20% of retail mortgage approvals fall through before settlement.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-pine-950 text-sand-50 p-6 sm:p-8 ring-2 ring-pine-800 shadow-xl">
            <h3 className="font-display text-xl text-sand-50 font-bold">Selling to USHomeBuy</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-sand-100/85">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Zero Commissions:</strong> No agent commissions, broker fees, or listing expenses whatsoever.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>100% Closing Costs Covered:</strong> We pay standard title search, settlement attorney, and recording fees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Strictly 100% As-Is:</strong> No repairs, cleaning, painting, or contractor estimates. Take what you want and leave the rest.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Close in 7 to 14 Days:</strong> Guaranteed closing date of your choice with verified private capital funds.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                <span><strong>Zero Financing Contingencies:</strong> Reliable cash transaction with no appraisal or mortgage underwriting delays.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Homepage FAQ Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <h2 className="font-display text-3xl text-pine-950">
          Frequently asked questions about selling for cash
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-semibold text-pine-950">How quickly can I get an offer on my house?</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              Once you submit your property address, our local acquisitions specialist reviews neighborhood comps and conducts a brief walkthrough. You typically receive a written cash offer within 24 to 48 hours.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-semibold text-pine-950">Do I have to pay any closing fees or agent commissions?</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              None at all. We are direct property buyers, not listing brokers. There are zero real estate commissions, and USHomeBuy covers standard seller closing costs, title search, and deed recording fees.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-semibold text-pine-950">What if my property requires major repairs or has trash left inside?</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              We purchase properties strictly 100% as-is. Whether your home needs a new roof, has foundation damage, or has unwanted furniture and personal belongings, you do not have to clean or fix anything.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6">
            <h3 className="font-semibold text-pine-950">How do you calculate your cash offer price?</h3>
            <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
              We start with the after-repair market value (ARV) based on recent sales of renovated homes nearby, deduct the realistic contractor budget required to update the home, and subtract our standard operating margin.
            </p>
          </div>
        </div>
      </section>

      {/* Informative Guide: Why Sell to Cash Home Buyers */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <div className="rounded-3xl bg-pine-950 text-sand-50 p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl text-sand-50 max-w-2xl">
            Why Homeowners Choose Companies That Buy Houses For Cash
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8 text-sm sm:text-base text-sand-100/85 leading-relaxed">
            <div>
              <p>
                When searching for <strong>cash buyers for houses</strong> or exploring how to <strong>sell houses for cash</strong>, homeowners are usually looking to avoid the delays and uncertainties of the traditional retail market. In an open market listing, a buyer’s mortgage lender requires strict home appraisals, radon checks, termite certifications, and lead paint disclosures. If repairs exceed minor cosmetic fixes, loan officers can cancel the buyer’s financing days before closing.
              </p>
              <p className="mt-4">
                At USHomeBuy, <strong>we buy homes in any condition</strong>. Because we use direct balance-sheet capital, we never ask for repair credits, home warranty fees, or inspection renegotiations. You receive a guaranteed cash sale on your schedule.
              </p>
            </div>
            <div>
              <p>
                Whether you need to <strong>cash buy house</strong> solutions for an inherited probate property, avoid foreclosure auctions, or sell a rental with delinquent tenants, our regional specialists throughout Washington DC, Maryland, Virginia, and Delaware handle every detail.
              </p>
              <p className="mt-4">
                We coordinate directly with established local settlement attorneys and title companies to order municipal lien certificates, prepare deed conveyances, and wire funds directly into your account on the closing day you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <CtaBand />
      </section>
    </>
  );
}
