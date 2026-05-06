import Image from "next/image";

const sections = [
  {
    title: "📝 Context:",
    body: "George’s Pizza & Steakhouse is a well-established restaurant with strong local loyalty, but the web experience felt outdated and hard to navigate. The redesign aimed to align digital quality with in-person brand trust.",
    image: "/figma/georges-context.png",
  },
  {
    title: "⚠️ Problem",
    body: "Users struggled with long, unstructured menu lists, weak visual hierarchy, and unclear next actions. Important items and deals were hard to discover, slowing down conversion.",
    image: "/figma/georges-clarity.png",
  },
  {
    title: "🎯 Goal:",
    body: "Build a modern and intuitive menu platform that helps users find, compare, and order quickly with minimal friction.",
    image: "/figma/georges-iteration.png",
  },
  {
    title: "⚡ Designing for actionability:",
    body: "The ordering journey was streamlined around sticky CTAs, clearer deal visibility, and stronger mobile ergonomics.",
    image: "/figma/georges-actionability.png",
  },
  {
    title: "🗂️ Information hierarchy framework:",
    body: "Priority zones were introduced to surface deals first, then product actions, then supporting details to reduce cognitive load.",
    image: "/figma/georges-hierarchy-a.png",
  },
];

export function GeorgesCaseStudy() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-12 pt-8 md:px-10">
      <header className="rounded-2xl bg-linear-to-r from-[#ffe7ef] via-[#f7e6f0] to-[#ece5f5] px-5 py-10 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Case Study
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">
          🍕 George&apos;s Pizza &amp; Steakhouse
        </h1>
        <p className="mt-4 text-base leading-8 text-muted md:text-lg">
          Transformed a content-heavy restaurant website into a clear,
          conversion-focused ordering experience.
        </p>
      </header>

      <div className="mt-6 overflow-hidden rounded-2xl border border-line">
        <Image
          src="/figma/georges-hero.png"
          alt="George's case study hero from Figma"
          width={1600}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <section className="mt-6 grid gap-3 rounded-xl border border-line bg-white p-4 text-sm md:grid-cols-3 md:text-base">
        <p>
          <strong>🧑‍💻 Role:</strong> UI/UX Design
        </p>
        <p>
          <strong>⏳ Duration:</strong> 6 Weeks
        </p>
        <p>
          <strong>📱 Platform:</strong> Web
        </p>
      </section>

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="border-t border-line pt-8">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="mt-3 text-base leading-8 text-muted">{section.body}</p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-line">
              <Image
                src={section.image}
                alt={section.title}
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </section>
        ))}
      </div>

      <section className="mt-10 border-t border-line pt-8">
        <h2 className="text-2xl font-bold">💡 Lessons learned:</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-muted">
          <li>Simpler structure improves scanability and completion speed.</li>
          <li>Visual hierarchy directly supports decision-making confidence.</li>
          <li>Mobile-first ordering patterns increase conversion quality.</li>
        </ul>
      </section>
    </div>
  );
}
