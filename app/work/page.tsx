import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product and UX design case studies by Riya Patel.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10 md:px-10 md:pt-16">
      <h1 className="text-4xl font-bold md:text-6xl">Work</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
        A collection of product strategy and UX case studies with outcomes,
        process, and design decisions.
      </p>
      <div className="mt-10 space-y-6">
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
  );
}
