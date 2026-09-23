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

            {/* Resolution Roadmap */}
            <div className="mt-12 rounded-2xl bg-pine-100/70 ring-1 ring-pine-300/50 p-6 sm:p-8">
              <h2 className="font-display text-2xl text-pine-950">
                Our step-by-step resolution roadmap
              </h2>
              <p className="mt-2 text-sm text-pine-800/80 leading-relaxed">
                Facing complex property hurdles shouldn&apos;t feel overwhelming. Here is how our experienced regional acquisition team navigates the process from start to finish:
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-4 ring-1 ring-pine-900/10">
                  <span className="text-xs font-bold text-pine-600 uppercase tracking-wider">Step 1</span>
                  <p className="mt-1 font-semibold text-pine-950">Confidential Discovery</p>
                  <p className="mt-1 text-xs text-pine-800/80 leading-relaxed">
                    We review the current title status, mortgage balances, tax assessments, or probate filings with complete privacy.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-pine-900/10">
                  <span className="text-xs font-bold text-pine-600 uppercase tracking-wider">Step 2</span>
                  <p className="mt-1 font-semibold text-pine-950">Transparent Math</p>
                  <p className="mt-1 text-xs text-pine-800/80 leading-relaxed">
                    We calculate a transparent cash offer based on neighborhood comparable sales minus estimated repair costs.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-pine-900/10">
                  <span className="text-xs font-bold text-pine-600 uppercase tracking-wider">Step 3</span>
                  <p className="mt-1 font-semibold text-pine-950">Title &amp; Lien Payoff</p>
                  <p className="mt-1 text-xs text-pine-800/80 leading-relaxed">
                    Our local title company works with lenders, attorneys, and county offices to resolve liens and prepare clear deed transfer.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-pine-900/10">
                  <span className="text-xs font-bold text-pine-600 uppercase tracking-wider">Step 4</span>
                  <p className="mt-1 font-semibold text-pine-950">Disbursement &amp; Relief</p>
                  <p className="mt-1 text-xs text-pine-800/80 leading-relaxed">
                    Settlement funds are wired directly to your bank account or paid via cashier&apos;s check on the date you specify.
                  </p>
                </div>
              </div>
            </div>

            {/* Options Comparison Table */}
            <div className="mt-12">
              <h2 className="font-display text-2xl text-pine-950">
                Comparing your options
              </h2>
              <div className="mt-4 rounded-2xl bg-white ring-1 ring-pine-900/10 overflow-hidden shadow-sm">
                <div className="p-5 border-b border-pine-100 bg-sand-50/50">
                  <p className="text-sm font-semibold text-pine-950">Direct Cash Sale vs. Traditional Agent Listing vs. Waiting</p>
                </div>
                <div className="divide-y divide-pine-100 text-sm">
                  <div className="p-4 grid sm:grid-cols-3 gap-2">
                    <span className="font-semibold text-pine-950">Realtor Commissions</span>
                    <span className="text-emerald-700 font-bold">$0 with USHomeBuy</span>
                    <span className="text-rose-700">5%–6% with an agent</span>
                  </div>
                  <div className="p-4 grid sm:grid-cols-3 gap-2 bg-sand-50/30">
                    <span className="font-semibold text-pine-950">Out-of-Pocket Repairs</span>
                    <span className="text-emerald-700 font-bold">$0 (Strictly 100% as-is)</span>
                    <span className="text-rose-700">Thousands required before listing</span>
                  </div>
                  <div className="p-4 grid sm:grid-cols-3 gap-2">
                    <span className="font-semibold text-pine-950">Time to Settlement</span>
                    <span className="text-emerald-700 font-bold">7 to 21 days (You choose)</span>
                    <span className="text-rose-700">60 to 120+ days average</span>
                  </div>
                  <div className="p-4 grid sm:grid-cols-3 gap-2 bg-sand-50/30">
                    <span className="font-semibold text-pine-950">Cleanout &amp; Trash</span>
                    <span className="text-emerald-700 font-bold">Leave anything behind</span>
                    <span className="text-rose-700">Must be fully empty &amp; staged</span>
                  </div>
                </div>
              </div>
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
