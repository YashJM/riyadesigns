import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-linear-to-r from-[#e9e2f5] via-[#ffe5e5] to-[#e7e1f5]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <h2 className="text-3xl font-semibold md:text-5xl">
          Let&apos;s build something that matters.
        </h2>
        <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
          Got an idea, a project, or just want to chat about design? I&apos;m all
          ears (and coffee) 👇
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm font-semibold md:text-base">
          <a href="mailto:hello@riyadesigns.studio" className="inline-flex items-center gap-1">
            <span>Email Me</span>
            <Image src="/figma/arrow.svg" alt="" width={19} height={19} aria-hidden className="h-[14px] w-[14px]" />
          </a>
          <span className="text-muted">|</span>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1"
          >
            <span>Linkedin</span>
            <Image src="/figma/arrow.svg" alt="" width={19} height={19} aria-hidden className="h-[14px] w-[14px]" />
          </a>
        </div>
        <p className="mt-8 font-support text-xs font-light leading-normal text-muted text-center">
          Designed &amp; crafted by Riya Patel ♥ © 2026
        </p>
      </div>
    </footer>
  );
}
