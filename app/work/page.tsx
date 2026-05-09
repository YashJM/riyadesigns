import type { Metadata } from "next";
import { FigmaPinkDivider } from "@/components/figma-pink-divider";
import { ProjectCard } from "@/components/project-card";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product and UX design case studies by Riya Patel.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />
      <section className="figma-gradient">
        <div className="figma-shell pb-[var(--space-page-hero-bottom)] pt-[var(--space-hero-pad-top)]">
          <h1 className="text-[clamp(32px,9vw,56px)] font-extrabold">Work</h1>
          <p className="mt-4 max-w-[980px] text-[clamp(16px,4.2vw,24px)] leading-[1.4]">
            A collection of product strategy and UX design case studies with process, insights, and measurable outcomes.
          </p>
        </div>
      </section>
      <div className="figma-shell pb-[var(--space-content-pad-bottom)] pt-[var(--space-content-pad-top)]">
        <div className="flex flex-col gap-[var(--space-stack-gap)]">
          {projects.flatMap((project, index) => {
            const nodes = [
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                summary={project.tagline}
                accent={project.accent}
                thumbnail={project.thumbnail}
              />,
            ];
            if (index < projects.length - 1) {
              nodes.push(<FigmaPinkDivider key={`${project.slug}-div`} />);
            }
            return nodes;
          })}
        </div>
      </div>
      <FigmaFooter />
    </div>
  );
}
