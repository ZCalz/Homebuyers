import Link from "next/link";
import { states } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-pine-600 font-semibold">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl text-pine-950">
        That page isn&apos;t on the map
      </h1>
      <p className="mt-4 text-pine-800/80">
        But your market probably is. Jump to one of our state pages, or start
        an offer from anywhere.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {states.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            className="rounded-full bg-white ring-1 ring-pine-900/15 hover:ring-pine-500/50 px-4 py-2 text-sm text-pine-800 transition-all"
          >
            {s.name}
          </Link>
        ))}
      </div>
      <Link
        href="/get-offer"
        className="mt-8 inline-block rounded-lg bg-clay-500 hover:bg-clay-600 text-white font-semibold px-6 py-3 transition-colors"
      >
        Get My Offer
      </Link>
    </section>
  );
}
