import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

interface Crumb {
  name: string;
  url: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", url: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="text-xs text-pine-700/80">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => (
            <li key={c.url} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden>/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="font-medium text-pine-900">
                  {c.name}
                </span>
              ) : (
                <Link href={c.url} className="hover:text-pine-600 underline-offset-2 hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
