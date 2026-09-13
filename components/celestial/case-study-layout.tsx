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

function ArrowRightSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 text-amber">
      <path
        d="M2 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownSmall() {
  return (
    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden className="mb-2 text-amber">
      <path
        d="M7 1V15M7 15L2 10M7 15L12 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Rough per-character width estimate (13px mono-ish label + pill padding + number badge). */
function estimateStepBoxWidth(label: string) {
  return label.length * 7.4 + 56;
}

/**
 * Connected flow diagram — boxes linked by right-arrows within a row and a
 * down-arrow between rows. Each row is indented to start under the previous
 * row's last box (estimated from label length, not measured DOM), which is
 * an approximation but reads correctly as a directional journey.
 */
function FlowDiagram({ rows }: { rows: string[][] }) {
  const rowIndents: number[] = [0];
  for (let r = 0; r < rows.length - 1; r++) {
    let cursor = rowIndents[r];
    let lastBoxStart = cursor;
    for (const step of rows[r]) {
      lastBoxStart = cursor;
      cursor += estimateStepBoxWidth(step) + 34;
    }
    rowIndents.push(lastBoxStart);
  }

  let counter = 0;

  return (
    <div className="mt-6 flex flex-col gap-2">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ marginLeft: `${rowIndents[rowIndex]}px` }}>
          {rowIndex > 0 ? <ArrowDownSmall /> : null}
          <div className="flex flex-wrap items-center gap-2">
            {row.map((step, i) => {
              counter += 1;
              return (
                <div key={step} className="flex items-center gap-2">
                  {i > 0 ? <ArrowRightSmall /> : null}
                  <span className="celestial-glass shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[13px] text-celestial-fg">
                    <span className="celestial-mono mr-2 text-[10px] text-amber">
                      {String(counter).padStart(2, "0")}
                    </span>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
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

function BeforeAfterCaption() {
  return (
    <div className="mt-6 flex items-center justify-center gap-4 text-[clamp(1.1rem,2.4vw,1.375rem)] font-bold text-celestial-fg">
      <span>Before</span>
      <svg width="64" height="16" viewBox="0 0 64 16" fill="none" aria-hidden className="shrink-0 text-celestial-muted">
        <path
          d="M1 8H58M58 8L50 1M58 8L50 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>After</span>
    </div>
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
  // Metrics that carry a description need room to read, so they get wider,
  // left-aligned cards that wrap two-up. Bare stat tiles stay compact and centered.
  const detailed = metrics.some((metric) => metric.description);

  if (detailed) {
    return (
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="celestial-glass flex min-w-[260px] max-w-[480px] flex-[1_1_calc(50%-0.5rem)] flex-col rounded-[18px] px-5 py-6"
          >
            <p className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] text-celestial-fg">
              {metric.value}
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-[1.4] text-celestial-fg">
              {metric.label}
            </p>
            {metric.description ? (
              <p className="mt-2 text-[13px] leading-[1.5] text-celestial-faint">
                {metric.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="celestial-glass flex w-[calc(50%-0.5rem)] min-w-[180px] max-w-[240px] flex-1 flex-col items-center justify-center rounded-[18px] px-4 py-6 text-center sm:w-[200px] sm:flex-none"
        >
          <p className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-celestial-fg">
            {metric.value}
          </p>
          <p className="mt-2 text-[14px] font-medium text-celestial-muted">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function SectionCards({
  cards,
  layout = "grid",
}: {
  cards: { title: string; body: string }[];
  layout?: "grid" | "stack";
}) {
  if (layout === "stack") {
    return (
      <div className="flex flex-col gap-3">
        {cards.map((card) => (
          <div key={card.title} className="celestial-glass rounded-[14px] px-5 py-4">
            <p className="text-[var(--text-body)] leading-[1.55] text-celestial-muted">
              <span className="font-semibold text-celestial-fg">{card.title} – </span>
              {card.body}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <div key={card.title} className="celestial-glass rounded-[18px] p-5">
          <p className="font-semibold text-celestial-fg">{card.title}</p>
          <p
            className="mt-2 whitespace-pre-line text-[var(--text-body)] leading-[1.55] text-celestial-muted"
          >
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
            <CelestialProse key={i}>
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
        if (block.kind === "list") {
          return (
            <ul
              key={i}
              className="prose-line list-disc space-y-2 pl-5 text-[var(--text-body)] leading-[1.55] text-celestial-muted marker:text-celestial-faint"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
            <p className="mt-4 text-[clamp(1.1rem,2.4vw,1.5rem)] font-semibold leading-[1.45] text-celestial-fg/90">
              {data.subtitle}
            </p>
            {data.tagline ? (
              <p className="mt-2 text-[clamp(1rem,2vw,1.25rem)] font-medium italic leading-[1.45] text-celestial-muted">
                {data.tagline}
              </p>
            ) : null}
            <CelestialProse lead className="mt-6">
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
              <CelestialProse className="mt-6">
                <p className="celestial-eyebrow">My Responsibilities</p>
                <ProseLine className="mt-2">{data.meta.responsibilities}</ProseLine>
              </CelestialProse>
            ) : null}
            {data.meta.focusAreas ? (
              <CelestialProse className="mt-5">
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
                <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                  <CelestialProse>
                    {section.paragraphs.map((p) => (
                      <ProseLine key={p}>{p}</ProseLine>
                    ))}
                  </CelestialProse>
                  <StudyImageGroup images={section.images} className="lg:pt-1" />
                </div>
              ) : section.paragraphs?.length ? (
                section.steps?.length || section.flow?.length ? (
                  <CelestialProse className="mt-4">
                    <ProseLine>{section.paragraphs[0]}</ProseLine>
                  </CelestialProse>
                ) : (
                  <CelestialProse className="mt-4">
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
                <CelestialProse className="mt-4">
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

              {section.flow?.length ? (
                <>
                  <FlowDiagram rows={section.flow} />
                  {section.paragraphs && section.paragraphs.length > 1 ? (
                    <CelestialProse className="mt-6">
                      {section.paragraphs.slice(1).map((p) => (
                        <ProseLine key={p}>{p}</ProseLine>
                      ))}
                    </CelestialProse>
                  ) : null}
                </>
              ) : section.steps?.length ? (
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
                    <CelestialProse className="mt-6">
                      {section.paragraphs.slice(1).map((p) => (
                        <ProseLine key={p}>{p}</ProseLine>
                      ))}
                    </CelestialProse>
                  ) : null}
                </>
              ) : null}

              {section.principles?.length ? (
                <CelestialProse className="mt-6">
                  {section.principles.map((p) => (
                    <div key={p.title}>
                      <p className="font-semibold text-celestial-fg">{p.title}</p>
                      <ProseLine className="mt-1">{p.body}</ProseLine>
                    </div>
                  ))}
                </CelestialProse>
              ) : null}

              {section.cards?.length ? (
                <div className="mt-6">
                  <SectionCards cards={section.cards} layout={section.cardLayout} />
                </div>
              ) : null}

              {section.items?.length ? (
                <div className="mt-6 space-y-6">
                  {section.items.map((item) => (
                    <div key={item.title}>
                      <div>
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
                      {item.beforeAfter ? <BeforeAfterCaption /> : null}
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

              {section.metricsFootnote ? (
                <CelestialProse className="mt-6">
                  <ProseLine>{section.metricsFootnote}</ProseLine>
                </CelestialProse>
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
