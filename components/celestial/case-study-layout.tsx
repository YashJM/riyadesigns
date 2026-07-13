import Image from "next/image";
import {
  CaseStudyImageTrigger,
  CaseStudyLightboxRoot,
} from "@/components/case-study-lightbox";
import { CaseStudyCelestial } from "@/components/celestial/case-study-celestial";
import { CelestialProse, ProseLine } from "@/components/celestial/celestial-prose";
import { MotionFadeIn } from "@/components/motion/fade-in";
import { MotionRevealGroup } from "@/components/motion/reveal";
import type { CaseStudyData, CaseStudyImage } from "@/lib/case-studies/types";

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
      className="overflow-hidden rounded-[18px] border border-[var(--celestial-line)] bg-[#fafafa] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={width}
        height={height}
        className="block h-auto max-w-full object-contain"
        style={{ width: `${width}px`, maxWidth: "100%" }}
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
      {images.map((img) => (
        <StudyImage key={img.src} image={img} />
      ))}
    </div>
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
          <dt className="celestial-eyebrow">
            {row.label}
          </dt>
          <dd className="mt-1 text-[var(--text-body)] leading-[1.5] text-celestial-muted">
            {row.value}
          </dd>
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

export function CelestialCaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <CaseStudyLightboxRoot>
      <CaseStudyCelestial>
        <section className="px-[clamp(1.25rem,4vw,2.5rem)] pb-[clamp(2rem,5vw,3rem)] pt-[clamp(1.5rem,4vw,2.5rem)]">
          <MotionFadeIn>
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[var(--tracking-display)] text-celestial-fg">
              {data.title}
            </h1>
            <p className="mt-4 max-w-[52rem] text-[clamp(1.1rem,2.4vw,1.5rem)] font-semibold leading-[1.45] text-celestial-fg/90">
              {data.subtitle}
            </p>
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
