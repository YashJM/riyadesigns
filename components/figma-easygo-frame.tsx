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
      <section className="relative overflow-hidden bg-linear-to-r from-[#ffe8ee] via-[#f6e8f3] to-[#e5e2ef] pb-8 pt-[110px]">
        <div className="mx-auto max-w-[1148px] px-4 md:px-5">
          <Link href="/work" className="inline-flex items-center gap-2 text-[20px] font-bold md:text-[24px]">
            ← Back
          </Link>
          <h1 className="mt-6 text-[34px] font-black md:mt-8 md:text-[40px]">🚕 EasyGo</h1>
          <p className="mt-3 max-w-[1011px] text-[16px] leading-loose md:text-[20px]">
            EasyGo simplifies everyday travel through a fast, intuitive booking
            experience with clearer ride states and improved flow continuity.
          </p>
          <div className="mt-6 overflow-hidden rounded-[26px] border border-black md:mt-8 md:rounded-[30px]">
            <Image
              src="/figma/easygo-hero.png"
              alt="EasyGo hero"
              width={1001}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-5 grid gap-2 text-[16px] md:mt-6 md:grid-cols-3 md:text-[24px]">
            <p>🧑‍💻 Role: Product UX</p>
            <p>⏳ Duration: 6 Weeks</p>
            <p>📱 Platform: Mobile</p>
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
