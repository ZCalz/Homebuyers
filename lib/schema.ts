import { SITE } from "@/lib/data";
import type { City, StateData } from "@/lib/data/types";

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/USHomeBuyLogo.png`,
    image: `${SITE.url}/images/USHomeBuyLogo.png`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1300 I St NW",
      addressLocality: "Washington",
      addressRegion: "DC",
      postalCode: "20005",
      addressCountry: "US",
    },
    description:
      "Direct cash home buyers serving Washington DC, Maryland, Virginia, and Delaware. As-is purchases with no commissions or repair requests.",
    areaServed: [
      { "@type": "State", name: "Maryland" },
      { "@type": "State", name: "Virginia" },
      { "@type": "State", name: "Delaware" },
      { "@type": "AdministrativeArea", name: "Washington, DC" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };
}

export function localBusinessSchema(state: StateData, city?: City) {
  const name = city
    ? `${SITE.name} — ${city.name}, ${state.abbr}`
    : `${SITE.name} — ${state.name}`;
  const url = city
    ? `${SITE.url}/${state.slug}/${city.slug}`
    : `${SITE.url}/${state.slug}`;
  const addressLocality = city ? city.name : state.cities[0].name;
  const postalCode = city ? city.zips[0] : state.cities[0].zips[0];
  const description = city
    ? `Sell your house fast for cash in ${city.name}, ${state.abbr}. We buy homes as-is in ${city.county} County with zero fees and no repairs.`
    : `We buy houses for cash across ${state.name}. As-is home purchases with no realtor commissions or repair requests.`;

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${url}#realestateagent`,
    name,
    url,
    telephone: state.phone,
    email: SITE.email,
    image: `${SITE.url}/images/USHomeBuyLogo.png`,
    priceRange: "$$$$",
    description,
    parentOrganization: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/images/USHomeBuyLogo.png`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressRegion: state.abbr,
      postalCode,
      addressCountry: "US",
    },
    areaServed: city
      ? {
          "@type": "City",
          name: city.name,
        }
      : {
          "@type": "State",
          name: state.name,
        },
    ...(city && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.lat,
        longitude: city.lng,
      },
    }),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
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

