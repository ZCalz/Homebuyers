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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "147",
      reviewCount: "147",
    },
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "147",
      reviewCount: "147",
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

export function productSchema(name?: string, description?: string, url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url || SITE.url}/#product`,
    name: name || `${SITE.name} Cash Home Buying Service`,
    description:
      description ||
      "Direct as-is cash home buying service across Washington DC, Maryland, Virginia, and Delaware with zero fees, no realtor commissions, and flexible closing dates.",
    image: `${SITE.url}/images/USHomeBuyLogo.png`,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "147",
      reviewCount: "147",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "50000",
      highPrice: "2500000",
      offerCount: "150",
      priceValidUntil: "2027-12-31",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Diane K.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "They made the process of selling our home easy and quick. They treated our family with respect and compassion.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Theo B.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Fast, fair, and no pressure. I had a cash offer in two days and closed in three weeks, exactly like they said.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Renee P.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "I was facing an auction date and they closed in fifteen days. I kept my equity instead of losing the house.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Wanda M.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "No repairs, no showings, no stress. They walked the house once and the offer never changed.",
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

