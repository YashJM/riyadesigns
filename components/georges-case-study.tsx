import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

const sections = [
  {
    title: "📝 Context:",
    body: "George’s Pizza & Steakhouse is a well-established restaurant known for its rich flavors, generous portions, and strong local following. While the in-person dining experience reflects warmth and quality, the digital experience didn’t carry the same feeling. The website felt outdated and lacked clear structure, making simple tasks like browsing the menu or placing an order more difficult than they should be.",
    image: "/figma/georges-context-main.png",
  },
  {
    title: "⚠️ Problem",
    body: "The existing experience made browsing and ordering unnecessarily difficult. The menu felt overwhelming, visual hierarchy was weak, and there was no clear call-to-action flow. Deals and popular items were not easily discoverable, creating friction throughout the user journey.",
    image: "/figma/georges-clarity-main.png",
  },
  {
    title: "🎯 Goal:",
    body: "Create a modern, intuitive platform that makes menu exploration effortless and ordering quick. The design needed to simplify navigation, improve hierarchy, surface deals, and reduce checkout friction.",
    image: "/figma/georges-iteration-main.png",
  },
  {
    title: "👁️ Designing for clarity:",
    body: "With a content-heavy menu, the first step was reducing overwhelm through clearer structure. Long lists were transformed into digestible sections, categories were simplified, and product cards with visible pricing and emphasis points guided faster decisions.",
    image: "/figma/georges-context-main.png",
  },
  {
    title: "📊 Data-driven iteration:",
    body: "Quick usability tests validated that users navigate familiar categories first and respond strongly to deal visibility. Visual cues improved scan speed, and refinements were made continuously to reduce cognitive load.",
    image: "/figma/georges-iteration-main.png",
  },
  {
    title: "⚡ Designing for actionability:",
    body: "A sticky order CTA, streamlined browse-to-checkout flow, and better deal prominence were introduced to support faster action. Mobile behavior was tuned for reliability and speed across ordering touchpoints.",
    image: "/figma/georges-actionability-main.png",
  },
  {
    title: "🗂️ Information hierarchy framework:",
    body: "The menu was organized into priority zones: featured deals first, primary actions next, then supporting detail. This helped users focus on key decisions and reduced interaction fatigue.",
    image: "/figma/georges-hierarchy-a-main.png",
    image2: "/figma/georges-hierarchy-b-main.png",
  },
  {
    title: "🔄 Key interaction: Ordering flow",
    body: "The key interaction centers on a faster browse-and-order path with reduced friction. Better deal visibility and cleaner action pathways support stronger direct online conversion.",
  },
  {
    title: "✅ Final solution",
    body: "The final solution balances a content-heavy menu with a simple, intuitive ordering experience. It helps users explore, decide, and order quickly while giving the brand a stronger digital presence.",
  },
];

export function GeorgesCaseStudy() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />
      <div className="relative overflow-hidden bg-linear-to-r from-[#ffe8ee] via-[#f6e8f3] to-[#e5e2ef] pb-10 pt-[110px]">
        <div className="mx-auto max-w-[1148px] px-4 md:px-5">
          <Link href="/work" className="inline-flex items-center gap-2 text-[20px] font-bold md:text-[24px]">
            ← Back
          </Link>
          <h1 className="mt-6 text-[34px] font-black md:mt-8 md:text-[40px]">🍕 George&apos;s Pizza &amp; Steakhouse</h1>
          <p className="mt-3 max-w-[1011px] text-[16px] leading-loose md:text-[20px]">
            Transformed a content-heavy restaurant website into a clear,
            conversion-focused ordering experience.
          </p>
          <div className="mt-6 overflow-hidden rounded-[26px] border border-black md:mt-8 md:rounded-[30px]">
            <Image
              src="/figma/georges-hero-main.png"
              alt="George's case study hero from Figma"
              width={1001}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <section className="mt-5 grid gap-2 text-[16px] md:mt-6 md:grid-cols-3 md:text-[24px]">
            <p>🧑‍💻 Role: UI/UX Design</p>
            <p>⏳ Duration: 6 Weeks</p>
            <p>📱 Platform: Web</p>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-[1148px] px-4 pb-16 pt-6 md:px-5 md:pb-20 md:pt-8">
        {sections.map((section) => (
          <section key={section.title} className="border-t border-[#efced9] py-8 md:py-10">
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
            {"image2" in section && section.image2 ? (
              <div className="mt-4 overflow-hidden rounded-[18px] border border-black md:rounded-[20px]">
                <Image
                  src={section.image2}
                  alt={`${section.title} secondary`}
                  width={1005}
                  height={315}
                  className="h-auto w-full object-cover"
                />
              </div>
            ) : null}
          </section>
        ))}

        <section className="border-t border-[#efced9] py-8 md:py-10">
          <h2 className="text-[26px] font-extrabold md:text-[32px]">💡 Lessons learned:</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[15px] leading-loose md:text-[16px]">
            <li>Simpler structure improves scanability and completion speed.</li>
            <li>Visual hierarchy directly supports decision-making confidence.</li>
            <li>Mobile-first ordering patterns increase conversion quality.</li>
          </ul>
        </section>
      </div>
      <FigmaFooter />
    </div>
  );
}
