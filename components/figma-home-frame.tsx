import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";
import { FigmaPinkDivider } from "@/components/figma-pink-divider";

const featured = [
  {
    slug: "akshar-packs",
    title: "Akshar Packaging",
    summary:
      "Packaging platform redesign focused on product clarity and faster business inquiries.",
    image: "/figma/card-akshar-hero.png",
    fallback: "linear-gradient(135deg,#f2d6c8,#eadfd7)",
  },
  {
    slug: "zapp-wallet",
    title: "Zapp Wallet",
    summary:
      "Wallet experience designed to keep payments seamless, secure, and confidence-building.",
    image: "/figma/zapp-hero.png",
    fallback: "linear-gradient(135deg,#d9b2f3,#c794ec)",
  },
  {
    slug: "georges-pizza",
    title: "George’s Pizza & Steakhouse",
    summary:
      "Restaurant UX redesign that improved menu exploration and direct ordering decisions.",
    image: "/figma/card-georges-hero.png",
    fallback: "linear-gradient(135deg,#e7d2bf,#d4b7a1)",
  },
  {
    slug: "tripon",
    title: "TripOn",
    summary:
      "Travel product flow created to connect planning and booking in one clear journey.",
    image: "/figma/card-tripon-hero.png",
    fallback: "linear-gradient(135deg,#8fd4ff,#47aee8)",
  },
  {
    slug: "easygo",
    title: "EasyGo",
    summary:
      "Mobility booking interface tuned for speed, reliability, and low-friction actions.",
    image: "/figma/card-easygo-hero.png",
    fallback: "linear-gradient(135deg,#96e6a2,#57ce73)",
  },
];

function FeaturedCard({
  title,
  summary,
  slug,
  image,
  fallback,
}: (typeof featured)[number]) {
  return (
    <article className="rounded-[clamp(22px,2.1vw,30px)] bg-[rgba(243,135,171,0.2)] px-[clamp(14px,1.6vw,22px)] py-[clamp(14px,1.6vw,22px)]">
      <div
        className="relative h-[clamp(180px,23vw,247px)] overflow-hidden rounded-[clamp(16px,1.4vw,20px)]"
        style={{ background: fallback }}
      >
        <Image
          src={image}
          alt={title}
          width={1024}
          height={243}
          className="h-full w-full object-fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1043px"
        />
      </div>
      <h3 className="mt-[clamp(20px,3.2vw,32px)] text-[clamp(30px,4.2vw,48px)] leading-[1.02] font-bold">{title}</h3>
      <p className="mt-3 text-[clamp(15px,1.2vw,16px)] leading-[1.7] text-[#4c4c4c]">{summary}</p>
      <Link
        href={`/work/${slug}`}
        className="mt-4 inline-flex items-center gap-1 rounded-[96px] border border-black/20 bg-white px-5 py-2 text-[clamp(14px,1.1vw,16px)] font-semibold"
      >
        <span>View Project</span>
        <Image src="/figma/arrow.svg" alt="" width={19} height={19} aria-hidden className="h-[14px] w-[14px]" />
      </Link>
    </article>
  );
}

function HomeHero() {
  return (
    <section className="figma-gradient relative w-full overflow-hidden">
      <div className="figma-shell relative isolate min-h-[clamp(620px,64vw,820px)] pt-[clamp(84px,11vw,154px)] pb-[clamp(64px,10vw,146px)]">
        <Image
          src="/figma/hero-ellipse-2.svg"
          alt=""
          width={125}
          height={108}
          aria-hidden
          className="pointer-events-none absolute left-[clamp(8px,3vw,42px)] top-[clamp(12px,8vw,94px)] h-[clamp(58px,7vw,108px)] w-[clamp(67px,8vw,125px)]"
        />
        <Image
          src="/figma/hero-ellipse-1.svg"
          alt=""
          width={268}
          height={264}
          aria-hidden
          className="pointer-events-none absolute right-[clamp(10px,7vw,94px)] top-[clamp(270px,41vw,378px)] h-[clamp(158px,18vw,264px)] w-[clamp(160px,18.4vw,268px)]"
        />

        <p className="relative z-10 text-[clamp(22px,2.2vw,32px)] leading-[1.1] font-semibold">
          👋 UI/UX Designer &amp; Product Strategist
        </p>

        <div className="relative z-10 mt-[clamp(16px,2vw,30px)] max-w-[min(100%,1094px)] pr-[clamp(12px,4vw,70px)]">
          <h1 className="text-[clamp(44px,4.1vw,55px)] leading-none font-extrabold tracking-[-0.02em]">
            <span className="block whitespace-nowrap">Designing human</span>
            <span className="block whitespace-nowrap">experiences that matter <svg className="ml-2 inline-block align-[-0.06em]" width="45" height="55" viewBox="0 0 45 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.8182 0L34.2409 6.875L28.6364 10L34.2409 13.15L36.8182 20L39.375 13.15L45 10L39.375 6.875M16.3636 7.5L11.25 21.25L0 27.5L11.25 33.75L16.3636 47.5L21.4773 33.75L32.7273 27.5L21.4773 21.25M36.8182 35L34.2409 41.85L28.6364 45L34.2409 48.125L36.8182 55L39.375 48.125L45 45L39.375 41.85" fill="#FFCF4D"/>
</svg>
</span>
          </h1>
        </div>

        <p className="relative z-10 mt-[clamp(22px,2.5vw,36px)] max-w-[58ch] text-[clamp(20px,2vw,28px)] leading-[1.36] text-[#222222]">
          I craft experiences where clarity meets emotion and turn complex ideas into intuitive products users love and businesses trust.
        </p>

        <Link
          href="#featured"
          className="absolute bottom-[clamp(22px,3vw,36px)] left-1/2 z-10 inline-flex h-16 w-16 -translate-x-1/2 items-center justify-center transition-transform duration-300 ease-out hover:-translate-x-1/2 hover:-translate-y-1 focus-visible:outline-none"
          aria-label="Scroll to featured work"
        >
          <Image
            src="/figma/hero-arrow.svg"
            alt=""
            width={28}
            height={173}
            aria-hidden
            className="h-full w-full animate-bounce"
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

      <section id="featured" className="figma-shell scroll-mt-[130px] pb-[clamp(60px,6vw,90px)] pt-[clamp(54px,6vw,90px)]">
        <div className="mb-[clamp(20px,2.6vw,32px)] border-b border-separator pb-4">
          <h2 className="text-[clamp(36px,4.2vw,50px)] font-semibold">🖼️ Featured Work</h2>
        </div>
        <div>
          {featured.map((item, index) => (
            <div key={item.slug}>
              <FeaturedCard {...item} />
              {index < featured.length - 1 ? <FigmaPinkDivider /> : null}
            </div>
          ))}
        </div>
      </section>

      <FigmaFooter />
    </div>
  );
}
