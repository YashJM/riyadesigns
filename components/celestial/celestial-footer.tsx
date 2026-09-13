import { DownloadIcon } from "@/components/celestial/download-icon";
import { Magnetic } from "@/components/celestial/magnetic";
import { MotionReveal } from "@/components/motion/reveal";
import { HOME_FOOTER } from "@/lib/home-content";
import { RESUME } from "@/lib/resume";

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
        <h2 className="mx-auto max-w-[22ch] text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-[var(--tracking-display)] text-celestial-fg">
          {HOME_FOOTER.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-[clamp(1rem,2.4vw,1.25rem)] leading-[1.55] text-celestial-muted">
          {HOME_FOOTER.body}
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
          <Magnetic as="span" strength={0.4}>
            <a
              href={RESUME.href}
              download={RESUME.downloadName}
              aria-label={RESUME.ariaLabel}
              className="celestial-glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold text-celestial-fg transition-colors hover:text-amber-hi"
            >
              {RESUME.label}
              <DownloadIcon size={16} />
            </a>
          </Magnetic>
        </div>
      </MotionReveal>

      <div className="mt-10 border-t border-[var(--celestial-line)] pt-8 text-center">
        <p className="font-support text-[13px] font-light text-celestial-muted">
          {HOME_FOOTER.copyright}
        </p>
        <p className="mt-2 font-support text-[12px] font-light text-celestial-faint">
          Built by{" "}
          <a
            href="https://nevilpatel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-celestial-muted underline decoration-[var(--celestial-line)] underline-offset-2 transition-colors hover:text-amber-hi"
          >
            Nevilpatel.com
          </a>
        </p>
      </div>
    </footer>
  );
}
