import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  summary: string;
  accent: string;
  thumbnail: string;
};

export function ProjectCard({
  slug,
  title,
  summary,
  accent,
  thumbnail,
}: ProjectCardProps) {
  return (
    <article className="motion-card rounded-[clamp(24px,2vw,30px)] border border-line bg-surface p-[clamp(16px,4vw,24px)] md:p-8">
      <div className="motion-card-media relative h-[clamp(180px,23vw,247px)] overflow-hidden rounded-[clamp(16px,1.4vw,20px)]">
        <div className="absolute inset-0" style={{ background: accent }} aria-hidden />
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1005px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-5 text-[clamp(28px,4vw,44px)] leading-[1.05] font-bold">{title}</h3>
      <p className="mt-2 text-[clamp(15px,3.6vw,16px)] leading-[1.7] text-muted">{summary}</p>
      <Link
        href={`/work/${slug}`}
        className="motion-cta mt-4 inline-flex items-center gap-1 rounded-full border border-black/20 bg-white px-5 py-2 text-[clamp(14px,1.1vw,16px)] font-semibold"
      >
        <span>View Project</span>
        <Image src="/figma/arrow.svg" alt="" width={19} height={19} aria-hidden className="h-[14px] w-[14px]" />
      </Link>
    </article>
  );
}
