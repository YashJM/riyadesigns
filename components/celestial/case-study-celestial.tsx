import Link from "next/link";
import type { ReactNode } from "react";
import { CelestialFooter } from "@/components/celestial/celestial-footer";
import { CelestialHeader } from "@/components/celestial/celestial-header";
import { CelestialShell } from "@/components/celestial/celestial-shell";
import { Magnetic } from "@/components/celestial/magnetic";
import { MotionFadeIn } from "@/components/motion/fade-in";

/**
 * Frames a pixel-accurate case-study interior as a floating light "artboard"
 * on the celestial background, with the shared dark header/footer. Keeps the
 * original layouts intact while unifying the site chrome.
 */
export function CaseStudyCelestial({ children }: { children: ReactNode }) {
  return (
    <CelestialShell>
      <CelestialHeader />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-[max(1rem,env(safe-area-inset-left))] pb-[clamp(3rem,7vw,5rem)] pt-[clamp(6.5rem,12vw,8.5rem)]">
        <MotionFadeIn className="mb-5 flex items-center justify-between gap-4">
          <Magnetic as="span" strength={0.3}>
            <Link
              href="/work"
              className="celestial-glass group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-celestial-muted transition-colors hover:text-celestial-fg"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="transition-transform duration-300 ease-[var(--ease-premium)] group-hover:-translate-x-0.5"
              >
                <path
                  d="M19 12H5M11 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All Work
            </Link>
          </Magnetic>
          <span className="celestial-eyebrow text-celestial-faint">Case Study</span>
        </MotionFadeIn>

        <MotionFadeIn
          delay={90}
          className="cs-celestial overflow-hidden rounded-[clamp(20px,3vw,32px)] border border-[var(--celestial-line)] bg-[rgba(10,14,28,0.55)] shadow-[0_50px_140px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        >
          {children}
        </MotionFadeIn>
      </div>

      <CelestialFooter />
    </CelestialShell>
  );
}
