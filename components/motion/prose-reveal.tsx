"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type ProseRevealProps = {
  children: ReactNode;
  className?: string;
  lead?: boolean;
  style?: CSSProperties;
};

/** Standalone scroll-triggered prose reveal when not inside MotionReveal / MotionFadeIn. */
export function ProseReveal({
  children,
  className = "",
  lead = false,
  style,
}: ProseRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const classes = [
    "celestial-prose",
    "motion-prose",
    lead ? "celestial-prose-lead" : "",
    visible ? "is-inview" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}
