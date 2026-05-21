"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Stagger delay in milliseconds */
  delay?: number;
  style?: CSSProperties;
};

export function MotionReveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  style,
}: MotionRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
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
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const mergedStyle: CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : undefined),
  };

  return (
    <Tag
      ref={ref}
      className={`motion-reveal${visible ? " is-inview" : ""}${className ? ` ${className}` : ""}`}
      style={mergedStyle}
    >
      {children}
    </Tag>
  );
}

/** Observes `.motion-reveal` descendants inside the container (case study sections). */
export function MotionRevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(".motion-reveal");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!reduced) return;
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll<HTMLElement>(".motion-reveal").forEach((el) => {
      el.classList.add("is-inview");
    });
  }, [reduced]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
