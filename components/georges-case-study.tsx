import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

const SITE_URL = "https://georgespizzasteakhouse.com/";

function SectionDivider() {
  return (
    <div className="flex w-full justify-center py-[clamp(1.25rem,5vw,2rem)]" aria-hidden>
      <img
        src="/figma/georges-section-line.svg"
        alt=""
        width={1002}
        height={1}
        className="block h-[2px] w-full max-w-[1002px]"
      />
    </div>
  );
}

function CaptionImage({
  src,
  alt,
  width,
  height,
  narrow,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  narrow?: boolean;
}) {
  const wrap = "mt-[clamp(20px,2.5vw,28px)] overflow-hidden rounded-[clamp(20px,2vw,30px)]";
  const inner =
    `${narrow ? "mx-auto max-w-[min(100%,488px)] " : "mx-auto max-w-[min(100%,856px)] "} block h-auto w-full`;

  return (
    <div className={wrap}>
      <Image src={src} alt={alt} width={width} height={height} className={inner} sizes="(max-width: 900px) 100vw, 856px" />
    </div>
  );
}

export function GeorgesCaseStudy() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />

      <div className="figma-gradient relative isolate overflow-hidden pb-[var(--space-page-hero-bottom)] pt-[var(--space-hero-pad-top)]">
        <img
          src="/figma/georges-bg-ellipse-left.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[max(0px,calc(50%-720px))] top-[clamp(180px,22vw,280px)] z-0 w-[min(354px,85vw)] max-w-none -translate-x-1/4 select-none md:left-[14px] md:translate-x-0"
        />
        <img
          src="/figma/georges-bg-ellipse-right.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-[-8%] right-[max(0px,calc(50%-640px))] z-0 w-[min(354px,90vw)] max-w-none translate-x-1/4 select-none md:right-[8%] md:translate-x-0"
        />
        <img
          src="/figma/georges-bg-ellipse-top.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[max(0px,calc(50%-580px))] top-[-20px] z-0 w-[min(278px,70vw)] max-w-none select-none md:right-[12%]"
        />

        <div className="figma-shell relative z-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-[5px] text-[clamp(18px,1.8vw,24px)] font-bold text-black"
          >
            <span className="inline-flex size-[25px] items-center justify-center" aria-hidden>
              <span className="-rotate-135 inline-flex">
                <img src="/figma/georges-back-chevron.svg" alt="" width={18} height={18} className="block" />
              </span>
            </span>
            Back
          </Link>

          <h1 className="mt-[clamp(20px,3vw,32px)] text-[clamp(34px,3.2vw,40px)] font-black leading-tight">
            🍕 George&apos;s Pizza &amp; Steakhouse
          </h1>

          <p className="mt-[clamp(16px,2vw,24px)] max-w-[1011px] text-[clamp(15px,3.8vw,20px)] leading-[2] text-black">
            Transformed a content-heavy restaurant website into a clear, conversion-focused experience. By simplifying
            navigation and optimizing the ordering journey, the platform now supports faster decision-making and improved
            customer engagement.{" "}
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-black underline decoration-solid underline-offset-[0.12em]"
            >
              {SITE_URL}
            </a>
          </p>

          <div className="mt-[clamp(20px,2.5vw,28px)] overflow-hidden rounded-[clamp(22px,2.1vw,30px)] border border-black">
            <Image
              src="/figma/georges-hero-main.png"
              alt="George’s Pizza & Steakhouse redesigned landing experience"
              width={1829}
              height={889}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 1100px) 100vw, 1002px"
            />
          </div>

          <div className="mt-[clamp(20px,2.2vw,28px)] flex flex-col gap-2 text-[clamp(14px,3.5vw,24px)] sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-[clamp(18px,3vw,48px)] sm:gap-y-3">
            <p className="m-0">
              <span className="font-extrabold">🧑‍💻 Role:</span> UI/UX Design{" "}
            </p>
            <p className="m-0">
              <span className="font-extrabold">⏳ Duration:</span> 6 Weeks{" "}
            </p>
            <p className="m-0">
              <span className="font-extrabold">📱 Platform:</span> Web
            </p>
          </div>
        </div>
      </div>

      <div className="figma-shell pb-[var(--space-content-pad-bottom)] text-black">
        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📝 Context:</h2>
          <div className="mt-4 max-w-[1003px] space-y-0 text-[clamp(15px,3.4vw,16px)] leading-[2]">
            <p className="m-0">
              {`George’s Pizza & Steakhouse is a well-established restaurant known for its rich flavors, generous portions, and strong local following. While the in-person dining experience reflects warmth and quality, the digital experience didn’t carry the same feeling.`}
            </p>
            <p className="mt-4">
              The website felt outdated and lacked clear structure, making simple tasks like browsing the menu or placing
              an order more difficult than they should be. Instead of a smooth and intuitive journey, users often had to
              pause and figure out where to go next—which isn’t ideal when you’re just trying to order food quickly.
            </p>
            <p className="mt-4">
              As a result, many customers turned to third-party platforms or offline ordering, creating a disconnect
              between the brand and its digital presence. This highlighted an opportunity to redesign the experience in a
              way that better reflects the restaurant’s personality while making ordering fast, clear, and effortless.
            </p>
          </div>
          <CaptionImage
            src="/figma/georges-context-main.png"
            alt="Context: about and brand story section of the redesigned site"
            width={1591}
            height={844}
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">⚠️ Problem</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The existing experience made browsing and ordering unnecessarily difficult for users. The menu felt
            overwhelming and unstructured, making it feel more like reading a long document than quickly choosing a meal.
            Poor visual hierarchy made it difficult to scan items efficiently, and the lack of clear call-to-action elements
            left users unsure about what to do next. Deals and popular items were not easily discoverable, and the
            overall ordering and communication experience felt disconnected, creating friction throughout the user
            journey.
          </p>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🎯 Goal:</h2>
          <div className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            <p className="m-0">
              The goal was to create a modern, intuitive platform that makes exploring the menu feel effortless and
              ordering feel quick and natural.
            </p>
            <p className="mt-4">
              This meant simplifying navigation, improving visual hierarchy, and helping users find what they want without
              overthinking it. At the same time, the experience needed to highlight deals, guide decisions, and make the
              path to checkout smooth—because no one wants friction between them and their food.
            </p>
          </div>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">👁️ Designing for clarity:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            With a content-heavy menu, the first step was to reduce overwhelm and bring a clear structure to the
            experience. Long, hard-to-scan lists were transformed into organized, digestible sections that made
            navigation more intuitive. Categories such as Pizza, Pasta, Combos, and Deals were simplified to help users
            quickly find what they were looking for. Structured product cards were introduced with clear visuals and
            pricing to improve readability, while popular and high-conversion items were highlighted to guide user
            attention. As a result, browsing became faster, easier, and significantly less mentally demanding.
          </p>
          <CaptionImage
            src="/figma/georges-clarity-main.png"
            alt="Menu grid with clear categories and product cards"
            width={1560}
            height={845}
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📊 Data-driven iteration:</h2>
          <p className="mt-4 max-w-[995px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            To validate design decisions, user behavior was analyzed and quick usability testing was conducted throughout
            the process. The insights revealed that users tend to navigate directly to familiar categories first, while
            deals play a strong role in influencing their choices. It also became clear that visual cues significantly
            improve scanning speed, and long, unstructured menus increase cognitive load. These findings informed
            continuous refinements to the navigation and layout, resulting in a more intuitive and efficient user
            experience.
          </p>
          <CaptionImage
            src="/figma/georges-iteration-main.png"
            alt="Iterated menu layout with tabs and scannable item list"
            width={1657}
            height={871}
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">⚡ Designing for actionability:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Once browsing was simplified, the focus shifted to enabling users to take action quickly and effortlessly. A
            sticky “Order Now” call-to-action was introduced to keep the next step always accessible, while the ordering
            flow was streamlined into a clear path from browsing to selection, customization, and final order. Deals and
            combos were made more prominent to guide decision-making and encourage quicker choices. Mobile responsiveness
            was also improved to support users on the go, ensuring a smooth experience across devices. The overall goal
            was to reduce steps, minimize confusion, and make ordering faster and more intuitive.
          </p>
          <CaptionImage
            src="/figma/georges-actionability-main.png"
            alt="Pickup and delivery choice step in the ordering flow"
            width={467}
            height={347}
            narrow
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🗂️ Information hierarchy framework:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Managing a large volume of menu content required a clear information hierarchy, which I structured into
            distinct priority zones. The highest priority zone highlights deals, combos, and featured items to
            immediately draw attention. The next level focuses on actionable elements such as menu items with pricing and
            add-to-cart options. Supporting information like descriptions and customization is placed afterward, while
            secondary details are kept at the lowest priority. This structure guides users naturally through the menu,
            helping them focus on key actions first and reducing cognitive load during decision-making.
          </p>
          <CaptionImage
            src="/figma/georges-hierarchy-a-main.png"
            alt="Menu list emphasizing hierarchy and pricing"
            width={1623}
            height={695}
          />
          <CaptionImage
            src="/figma/georges-hierarchy-b-main.png"
            alt="Cart summary with clear totals and place order action"
            width={1533}
            height={772}
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🔄 Key interaction: Ordering flow:</h2>
          <p className="mt-4 max-w-[1000px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The key interaction focuses on streamlining the ordering flow to create a faster and more intuitive menu
            browsing experience. By improving the visibility of deals and high-value items while reducing friction
            throughout the ordering process, the redesign aims to drive more direct online conversions. Together, these
            improvements contribute to a stronger, more modern brand perception.
          </p>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">✅ Final solution:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The final solution strikes a balance between a content-heavy menu and a simple, usable experience. It
            empowers users to explore, decide, and order quickly, while giving the business a stronger digital presence
            with room to grow. Most importantly, it brings back what ordering food should always feel like — easy.
          </p>
          <div className="mt-[clamp(20px,2.5vw,28px)] overflow-hidden rounded-[clamp(20px,2vw,30px)]">
            <Image
              src="/figma/georges-hero-main.png"
              alt="Final hero experience highlighting the completed redesign"
              width={1829}
              height={889}
              className="mx-auto max-w-[min(100%,976px)] h-auto w-full object-cover"
              sizes="(max-width: 1000px) 100vw, 976px"
            />
          </div>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">💡 Lessons learned:</h2>
          <ul className="mt-4 max-w-[1001px] list-disc space-y-1 pl-[1.35rem] text-[clamp(15px,3.4vw,16px)] leading-[2] marker:text-black">
            <li>Simplicity is key when dealing with large amounts of content — improves clarity and engagement by 35%</li>
            <li>Visual hierarchy plays a huge role in decision-making</li>
            <li>Highlighting key items directly impacts conversions</li>
            <li>
              Mobile-first design is essential for food ordering — improves order completion rates by 45%
            </li>
            <li>Iteration helps uncover issues you didn’t initially see</li>
          </ul>
        </section>
      </div>

      <FigmaFooter />
    </div>
  );
}
