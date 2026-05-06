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
      <section className="bg-linear-to-r from-[#ffe8ee] via-[#f6e8f3] to-[#e5e2ef]">
        <div className="mx-auto max-w-[1148px] px-5 pb-14 pt-[110px]">
          <h1 className="text-[56px] font-extrabold">Work</h1>
          <p className="mt-4 max-w-[980px] text-[24px] leading-[1.4]">
            A collection of product strategy and UX design case studies with process, insights, and measurable outcomes.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-[1148px] px-5 pb-16 pt-10">
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              summary={project.tagline}
              accent={project.accent}
            />
          ))}
        </div>
      </div>
      <FigmaFooter />
    </div>
  );
}
