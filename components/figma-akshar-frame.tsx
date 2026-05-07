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
];

export function FigmaAksharFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />

      <section className="figma-gradient relative overflow-hidden pb-[clamp(36px,4vw,40px)] pt-[clamp(88px,9vw,110px)]">
        <div className="figma-shell">
          <Link href="/work" className="inline-flex items-center gap-2 text-[clamp(20px,1.9vw,24px)] font-bold">
            ← Back
          </Link>
          <h1 className="mt-8 text-[clamp(34px,3.2vw,40px)] font-black">📦 Akshar Packs</h1>
          <p className="mt-3 max-w-[1011px] text-[clamp(16px,1.7vw,20px)] leading-loose">
            Akshar Packs is a packaging solutions provider that delivers custom packaging
            for diverse industries. The redesign focused on clarity, product discovery,
            and inquiry conversion.
          </p>
          <div className="mt-8 overflow-hidden rounded-[clamp(22px,2.1vw,30px)] border border-black">
            <Image
              src="/figma/akshar-hero.png"
              alt="Akshar Packs hero"
              width={1001}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-8 grid gap-2 text-[clamp(16px,1.7vw,24px)] md:grid-cols-3">
            <p>🧑‍💻 Role: UI/UX Design</p>
            <p>⏳ Duration: 4 Weeks</p>
            <p>📱 Platform: Web</p>
          </div>
        </div>
      </section>

      <section className="figma-shell pb-[clamp(56px,6vw,80px)] pt-8">
        {sections.map((section) => (
          <article key={section.title} className="border-t border-[#efced9] py-[clamp(30px,4vw,40px)]">
            <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">
              {section.icon} {section.title}:
            </h2>
            <p className="mt-4 max-w-[1005px] text-[clamp(15px,1.1vw,16px)] leading-loose">{section.body}</p>
            {section.image ? (
              <div className="mt-6 overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={1005}
                  height={315}
                  className="h-auto w-full object-cover"
                />
              </div>
            ) : null}
            {section.image2 ? (
              <div className="mt-4 overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black">
                <Image
                  src={section.image2}
                  alt={`${section.title} visual 2`}
                  width={1005}
                  height={315}
                  className="h-auto w-full object-cover"
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
