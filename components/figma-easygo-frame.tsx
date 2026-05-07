import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

const sections = [
  {
    title: "📝 Context:",
    body: "EasyGo is a mobility product designed for fast, reliable ride booking. The redesign focused on clarity, predictable status visibility, and lower effort across routine ride actions.",
    image: "/figma/easygo-group-1.png",
  },
  {
    title: "⚠️ Problem:",
    body: "Users experienced friction due to fragmented booking steps, unclear status updates, and inconsistent information hierarchy during critical ride moments.",
  },
  {
    title: "🎯 Goal:",
    body: "Design a smooth end-to-end booking experience that reduces uncertainty and improves decision speed from route input to final confirmation.",
  },
  {
    title: "🛠️ Design Process:",
    body: "Mapped top booking scenarios, simplified steps, then refined screens for real-world speed and readability.",
    image: "/figma/easygo-group-2.png",
  },
  {
    title: "📐 Wireframing & Structure:",
    body: "The information model was built around primary rider intent: book quickly, validate details, and track outcomes with confidence.",
    image: "/figma/easygo-group-3.png",
  },
  {
    title: "🔄 Key User Flows:",
    body: "Core ride journeys were tuned for minimal taps, clear transitions, and strong confirmation at each high-risk step.",
    image: "/figma/easygo-group-4.png",
  },
  {
    title: "📊 Impact:",
    body: "The updated flow improves ride booking speed, lowers drop-off risk, and gives users better control through cleaner status communication.",
    image: "/figma/easygo-group-5.png",
  },
  {
    title: "🚀 Final Outcome:",
    body: "EasyGo now delivers a streamlined mobility experience with quick actionability and stronger trust in daily ride operations.",
    image: "/figma/easygo-group-6.png",
  },
];

export function FigmaEasygoFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />
      <section className="figma-gradient relative overflow-hidden pb-[clamp(32px,4vw,40px)] pt-[clamp(88px,9vw,110px)]">
        <div className="figma-shell">
          <Link href="/work" className="inline-flex items-center gap-2 text-[clamp(20px,1.9vw,24px)] font-bold">
            ← Back
          </Link>
          <h1 className="mt-6 text-[clamp(34px,3.2vw,40px)] font-black md:mt-8">🚕 EasyGo</h1>
          <p className="mt-3 max-w-[1011px] text-[clamp(16px,1.7vw,20px)] leading-loose">
            EasyGo simplifies everyday travel through a fast, intuitive booking
            experience with clearer ride states and improved flow continuity.
          </p>
          <div className="mt-6 overflow-hidden rounded-[clamp(22px,2.1vw,30px)] border border-black md:mt-8">
            <Image
              src="/figma/easygo-hero.png"
              alt="EasyGo hero"
              width={1001}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-5 grid gap-2 text-[clamp(16px,1.7vw,24px)] md:mt-6 md:grid-cols-3">
            <p>🧑‍💻 Role: Product UX</p>
            <p>⏳ Duration: 6 Weeks</p>
            <p>📱 Platform: Mobile</p>
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
