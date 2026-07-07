import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CelestialFooter } from "@/components/celestial/celestial-footer";
import { CelestialHeader } from "@/components/celestial/celestial-header";
import { CelestialShell } from "@/components/celestial/celestial-shell";
import { Tilt } from "@/components/celestial/tilt";
import { MotionFadeIn } from "@/components/motion/fade-in";
import { MotionReveal } from "@/components/motion/reveal";
import { getWorkProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design case studies by Riya Patel — SaaS, fintech, B2B, and streaming.",
};

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

export default function WorkPage() {
  const projects = getWorkProjects();

  return (
    <CelestialShell>
      <CelestialHeader />

      <section className="relative z-10 mx-auto w-full max-w-[var(--content-max)] px-[max(1.25rem,env(safe-area-inset-left))] pt-[clamp(8rem,18vw,11rem)] pb-[clamp(2rem,5vw,3rem)] text-center sm:text-left">
        <MotionFadeIn>
          <p className="celestial-mono text-[11px] text-amber">Portfolio</p>
        </MotionFadeIn>
        <MotionFadeIn delay={80}>
          <h1 className="mt-4 text-[clamp(2.5rem,9vw,5rem)] font-extrabold tracking-tight text-celestial-fg">
            Featured Product Work
          </h1>
        </MotionFadeIn>
        <MotionFadeIn
          delay={160}
          className="mx-auto mt-5 max-w-[62ch] text-[clamp(1rem,2.4vw,1.35rem)] leading-[1.5] text-celestial-muted sm:mx-0"
        >
          Selected projects where I used research, UX strategy, and thoughtful
          design to simplify workflows and improve product outcomes.
        </MotionFadeIn>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-[var(--content-max)] px-[max(1.25rem,env(safe-area-inset-left))] pb-[clamp(4rem,10vw,7rem)] pt-[clamp(2rem,5vw,3rem)]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionReveal key={project.slug} delay={index * 80}>
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
                    <h2 className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold tracking-tight text-celestial-fg">
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
                      View Case Study
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </Tilt>
            </MotionReveal>
          ))}
        </div>
      </section>

      <CelestialFooter />
    </CelestialShell>
  );
}
