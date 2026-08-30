import { CASE_STUDY_SLUGS, WORK_PROJECT_SLUGS } from "@/lib/work-projects";

function slugFromPath(pathname: string, prefix: string): string | null {
  if (!pathname.startsWith(prefix)) return null;
  return pathname.slice(prefix.length).split("/")[0] || null;
}

/** True when `pathname` is the current route for a primary nav `href`. */
export function isNavRouteActive(pathname: string, href: string): boolean {
  if (href === "/work") {
    if (pathname === "/work") return true;
    const slug = slugFromPath(pathname, "/work/");
    return slug !== null && (WORK_PROJECT_SLUGS as readonly string[]).includes(slug);
  }
  if (href === "/case-studies") {
    if (pathname === "/case-studies") return true;
    const slug = slugFromPath(pathname, "/case-studies/");
    return slug !== null && (CASE_STUDY_SLUGS as readonly string[]).includes(slug);
  }
  if (href === "/about") {
    return pathname === "/about" || pathname.startsWith("/about/");
  }
  return pathname === href;
}
