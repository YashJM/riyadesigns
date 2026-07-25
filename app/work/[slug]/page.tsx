import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CelestialCaseStudyPage } from "@/components/celestial/case-study-page";
import { getProjectBySlug } from "@/lib/projects";
import { ALL_PROJECT_SLUGS, isWorkProjectSlug } from "@/lib/work-projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ALL_PROJECT_SLUGS.map((slug) => ({ slug }));
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
      url: `https://riyadesigns.studio/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  if (!isWorkProjectSlug(slug) || !getProjectBySlug(slug)) notFound();

  return <CelestialCaseStudyPage slug={slug} />;
}
