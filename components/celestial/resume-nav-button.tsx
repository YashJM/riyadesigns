import { DownloadIcon } from "@/components/celestial/download-icon";
import { RESUME } from "@/lib/resume";

/**
 * Résumé download in the nav. On hover/focus an amber bar sweeps across the
 * pill like a download completing, the label flips to dark for contrast, and
 * the arrow drops into its tray — so the control previews the thing it does
 * instead of just labelling it.
 */
export function ResumeNavButton() {
  return (
    <a
      href={RESUME.href}
      download={RESUME.downloadName}
      aria-label={RESUME.ariaLabel}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[rgba(245,166,35,0.45)] px-4 py-1.5 text-[14px] font-medium text-amber-hi transition-colors duration-300 hover:text-[#1a1204] focus-visible:text-[#1a1204] focus-visible:outline-none"
    >
      <span
        className="absolute inset-0 origin-left scale-x-0 bg-[linear-gradient(90deg,#ffcf7a,var(--amber))] transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
        aria-hidden
      />
      <span className="relative">{RESUME.label}</span>
      <DownloadIcon
        size={13}
        className="relative transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-y-0.5 group-focus-visible:translate-y-0.5 motion-reduce:transition-none"
      />
    </a>
  );
}
