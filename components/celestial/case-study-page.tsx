import { CelestialCaseStudyLayout } from "@/components/celestial/case-study-layout";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import type { WorkProjectSlug } from "@/lib/work-projects";

export function CelestialCaseStudyPage({ slug }: { slug: WorkProjectSlug }) {
  const data = getCaseStudyBySlug(slug);
  return <CelestialCaseStudyLayout data={data} />;
}
