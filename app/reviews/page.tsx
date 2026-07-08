import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { states } from "@/lib/data";

export const metadata: Metadata = {
  title: "Seller Reviews Across DC, Maryland, Virginia & Delaware",
  description:
    "Read what sellers in Washington DC, Baltimore, Arlington, Richmond, Wilmington, and beyond say about selling their houses to us as-is for cash.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "Reviews", url: "/reviews" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <h1 className="font-display text-4xl text-pine-950">
          What sellers say, market by market
        </h1>
        <p className="mt-4 text-lg text-pine-800/85 max-w-2xl leading-relaxed">
          Every review below comes from a specific market we buy in — because
          &quot;great company&quot; means less than &quot;they handled my
          ground rent&quot; or &quot;they closed before my trustee sale.&quot;
        </p>
      </section>

      {states.map((st) => (
        <section key={st.slug} className="mx-auto max-w-6xl px-4 sm:px-6 mt-14">
          <h2 className="font-display text-2xl text-pine-950 border-b border-pine-900/10 pb-3">
            {st.name}
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {st.cities.map((c) => (
              <figure
                key={c.slug}
                className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6"
              >
                <blockquote className="text-pine-900 leading-relaxed">
                  “{c.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-pine-800">
                    {c.testimonial.name}
                  </span>
                  <span className="text-pine-700/70">
                    {" "}
                    · {c.testimonial.area}, {c.name}, {st.abbr}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <CtaBand heading="Add your street to this page" sub="Start with your zip code — a local buyer will call you back today." />
      </section>
    </>
  );
}
