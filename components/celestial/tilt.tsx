"use client";

import { useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
};

/**
 * 3D pointer tilt with a moving specular glare. Wraps interactive cards.
 * No-op (plain container) under prefers-reduced-motion.
 */
export function Tilt({ children, className = "", max = 6 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const raf = useRef(0);

  const onMove = (e: React.PointerEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rx = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    const ry = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const gx = ((e.clientX - rect.left) / rect.width) * 100;
    const gy = ((e.clientY - rect.top) / rect.height) * 100;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(900px) rotateX(${(-rx * max).toFixed(2)}deg) rotateY(${(
        ry * max
      ).toFixed(2)}deg)`;
      el.style.setProperty("--glare-x", `${gx}%`);
      el.style.setProperty("--glare-y", `${gy}%`);
      el.style.setProperty("--glare-o", "1");
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    el.style.setProperty("--glare-o", "0");
  };

  return (
    <div
      ref={ref}
      className={`celestial-tilt ${className}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
