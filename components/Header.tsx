import Link from "next/link";
import { SITE } from "@/lib/data";

const nav = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/locations", label: "Where We Buy" },
  { href: "/situations", label: "Situations" },
  { href: "/faq", label: "FAQ" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-sand-50/95 backdrop-blur border-b border-pine-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              aria-hidden
              className="grid place-items-center w-9 h-9 rounded-lg bg-pine-800 text-sand-100 font-display text-lg leading-none"
            >
              C
            </span>
            <span className="font-display text-lg text-pine-950 leading-tight">
              Chesapeake
              <span className="block text-[11px] uppercase tracking-[0.18em] font-body text-pine-600">
                Home Buyers
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-pine-900">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-pine-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden sm:block text-sm font-semibold text-pine-800 hover:text-pine-600"
            >
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/get-offer"
              className="rounded-lg bg-clay-500 hover:bg-clay-600 text-white text-sm font-semibold px-4 py-2.5 transition-colors"
            >
              Get My Offer
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
