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
      <section className="figma-gradient relative overflow-hidden pb-[clamp(32px,4vw,40px)] pt-[clamp(88px,9vw,110px)]">
        <div className="figma-shell">
          <Link href="/work" className="inline-flex items-center gap-2 text-[clamp(20px,1.9vw,24px)] font-bold">
            ← Back
          </Link>
          <h1 className="mt-6 text-[clamp(34px,3.2vw,40px)] font-black md:mt-8">✈️ TripOn</h1>
          <p className="mt-3 max-w-[1011px] text-[clamp(16px,1.7vw,20px)] leading-loose">
            TripOn connects destination discovery, planning, and booking into one
            intuitive flow to reduce travel friction and improve confidence.
          </p>
          <div className="mt-6 overflow-hidden rounded-[clamp(22px,2.1vw,30px)] border border-black md:mt-8">
            <Image
              src="/figma/tripon-hero.png"
              alt="TripOn hero"
              width={1001}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-5 grid gap-2 text-[clamp(16px,1.7vw,24px)] md:mt-6 md:grid-cols-3">
            <p>🧑‍💻 Role: Product UX</p>
            <p>⏳ Duration: 6 Weeks</p>
            <p>📱 Platform: Web</p>
          </div>
        </div>
      </section>

      <section className="figma-shell pb-[clamp(56px,6vw,80px)] pt-[clamp(24px,3vw,32px)]">
        {sections.map((section) => (
          <article key={section.title} className="border-t border-[#efced9] py-[clamp(30px,4vw,40px)]">
            <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">{section.title}</h2>
            <p className="mt-4 max-w-[1005px] text-[clamp(15px,1.1vw,16px)] leading-loose">{section.body}</p>
            {section.image ? (
              <div className="mt-5 overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black md:mt-6">
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
