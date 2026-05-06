import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { GeorgesCaseStudy } from "@/components/georges-case-study";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
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
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  if (slug === "georges-pizza") {
    return <GeorgesCaseStudy />;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-12 pt-10 md:px-10 md:pt-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
        {project.year}
      </p>
      <h1 className="mt-2 text-4xl font-bold md:text-6xl">{project.title}</h1>
      <p className="mt-4 text-lg leading-8 text-muted">{project.tagline}</p>
      <div
        className="mt-8 h-56 rounded-3xl border border-line md:h-72"
        style={{ background: project.accent }}
      />
      <div className="mt-8 flex flex-wrap gap-2">
        {project.roles.map((role) => (
          <span
            key={role}
            className="rounded-full border border-black/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide"
          >
            {role}
          </span>
        ))}
      </div>
      <article className="prose-content mt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {project.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
