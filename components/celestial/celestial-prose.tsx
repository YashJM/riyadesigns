import type { ReactNode } from "react";

type CelestialProseProps = {
  children: ReactNode;
  className?: string;
  /** Larger intro / lead copy */
  lead?: boolean;
  /** Staggered blur-to-sharp reveal on scroll */
  animate?: boolean;
};

export function CelestialProse({
  children,
  className = "",
  lead = false,
  animate = true,
}: CelestialProseProps) {
  const classes = [
    "celestial-prose",
    lead ? "celestial-prose-lead" : "",
    animate ? "motion-prose" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}

export function ProseLine({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`prose-line${className ? ` ${className}` : ""}`}>{children}</p>;
}
