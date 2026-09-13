/**
 * Single source of truth for the résumé download. The PDF lives in `public/`,
 * so it's served from the site root on the static export — no route needed.
 */
export const RESUME = {
  href: "/riya-patel-resume.pdf",
  /** Controls the filename the visitor ends up with, not the path on disk. */
  downloadName: "Riya-Patel-Product-Designer-Resume.pdf",
  label: "Résumé",
  ariaLabel: "Download Riya Patel's résumé (PDF)",
} as const;
