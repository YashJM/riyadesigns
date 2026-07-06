"use client";

import { useEffect, useRef } from "react";

/** Thin amber scroll-progress meter pinned to the top of the viewport. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let ticking = false;

    const update = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = Math.max(0, Math.min(1, (window.scrollY || 0) / max));
      bar.style.transform = `scaleX(${p})`;
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
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="celestial-progress" aria-hidden>
      <div ref={barRef} className="celestial-progress-bar" />
    </div>
  );
}
