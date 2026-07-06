"use client";

import {
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** How strongly the element follows the cursor (0–1). */
  strength?: number;
  as?: ElementType;
};

/**
 * Subtle magnetic hover — the element eases toward the cursor while hovered
 * and springs back on leave. No-op under prefers-reduced-motion.
 */
export function Magnetic({
  children,
  className = "",
  strength = 0.35,
  as: Tag = "div",
}: MagneticProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const raf = useRef(0);

  const onMove = (e: React.PointerEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <Tag
      ref={ref}
      className={`celestial-magnetic ${className}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </Tag>
  );
}
