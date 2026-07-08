import { SITE } from "@/lib/data";
import type { City, StateData } from "@/lib/data/types";

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description:
      "Direct cash home buyers serving Washington DC, Maryland, Virginia, and Delaware. As-is purchases with no commissions or repair requests.",
    areaServed: [
      { "@type": "State", name: "Maryland" },
      { "@type": "State", name: "Virginia" },
      { "@type": "State", name: "Delaware" },
      { "@type": "AdministrativeArea", name: "Washington, DC" },
    ],
  };
}

export function localBusinessSchema(state: StateData, city?: City) {
  const name = city
    ? `${SITE.name} — ${city.name}, ${state.abbr}`
    : `${SITE.name} — ${state.name}`;
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name,
    url: city
      ? `${SITE.url}/${state.slug}/${city.slug}`
      : `${SITE.url}/${state.slug}`,
    telephone: state.phone,
    parentOrganization: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: city
      ? {
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "State", name: state.name },
        }
      : { "@type": "State", name: state.name },
    ...(city && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.lat,
        longitude: city.lng,
      },
    }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
