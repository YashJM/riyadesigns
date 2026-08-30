import type { ReactNode } from "react";
import { CelestialSky } from "@/components/celestial/celestial-sky";
import { NavHistoryTracker } from "@/components/celestial/nav-history-tracker";
import { Nebula } from "@/components/celestial/nebula";
import { ScrollProgress } from "@/components/celestial/scroll-progress";

/**
 * Wraps a page in the celestial dark theme and mounts the fixed background
 * stack: scroll-evolving sky + parallax starfield + Milky Way + meteors,
 * with a subtle finisher-header nebula glow riding on top near the hero.
 */
export function CelestialShell({ children }: { children: ReactNode }) {
  return (
    <div className="celestial-root celestial-grain">
      <CelestialSky />
      <Nebula />
      <ScrollProgress />
      <NavHistoryTracker />
      {children}
    </div>
  );
}
