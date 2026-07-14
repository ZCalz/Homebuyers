import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import ProcessSteps from "@/components/ProcessSteps";
import TrustBar from "@/components/TrustBar";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { orgSchema } from "@/lib/schema";
import { SITE, states } from "@/lib/data";
import { situations } from "@/lib/data/situations";

export const metadata: Metadata = {
  title: `Sell Your House Fast in DC, Maryland, Virginia & Delaware | ${SITE.name}`,
  description:
    "Local cash home buyers for the DMV and Delaware. Sell as-is with no repairs, no commissions, and a closing date you choose. Get a no-obligation offer today.",
};

const regionalTestimonials = [
  {
    quote:
      "The house sat vacant for six years after my father passed. They helped me get the estate opened and still closed faster than the agent who wanted me to renovate first.",
    name: "Marcus T.",
    area: "Congress Heights, Washington DC",
  },
  {
    quote:
      "My rental in Highlandtown had a tenant who stopped paying and a ground rent I'd never dealt with. They handled both and I closed in three weeks.",
    name: "Gerald W.",
    area: "Baltimore, MD",
  },
  {
    quote:
      "The auction was three weeks out when I called. They talked to the trustee, closed in fifteen days, and I walked away with my equity instead of losing it.",
    name: "Sandra L.",
    area: "Dale City, VA",
  },
  {
    quote:
      "Four siblings, one inherited cottage, zero agreement — until a clean cash offer gave us a number we could split and be done.",
    name: "The Callahan Family",
    area: "Lewes, DE",
  },
];

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
                Sell your house as-is — on your timeline.
              </h1>
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

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <h2 className="font-display text-3xl text-pine-950">
          Sellers across four states
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {regionalTestimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6"
            >
              <blockquote className="text-pine-900 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-pine-800">{t.name}</span>
                <span className="text-pine-700/70"> · {t.area}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <CtaBand />
      </section>
    </>
  );
}
