import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Riya Patel, UI/UX designer with a product mindset.",
};

const sections = [
  {
    title: "💡 How I Think",
    body: "I believe good design is not only about aesthetics. It is about how things work, how they guide, and how they make people feel. I focus on simplifying complexity, designing with intention, and making decisions backed by real user insight.",
  },
  {
    title: "🌟 Beyond the Screen",
    body: "When I am not designing, I explore other forms of creativity like painting, sports, and travel. These experiences keep my perspective fresh and continue to shape how I solve design problems.",
  },
  {
    title: "🌿 The Details I Notice",
    body: "I care about the quiet details that make a product feel effortless. I pay close attention to flow, visual rhythm, and emotional tone to make experiences feel simple and meaningful.",
  },
  {
    title: "🌸 Design Philosophy",
    body: "I see design as a balance of structure and spontaneity. Some elements are carefully crafted, others beautifully unplanned. The most memorable experiences live in that balance.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10 md:px-10 md:pt-16">
      <section className="rounded-3xl border border-line bg-gradient-to-r from-[#ffeaf2] to-[#ece5f5] px-6 py-8 md:px-10 md:py-14">
        <h1 className="text-4xl font-bold md:text-6xl">✨ About Me</h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-muted">
          Hello 👋 I&apos;m Riya Patel, a UI/UX designer with a product mindset.
          I transform complex ideas into experiences that feel intuitive,
          meaningful, and human.
        </p>
      </section>

      <div className="mt-8 space-y-6">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-line bg-white/70 px-6 py-6"
          >
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="mt-3 text-base leading-8 text-muted">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
