import { Magnetic } from "@/components/celestial/magnetic";
import { MotionReveal } from "@/components/motion/reveal";

function ArrowUpRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CelestialFooter() {
  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto w-full max-w-[var(--content-max)] scroll-mt-24 px-[max(1.25rem,env(safe-area-inset-left))] pb-[max(3rem,env(safe-area-inset-bottom))] pt-[clamp(3rem,8vw,5rem)]"
    >
      <MotionReveal className="celestial-glass overflow-hidden rounded-[28px] px-[clamp(1.5rem,5vw,3.5rem)] py-[clamp(2.5rem,7vw,4.5rem)] text-center">
        <p className="celestial-mono text-[11px] text-amber">Let&apos;s Connect</p>
        <h2 className="mx-auto mt-5 max-w-[16ch] text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-celestial-fg">
          Let&apos;s build something that matters.
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-[clamp(1rem,2.4vw,1.25rem)] leading-[1.55] text-celestial-muted">
          Got an idea, a project, or just want to chat about design? I&apos;m all
          ears (and coffee ☕).
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Magnetic as="span" strength={0.4}>
            <a
              href="mailto:designer.riyash@gmail.com"
              className="celestial-cta group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold"
            >
              Email Me
              <ArrowUpRight />
            </a>
          </Magnetic>
          <Magnetic as="span" strength={0.4}>
            <a
              href="https://www.linkedin.com/in/designerriya"
              target="_blank"
              rel="noopener noreferrer"
              className="celestial-glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold text-celestial-fg transition-colors hover:text-amber-hi"
            >
              LinkedIn
              <ArrowUpRight />
            </a>
          </Magnetic>
        </div>
      </MotionReveal>

      <div className="mt-10 flex flex-col items-center gap-2 border-t border-[var(--celestial-line)] pt-8 text-center sm:flex-row sm:justify-between">
        <p className="celestial-mono text-[10px] text-celestial-faint">
          Riya Patel · UI/UX Designer
        </p>
        <p className="font-support text-[13px] font-light text-celestial-muted">
          Designed &amp; crafted by Riya Patel © 2026
        </p>
      </div>
    </footer>
  );
}
