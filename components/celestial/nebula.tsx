"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type FinisherOptions = {
  count: number;
  size: { min: number; max: number; pulse: number };
  speed: { x: { min: number; max: number }; y: { min: number; max: number } };
  colors: { background: string; particles: string[] };
  blending: string;
  opacity: { center: number; edge: number };
  skew: number;
  shapes: Array<"c" | "s" | "t">;
  className: string;
};

declare global {
  interface Window {
    FinisherHeader?: new (options: FinisherOptions) => unknown;
  }
}

const SCRIPT_SRC = "/vendor/finisher-header.es5.min.js";

const OPTIONS: FinisherOptions = {
  count: 9,
  size: { min: 500, max: 1100, pulse: 0.06 },
  speed: { x: { min: 0.1, max: 0.4 }, y: { min: 0.1, max: 0.4 } },
  colors: {
    background: "#0a0e1c",
    particles: ["#f5a623", "#26356f", "#1a2350", "#5a3fa0", "#26356f"],
  },
  blending: "lighten",
  opacity: { center: 0.2, edge: 0 },
  skew: 0,
  shapes: ["c"],
  className: "finisher-nebula-host",
};

/**
 * Animated nebula glow using the finisher-header canvas library.
 * Renders soft amber/indigo radial blobs drifting behind the starfield.
 * Skipped entirely under prefers-reduced-motion (the CSS sky gradient stands in).
 */
export function Nebula() {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  // Fade the nebula out as the hero scrolls away (keeps deep-space/dawn clean).
  useEffect(() => {
    if (reduced) return;
    const host = hostRef.current;
    if (!host) return;
    let ticking = false;
    const update = () => {
      const fade = Math.max(0, 1 - (window.scrollY || 0) / (window.innerHeight * 0.85));
      host.style.opacity = String(0.5 * fade);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.FinisherHeader) return;
      try {
        new window.FinisherHeader(OPTIONS);
      } catch {
        /* non-fatal: CSS sky gradient remains the background */
      }
    };

    if (window.FinisherHeader) {
      init();
    } else {
      let script = document.querySelector<HTMLScriptElement>(
        `script[src="${SCRIPT_SRC}"]`,
      );
      if (!script) {
        script = document.createElement("script");
        script.src = SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener("load", init, { once: true });
    }

    return () => {
      cancelled = true;
      // Remove any canvas the library appended so re-mounts don't stack.
      host.querySelector("#finisher-canvas")?.remove();
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={hostRef}
      className="finisher-nebula-host celestial-nebula"
      aria-hidden
    />
  );
}
