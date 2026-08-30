import type { ReactNode } from "react";
import { BackButton } from "@/components/celestial/back-button";
import { CelestialFooter } from "@/components/celestial/celestial-footer";
import { CelestialHeader } from "@/components/celestial/celestial-header";
import { CelestialShell } from "@/components/celestial/celestial-shell";
import { MotionFadeIn } from "@/components/motion/fade-in";

/**
 * Frames a pixel-accurate case-study interior as a floating light "artboard"
 * on the celestial background, with the shared dark header/footer. Keeps the
 * original layouts intact while unifying the site chrome.
 */
export function CaseStudyCelestial({
  children,
  backHref = "/work",
  backLabel = "All Work",
}: {
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <CelestialShell>
      <CelestialHeader />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-[max(1rem,env(safe-area-inset-left))] pb-[clamp(3rem,7vw,5rem)] pt-[clamp(6.5rem,12vw,8.5rem)]">
        <MotionFadeIn className="mb-5">
          <BackButton fallbackHref={backHref} fallbackLabel={backLabel} />
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
