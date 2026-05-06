import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    slug: "akshar-packs",
    title: "Akshar Packaging",
    summary:
      "Packaging platform redesign focused on product clarity and faster business inquiries.",
    image: "/figma/card-akshar.png",
    fallback: "linear-gradient(135deg,#f2d6c8,#eadfd7)",
  },
  {
    slug: "zapp-wallet",
    title: "Zapp Wallet",
    summary:
      "Wallet experience designed to keep payments seamless, secure, and confidence-building.",
    image: "/figma/home-card-zapp.png",
    fallback: "linear-gradient(135deg,#d9b2f3,#c794ec)",
  },
  {
    slug: "georges-pizza",
    title: "George’s Pizza & Steakhouse",
    summary:
      "Restaurant UX redesign that improved menu exploration and direct ordering decisions.",
    image: "/figma/card-georges.png",
    fallback: "linear-gradient(135deg,#e7d2bf,#d4b7a1)",
  },
  {
    slug: "tripon",
    title: "TripOn",
    summary:
      "Travel product flow created to connect planning and booking in one clear journey.",
    image: "/figma/card-tripon.png",
    fallback: "linear-gradient(135deg,#8fd4ff,#47aee8)",
  },
  {
    slug: "easygo",
    title: "EasyGo",
    summary:
      "Mobility booking interface tuned for speed, reliability, and low-friction actions.",
    image: "/figma/card-easygo.png",
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
    <article className="rounded-2xl border border-line bg-[#fdeff4] px-4 py-4 md:px-6 md:py-5">
      <div
        className="relative h-[180px] overflow-hidden rounded-xl md:h-[250px]"
        style={{ background: fallback }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 960px"
        />
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted md:text-base">{summary}</p>
      <Link
        href={`/work/${slug}`}
        className="mt-4 inline-flex rounded-full border border-black/20 bg-white px-4 py-2 text-xs font-semibold md:text-sm"
      >
        View Project ↗
      </Link>
    </article>
  );
}

export function FigmaHomeFrame() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6 md:px-10 md:pt-8">
      <section className="rounded-none bg-linear-to-r from-[#ffe4ed] via-[#f8e7f1] to-[#e6e1f0] px-6 py-14 md:rounded-sm md:px-10 md:py-16">
        <p className="text-base font-medium md:text-lg">
          ✨ UI/UX Designer &amp; Product Strategist
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-[56px]">
          Designing human experiences that matter✨
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">
          I craft experiences where clarity meets emotion and turn complex ideas into
          intuitive products users love and businesses trust.
        </p>
      </section>

      <section className="mt-10">
        <div className="mb-7 border-b border-black pb-2">
          <h2 className="text-3xl font-semibold">🖼️ Featured Work</h2>
        </div>
        <div className="space-y-7">
          {featured.map((item) => (
            <FeaturedCard key={item.slug} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
