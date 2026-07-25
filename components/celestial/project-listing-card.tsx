import Image from "next/image";
import Link from "next/link";
import { Tilt } from "@/components/celestial/tilt";
import { MotionReveal } from "@/components/motion/reveal";
import type { Project } from "@/lib/projects";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectListingCard({
  project,
  index,
  cta,
}: {
  project: Project;
  index: number;
  cta: string;
}) {
  return (
    <MotionReveal delay={index * 80}>
      <Tilt className="h-full">
        <Link
          href={`/work/${project.slug}`}
          className="celestial-card group flex h-full flex-col overflow-hidden rounded-[26px] p-3"
        >
          <div
            className="celestial-card-media relative aspect-[16/10] overflow-hidden rounded-[18px]"
            style={{ background: project.accent }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={1024}
              height={640}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 92vw, 540px"
            />
            <span className="celestial-mono absolute left-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[10px] text-amber-hi backdrop-blur">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-1 flex-col px-3 pb-2 pt-5">
            <h2 className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold tracking-[var(--tracking-display)] text-celestial-fg">
              {project.title}
            </h2>
            <p className="mt-2 text-[15px] font-semibold leading-[1.45] text-celestial-fg/90">
              {project.subtitle}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-[14px] leading-[1.5] text-celestial-muted marker:text-celestial-faint">
              {project.metrics.slice(0, 3).map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-hi">
              {cta}
              <ArrowIcon />
            </span>
          </div>
        </Link>
      </Tilt>
    </MotionReveal>
  );
}
