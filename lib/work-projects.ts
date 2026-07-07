import { HOME_FEATURED } from "@/lib/home-content";

/** Active portfolio projects in display order (synced with Figma). */
export const WORK_PROJECT_SLUGS = [
  "apple-tv-plus",
  "akshar-packs",
  "google-pay-ai",
  "zapp-wallet",
  "shopify-analytics",
] as const;

export type WorkProjectSlug = (typeof WORK_PROJECT_SLUGS)[number];

export function isWorkProjectSlug(slug: string): slug is WorkProjectSlug {
  return (WORK_PROJECT_SLUGS as readonly string[]).includes(slug);
}

export function getWorkProjectListing(slug: WorkProjectSlug) {
  const featured = HOME_FEATURED.projects.find((p) => p.slug === slug);
  if (!featured) throw new Error(`Missing HOME_FEATURED entry for: ${slug}`);
  return featured;
}
