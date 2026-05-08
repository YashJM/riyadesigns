import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { PROJECT_LISTING_VISUALS } from "@/lib/project-listing-visuals";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  roles: string[];
  thumbnail: string;
  accent: string;
  externalUrl?: string;
  content: string;
};

const projectsDir = path.join(process.cwd(), "content/projects");

function normalizeSlug(fileName: string) {
  return fileName.replace(/\.md$/, "");
}

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDir).filter((file) => file.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(projectsDir, file), "utf-8");
      const { data, content } = matter(raw);
      const slug = String(data.slug ?? normalizeSlug(file));
      const listing = PROJECT_LISTING_VISUALS[slug];
      return {
        slug,
        title: String(data.title ?? ""),
        tagline: String(data.tagline ?? ""),
        year: String(data.year ?? ""),
        roles: Array.isArray(data.roles) ? data.roles.map(String) : [],
        thumbnail: listing?.thumbnail ?? String(data.thumbnail ?? ""),
        accent: listing?.accent ?? String(data.accent ?? "#f5d7e2"),
        externalUrl: data.externalUrl ? String(data.externalUrl) : undefined,
        content,
      } satisfies Project;
    })
    .sort((a, b) => b.year.localeCompare(a.year));
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((project) => project.slug === slug);
}
