import Link from "next/link";
import Image from "next/image";

export function FigmaHeader() {
  return (
    <header className="sticky top-0 z-30 w-full">
      <div className="w-full bg-[rgba(243,135,171,0.2)] backdrop-blur-xl">
        <div className="figma-shell flex min-h-[88px] flex-wrap items-center justify-between gap-3 py-4 md:h-[109px] md:py-0">
          <Link href="/" className="flex items-center gap-2.5 text-[clamp(22px,1.8vw,26px)] leading-none font-bold">
            <span>Riya Patel</span>
            <Image
              src="/figma/nav-tulip.svg"
              alt=""
              width={28}
              height={33}
              aria-hidden
              className="h-[33px] w-[28px]"
            />
          </Link>
          <nav className="flex w-full items-center justify-end gap-1 text-[clamp(16px,1.4vw,24px)] font-bold leading-none sm:w-auto">
            <Link href="/work" className="px-2 py-2 md:px-[18px] md:py-[9px]">
              Work
            </Link>
            <Link href="/about" className="px-2 py-2 md:px-[20px] md:py-[12px]">
              About
            </Link>
            <Link
              href="/contact"
              className="ml-2 rounded-[86px] bg-[#f387ab] px-4 py-2 text-[clamp(16px,1.25vw,20px)] text-black md:ml-[42px] md:px-[26px] md:py-[10px]"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function FigmaFooter() {
  return (
    <footer className="figma-gradient w-full">
      <div className="figma-shell py-[clamp(44px,5vw,70px)]">
        <h3 className="text-[clamp(36px,4.2vw,60px)] leading-[1.1]">Let&apos;s build something that matters.</h3>
        <p className="mt-4 max-w-[680px] text-[clamp(18px,2vw,28px)] leading-[1.35]">
          Got an idea, a project, or just want to chat about design? I&apos;m all ears (and coffee ☕) 👇
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-[clamp(18px,1.7vw,24px)]">
          <a href="mailto:hello@riyadesigns.studio" className="inline-flex items-center gap-1">
            <span>Email Me</span>
            <Image src="/figma/arrow.svg" alt="" width={19} height={19} aria-hidden className="h-[16px] w-[16px]" />
          </a>
          <span>|</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
            <span>Linkedin</span>
            <Image src="/figma/arrow.svg" alt="" width={19} height={19} aria-hidden className="h-[16px] w-[16px]" />
          </a>
        </div>
        <p className="mt-10 text-[13px] font-light">Designed &amp; crafted by Riya Patel ♥ © 2026</p>
      </div>
    </footer>
  );
}
