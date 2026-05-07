import Image from "next/image";
import Link from "next/link";
import { FigmaHeader, FigmaFooter } from "@/components/figma-chrome";

const sections = [
  {
    icon: "📝",
    title: "About the project",
    body: "Akshar Packs is a packaging business focused on reliable, high-quality solutions. The redesign improved structure, hierarchy, and clarity so users can understand offerings and take action faster.",
  },
  {
    icon: "🧩",
    title: "My Contribution",
    body: "Led end-to-end UX strategy, user research, wireframes, high-fidelity design, and developer handoff with a scalable component system.",
    image: "/figma/akshar-contribution-a.png",
    image2: "/figma/akshar-contribution-b.png",
  },
  {
    icon: "⚠️",
    title: "Problem",
    body: "Navigation and product structure created friction. Product specifications and customization details were not clearly visible, reducing confidence and conversion.",
    image: "/figma/akshar-problem.png",
  },
  {
    icon: "🎯",
    title: "Goal",
    body: "Design a clear, user-centered experience that simplifies discovery, supports customization decisions, and improves inquiry conversion.",
  },
  {
    icon: "👥",
    title: "Target Users",
    body: "SMBs, design/operations teams, and startups looking for flexible and scalable custom packaging workflows.",
    image: "/figma/akshar-target-users.png",
  },
  {
    icon: "🔍",
    title: "Research",
    body: "Interviews and surveys showed users need clear specs, pricing, and easy step-based inquiry flows.",
    image: "/figma/akshar-research.png",
  },
  {
    icon: "🧠",
    title: "Ideation & Structure",
    body: "Mapped user journeys from product discovery to inquiry, restructured IA, and validated with low-fi flows.",
    image: "/figma/akshar-ideation.png",
  },
  {
    icon: "🎨",
    title: "Design & Prototyping",
    body: "Built a scalable design system, redesigned listing and detail pages for clearer specs, and shipped a stepwise inquiry flow with sticky CTAs and CRM-aligned touchpoints.",
  },
  {
    icon: "🧪",
    title: "Testing & Iteration",
    body: "Sessions tightened customization clarity, FAQs and in-context guidance, multi-step progress cues, and quick contact access for faster support.",
  },
  {
    icon: "📊",
    title: "Impact",
    body: "Stronger exploration and inquiry flows, higher-quality leads, faster sales follow-up, and a foundation that scales as the product grows.",
  },
  {
    icon: "💡",
    title: "Key Takeaways",
    body: "Structured content drives confident decisions; iteration surfaced usability gaps early; CRM alignment improved ops; the design system keeps everything consistent.",
    image: "/figma/akshar-hero.png",
  },
];

export function FigmaAksharFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />

      {/* Hero: white band + soft ellipse accents (Figma 3147:146), not full-page gradient */}
      <section className="relative isolate overflow-hidden bg-white pb-[clamp(28px,4vw,40px)] pt-[clamp(88px,9vw,110px)]">
        <Image
          src="/figma/hero-ellipse-2.svg"
          alt=""
          width={125}
          height={108}
          aria-hidden
          className="pointer-events-none absolute left-[clamp(4px,2vw,24px)] top-[clamp(120px,18vw,200px)] z-0 h-[clamp(72px,14vw,160px)] w-[clamp(84px,16vw,180px)] opacity-95 max-md:top-[clamp(100px,22vw,160px)]"
        />
        <Image
          src="/figma/hero-ellipse-1.svg"
          alt=""
          width={268}
          height={264}
          aria-hidden
          className="pointer-events-none absolute right-[clamp(-24px,-4vw,12px)] top-[clamp(-40px,-6vw,-12px)] z-0 h-[clamp(120px,22vw,220px)] w-[clamp(120px,22vw,230px)] opacity-90"
        />
        <Image
          src="/figma/hero-ellipse-1.svg"
          alt=""
          width={268}
          height={264}
          aria-hidden
          className="pointer-events-none absolute bottom-[clamp(-48px,-8vw,-20px)] right-[clamp(8%,12vw,18%)] z-0 hidden h-[clamp(100px,18vw,190px)] w-[clamp(100px,18vw,200px)] opacity-[0.35] md:block"
        />

        <div className="figma-shell relative z-10">
          <Link href="/work" className="inline-flex items-center gap-2 text-[clamp(20px,1.9vw,24px)] font-bold">
            ← Back
          </Link>
          <h1 className="mt-8 text-[clamp(34px,3.2vw,40px)] font-black">📦 Akshar Packs</h1>
          <p className="mt-3 max-w-[1011px] text-[clamp(16px,1.7vw,20px)] leading-loose">
            Akshar Packs is a packaging solutions provider that delivers custom packaging solutions for a variety of
            industries. The goal of this redesign was to improve the user experience, clarity of product offerings, and
            conversion rates by streamlining product discovery and inquiry.
            <a
              href="https://aksharpacks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              {" "}
              https://aksharpacks.com/
            </a>
          </p>
          <div
            className="mt-8 overflow-hidden rounded-[clamp(22px,2.1vw,30px)] border border-black shadow-[0_16px_48px_-16px_rgba(0,0,0,0.14)]"
          >
            <Image
              src="/figma/akshar-hero.png"
              alt="Akshar Packs hero"
              width={1001}
              height={480}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, min(1001px, 92vw)"
            />
          </div>
          <dl className="mt-8 flex flex-nowrap items-baseline gap-x-[clamp(14px,2.4vw,40px)] overflow-x-auto pb-1 text-[clamp(12px,1.35vw,24px)] [scrollbar-width:thin]">
            <div className="flex shrink-0 items-baseline gap-1.5 whitespace-nowrap">
              <dt className="font-extrabold">🧑‍💻 Role:</dt>
              <dd className="m-0 font-normal">UI/UX Design (End-to-End Product Design)</dd>
            </div>
            <div className="flex shrink-0 items-baseline gap-1.5 whitespace-nowrap">
              <dt className="font-extrabold">⏳ Duration:</dt>
              <dd className="m-0 font-normal">4 Weeks</dd>
            </div>
            <div className="flex shrink-0 items-baseline gap-1.5 whitespace-nowrap">
              <dt className="font-extrabold">📱 Platform:</dt>
              <dd className="m-0 font-normal">Web</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="figma-shell pb-[clamp(56px,6vw,80px)] pt-[clamp(24px,3vw,32px)]">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className={`pb-[clamp(30px,4vw,44px)] ${index === 0 ? "pt-[clamp(16px,2vw,24px)]" : "pt-[clamp(30px,4vw,44px)]"}`}
          >
            <hr className="case-study-rule mb-[clamp(20px,2.8vw,28px)]" aria-hidden />
            <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">
              {section.icon} {section.title}:
            </h2>
            <p className="mt-4 max-w-[1005px] text-[clamp(15px,1.1vw,16px)] leading-loose">{section.body}</p>
            {section.image && section.image2 ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5">
                <div className="overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={650}
                    height={359}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]">
                  <Image
                    src={section.image2}
                    alt={`${section.title} visual 2`}
                    width={650}
                    height={359}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ) : null}
            {section.image && !section.image2 ? (
              <div className="mt-6 overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={1005}
                  height={315}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, min(1005px, 92vw)"
                />
              </div>
            ) : null}
          </article>
        ))}
      </section>
      <FigmaFooter />
    </div>
  );
}
