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
      <section className="figma-gradient relative overflow-hidden pb-[clamp(32px,4vw,40px)] pt-[clamp(88px,9vw,110px)]">
        <div className="figma-shell">
          <Link href="/work" className="inline-flex items-center gap-2 text-[clamp(20px,1.9vw,24px)] font-bold">
            ← Back
          </Link>
          <h1 className="mt-6 text-[clamp(34px,3.2vw,40px)] font-black md:mt-8">📲 Zapp Wallet</h1>
          <p className="mt-3 max-w-[1011px] text-[clamp(16px,1.7vw,20px)] leading-loose">
            Zapp Wallet is a mobile fintech application designed to simplify money
            movement, expense tracking, and everyday financial actions through a
            frictionless, intuitive, and trustworthy experience.
          </p>
          <div className="mt-6 overflow-hidden rounded-[clamp(22px,2.1vw,30px)] border border-black md:mt-8">
            <Image
              src="/figma/zapp-hero-collage.png"
              alt="Zapp Wallet hero collage"
              width={1001}
              height={247}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-5 grid gap-2 text-[clamp(16px,1.7vw,24px)] md:mt-6 md:grid-cols-3">
            <p>🧑‍💻 Role: UI/UX Design</p>
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
