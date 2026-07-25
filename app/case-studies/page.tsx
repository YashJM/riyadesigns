import type { Metadata } from "next";
import { CelestialFooter } from "@/components/celestial/celestial-footer";
import { CelestialHeader } from "@/components/celestial/celestial-header";
import { CelestialShell } from "@/components/celestial/celestial-shell";
import { ProjectListingCard } from "@/components/celestial/project-listing-card";
import { MotionFadeIn } from "@/components/motion/fade-in";
import { HOME_CASE_STUDIES } from "@/lib/home-content";
import { getCaseStudyProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "In-depth product design case studies by Riya Patel — streaming, fintech, and SaaS analytics.",
};

export default function CaseStudiesPage() {
  const projects = getCaseStudyProjects();

  return (
    <CelestialShell>
      <CelestialHeader />

      <section className="relative z-10 mx-auto w-full max-w-[var(--content-max)] px-[max(1.25rem,env(safe-area-inset-left))] pt-[clamp(8rem,18vw,11rem)] pb-[clamp(2rem,5vw,3rem)] text-center sm:text-left">
        <MotionFadeIn>
          <p className="celestial-eyebrow">Portfolio</p>
        </MotionFadeIn>
        <MotionFadeIn delay={80}>
          <h1 className="mt-4 text-[clamp(2.25rem,7vw,4rem)] font-bold tracking-[var(--tracking-display)] text-celestial-fg">
            {HOME_CASE_STUDIES.title}
          </h1>
        </MotionFadeIn>
        <MotionFadeIn
          delay={160}
          className="mx-auto mt-5 max-w-[62ch] text-[clamp(1rem,2.4vw,1.35rem)] leading-[1.5] text-celestial-muted sm:mx-0"
        >
          {HOME_CASE_STUDIES.description}
        </MotionFadeIn>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-[var(--content-max)] px-[max(1.25rem,env(safe-area-inset-left))] pb-[clamp(4rem,10vw,7rem)] pt-[clamp(2rem,5vw,3rem)]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectListingCard
              key={project.slug}
              project={project}
              index={index}
              cta="View Case Study"
            />
          ))}
        </div>
      </section>

      <CelestialFooter />
    </CelestialShell>
  );
}
