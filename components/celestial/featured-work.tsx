import Image from "next/image";
import Link from "next/link";
import { Tilt } from "@/components/celestial/tilt";
import { MotionReveal } from "@/components/motion/reveal";
import {
  PROJECT_LISTING_SUMMARY,
  PROJECT_LISTING_VISUALS,
} from "@/lib/project-listing-visuals";

const featuredMeta = [
  { slug: "akshar-packs", title: "Akshar Packaging" },
  { slug: "zapp-wallet", title: "Zapp Wallet" },
  { slug: "georges-pizza", title: "George’s Pizza & Steakhouse" },
  { slug: "tripon", title: "TripOn" },
] as const;

const featured = featuredMeta.map((item) => {
  const visuals = PROJECT_LISTING_VISUALS[item.slug];
  const summary = PROJECT_LISTING_SUMMARY[item.slug];
  if (!visuals) throw new Error(`Missing PROJECT_LISTING_VISUALS for: ${item.slug}`);
  if (!summary) throw new Error(`Missing PROJECT_LISTING_SUMMARY for: ${item.slug}`);
  return { ...item, summary, image: visuals.thumbnail, fallback: visuals.accent };
});

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

function FeaturedCard({
  title,
  summary,
  slug,
  image,
  fallback,
  index,
}: (typeof featured)[number] & { index: number }) {
  return (
    <Link
      href={`/work/${slug}`}
      className="celestial-card group flex h-full flex-col overflow-hidden rounded-[26px] p-3"
    >
      <div
        className="celestial-card-media relative aspect-[16/10] overflow-hidden rounded-[18px]"
        style={{ background: fallback }}
      >
        <Image
          src={image}
          alt={title}
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
        <h3 className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold tracking-tight text-celestial-fg">
          {title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-[15px] leading-[1.6] text-celestial-muted">
          {summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-hi">
          View Project
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export function FeaturedWork() {
  return (
    <section
      id="featured"
      className="relative z-10 mx-auto w-full max-w-[var(--content-max)] scroll-mt-24 px-[max(1.25rem,env(safe-area-inset-left))] py-[clamp(4rem,10vw,7rem)]"
    >
      <MotionReveal className="flex items-end justify-between gap-6 border-b border-[var(--celestial-line)] pb-6">
        <div>
          <p className="celestial-mono text-[11px] text-amber">Selected Work</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-celestial-fg">
            Featured Case Studies
          </h2>
        </div>
        <Link
          href="/work"
          className="celestial-nav-link hidden shrink-0 pb-1 text-sm font-medium text-celestial-muted transition-colors hover:text-celestial-fg sm:block"
        >
          View all
        </Link>
      </MotionReveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {featured.map((item, index) => (
          <MotionReveal key={item.slug} delay={index * 80}>
            <Tilt className="h-full">
              <FeaturedCard {...item} index={index} />
            </Tilt>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
