import Image from "next/image";
import {
  CaseStudyImageTrigger,
  CaseStudyLightboxRoot,
} from "@/components/case-study-lightbox";
import { CaseStudyCelestial } from "@/components/celestial/case-study-celestial";
import { CelestialProse, ProseLine } from "@/components/celestial/celestial-prose";
import { MotionFadeIn } from "@/components/motion/fade-in";
import { MotionRevealGroup } from "@/components/motion/reveal";
import type {
  CaseStudyContentBlock,
  CaseStudyData,
  CaseStudyImage,
} from "@/lib/case-studies/types";
import { isCaseStudySlug } from "@/lib/work-projects";

function SectionRule() {
  return <hr className="border-[var(--celestial-line)]" aria-hidden />;
}

function studyImageMaxWidth(image: CaseStudyImage) {
  return image.width ?? 856;
}

function StudyImage({ image }: { image: CaseStudyImage }) {
  const width = studyImageMaxWidth(image);
  const height = image.height ?? Math.round((width * 9) / 16);

  return (
    <CaseStudyImageTrigger
      src={image.src}
      alt={image.alt}
      className="overflow-hidden rounded-[18px] border border-[var(--celestial-line)] bg-transparent shadow-[0_24px_64px_-32px_rgba(0,0,0,0.85)]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={width}
        height={height}
        className="block h-auto max-w-full bg-transparent object-contain"
        style={{ width: `${width}px`, maxWidth: "100%", height: "auto" }}
        sizes={`(max-width: 768px) 100vw, ${width}px`}
      />
    </CaseStudyImageTrigger>
  );
}

function StudyImageGroup({
  images,
  layout = "grid",
  className = "",
}: {
  images: CaseStudyImage[];
  layout?: "stack" | "grid";
  className?: string;
}) {
  if (images.length === 0) return null;

  const groupClass =
    images.length > 1
      ? layout === "stack"
        ? "flex flex-col items-center gap-4"
        : "flex flex-wrap justify-center gap-4"
      : "flex justify-center";

  return (
    <div className={`${groupClass} ${className}`.trim()}>
      {images.map((img, index) => (
        <StudyImage key={`${img.src}-${img.alt}-${index}`} image={img} />
      ))}
    </div>
  );
}

function MetaRow({ meta }: { meta: CaseStudyData["meta"] }) {
  const rows = [
    meta.role && { label: "Role", value: meta.role, detail: meta.roleDetail },
    meta.timeline && {
      label: "Timeline",
      value: meta.timeline,
      detail: meta.timelineDetail,
    },
    meta.platform && {
      label: "Platform",
      value: meta.platform,
      detail: meta.platformDetail,
    },
    meta.tools && { label: "Tools", value: meta.tools, detail: meta.toolsDetail },
    meta.scope && { label: "Scope", value: meta.scope, detail: meta.scopeDetail },
  ].filter(Boolean) as { label: string; value: string; detail?: string }[];

  if (rows.length === 0) return null;

  return (
    <dl className="mt-8 grid gap-4 sm:grid-cols-2">
      {rows.map((row) => (
        <div
          key={row.label}
          className="celestial-glass flex flex-col rounded-[18px] p-5 sm:p-6"
        >
          <dt className="celestial-eyebrow text-amber-hi">{row.label}</dt>
          <dd className="mt-2 text-[clamp(1.05rem,2vw,1.25rem)] font-semibold leading-[1.4] text-celestial-fg">
            {row.value}
          </dd>
          {row.detail ? (
            <div className="mt-2 text-[15px] leading-[1.6] text-celestial-muted">
              {row.detail}
            </div>
          ) : null}
        </div>
      ))}
    </dl>
  );
}

function ItemImages({
  images,
  layout = "grid",
}: {
  images: CaseStudyImage[];
  layout?: "stack" | "grid";
}) {
  return <StudyImageGroup images={images} layout={layout} className="mt-6" />;
}

function MetricsGrid({ metrics }: { metrics: NonNullable<CaseStudyData["metrics"]> }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
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
  );
}

function SectionCards({
  cards,
}: {
  cards: { title: string; body: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <div key={card.title} className="celestial-glass rounded-[18px] p-5">
          <p className="font-semibold text-celestial-fg">{card.title}</p>
          <p className="mt-2 text-[var(--text-body)] leading-[1.55] text-celestial-muted">
            {card.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Renders ordered content blocks so text and images interleave in source order. */
function SectionContent({ blocks }: { blocks: CaseStudyContentBlock[] }) {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {blocks.map((block, i) => {
        if (block.kind === "text") {
          return (
            <CelestialProse key={i} className="max-w-[52rem]">
              <ProseLine
                className={
                  block.emphasis ? "font-semibold text-celestial-fg" : undefined
                }
              >
                {block.text}
              </ProseLine>
            </CelestialProse>
          );
        }
        if (block.kind === "images") {
          return (
            <StudyImageGroup key={i} images={block.images} layout={block.layout} />
          );
        }
        return <SectionCards key={i} cards={block.cards} />;
      })}
    </div>
  );
}

/** Numbered rows with the number inline with its text, each in a bordered card. */
function NumberedCards({ items }: { items: string[] }) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      {items.map((text, i) => (
        <div
          key={text}
          className="celestial-glass flex items-start gap-3 rounded-[14px] px-5 py-4"
        >
          <span className="shrink-0 font-bold text-celestial-fg">
            {String(i + 1).padStart(2, "0")}.
          </span>
          <span className="text-[var(--text-body)] leading-[1.6] text-celestial-muted">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CelestialCaseStudyLayout({ data }: { data: CaseStudyData }) {
  const isCaseStudy = isCaseStudySlug(data.slug);

  return (
    <CaseStudyLightboxRoot>
      <CaseStudyCelestial
        backHref={isCaseStudy ? "/case-studies" : "/work"}
        backLabel={isCaseStudy ? "All Case Studies" : "All Work"}
      >
        <section className="px-[clamp(1.25rem,4vw,2.5rem)] pb-[clamp(2rem,5vw,3rem)] pt-[clamp(1.5rem,4vw,2.5rem)]">
          <MotionFadeIn>
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[var(--tracking-display)] text-celestial-fg">
              {data.title}
            </h1>
            <p className="mt-4 max-w-[52rem] text-[clamp(1.1rem,2.4vw,1.5rem)] font-semibold leading-[1.45] text-celestial-fg/90">
              {data.subtitle}
            </p>
            {data.tagline ? (
              <p className="mt-2 max-w-[52rem] text-[clamp(1rem,2vw,1.25rem)] font-medium italic leading-[1.45] text-celestial-muted">
                {data.tagline}
              </p>
            ) : null}
            <CelestialProse lead className="mt-6 max-w-[52rem]">
              {data.intro.map((p) => (
                <ProseLine key={p}>{p}</ProseLine>
              ))}
              {data.externalUrl ? (
                <ProseLine>
                  <a
                    href={data.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-amber-hi underline underline-offset-2 transition-opacity hover:opacity-80"
                  >
                    {data.externalUrl}
                  </a>
                </ProseLine>
              ) : null}
            </CelestialProse>
            {data.heroImage ? (
              <div className="mt-8 flex justify-center">
                <StudyImage image={data.heroImage} />
              </div>
            ) : null}
            {data.overviewTitle ? (
              <h2 className="mt-10 text-[clamp(1.35rem,3vw,1.875rem)] font-semibold tracking-[var(--tracking-display)] text-celestial-fg">
                {data.overviewTitle}
              </h2>
            ) : null}
            <MetaRow meta={data.meta} />
            {data.meta.responsibilities ? (
              <CelestialProse className="mt-6 max-w-[52rem]">
                <p className="celestial-eyebrow">My Responsibilities</p>
                <ProseLine className="mt-2">{data.meta.responsibilities}</ProseLine>
              </CelestialProse>
            ) : null}
            {data.meta.focusAreas ? (
              <CelestialProse className="mt-5 max-w-[52rem]">
                <p className="celestial-eyebrow">Focus Areas</p>
                <ProseLine className="mt-2">{data.meta.focusAreas}</ProseLine>
              </CelestialProse>
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
              <h2 className="mt-[clamp(1.75rem,5vw,2.75rem)] text-[clamp(1.35rem,3vw,1.875rem)] font-semibold tracking-[var(--tracking-display)] text-celestial-fg">
                {section.title}
              </h2>

              {section.content?.length ? (
                <SectionContent blocks={section.content} />
              ) : null}

              {section.layout === "split" &&
              section.paragraphs?.length &&
              section.images?.length ? (
                <div className="mt-6 grid max-w-[52rem] gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                  <CelestialProse>
                    {section.paragraphs.map((p) => (
                      <ProseLine key={p}>{p}</ProseLine>
                    ))}
                  </CelestialProse>
                  <StudyImageGroup images={section.images} className="lg:pt-1" />
                </div>
              ) : section.paragraphs?.length ? (
                section.steps?.length ? (
                  <CelestialProse className="mt-4 max-w-[52rem]">
                    <ProseLine>{section.paragraphs[0]}</ProseLine>
                  </CelestialProse>
                ) : (
                  <CelestialProse className="mt-4 max-w-[52rem]">
                    {section.paragraphs.map((p) => (
                      <ProseLine key={p}>{p}</ProseLine>
                    ))}
                    {section.numberedList ? (
                      <div>
                        <ProseLine>{section.numberedList.intro}</ProseLine>
                        <ol className="prose-line mt-2 list-decimal space-y-2 pl-5">
                          {section.numberedList.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      </div>
                    ) : null}
                    {section.closingParagraphs?.map((p) => (
                      <ProseLine key={p}>{p}</ProseLine>
                    ))}
                  </CelestialProse>
                )
              ) : section.numberedList || section.closingParagraphs?.length ? (
                <CelestialProse className="mt-4 max-w-[52rem]">
                  {section.numberedList ? (
                    <div>
                      <ProseLine>{section.numberedList.intro}</ProseLine>
                      <ol className="prose-line mt-2 list-decimal space-y-2 pl-5">
                        {section.numberedList.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  ) : null}
                  {section.closingParagraphs?.map((p) => (
                    <ProseLine key={p}>{p}</ProseLine>
                  ))}
                </CelestialProse>
              ) : null}

              {section.steps?.length ? (
                <>
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
                  {section.paragraphs && section.paragraphs.length > 1 ? (
                    <CelestialProse className="mt-6 max-w-[52rem]">
                      {section.paragraphs.slice(1).map((p) => (
                        <ProseLine key={p}>{p}</ProseLine>
                      ))}
                    </CelestialProse>
                  ) : null}
                </>
              ) : null}

              {section.principles?.length ? (
                <CelestialProse className="mt-6 max-w-[52rem]">
                  {section.principles.map((p) => (
                    <div key={p.title}>
                      <p className="font-semibold text-celestial-fg">{p.title}</p>
                      <ProseLine className="mt-1">{p.body}</ProseLine>
                    </div>
                  ))}
                </CelestialProse>
              ) : null}

              {section.cards?.length ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {section.cards.map((card) => (
                    <div
                      key={card.title}
                      className="celestial-glass rounded-[18px] p-5"
                    >
                      <p className="font-semibold text-celestial-fg">{card.title}</p>
                      <p className="mt-2 text-[var(--text-body)] leading-[1.55] text-celestial-muted">
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.items?.length ? (
                <div className="mt-6 space-y-6">
                  {section.items.map((item) => (
                    <div key={item.title}>
                      <div className="max-w-[52rem]">
                        <p className="font-semibold text-celestial-fg">{item.title}</p>
                        {Array.isArray(item.body) ? (
                          <CelestialProse className="mt-2">
                            {item.body.map((p) => (
                              <ProseLine key={p}>{p}</ProseLine>
                            ))}
                          </CelestialProse>
                        ) : (
                          <ProseLine className="mt-2">{item.body}</ProseLine>
                        )}
                      </div>
                      {item.images?.length ? (
                        <ItemImages
                          images={item.images}
                          layout={item.imageLayout}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}

              {section.numberedCards?.length ? (
                <NumberedCards items={section.numberedCards} />
              ) : null}

              {section.layout !== "split" && section.images?.length ? (
                <StudyImageGroup
                  images={section.images}
                  layout={section.imageLayout}
                  className="mt-6"
                />
              ) : null}

              {section.metrics?.length ? (
                <MetricsGrid metrics={section.metrics} />
              ) : null}
            </article>
          ))}

          {data.metrics?.length ? (
            <article className="motion-reveal pt-[clamp(1.75rem,5vw,2.75rem)]">
              <SectionRule />
              <h2 className="mt-[clamp(1.75rem,5vw,2.75rem)] text-[clamp(1.35rem,3vw,1.875rem)] font-semibold tracking-[var(--tracking-display)] text-celestial-fg">
                Impact
              </h2>
              <MetricsGrid metrics={data.metrics} />
            </article>
          ) : null}
        </MotionRevealGroup>
      </CaseStudyCelestial>
    </CaseStudyLightboxRoot>
  );
}
