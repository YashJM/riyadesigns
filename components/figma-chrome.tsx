import Link from "next/link";

export function FigmaHeader() {
  return (
    <header className="h-[109px] w-full bg-[rgba(243,135,171,0.2)]">
      <div className="mx-auto flex h-full w-full max-w-[1148px] items-center justify-between px-5">
        <Link href="/" className="text-[26px] font-bold">
          Riya Patel 🌷
        </Link>
        <nav className="flex items-center gap-10 text-[24px] font-bold">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="rounded-[86px] bg-[#f387ab] px-6 py-2 text-[20px]">
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function FigmaFooter() {
  return (
    <footer className="w-full bg-linear-to-r from-[#e9e2f5] via-[#ffe5e5] to-[#e7e1f5]">
      <div className="mx-auto max-w-[1148px] px-5 py-[70px]">
        <h3 className="text-[60px] leading-[1.1]">Let&apos;s build something that matters.</h3>
        <p className="mt-4 max-w-[680px] text-[28px] leading-[1.35]">
          Got an idea, a project, or just want to chat about design? I&apos;m all ears (and coffee ☕) 👇
        </p>
        <div className="mt-6 flex items-center gap-4 text-[24px]">
          <a href="mailto:hello@riyadesigns.studio">Email Me ↗</a>
          <span>|</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            Linkedin ↗
          </a>
        </div>
        <p className="mt-10 text-[13px] font-light">Designed &amp; crafted by Riya Patel ♥ © 2026</p>
      </div>
    </footer>
  );
}
