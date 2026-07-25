import { HOME_CASE_STUDIES, HOME_FEATURED } from "@/lib/home-content";

/** Client/product work in display order (synced with Figma). */
export const WORK_PROJECT_SLUGS = ["akshar-packs", "zapp-wallet"] as const;

/** In-depth case studies in display order. */
export const CASE_STUDY_SLUGS = [
  "apple-tv-plus",
  "google-pay-ai",
  "shopify-analytics",
] as const;

/** Every project with a detail page under /work/[slug]. */
export const ALL_PROJECT_SLUGS = [
  ...WORK_PROJECT_SLUGS,
  ...CASE_STUDY_SLUGS,
] as const;

export type WorkProjectSlug = (typeof ALL_PROJECT_SLUGS)[number];

export function isWorkProjectSlug(slug: string): slug is WorkProjectSlug {
  return (ALL_PROJECT_SLUGS as readonly string[]).includes(slug);
}

export function isProductWorkSlug(
  slug: string,
): slug is (typeof WORK_PROJECT_SLUGS)[number] {
  return (WORK_PROJECT_SLUGS as readonly string[]).includes(slug);
}

export function isCaseStudySlug(
  slug: string,
): slug is (typeof CASE_STUDY_SLUGS)[number] {
  return (CASE_STUDY_SLUGS as readonly string[]).includes(slug);
}

export function getWorkProjectListing(slug: WorkProjectSlug) {
  const featured = [...HOME_FEATURED.projects, ...HOME_CASE_STUDIES.projects].find(
    (p) => p.slug === slug,
  );
  if (!featured) throw new Error(`Missing listing entry for: ${slug}`);
  return featured;
}
