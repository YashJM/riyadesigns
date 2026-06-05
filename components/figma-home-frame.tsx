import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";
import { FigmaPinkDivider } from "@/components/figma-pink-divider";
import { MotionFadeIn } from "@/components/motion/fade-in";
import { MotionReveal } from "@/components/motion/reveal";
import { PROJECT_LISTING_SUMMARY, PROJECT_LISTING_VISUALS } from "@/lib/project-listing-visuals";

const featuredMeta = [
  { slug: "akshar-packs", title: "Akshar Packaging" },
  { slug: "zapp-wallet", title: "Zapp Wallet" },
  { slug: "georges-pizza", title: "George’s Pizza & Steakhouse" },
  { slug: "tripon", title: "TripOn" },
] as const;

const featured = featuredMeta.map((item) => {
  const visuals = PROJECT_LISTING_VISUALS[item.slug];
  const summary = PROJECT_LISTING_SUMMARY[item.slug];
  if (!visuals) {
    throw new Error(`Missing PROJECT_LISTING_VISUALS for slug: ${item.slug}`);
  }
  if (!summary) {
    throw new Error(`Missing PROJECT_LISTING_SUMMARY for slug: ${item.slug}`);
  }
  return {
    ...item,
    summary,
    image: visuals.thumbnail,
    fallback: visuals.accent,
  };
});

function FeaturedCard({
  title,
  summary,
  slug,
  image,
  fallback,
}: (typeof featured)[number]) {
  return (
    <article className="motion-card rounded-[clamp(22px,2.1vw,30px)] bg-[rgba(243,135,171,0.2)] px-[clamp(16px,4vw,22px)] py-[clamp(18px,4vw,24px)] md:px-[clamp(14px,1.6vw,22px)] md:py-[clamp(14px,1.6vw,22px)]">
      <div
        className="motion-card-media relative h-[clamp(180px,23vw,247px)] overflow-hidden rounded-[clamp(16px,1.4vw,20px)]"
        style={{ background: fallback }}
      >
        <Image
          src={image}
          alt={title}
          width={1024}
          height={243}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1043px"
        />
      </div>
      <h3 className="mt-[clamp(20px,3.2vw,32px)] text-[clamp(30px,4.2vw,48px)] leading-[1.02] font-bold">{title}</h3>
      <p className="mt-3 min-w-0 text-[clamp(15px,3.8vw,18px)] leading-[1.65] text-[#4c4c4c]">{summary}</p>
      <Link
        href={`/work/${slug}`}
        className="motion-cta mt-4 inline-flex items-center gap-1 rounded-[96px] border border-black/20 bg-white px-5 py-2 text-[clamp(14px,1.1vw,16px)] font-semibold"
      >
        <span>View Project</span>
        <Image src="/figma/arrow.svg" alt="" width={19} height={19} aria-hidden className="h-[14px] w-[14px]" />
      </Link>
    </article>
  );
}

function HomeHero() {
  return (
    <section className="figma-gradient motion-gradient-live relative w-full overflow-hidden">
      <div className="figma-shell relative isolate min-h-[min(100svh,760px)] pb-[var(--space-hero-pad-bottom)] pt-[var(--space-hero-pad-top)] md:min-h-[clamp(620px,64vw,820px)] md:pb-[clamp(4rem,10vw,9.125rem)] md:pt-[clamp(5.25rem,11vw,9.625rem)]">
        <Image
          src="/figma/hero-ellipse-2.svg"
          alt=""
          width={125}
          height={108}
          aria-hidden
          className="motion-hero-float pointer-events-none absolute left-[max(4px,env(safe-area-inset-left))] top-[clamp(48px,12vw,94px)] h-[clamp(48px,12vw,108px)] w-[clamp(52px,14vw,125px)] md:left-[clamp(8px,3vw,42px)]"
        />
        <Image
          src="/figma/hero-ellipse-1.svg"
          alt=""
          width={268}
          height={264}
          aria-hidden
          className="motion-hero-float-delayed pointer-events-none absolute right-[max(4px,env(safe-area-inset-right))] top-[clamp(200px,58vw,378px)] h-[clamp(100px,32vw,264px)] w-[clamp(102px,34vw,268px)] md:right-[clamp(10px,7vw,94px)] md:top-[clamp(270px,41vw,378px)]"
        />

        <MotionFadeIn className="relative z-10 max-w-full text-[clamp(18px,4.6vw,32px)] leading-[1.15] font-semibold">
          👋 UI/UX Designer &amp; Product Strategist
        </MotionFadeIn>

        <MotionFadeIn delay={80} className="relative z-10 mt-[clamp(14px,3vw,30px)] max-w-[min(100%,1094px)]">
          <h1 className="text-[clamp(2rem,10.5vw,3.45rem)] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[clamp(2.25rem,7vw,3.45rem)] md:leading-none">
            <span className="block">Designing human</span>
            <span className="inline-block max-w-full">
              experiences that matter{" "}
              <svg
                className="ml-1 inline-block align-[-0.06em] h-[1em] w-[0.82em] max-sm:translate-y-px sm:h-[55px] sm:w-[45px]"
                viewBox="0 0 45 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M36.8182 0L34.2409 6.875L28.6364 10L34.2409 13.15L36.8182 20L39.375 13.15L45 10L39.375 6.875M16.3636 7.5L11.25 21.25L0 27.5L11.25 33.75L16.3636 47.5L21.4773 33.75L32.7273 27.5L21.4773 21.25M36.8182 35L34.2409 41.85L28.6364 45L34.2409 48.125L36.8182 55L39.375 48.125L45 45L39.375 41.85"
                  fill="#FFCF4D"
                />
              </svg>
            </span>
          </h1>
        </MotionFadeIn>

        <MotionFadeIn
          delay={160}
          className="relative z-10 mt-[clamp(18px,4vw,36px)] max-w-[min(100%,58ch)] text-[clamp(16px,4.2vw,28px)] leading-[1.36] text-[#222222]"
        >
          I craft experiences where clarity meets emotion and turn complex ideas into intuitive products users love and
          businesses trust.
        </MotionFadeIn>

        <Link
          href="#featured"
          className="motion-safe:animate-bounce absolute bottom-[max(12px,env(safe-area-inset-bottom))] left-1/2 z-10 inline-flex h-14 w-14 -translate-x-1/2 items-center justify-center transition-transform duration-300 ease-[var(--ease-premium)] hover:-translate-x-1/2 hover:-translate-y-1 focus-visible:outline-none sm:h-16 sm:w-16 md:bottom-[clamp(22px,3vw,36px)]"
          aria-label="Scroll to featured work"
        >
          <Image
            src="/figma/hero-arrow.svg"
            alt=""
            width={28}
            height={173}
            aria-hidden
            className="h-full w-full"
          />
        </Link>
      </div>
    </section>
  );
}

export function FigmaHomeFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />
      <HomeHero />

      <section
        id="featured"
        className="figma-shell scroll-mt-[calc(4.5rem+env(safe-area-inset-top))] pb-[var(--space-content-pad-bottom)] pt-[var(--space-content-pad-top)] md:scroll-mt-[7.5rem]"
      >
        <MotionReveal className="mb-[clamp(1.25rem,4vw,2rem)] border-b border-separator pb-[clamp(1rem,3vw,1.25rem)]">
          <h2 className="text-[clamp(30px,7vw,50px)] font-semibold md:text-[clamp(36px,4.2vw,50px)]">
            🖼️ Featured Work
          </h2>
        </MotionReveal>
        <div className="flex flex-col gap-[var(--space-stack-gap)]">
          {featured.flatMap((item, index) => {
            const block = [
              <MotionReveal key={item.slug} delay={index * 90}>
                <FeaturedCard {...item} />
              </MotionReveal>,
            ];
            if (index < featured.length - 1) {
              block.push(<FigmaPinkDivider key={`${item.slug}-div`} />);
            }
            return block;
          })}
        </div>
      </section>

      <FigmaFooter />
    </div>
  );
}
