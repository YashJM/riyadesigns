import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

const sections = [
  {
    title: "📝 Context:",
    body: "TripOn is a travel planning product focused on combining discovery, planning, and booking into one guided flow. The redesign prioritized reducing complexity and improving confidence across each travel decision point.",
    image: "/figma/tripon-group-1.png",
  },
  {
    title: "⚠️ Problem:",
    body: "Travel tools were fragmented and users had to jump across multiple apps to compare options, manage itineraries, and complete bookings. This caused cognitive load and drop-off.",
  },
  {
    title: "🎯 Goal:",
    body: "Create a unified, mobile-friendly travel workflow that keeps users oriented from destination discovery to final booking confirmation.",
  },
  {
    title: "🛠️ Design Process:",
    body: "User flow mapping and low-fidelity structures were used to simplify each journey stage, then refined into a scalable UI pattern system.",
    image: "/figma/tripon-group-2.png",
  },
  {
    title: "📐 Wireframing & Structure:",
    body: "Information hierarchy and action grouping were optimized so users can scan options quickly and commit with less uncertainty.",
    image: "/figma/tripon-group-3.png",
  },
  {
    title: "🔄 Key User Flows:",
    body: "Core flows were streamlined around destination selection, itinerary review, booking confirmation, and post-booking visibility.",
    image: "/figma/tripon-group-4.png",
  },
  {
    title: "📊 Impact:",
    body: "The redesign improved decision speed and reduced interaction friction through clearer action states, more predictable navigation, and stronger visual priority.",
    image: "/figma/tripon-group-5.png",
  },
  {
    title: "🚀 Final Outcome:",
    body: "TripOn delivers a cohesive travel UX where users can move from inspiration to booking with clarity, confidence, and fewer steps.",
  },
];

export function FigmaTriponFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />
      <section className="relative overflow-hidden bg-linear-to-r from-[#ffe8ee] via-[#f6e8f3] to-[#e5e2ef] pb-8 pt-[110px]">
        <div className="mx-auto max-w-[1148px] px-4 md:px-5">
          <Link href="/work" className="inline-flex items-center gap-2 text-[20px] font-bold md:text-[24px]">
            ← Back
          </Link>
          <h1 className="mt-6 text-[34px] font-black md:mt-8 md:text-[40px]">✈️ TripOn</h1>
          <p className="mt-3 max-w-[1011px] text-[16px] leading-loose md:text-[20px]">
            TripOn connects destination discovery, planning, and booking into one
            intuitive flow to reduce travel friction and improve confidence.
          </p>
          <div className="mt-6 overflow-hidden rounded-[26px] border border-black md:mt-8 md:rounded-[30px]">
            <Image
              src="/figma/tripon-hero.png"
              alt="TripOn hero"
              width={1001}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-5 grid gap-2 text-[16px] md:mt-6 md:grid-cols-3 md:text-[24px]">
            <p>🧑‍💻 Role: Product UX</p>
            <p>⏳ Duration: 6 Weeks</p>
            <p>📱 Platform: Web</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1148px] px-4 pb-16 pt-6 md:px-5 md:pb-20 md:pt-8">
        {sections.map((section) => (
          <article key={section.title} className="border-t border-[#efced9] py-8 md:py-10">
            <h2 className="text-[26px] font-extrabold md:text-[32px]">{section.title}</h2>
            <p className="mt-4 max-w-[1005px] text-[15px] leading-loose md:text-[16px]">{section.body}</p>
            {section.image ? (
              <div className="mt-5 overflow-hidden rounded-[18px] border border-black md:mt-6 md:rounded-[20px]">
                <Image
                  src={section.image}
                  alt={section.title}
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
