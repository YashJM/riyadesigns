import Image from "next/image";
import Link from "next/link";
import { Tilt } from "@/components/celestial/tilt";
import { ProseReveal } from "@/components/motion/prose-reveal";
import { MotionReveal } from "@/components/motion/reveal";
import {
  HOME_CASE_STUDIES,
  HOME_FEATURED,
  type HomeFeaturedProject,
} from "@/lib/home-content";
import { isCaseStudySlug } from "@/lib/work-projects";

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

type ProjectSectionProps = {
  id: string;
  title: string;
  description: string;
  projects: readonly HomeFeaturedProject[];
  cta: string;
  gridClass: string;
};

function ProjectSection({
  id,
  title,
  description,
  projects,
  cta,
  gridClass,
}: ProjectSectionProps) {
  return (
    <section
      id={id}
      className="relative z-10 mx-auto w-full max-w-[var(--content-max)] scroll-mt-24 border-t border-[var(--celestial-line)] px-[max(1.25rem,env(safe-area-inset-left))] py-[clamp(4rem,10vw,7rem)]"
    >
      <MotionReveal>
        <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-[var(--tracking-display)] text-celestial-fg">
          {title}
        </h2>
        <ProseReveal lead className="mt-4 max-w-[68ch]">
          <p className="prose-line">{description}</p>
        </ProseReveal>
      </MotionReveal>

      <div className={`mt-10 grid gap-6 ${gridClass}`}>
        {projects.map((item, index) => (
          <MotionReveal key={item.slug} delay={index * 80}>
            <Tilt className="h-full">
              <Link
                href={`${isCaseStudySlug(item.slug) ? "/case-studies" : "/work"}/${item.slug}`}
                className="celestial-card group flex h-full flex-col overflow-hidden rounded-[26px] p-3"
              >
                <div
                  className="celestial-card-media relative aspect-[16/10] overflow-hidden rounded-[18px]"
                  style={{ background: item.fallback }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
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
                  <h3 className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold tracking-[var(--tracking-display)] text-celestial-fg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-semibold leading-[1.45] text-celestial-fg/90">
                    {item.subtitle}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-[14px] leading-[1.5] text-celestial-muted marker:text-celestial-faint">
                    {item.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="celestial-tag rounded-full border border-[var(--celestial-line)] bg-white/5 px-2.5 py-1 text-celestial-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-hi">
                    {cta}
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            </Tilt>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

// Home page shows one combined grid (case studies + featured work) in Figma order,
// with Therapix pinned to the first slot.
const HOME_PROJECTS: readonly HomeFeaturedProject[] = [
  HOME_FEATURED.projects[0], // therapix
  HOME_CASE_STUDIES.projects[0], // apple-tv-plus
  HOME_FEATURED.projects[1], // akshar-packs
  HOME_CASE_STUDIES.projects[1], // google-pay-ai
  HOME_FEATURED.projects[2], // zapp-wallet
  HOME_CASE_STUDIES.projects[2], // shopify-analytics
];

export function FeaturedWork() {
  const { title, description } = HOME_FEATURED;
  return (
    <ProjectSection
      id="featured"
      title={title}
      description={description}
      projects={HOME_PROJECTS}
      cta="View Case Study"
      gridClass="sm:grid-cols-2 lg:grid-cols-3"
    />
  );
}
