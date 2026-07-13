import Image from "next/image";
import { CelestialFooter } from "@/components/celestial/celestial-footer";
import { CelestialHeader } from "@/components/celestial/celestial-header";
import { CelestialProse, ProseLine } from "@/components/celestial/celestial-prose";
import { CelestialShell } from "@/components/celestial/celestial-shell";
import { MotionFadeIn } from "@/components/motion/fade-in";
import { MotionReveal } from "@/components/motion/reveal";
import {
  ABOUT_INTRO,
  ABOUT_PHILOSOPHY,
  ABOUT_SECTIONS,
} from "@/lib/about-content";

function AboutParagraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <CelestialProse className="mt-4">
      {paragraphs.map((paragraph) => (
        <ProseLine key={paragraph}>{paragraph}</ProseLine>
      ))}
    </CelestialProse>
  );
}

export function CelestialAbout() {
  return (
    <CelestialShell>
      <CelestialHeader />

      <section className="relative z-10 mx-auto w-full max-w-[var(--content-max)] px-[max(1.25rem,env(safe-area-inset-left))] pt-[clamp(8rem,18vw,11rem)] pb-[clamp(2rem,5vw,3rem)]">
        <div className="celestial-glass rounded-[28px] px-[clamp(1.5rem,5vw,3rem)] py-[clamp(2rem,6vw,3.5rem)]">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,304px)]">
            <MotionFadeIn>
              <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-bold tracking-[var(--tracking-display)] text-celestial-fg">
                {ABOUT_INTRO.title}
              </h1>
              <AboutParagraphs paragraphs={ABOUT_INTRO.paragraphs} />
            </MotionFadeIn>

            <MotionFadeIn
              delay={120}
              className="relative mx-auto h-[clamp(320px,55vw,357px)] w-full max-w-[304px] overflow-hidden rounded-[19px]"
            >
              <Image
                src="/figma/about-profile.png"
                alt="Riya Patel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 304px"
              />
            </MotionFadeIn>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-[var(--content-max)] px-[max(1.25rem,env(safe-area-inset-left))] pb-[clamp(4rem,10vw,7rem)]">
        <div className="celestial-glass rounded-[28px] px-[clamp(1.5rem,5vw,3rem)] py-[clamp(1.5rem,4vw,2.5rem)]">
          {ABOUT_SECTIONS.map((section, idx) => (
            <MotionReveal
              key={section.title}
              delay={idx * 70}
              className="border-t border-[var(--celestial-line)] py-[clamp(1.75rem,5vw,2.75rem)] first:border-t-0 first:pt-0"
            >
              <h2 className="text-[clamp(1.35rem,3vw,1.875rem)] font-semibold tracking-[var(--tracking-display)] text-celestial-fg">
                {section.title}
              </h2>
              <AboutParagraphs paragraphs={section.paragraphs} />
            </MotionReveal>
          ))}

          <MotionReveal
            delay={ABOUT_SECTIONS.length * 70}
            className="border-t border-[var(--celestial-line)] py-[clamp(1.75rem,5vw,2.75rem)]"
          >
            <h2 className="text-[clamp(1.35rem,3vw,1.875rem)] font-semibold tracking-[var(--tracking-display)] text-celestial-fg">
              {ABOUT_PHILOSOPHY.title}
            </h2>
            <CelestialProse className="mt-4">
              <ProseLine>{ABOUT_PHILOSOPHY.intro}</ProseLine>
            </CelestialProse>
            <CelestialProse className="mt-6">
              {ABOUT_PHILOSOPHY.principles.map((principle) => (
                <div key={principle.title}>
                  <p className="font-bold text-celestial-fg">{principle.title}</p>
                  <ProseLine className="mt-1">{principle.body}</ProseLine>
                </div>
              ))}
            </CelestialProse>
          </MotionReveal>
        </div>
      </section>

      <CelestialFooter />
    </CelestialShell>
  );
}
