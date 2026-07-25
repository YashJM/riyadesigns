import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { HOME_CASE_STUDIES, HOME_FEATURED } from "@/lib/home-content";
import {
  CASE_STUDY_SLUGS,
  WORK_PROJECT_SLUGS,
  type WorkProjectSlug,
} from "@/lib/work-projects";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  subtitle: string;
  metrics: string[];
  tags: string[];
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

function getFeaturedMeta(slug: string) {
  const featured = [...HOME_FEATURED.projects, ...HOME_CASE_STUDIES.projects].find(
    (p) => p.slug === slug,
  );
  if (!featured) return null;
  return featured;
}

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDir).filter((file) => file.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(projectsDir, file), "utf-8");
      const { data, content } = matter(raw);
      const slug = String(data.slug ?? normalizeSlug(file));
      const featured = getFeaturedMeta(slug);
      return {
        slug,
        title: String(data.title ?? featured?.title ?? ""),
        tagline: featured?.subtitle ?? String(data.tagline ?? ""),
        subtitle: featured?.subtitle ?? String(data.tagline ?? ""),
        metrics: featured?.metrics ?? [],
        tags: featured?.tags ?? [],
        year: String(data.year ?? "2026"),
        roles: Array.isArray(data.roles) ? data.roles.map(String) : [],
        thumbnail: featured?.image ?? String(data.thumbnail ?? ""),
        accent: featured?.fallback ?? String(data.accent ?? "#f5d7e2"),
        externalUrl: data.externalUrl ? String(data.externalUrl) : undefined,
        content,
      } satisfies Project;
    })
    .sort((a, b) => b.year.localeCompare(a.year));
}

function getProjectsForSlugs(slugs: readonly string[]): Project[] {
  const bySlug = new Map(getAllProjects().map((project) => [project.slug, project]));
  return slugs.map((slug) => {
    const project = bySlug.get(slug);
    if (!project) throw new Error(`Missing project markdown for: ${slug}`);
    return project;
  });
}

export function getWorkProjects(): Project[] {
  return getProjectsForSlugs(WORK_PROJECT_SLUGS);
}

export function getCaseStudyProjects(): Project[] {
  return getProjectsForSlugs(CASE_STUDY_SLUGS);
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getProjectByWorkSlug(slug: WorkProjectSlug) {
  return getProjectsForSlugs([slug])[0];
}
