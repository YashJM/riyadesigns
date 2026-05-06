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
    <article className="rounded-3xl border border-line bg-surface p-5 md:p-8">
      <div className="relative h-36 overflow-hidden rounded-2xl md:h-52">
        <div className="absolute inset-0" style={{ background: accent }} aria-hidden />
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-5 text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-base leading-7 text-muted">{summary}</p>
      <Link
        href={`/work/${slug}`}
        className="mt-4 inline-flex rounded-full border border-black/20 bg-white px-4 py-2 text-sm font-semibold"
      >
        View Project ↗
      </Link>
    </article>
  );
}
