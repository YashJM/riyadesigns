import type { Metadata } from "next";
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
        <div className="figma-shell pb-[clamp(44px,5vw,56px)] pt-[clamp(88px,9vw,110px)]">
          <h1 className="text-[clamp(40px,4.2vw,56px)] font-extrabold">Work</h1>
          <p className="mt-4 max-w-[980px] text-[clamp(18px,2vw,24px)] leading-[1.4]">
            A collection of product strategy and UX design case studies with process, insights, and measurable outcomes.
          </p>
        </div>
      </section>
      <div className="figma-shell pb-[clamp(56px,6vw,72px)] pt-[clamp(28px,3vw,40px)]">
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              summary={project.tagline}
              accent={project.accent}
            thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </div>
      <FigmaFooter />
    </div>
  );
}
