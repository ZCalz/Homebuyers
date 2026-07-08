import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSituation, situations } from "@/lib/data/situations";
import { states } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { faqSchema } from "@/lib/schema";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return situations.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const situation = getSituation(slug);
  if (!situation) return {};
  return {
    title: situation.title,
    description: situation.metaDescription,
    alternates: { canonical: `/situations/${situation.slug}` },
  };
}

export default async function SituationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const situation = getSituation(slug);
  if (!situation) notFound();

  const others = situations.filter((s) => s.slug !== situation.slug);

  return (
    <>
      <JsonLd data={faqSchema(situation.faq)} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs
          items={[
            { name: "Situations", url: "/situations" },
            { name: situation.shortTitle, url: `/situations/${situation.slug}` },
          ]}
        />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-14">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl leading-[1.1] text-pine-950">
              {situation.heading}
            </h1>
            <p className="mt-5 text-lg text-pine-800/85 leading-relaxed">
              {situation.lede}
            </p>

            <div className="mt-10 space-y-8">
              {situation.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="font-display text-2xl text-pine-950">
                    {sec.heading}
                  </h2>
                  <p className="mt-3 text-pine-800/85 leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl text-pine-950">
                Frequently asked
              </h2>
              <div className="mt-5 space-y-4">
                {situation.faq.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-xl bg-white ring-1 ring-pine-900/10 px-5 py-4"
                  >
                    <summary className="cursor-pointer font-semibold text-pine-950 list-none flex justify-between items-center gap-4">
                      {f.q}
                      <span aria-hidden className="text-sand-600 group-open:rotate-45 transition-transform text-xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-pine-800/80">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-xl text-pine-950">
                Where we can help
              </h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {states.map((st) => (
                  <Link
                    key={st.slug}
                    href={`/${st.slug}`}
                    className="rounded-full bg-white ring-1 ring-pine-900/15 hover:ring-pine-500/50 px-4 py-2 text-sm text-pine-800 transition-all"
                  >
                    {st.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 space-y-6">
            <LeadForm compact territory={situation.shortTitle} />
            <div className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-pine-600 font-semibold mb-3">
                Other situations
              </p>
              <ul className="space-y-2">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/situations/${s.slug}`}
                      className="text-sm text-pine-800 hover:text-pine-600"
                    >
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <CtaBand />
      </section>
    </>
  );
}
