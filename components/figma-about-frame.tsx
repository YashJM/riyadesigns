import Image from "next/image";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

const sections = [
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
      "🎨 Painting is my escape — a space to experiment, slow down, and embrace imperfection.",
      "🎬 I enjoy feel-good, story-driven shows like Friends — timeless, simple, and full of emotion.",
      "🎾 I love sports like swimming, badminton, tennis, and pickleball.",
      "✨ I’m naturally curious — always exploring new ideas, trends, and experiences.",
      "🚴‍♀️ Trail climbing, cycling, sightseeing, and new places keep my perspective fresh.",
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
    body: [
      "I see design the same way I see life — a balance of structure and spontaneity.",
      "Some things are carefully crafted, others beautifully unplanned.",
      "And somewhere in between… that’s where the magic happens ✨",
    ],
  },
];

export function FigmaAboutFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />

      <section className="figma-gradient relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-[max(8px,env(safe-area-inset-left))] top-[clamp(72px,18vw,239px)] hidden h-[clamp(140px,32vw,290px)] w-[clamp(160px,42vw,354px)] rounded-full bg-[#ffd7e6] opacity-50 blur-[44px] sm:block sm:opacity-60"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[max(8px,env(safe-area-inset-right))] top-[clamp(420px,85vw,727px)] hidden h-[clamp(140px,32vw,290px)] w-[clamp(160px,42vw,354px)] rounded-full bg-[#f6dce9] opacity-50 blur-[44px] sm:block sm:opacity-60"
          aria-hidden
        />
        <div className="figma-shell pb-[var(--space-page-hero-bottom)] pt-[var(--space-hero-pad-top)]">
          <h1 className="text-[clamp(34px,3.2vw,40px)] leading-[1.1] font-bold">✨ About Me</h1>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(0,657px)_minmax(280px,365px)] lg:justify-between lg:gap-10">
            <div className="text-[clamp(17px,4vw,24px)] leading-[1.5] sm:leading-[1.45]">
              <p className="mb-2 text-[clamp(28px,2.6vw,32px)] font-bold">Hello 👋</p>
              <p>
                I’m Riya Patel — a UI/UX designer with a product mindset, driven by
                the idea that great design lives at the intersection of clarity,
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
                don’t just function well, but feel right.
              </p>
            </div>
            <div className="relative mx-auto h-[clamp(380px,60vw,548px)] w-full max-w-[365px] overflow-hidden rounded-[28px]">
              <Image
                src="/figma/about-profile.png"
                alt="Riya Patel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 365px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="figma-shell pb-[var(--space-content-pad-bottom)] pt-[var(--space-content-pad-top)]">
        {sections.map((section, idx) => (
          <div
            key={section.title}
            className="border-t border-[#efced9] py-[clamp(1.75rem,6vw,3rem)] first:border-t-0 first:pt-0"
          >
            <h2 className="text-[clamp(26px,2.7vw,32px)] font-bold">
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </h2>
            <div className="mt-4 space-y-3 text-[clamp(15px,3.6vw,18px)] leading-[1.85] text-[#2d2d2d] sm:leading-[1.9]">
              {section.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {idx === sections.length - 1 ? <div className="mt-10 border-t border-[#efced9]" /> : null}
          </div>
        ))}
      </section>

      <FigmaFooter />
    </div>
  );
}
