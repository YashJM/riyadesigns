import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { isCaseStudySlug } from "@/lib/work-projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://riyadesigns.studio";
  const staticRoutes = ["", "/work", "/case-studies", "/about"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${base}/${isCaseStudySlug(project.slug) ? "case-studies" : "work"}/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
