import { StarCompass } from "@/components/celestial/star-compass";
import { HOME_HERO } from "@/lib/home-content";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden px-5 pt-24 pb-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 50% at 30% 48%, rgba(10,14,28,0.72), rgba(10,14,28,0.28) 58%, transparent 78%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--content-max)]">
        <div className="relative flex max-w-[46rem] flex-col text-left">
          <StarCompass className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[128%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-45 md:block" />

          <p
            className="celestial-enter celestial-eyebrow relative text-celestial-muted"
            style={{ "--enter-delay": "80ms" } as React.CSSProperties}
          >
            {HOME_HERO.eyebrow}
          </p>

          <h1
            className="celestial-enter relative mt-6 text-[clamp(2.25rem,6.5vw,3.5rem)] font-bold leading-[1.08] tracking-[var(--tracking-display)] text-celestial-fg"
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
          >
            {HOME_HERO.headline}
          </h1>

          <div
            className="celestial-enter relative left-1/2 mt-6 hidden h-px w-[128%] max-w-none -translate-x-1/2 md:block"
            style={
              {
                background:
                  "linear-gradient(90deg, transparent, rgba(233,240,255,0.16) 12%, rgba(233,240,255,0.16) 88%, transparent)",
                "--enter-delay": "220ms",
              } as React.CSSProperties
            }
            aria-hidden
          >
            <span className="celestial-mono absolute left-0 top-1/2 -translate-x-[calc(100%+0.75rem)] -translate-y-1/2 text-[11px] text-celestial-faint">
              W
            </span>
            <span className="celestial-mono absolute right-0 top-1/2 translate-x-[calc(100%+0.75rem)] -translate-y-1/2 text-[11px] text-celestial-faint">
              E
            </span>
          </div>

          <p
            className="celestial-enter relative mt-5 max-w-[34rem] text-left text-celestial-muted"
            style={
              {
                fontSize: "clamp(0.9375rem, 1.7vw, 1.0625rem)",
                lineHeight: 1.6,
                letterSpacing: "var(--tracking-body)",
                "--enter-delay": "280ms",
              } as React.CSSProperties
            }
          >
            {HOME_HERO.subtitle}
          </p>
        </div>
      </div>

      <a
        href="#featured"
        className="celestial-enter absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-celestial-faint transition-colors hover:text-celestial-muted"
        style={{ "--enter-delay": "600ms" } as React.CSSProperties}
        aria-label="Scroll to featured work"
      >
        <span className="celestial-mono text-[10px]">See the work</span>
        <span className="flex flex-col items-center">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            aria-hidden
            className="celestial-chevron-cue"
            style={{ "--chevron-delay": "0ms" } as React.CSSProperties}
          >
            <path d="M1 1L7 6.5L13 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            aria-hidden
            className="celestial-chevron-cue -mt-1 opacity-60"
            style={{ "--chevron-delay": "220ms" } as React.CSSProperties}
          >
            <path d="M1 1L7 6.5L13 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>

      <span className="celestial-mono absolute bottom-6 right-6 hidden items-center gap-2 text-[10px] text-celestial-faint md:flex">
        <span className="relative flex h-2 w-2">
          <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
        </span>
        Open to work
      </span>
    </section>
  );
}
