import type { MetadataRoute } from "next";
import { SITE, states } from "@/lib/data";
import { situations } from "@/lib/data/situations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/get-offer`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/situations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const statePages: MetadataRoute.Sitemap = states.map((s) => ({
    url: `${SITE.url}/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const cityPages: MetadataRoute.Sitemap = states.flatMap((s) =>
    s.cities.map((c) => ({
      url: `${SITE.url}/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  );

  const situationPages: MetadataRoute.Sitemap = situations.map((s) => ({
    url: `${SITE.url}/situations/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...core, ...statePages, ...cityPages, ...situationPages];
}
