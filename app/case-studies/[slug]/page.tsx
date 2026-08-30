import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CelestialCaseStudyPage } from "@/components/celestial/case-study-page";
import { getProjectBySlug } from "@/lib/projects";
import { CASE_STUDY_SLUGS, isCaseStudySlug } from "@/lib/work-projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      url: `https://riyadesigns.studio/case-studies/${project.slug}`,
    },
  };
}

export default async function CaseStudyProjectPage({ params }: Props) {
  const { slug } = await params;
  if (!isCaseStudySlug(slug) || !getProjectBySlug(slug)) notFound();

  return <CelestialCaseStudyPage slug={slug} />;
}
