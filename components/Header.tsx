import Link from "next/link";
import { SITE } from "@/lib/data";

const nav = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/locations", label: "Where We Buy" },
  { href: "/situations", label: "Situations" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-sand-50/95 backdrop-blur border-b border-pine-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-20">
          <Link href="/" className="relative z-10 flex items-center group">
            <img
              src="/images/USHomeBuyLogo.png"
              alt={`${SITE.name}.com — Your Instant Rebuyer`}
              width={1024}
              height={320}
              className="h-28 sm:h-32 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-base text-pine-900">
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

          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden sm:block text-base font-semibold text-pine-800 hover:text-pine-600"
            >
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/get-offer"
              className="rounded-lg bg-clay-500 hover:bg-clay-600 text-white text-base font-semibold px-5 py-3 transition-colors"
            >
              Get My Offer
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
