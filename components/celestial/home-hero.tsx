import { Magnetic } from "@/components/celestial/magnetic";
import { StarCompass } from "@/components/celestial/star-compass";

type Social = {
  label: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
};

/* NOTE: Update Dribbble / Behance URLs with Riya's real handles. */
const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/designerriya",
    external: true,
    icon: (
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.4 9h3.16v11.5H3.4V9Zm5.5 0h3.03v1.57h.05c.42-.8 1.46-1.65 3-1.65 3.2 0 3.8 2.11 3.8 4.85v6.73H15.6v-5.96c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.55-2.28 3.15v6.06H8.9V9Z" />
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com",
    external: true,
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.6 4.6a8.4 8.4 0 0 1 1.9 5.2c-.28-.06-3.06-.62-5.86-.27-.06-.14-.12-.29-.19-.44-.17-.4-.36-.8-.56-1.19 3.1-1.26 4.5-3.08 4.71-3.3ZM12 3.5c1.98 0 3.79.74 5.17 1.96-.18.25-1.45 1.96-4.44 3.08-1.38-2.53-2.9-4.6-3.14-4.93.77-.2 1.58-.31 2.41-.31ZM8.3 4.2c.23.31 1.73 2.4 3.13 4.87-3.94 1.05-7.42 1.03-7.8 1.03A8.53 8.53 0 0 1 8.3 4.2ZM3.5 12v-.26c.36.01 4.45.06 8.66-1.2.24.47.47.95.68 1.43l-.33.1c-4.35 1.4-6.66 5.24-6.85 5.57A8.46 8.46 0 0 1 3.5 12Zm8.5 8.5a8.46 8.46 0 0 1-5.23-1.8c.15-.3 1.68-3.26 6.44-4.92l.05-.02c1.19 3.09 1.68 5.68 1.8 6.42A8.4 8.4 0 0 1 12 20.5Zm4.8-1.48c-.09-.5-.53-2.98-1.63-6.03 2.64-.42 4.95.27 5.24.36a8.5 8.5 0 0 1-3.61 5.67Z" />
    ),
  },
  {
    label: "Behance",
    href: "https://behance.net",
    external: true,
    icon: (
      <path d="M9.1 8.4c.6 0 1.16.05 1.66.16.5.1.92.28 1.28.52.35.24.62.56.81.96.19.4.28.9.28 1.48 0 .64-.14 1.17-.44 1.6-.28.42-.71.77-1.28 1.04.78.22 1.36.62 1.74 1.18.38.56.58 1.24.58 2.03 0 .64-.13 1.2-.38 1.66-.25.47-.59.85-1.02 1.14-.42.29-.91.5-1.46.64-.54.13-1.1.2-1.66.2H3V8.4h6.1Zm-.36 4.53c.5 0 .9-.12 1.22-.35.32-.24.47-.62.47-1.15 0-.3-.05-.54-.16-.72a1.2 1.2 0 0 0-.44-.44 1.8 1.8 0 0 0-.63-.22 4 4 0 0 0-.74-.06H5.6v2.94h3.14Zm.17 4.76c.28 0 .54-.03.79-.08.24-.06.46-.15.64-.28.18-.13.33-.3.44-.53.1-.22.16-.5.16-.85 0-.68-.19-1.16-.57-1.45-.38-.29-.89-.43-1.51-.43H5.6v3.62h3.48ZM16.4 17.1c.34.33.83.5 1.47.5.46 0 .86-.12 1.19-.35.33-.23.53-.48.61-.73h2.16c-.35 1.07-.88 1.83-1.6 2.3-.72.46-1.59.69-2.6.69-.71 0-1.35-.11-1.92-.34a4 4 0 0 1-1.45-.97 4.3 4.3 0 0 1-.91-1.5 5.6 5.6 0 0 1-.32-1.94c0-.68.11-1.31.33-1.9a4.4 4.4 0 0 1 2.4-2.5 4.7 4.7 0 0 1 1.87-.36c.75 0 1.4.14 1.97.43.56.3 1.02.68 1.38 1.17.36.48.62 1.04.78 1.66.15.62.21 1.27.16 1.95h-6.4c0 .69.24 1.26.58 1.59Zm2.56-4.32c-.27-.3-.72-.46-1.3-.46-.38 0-.7.07-.95.2a1.9 1.9 0 0 0-.6.48c-.15.19-.25.39-.31.6-.06.2-.1.39-.11.55h3.96c-.06-.62-.24-1.07-.51-1.37h.02ZM15.3 9.1h4.94v1.2H15.3V9.1Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:designer.riyash@gmail.com",
    external: true,
    icon: (
      <path d="M3 5.5h18c.55 0 1 .45 1 1V17.5c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6.5c0-.55.45-1 1-1Zm.9 1.9v.13l8.1 5.06 8.1-5.06V7.4l-8.1 5.06L3.9 7.4Z" />
    ),
  },
];

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16 text-center">
      <StarCompass className="pointer-events-none absolute left-1/2 top-[47%] w-[clamp(680px,118vw,1360px)] -translate-x-1/2 -translate-y-1/2 opacity-90" />

      {/* soft radial vignette to lift the name off the chart */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(10,14,28,0.72), rgba(10,14,28,0.25) 55%, transparent 78%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center">
        <p
          className="celestial-enter celestial-mono text-[11px] text-celestial-muted"
          style={{ "--enter-delay": "80ms" } as React.CSSProperties}
        >
          Hey, I&apos;m
        </p>

        <h1
          className="celestial-enter mt-4 text-[clamp(3.25rem,15vw,9.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]"
          style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        >
          <span className="text-celestial-fg">Riya </span>
          <span className="text-amber-gradient">Patel</span>
        </h1>

        <p
          className="celestial-enter celestial-mono mt-6 text-[clamp(11px,1.4vw,14px)] text-celestial-muted"
          style={{ "--enter-delay": "280ms" } as React.CSSProperties}
        >
          UI / UX Designer
        </p>

        <ul
          className="celestial-enter mt-8 flex items-center gap-3"
          style={{ "--enter-delay": "400ms" } as React.CSSProperties}
        >
          {socials.map((s) => (
            <li key={s.label}>
              <Magnetic as="span" strength={0.45}>
                <a
                  href={s.href}
                  {...(s.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={s.label}
                  className="celestial-social celestial-glass grid size-11 place-items-center rounded-xl text-celestial-muted"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    {s.icon}
                  </svg>
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>
      </div>

      {/* scroll cue */}
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

      {/* corner tag */}
      <span className="celestial-mono absolute bottom-6 right-6 hidden text-[10px] text-celestial-faint md:block">
        The Designer
      </span>
    </section>
  );
}
