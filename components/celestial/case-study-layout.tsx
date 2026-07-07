import Image from "next/image";
import {
  CaseStudyImageTrigger,
  CaseStudyLightboxRoot,
} from "@/components/case-study-lightbox";
import { CaseStudyCelestial } from "@/components/celestial/case-study-celestial";
import { MotionFadeIn } from "@/components/motion/fade-in";
import { MotionRevealGroup } from "@/components/motion/reveal";
import type { CaseStudyData, CaseStudyImage } from "@/lib/case-studies/types";

function SectionRule() {
  return <hr className="border-[var(--celestial-line)]" aria-hidden />;
}

function StudyImage({ image }: { image: CaseStudyImage }) {
  return (
    <CaseStudyImageTrigger
      src={image.src}
      alt={image.alt}
      className="overflow-hidden rounded-[18px] border border-[var(--celestial-line)] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width ?? 1005}
        height={image.height ?? 600}
        className="h-auto w-full object-cover"
        sizes="(max-width: 768px) 100vw, min(1005px, 92vw)"
      />
    </CaseStudyImageTrigger>
  );
}

function MetaRow({ meta }: { meta: CaseStudyData["meta"] }) {
  const rows = [
    meta.role && { label: "Role", value: meta.role },
    meta.timeline && { label: "Timeline", value: meta.timeline },
    meta.platform && { label: "Platform", value: meta.platform },
    meta.tools && { label: "Tools", value: meta.tools },
    meta.scope && { label: "Scope", value: meta.scope },
  ].filter(Boolean) as { label: string; value: string }[];

  if (rows.length === 0) return null;

  return (
    <dl className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
      {rows.map((row) => (
        <div key={row.label} className="min-w-0">
          <dt className="celestial-mono text-[10px] uppercase tracking-[0.14em] text-amber">
            {row.label}
          </dt>
          <dd className="mt-1 text-[15px] leading-[1.5] text-celestial-muted">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function CelestialCaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <CaseStudyLightboxRoot>
      <CaseStudyCelestial>
        <section className="px-[clamp(1.25rem,4vw,2.5rem)] pb-[clamp(2rem,5vw,3rem)] pt-[clamp(1.5rem,4vw,2.5rem)]">
          <MotionFadeIn>
            <p className="celestial-mono text-[11px] text-amber">Case Study</p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-celestial-fg">
              {data.title}
            </h1>
            <p className="mt-4 max-w-[52rem] text-[clamp(1.1rem,2.4vw,1.5rem)] font-semibold leading-[1.45] text-celestial-fg/90">
              {data.subtitle}
            </p>
            <div className="mt-6 max-w-[52rem] space-y-4 text-[clamp(15px,2vw,18px)] leading-[1.65] text-celestial-muted">
              {data.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {data.externalUrl ? (
                <p>
                  <a
                    href={data.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-amber-hi underline underline-offset-2 transition-opacity hover:opacity-80"
                  >
                    {data.externalUrl}
                  </a>
                </p>
              ) : null}
            </div>
            {data.heroImage ? (
              <div className="mt-8 max-w-[52rem]">
                <StudyImage image={data.heroImage} />
              </div>
            ) : null}
            <MetaRow meta={data.meta} />
            {data.meta.responsibilities ? (
              <div className="mt-6 max-w-[52rem]">
                <p className="celestial-mono text-[10px] uppercase tracking-[0.14em] text-amber">
                  My Responsibilities
                </p>
                <p className="mt-2 text-[15px] leading-[1.65] text-celestial-muted">
                  {data.meta.responsibilities}
                </p>
              </div>
            ) : null}
            {data.meta.focusAreas ? (
              <div className="mt-5 max-w-[52rem]">
                <p className="celestial-mono text-[10px] uppercase tracking-[0.14em] text-amber">
                  Focus Areas
                </p>
                <p className="mt-2 text-[15px] leading-[1.65] text-celestial-muted">
                  {data.meta.focusAreas}
                </p>
              </div>
            ) : null}
          </MotionFadeIn>
        </section>

        <MotionRevealGroup className="px-[clamp(1.25rem,4vw,2.5rem)] pb-[clamp(2.5rem,6vw,4rem)]">
          {data.sections.map((section, index) => (
            <article
              key={section.title}
              className={`motion-reveal ${index === 0 ? "pt-0" : "pt-[clamp(1.75rem,5vw,2.75rem)]"}`}
            >
              {index > 0 ? <SectionRule /> : null}
              <h2 className="mt-[clamp(1.75rem,5vw,2.75rem)] text-[clamp(1.35rem,3vw,1.875rem)] font-bold tracking-tight text-celestial-fg">
                {section.title}
              </h2>

              {section.paragraphs?.length ? (
                <div className="mt-4 max-w-[52rem] space-y-4 text-[15px] leading-[1.65] text-celestial-muted">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ) : null}

              {section.steps?.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {section.steps.map((step, i) => (
                    <span
                      key={step}
                      className="celestial-glass rounded-full px-4 py-2 text-[13px] text-celestial-fg"
                    >
                      <span className="celestial-mono mr-2 text-[10px] text-amber">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </span>
                  ))}
                </div>
              ) : null}

              {section.principles?.length ? (
                <div className="mt-6 max-w-[52rem] space-y-5">
                  {section.principles.map((p) => (
                    <div key={p.title}>
                      <p className="font-semibold text-celestial-fg">{p.title}</p>
                      <p className="mt-1 text-[15px] leading-[1.65] text-celestial-muted">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.cards?.length ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {section.cards.map((card) => (
                    <div
                      key={card.title}
                      className="celestial-glass rounded-[18px] p-5"
                    >
                      <p className="font-semibold text-celestial-fg">{card.title}</p>
                      <p className="mt-2 text-[14px] leading-[1.55] text-celestial-muted">
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.items?.length ? (
                <div className="mt-6 max-w-[52rem] space-y-6">
                  {section.items.map((item) => (
                    <div key={item.title}>
                      <p className="font-semibold text-celestial-fg">{item.title}</p>
                      {Array.isArray(item.body) ? (
                        <div className="mt-2 space-y-3 text-[15px] leading-[1.65] text-celestial-muted">
                          {item.body.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-2 text-[15px] leading-[1.65] text-celestial-muted">
                          {item.body}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}

              {section.images?.length ? (
                <div
                  className={`mt-6 max-w-[52rem] ${
                    section.images.length > 1
                      ? "grid gap-4 sm:grid-cols-2"
                      : ""
                  }`}
                >
                  {section.images.map((img) => (
                    <StudyImage key={img.src} image={img} />
                  ))}
                </div>
              ) : null}
            </article>
          ))}

          {data.metrics?.length ? (
            <article className="motion-reveal pt-[clamp(1.75rem,5vw,2.75rem)]">
              <SectionRule />
              <h2 className="mt-[clamp(1.75rem,5vw,2.75rem)] text-[clamp(1.35rem,3vw,1.875rem)] font-bold tracking-tight text-celestial-fg">
                Impact
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="celestial-glass flex flex-col items-center justify-center rounded-[18px] px-4 py-6 text-center"
                  >
                    <p className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-celestial-fg">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-[14px] font-medium text-celestial-muted">
                      {metric.label}
                    </p>
                    {metric.description ? (
                      <p className="mt-2 text-[12px] leading-[1.45] text-celestial-faint">
                        {metric.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ) : null}
        </MotionRevealGroup>
      </CaseStudyCelestial>
    </CaseStudyLightboxRoot>
  );
}
