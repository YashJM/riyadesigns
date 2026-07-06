import Image from "next/image";
import { Fragment } from "react";
import { CelestialFooter } from "@/components/celestial/celestial-footer";
import { CelestialHeader } from "@/components/celestial/celestial-header";
import { CelestialShell } from "@/components/celestial/celestial-shell";
import { MotionFadeIn } from "@/components/motion/fade-in";
import { MotionReveal } from "@/components/motion/reveal";

type AboutSection = {
  icon: string;
  title: string;
  body?: string[];
  blocks?: string[][];
};

const sections: AboutSection[] = [
  {
    icon: "💡",
    title: "How I Think",
    body: [
      "I believe good design isn’t just about how things look — it’s about how they work, how they guide, and how they make people feel.",
      "I focus on:",
      "• Simplifying complexity into clear, usable experiences",
      "• Designing with intention, not just aesthetics",
      "• Making decisions backed by research and real user insights",
      "For me, every project is about finding the balance between usability, impact, and emotion.",
    ],
  },
  {
    icon: "🌟",
    title: "Beyond the Screen",
    body: [
      "When I’m not designing, I’m usually exploring creativity in different forms.",
      "🎨 Painting is my escape — a space to experiment, slow down, and embrace imperfection. It keeps my imagination alive and continuously inspires my design perspective.",
      "🎬 I enjoy feel-good, story-driven shows like ‘Friends’ — timeless, simple, and full of emotion.",
      "🎮 I love sports like swimming, badminton, tennis, and pickleball — a mix of focus, fun, and friendly competition.",
      "✨ I’m naturally curious — always exploring new ideas, trends, and experiences. These interests constantly shape how I think, observe, and design.",
      "When I need a reset — I step outside. 🚴‍♀️ Whether it’s trail climbing, cycling through scenic routes, sightseeing, or simply exploring new places — I’m drawn to experiences that help me see the world from a fresh perspective.",
    ],
  },
  {
    icon: "🌿",
    title: "The Details I Notice",
    body: [
      "I’m drawn to the quiet details — the kind that make an experience feel effortless.",
      "From the flow of a user journey to the mood of a color palette, I care about designing things that feel simple, thoughtful, and meaningful.",
    ],
  },
  {
    icon: "🌸",
    title: "Design Philosophy",
    blocks: [
      ["I see design the same way I see life — a balance of structure and spontaneity."],
      ["Some things are carefully crafted,", "others beautifully unplanned."],
      ["And somewhere in between…", "that’s where the magic happens ✨"],
    ],
  },
];

export function CelestialAbout() {
  return (
    <CelestialShell>
      <CelestialHeader />

      <section className="relative z-10 mx-auto w-full max-w-[var(--content-max)] px-[max(1.25rem,env(safe-area-inset-left))] pt-[clamp(8rem,18vw,11rem)] pb-[clamp(2rem,5vw,3rem)]">
        <MotionFadeIn>
          <p className="celestial-mono text-[11px] text-amber">About Me</p>
        </MotionFadeIn>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
          <MotionFadeIn delay={100} className="text-[clamp(1.05rem,2.4vw,1.4rem)] leading-[1.55] text-celestial-muted">
            <h1 className="mb-4 text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-celestial-fg">
              Hello <span aria-hidden>👋</span>
            </h1>
            <p>
              I&apos;m Riya Patel — a UI/UX designer with a product mindset, driven
              by the idea that great design lives at the intersection of clarity,
              emotion, and purpose.
            </p>
            <p className="mt-5">
              My journey into design started with creativity — sketching, painting,
              and noticing details most people overlook. Over time, that curiosity
              evolved into designing digital experiences that feel intuitive,
              meaningful, and human.
            </p>
            <p className="mt-5">
              Today, I approach design as both a problem solver and storyteller —
              balancing user needs with business goals to create experiences that
              don&apos;t just function well, but feel right.
            </p>
          </MotionFadeIn>

          <MotionFadeIn
            delay={180}
            className="celestial-glass relative mx-auto h-[clamp(360px,60vw,520px)] w-full max-w-[360px] overflow-hidden rounded-[28px] p-2"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[22px]">
              <Image
                src="/figma/about-profile.png"
                alt="Riya Patel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
            </div>
          </MotionFadeIn>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-[var(--content-max)] px-[max(1.25rem,env(safe-area-inset-left))] pb-[clamp(4rem,10vw,7rem)] pt-[clamp(1rem,4vw,2rem)]">
        {sections.map((section, idx) => (
          <MotionReveal
            key={section.title}
            delay={idx * 70}
            className="border-t border-[var(--celestial-line)] py-[clamp(1.75rem,6vw,3rem)] first:border-t-0 first:pt-0"
          >
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-celestial-fg">
              <span className="mr-2" aria-hidden>
                {section.icon}
              </span>
              {section.title}
            </h2>
            {section.blocks ? (
              <div className="mt-4 text-[clamp(1rem,2.2vw,1.15rem)] leading-[1.85] text-celestial-muted">
                {section.blocks.map((lines, blockIdx) => (
                  <p
                    key={blockIdx}
                    className={blockIdx < section.blocks!.length - 1 ? "mb-[1em]" : undefined}
                  >
                    {lines.map((line, lineIdx) => (
                      <Fragment key={lineIdx}>
                        {lineIdx > 0 ? <br /> : null}
                        {line}
                      </Fragment>
                    ))}
                  </p>
                ))}
              </div>
            ) : (
              <div className="mt-4 space-y-3 text-[clamp(1rem,2.2vw,1.15rem)] leading-[1.85] text-celestial-muted">
                {section.body?.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            )}
          </MotionReveal>
        ))}
      </section>

      <CelestialFooter />
    </CelestialShell>
  );
}
