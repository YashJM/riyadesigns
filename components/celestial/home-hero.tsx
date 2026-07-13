import { StarCompass } from "@/components/celestial/star-compass";
import { HOME_HERO } from "@/lib/home-content";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16 text-center">
      <StarCompass className="pointer-events-none absolute left-1/2 top-[47%] w-[clamp(680px,118vw,1360px)] -translate-x-1/2 -translate-y-1/2 opacity-90" />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(10,14,28,0.72), rgba(10,14,28,0.25) 55%, transparent 78%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex max-w-[52rem] flex-col items-center">
        <p
          className="celestial-enter celestial-eyebrow text-celestial-muted"
          style={{ "--enter-delay": "80ms" } as React.CSSProperties}
        >
          {HOME_HERO.eyebrow}
        </p>

        <h1
          className="celestial-enter mt-6 text-[clamp(2rem,6.5vw,3.5rem)] font-bold leading-[1.08] tracking-[var(--tracking-display)] text-celestial-fg"
          style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        >
          {HOME_HERO.headline}
        </h1>

        <p
          className="celestial-enter celestial-prose celestial-prose-lead mt-6 max-w-[42rem] text-center"
          style={{ "--enter-delay": "280ms" } as React.CSSProperties}
        >
          {HOME_HERO.subtitle}
        </p>
      </div>

      <a
        href="#featured"
        className="celestial-enter absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-celestial-faint transition-colors hover:text-celestial-muted"
        style={{ "--enter-delay": "600ms" } as React.CSSProperties}
        aria-label="Scroll to featured work"
      >
        <span className="celestial-mono text-[10px]">Go Deeper</span>
        <span className="relative flex h-8 w-5 justify-center rounded-full border border-[var(--celestial-line-strong)]">
          <span className="celestial-scroll-dot mt-1.5 h-1.5 w-1.5 rounded-full bg-amber" />
        </span>
      </a>

      <span className="celestial-mono absolute bottom-6 right-6 hidden text-[10px] text-celestial-faint md:block">
        The Designer
      </span>
    </section>
  );
}
