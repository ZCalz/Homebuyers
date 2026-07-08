import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allCityParams, getCity } from "@/lib/data";
import { situations } from "@/lib/data/situations";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { faqSchema, localBusinessSchema } from "@/lib/schema";

interface Params {
  state: string;
  city: string;
}

export function generateStaticParams(): Params[] {
  return allCityParams();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const match = getCity(stateSlug, citySlug);
  if (!match) return {};
  const { state, city } = match;
  return {
    title: `Sell My House Fast in ${city.name}, ${state.abbr} — Cash Offer in 48 Hours`,
    description: `We buy houses in ${city.name}, ${state.abbr} as-is: ${city.neighborhoods
      .slice(0, 3)
      .join(", ")} and nearby. Typical closing ~${city.medianDaysToClose} days. Call ${state.phoneDisplay}.`,
    alternates: { canonical: `/${state.slug}/${city.slug}` },
  };
}

function cityFaq(cityName: string, abbr: string, days: number) {
  return [
    {
      q: `How fast can you close on a house in ${cityName}?`,
      a: `Our median closing in the ${cityName} market is about ${days} days from signed contract. If you need longer — for probate, a move, or an estate — we hold the date open at the same price.`,
    },
    {
      q: `Do I need to make repairs before selling my ${cityName}, ${abbr} house?`,
      a: `No. We buy strictly as-is, including houses with structural issues, code violations, or full contents left behind. Our offer already accounts for the work.`,
    },
    {
      q: `Are there fees or commissions when I sell to you?`,
      a: `None. We are the buyer, not an agent, so there is no commission, and we cover standard closing costs. The offer you accept is the amount on your settlement statement, minus any payoff of existing liens.`,
    },
    {
      q: `How do you calculate your offer for a ${cityName} property?`,
      a: `We start with renovated comparable sales in your immediate neighborhood, subtract realistic repair costs from a single walkthrough, and subtract our margin. We show you all three numbers.`,
    },
  ];
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { state: stateSlug, city: citySlug } = await params;
  const match = getCity(stateSlug, citySlug);
  if (!match) notFound();
  const { state, city } = match;
  const faqs = cityFaq(city.name, state.abbr, city.medianDaysToClose);
  const nearbyCities = city.nearby
    .map((slug) => state.cities.find((c) => c.slug === slug))
    .filter((c) => c !== undefined);

  return (
    <>
      <JsonLd data={localBusinessSchema(state, city)} />
      <JsonLd data={faqSchema(faqs)} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs
          items={[
            { name: state.name, url: `/${state.slug}` },
            { name: city.name, url: `/${state.slug}/${city.slug}` },
          ]}
        />
      </div>

      {/* Hero with localized H1 */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-14">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-pine-600 font-semibold">
              {city.county} County · {state.abbr} · Median close ~
              {city.medianDaysToClose} days
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-pine-950">
              Sell your house fast in {city.name}, {state.abbr}
            </h1>
            <p className="mt-5 text-lg text-pine-800/85 leading-relaxed">
              {city.intro}
            </p>
            <p className="mt-4 text-sm text-pine-700">
              We buy throughout {city.neighborhoods.join(", ")}, and the
              surrounding {city.county} County area near {city.landmark}.
            </p>
            <p className="mt-4 text-sm text-pine-700">
              Talk to the local team:{" "}
              <a
                href={`tel:${state.phone}`}
                className="font-semibold text-pine-800 underline underline-offset-4"
              >
                {state.phoneDisplay}
              </a>
            </p>
          </div>
          <LeadForm
            territory={`${city.name}, ${state.abbr}`}
            defaultZip={city.zips[0]}
          />
        </div>
      </section>

      {/* Local expertise block — unique per market */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-pine-100/70 ring-1 ring-pine-300/50 p-6 sm:p-8">
          <h2 className="font-display text-xl text-pine-900">
            What&apos;s different about selling in {city.name}
          </h2>
          <p className="mt-3 text-pine-900/80 leading-relaxed max-w-3xl">
            {city.localAngle}
          </p>
        </div>
      </section>

      {/* Zip coverage + testimonial */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-14 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 sm:p-8">
          <h2 className="font-display text-xl text-pine-950">
            Zip codes we cover in {city.name}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {city.zips.map((z) => (
              <span
                key={z}
                className="rounded-full bg-sand-100 ring-1 ring-sand-300/60 px-3.5 py-1.5 text-sm font-medium text-pine-800"
              >
                {z}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-pine-700/80 leading-relaxed">
            Just outside these zips? We still buy across {city.county} County —
            start the form with your zip and we&apos;ll route you to the right
            buyer.
          </p>
        </div>

        <figure className="rounded-2xl bg-pine-900 text-sand-50 p-6 sm:p-8">
          <blockquote className="text-lg leading-relaxed font-display">
            “{city.testimonial.quote}”
          </blockquote>
          <figcaption className="mt-4 text-sm text-sand-200">
            <span className="font-semibold">{city.testimonial.name}</span> ·{" "}
            {city.testimonial.area}
          </figcaption>
        </figure>
      </section>

      {/* FAQ (matches injected FAQPage schema) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <h2 className="font-display text-3xl text-pine-950">
          Selling a {city.name} house: common questions
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6"
            >
              <h3 className="font-semibold text-pine-950">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-800/80">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links: situations + nearby markets */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-xl text-pine-950">
              Situations we handle in {city.name}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {situations.map((s) => (
                <Link
                  key={s.slug}
                  href={`/situations/${s.slug}`}
                  className="rounded-full bg-white ring-1 ring-pine-900/15 hover:ring-pine-500/50 px-4 py-2 text-sm text-pine-800 transition-all"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>
          {nearbyCities.length > 0 && (
            <div>
              <h2 className="font-display text-xl text-pine-950">
                Nearby markets
              </h2>
              <ul className="mt-4 space-y-2">
                {nearbyCities.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/${state.slug}/${n.slug}`}
                      className="text-sm font-medium text-pine-700 hover:text-pine-600 underline underline-offset-4"
                    >
                      Sell a house in {n.name}, {state.abbr}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`/${state.slug}`}
                    className="text-sm font-medium text-pine-700 hover:text-pine-600 underline underline-offset-4"
                  >
                    All {state.name} markets
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand
          heading={`Get your ${city.name} cash offer`}
          sub={`One walkthrough, a transparent number, and a closing in as little as ${city.medianDaysToClose} days.`}
          phone={state.phone}
          phoneDisplay={state.phoneDisplay}
        />
      </section>
    </>
  );
}
