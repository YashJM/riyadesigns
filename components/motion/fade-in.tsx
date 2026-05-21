"use client";

import { useEffect, useState, type ElementType, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type MotionFadeInProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
};

export function MotionFadeIn({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: MotionFadeInProps) {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const id = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, [reduced]);

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      className={`motion-fade-in${visible ? " is-inview" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
