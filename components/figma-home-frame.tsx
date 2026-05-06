import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

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
    image: "/figma/card-zapp.png",
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
    <article className="rounded-[30px] bg-[rgba(243,135,171,0.2)] px-[22px] py-[22px]">
      <div
        className="relative h-[247px] overflow-hidden rounded-[20px]"
        style={{ background: fallback }}
      >
        <Image
          src={image}
          alt={title}
          width={1024}
          height={243}
          className="h-full w-full object-fill"
          sizes="1043px"
        />
      </div>
      <h3 className="mt-8 text-[48px] leading-[1.02] font-bold">{title}</h3>
      <p className="mt-3 text-[16px] leading-[1.7] text-[#4c4c4c]">{summary}</p>
      <Link
        href={`/work/${slug}`}
        className="mt-4 inline-flex rounded-[96px] border border-black/20 bg-white px-6 py-2 text-[16px] font-semibold"
      >
        View Project ↗
      </Link>
    </article>
  );
}

export function FigmaHomeFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <div className="w-full">
        <FigmaHeader />

        <section className="w-full bg-linear-to-r from-[#ffe8ee] via-[#f6e8f3] to-[#e5e2ef]">
          <div className="mx-auto max-w-[1148px] px-5 pb-[120px] pt-[88px]">
            <p className="text-[32px] leading-[1.1] font-semibold">👋 UI/UX Designer &amp; Product Strategist</p>
            <h1 className="mt-8 max-w-[1094px] text-[55px] leading-[1] font-extrabold tracking-[-0.02em]">
              Designing human experiences that matter✨
            </h1>
            <p className="mt-8 max-w-[992px] text-[28px] leading-[1.36] text-[#222222]">
              I craft experiences where clarity meets emotion and turn complex ideas into intuitive products users love and businesses trust.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1148px] px-5 pb-[90px] pt-[90px]">
          <div className="mb-[44px] border-b border-black pb-4">
            <h2 className="text-[50px] font-semibold">🖼️ Featured Work</h2>
          </div>
          <div className="space-y-[32px]">
            {featured.map((item) => (
              <FeaturedCard key={item.slug} {...item} />
            ))}
          </div>
        </section>

        <FigmaFooter />
      </div>
    </div>
  );
}
