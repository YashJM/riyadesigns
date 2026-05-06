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

      <section className="relative overflow-hidden bg-linear-to-r from-[#ffe8ee] via-[#f6e8f3] to-[#e5e2ef] pb-10 pt-[110px]">
        <div className="mx-auto max-w-[1148px] px-5">
          <Link href="/work" className="inline-flex items-center gap-2 text-[24px] font-bold">
            ← Back
          </Link>
          <h1 className="mt-8 text-[40px] font-black">📦 Akshar Packs</h1>
          <p className="mt-3 max-w-[1011px] text-[20px] leading-loose">
            Akshar Packs is a packaging solutions provider that delivers custom packaging
            for diverse industries. The redesign focused on clarity, product discovery,
            and inquiry conversion.
          </p>
          <div className="mt-8 overflow-hidden rounded-[30px] border border-black">
            <Image
              src="/figma/akshar-hero.png"
              alt="Akshar Packs hero"
              width={1001}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-8 grid grid-cols-3 text-[24px]">
            <p>🧑‍💻 Role: UI/UX Design</p>
            <p>⏳ Duration: 4 Weeks</p>
            <p>📱 Platform: Web</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1148px] px-5 pb-20 pt-8">
        {sections.map((section) => (
          <article key={section.title} className="border-t border-[#efced9] py-10">
            <h2 className="text-[32px] font-extrabold">
              {section.icon} {section.title}:
            </h2>
            <p className="mt-4 max-w-[1005px] text-[16px] leading-loose">{section.body}</p>
            {section.image ? (
              <div className="mt-6 overflow-hidden rounded-[20px] border border-black">
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
              <div className="mt-4 overflow-hidden rounded-[20px] border border-black">
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
