import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

const sections = [
  {
    title: "📝 Context:",
    body: "Zapp Wallet is a digital fintech product built to simplify money management, payments, and expense tracking in one place. The challenge was to remove friction from common financial tasks and create a clear, trustworthy, low-effort experience.",
    image: "/figma/zapp-context-board.png",
  },
  {
    title: "⚠️ Problem:",
    body: "Users often manage money across disconnected tools, with cluttered interfaces and slow workflows for basic actions. This created confusion and reduced confidence during sensitive financial decisions.",
  },
  {
    title: "🎯 Goal:",
    body: "Design a financial experience that is simple, fast, and reliable, with strong visual clarity and minimal interaction steps for key user actions.",
  },
  {
    title: "🛠️ Design Process:",
    body: "The process started with mapping onboarding, payment, and transaction journeys, then progressively refined wireframes and hierarchy to reduce cognitive load.",
  },
  {
    title: "📐 Wireframing & Structure:",
    body: "Low-fidelity wireframes established clear action priority and grouped financial tasks into intuitive paths for faster completion.",
    image: "/figma/zapp-flow-board.png",
  },
  {
    title: "🔄 Key User Flows:",
    body: "Onboarding and authentication were simplified into guided steps to balance completion speed and trust-building security.",
  },
  {
    title: "🖥️ Dashboard Experience:",
    body: "The dashboard was designed as a central hub for balances, recent activity, and quick actions to reduce navigation overhead.",
  },
  {
    title: "📤 Send Money Flow:",
    body: "Transfers were optimized to essential steps only: amount, recipient, confirmation, reducing friction and errors.",
  },
  {
    title: "⚡ Payments & Features:",
    body: "Bill pay, QR scan, and split-expense features were grouped to support rapid everyday tasks.",
    image: "/figma/zapp-impact-strip.png",
  },
  {
    title: "📈 Insights & Analytics:",
    body: "Charts and trends help users understand behavior and shift the app from utility to financial guidance.",
  },
  {
    title: "💳 Cards & Wallet Management:",
    body: "Card controls, balances, and secure top-up flows were organized into one clear management area.",
  },
  {
    title: "✅ Feedback & Success States:",
    body: "Strong confirmations for transfers, scans, and payments reduce anxiety and reinforce trust after critical actions.",
  },
  {
    title: "📊 Impact:",
    body: "Improved usability and visual clarity led to faster task completion and stronger engagement across core wallet workflows.",
    image: "/figma/zapp-final-board.png",
  },
  {
    title: "🚀 Final Outcome:",
    body: "Zapp Wallet delivers a clean, scalable financial experience that improves confidence, speed, and day-to-day money control.",
  },
];

export function FigmaZappFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />
      <section className="relative overflow-hidden bg-linear-to-r from-[#ffe8ee] via-[#f6e8f3] to-[#e5e2ef] pb-10 pt-[110px]">
        <div className="mx-auto max-w-[1148px] px-4 md:px-5">
          <Link href="/work" className="inline-flex items-center gap-2 text-[20px] font-bold md:text-[24px]">
            ← Back
          </Link>
          <h1 className="mt-6 text-[34px] font-black md:mt-8 md:text-[40px]">📲 Zapp Wallet</h1>
          <p className="mt-3 max-w-[1011px] text-[16px] leading-loose md:text-[20px]">
            Zapp Wallet is a mobile fintech application designed to simplify money
            movement, expense tracking, and everyday financial actions through a
            frictionless, intuitive, and trustworthy experience.
          </p>
          <div className="mt-6 overflow-hidden rounded-[26px] border border-black md:mt-8 md:rounded-[30px]">
            <Image
              src="/figma/zapp-hero-collage.png"
              alt="Zapp Wallet hero collage"
              width={1001}
              height={247}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-5 grid gap-2 text-[16px] md:mt-6 md:grid-cols-3 md:text-[24px]">
            <p>🧑‍💻 Role: UI/UX Design</p>
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
