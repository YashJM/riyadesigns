import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyImageTrigger,
  CaseStudyLightboxRoot,
} from "@/components/case-study-lightbox";
import { FigmaHeader, FigmaFooter } from "@/components/figma-chrome";

type ImageSize = { width: number; height: number };

type AksharSection = {
  icon: string;
  title: string;
  body?: string | string[];
  image?: string;
  image2?: string;
  imageSize?: ImageSize;
  image2Size?: ImageSize;
  stackImages?: boolean;
  containImage?: boolean;
};

function CaseStudyContainedImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <CaseStudyImageTrigger
      src={src}
      alt={alt}
      className="flex justify-center overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black bg-[#fafafa] shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mx-auto h-auto max-h-[min(52dvh,520px)] w-auto max-w-full object-contain"
        sizes="(max-width: 768px) 100vw, min(1005px, 92vw)"
      />
    </CaseStudyImageTrigger>
  );
}

const sections: AksharSection[] = [
  {
    icon: "📝",
    title: "About the project",
    body: [
      "Akshar Packs is a packaging business focused on delivering reliable and high-quality solutions for its clients. While the company had a strong operational foundation, its digital presence didn’t fully reflect the professionalism and scale of the brand.",
      "The existing experience lacked structure, visual hierarchy, and clear communication, making it difficult for users to understand the range of services or navigate through the information effectively. Instead of guiding users, the interface placed the burden on them to explore and interpret the content on their own. This created a gap between how the brand operates offline and how it is perceived online. The goal of this project was to design a website that brings clarity, structure, and a stronger visual identity—helping users quickly understand the offerings while building trust through a clean and modern experience.",
    ],
  },
  {
    icon: "🧩",
    title: "My Contribution",
    body: "Led the Akshar Packaging project end-to-end using a research-driven approach, focusing on simplifying how users explore and inquire about packaging products. Conducted user research to identify key pain points such as unclear product specifications and complex inquiry processes. Defined the UX strategy and designed wireframes and high-fidelity prototypes to improve product discovery and navigation. Built a scalable design system to ensure consistency across the platform. Collaborated closely with developers to ensure smooth implementation and accurate design translation.",
    image: "/figma/akshar-contribution-a.png",
    image2: "/figma/akshar-contribution-b.png",
    imageSize: { width: 1628, height: 897 },
    image2Size: { width: 1416, height: 710 },
    stackImages: true,
  },
  {
    icon: "⚠️",
    title: "Problem",
    body: "Businesses faced several challenges while interacting with the Akshar Packaging platform, including confusing navigation and poorly structured product categories that made it difficult to find relevant packaging solutions. Important details such as product specifications and customization options were not clearly visible, leading to uncertainty during decision-making. The inquiry process was inefficient and slowed down lead generation, while the lack of integration with CRM system further impacted communication and overall operational efficiency.",
    image: "/figma/akshar-problem.png",
    image2: "/figma/akshar-research.png",
    imageSize: { width: 736, height: 660 },
    image2Size: { width: 604, height: 543 },
    stackImages: true,
  },
  {
    icon: "🎯",
    title: "Goal",
    body: "The goal was to design a user-centered platform for Akshar Packaging that simplifies how users explore products and understand customization options. The experience focused on streamlining the inquiry process to improve lead generation and make communication more efficient. It also aimed to integrate seamlessly with CRM and communication systems to support business workflows. Additionally, a scalable design system was created to ensure consistency and support future growth of the platform.",
  },
  {
    icon: "👥",
    title: "Target Users",
    body: "The target users for Akshar Packaging include small to medium business owners who need reliable and scalable packaging solutions, designers and operations teams who require flexibility and precision in customization, as well as startups that are looking for quick, efficient, and cost-effective custom packaging to establish their brand presence.",
    image: "/figma/akshar-target-users.png",
  },
  {
    icon: "🔍",
    title: "Research",
    body: "For Akshar Packaging, research was conducted through interviews and surveys with business clients to better understand their needs and expectations. The key insights revealed that users want clear and detailed product specifications before reaching out to vendors, as this helps them make faster and more informed decisions. Easy access to packaging options, customization details, and pricing was identified as essential for a smooth decision-making process. Additionally, users prefer inquiry forms that are simple, intuitive, and broken into step-based flows to reduce effort and improve completion rates.",
    image: "/figma/akshar-ideation.png",
    imageSize: { width: 1174, height: 436 },
    containImage: true,
  },
  {
    icon: "🧠",
    title: "Ideation & Structure",
    body: "During the ideation and structure phase for Akshar Packaging, user journeys were mapped to create a clear and efficient flow from product discovery to customization and finally inquiry submission. The information architecture was restructured to ensure products and their specifications were easy to find and navigate without confusion. Based on these flows, low-fidelity wireframes were created to quickly visualize layout ideas, improve usability, and validate how users would interact with the platform before moving into detailed design.",
  },
  {
    icon: "🎨",
    title: "Design & Prototyping",
    body: "During the design and prototyping phase for Akshar Packaging, a scalable design system was created to maintain consistency across the platform, including reusable components such as buttons, cards, forms, and typography styles. The product listing and product detail pages were redesigned to improve clarity, enhance visual hierarchy, and make specifications easier to understand. A stepwise inquiry flow was also developed to streamline CRM data capture and reduce user effort. To improve conversions and accessibility, sticky call-to-action elements and quick contact features were introduced throughout key screens. These user flows were further integrated with CRM touchpoints to support efficient communication and lead management. Finally, high-fidelity prototypes were built in Figma to bring the complete experience to life and validate interactions before development.",
  },
  {
    icon: "🧪",
    title: "Testing & Iteration",
    body: "Testing and iteration were carried out through user sessions to evaluate the experience and refine key interactions based on feedback. Product customization clarity was improved to make options and specifications easier to understand and compare. FAQs and in-context guidance were introduced to support users during decision-making and reduce uncertainty. Progress indicators were enhanced within multi-step flows to give users a clearer sense of where they were in the process. Quick contact access was also added to enable faster communication with support or sales teams, improving responsiveness and overall usability.",
  },
  {
    icon: "📊",
    title: "Impact",
    body: "The impact of the redesign was significant, leading to a 3× faster product exploration and inquiry process for users. Lead conversion improved by 25%, reflecting a smoother and more intuitive user journey. CRM-based lead management became more efficient, enabling better organization and tracking of inquiries. Sales follow-ups were also accelerated through integrated workflows, improving response time and communication efficiency. Additionally, a scalable design system was successfully established, ensuring consistency and easier expansion of the platform in the future.",
  },
  {
    icon: "💡",
    title: "Key Takeaways",
    body: "Key takeaways from the project highlight the importance of clear and well-structured content in improving user decision-making throughout the journey. Continuous iteration proved essential in uncovering hidden usability issues that were not initially apparent in early designs. Integrating CRM system significantly improved operational efficiency by streamlining lead management and communication workflows. Additionally, establishing a robust design system ensured consistency across the platform and enabled smooth scalability for future enhancements and feature expansion.",
  },
];

export function FigmaAksharFrame() {
  return (
    <CaseStudyLightboxRoot>
    <div className="bg-[#fffdfb]">
      <FigmaHeader />

      {/* Hero: white band + soft ellipse accents (Figma 3147:146), not full-page gradient */}
      <section className="relative isolate overflow-hidden bg-white pb-[var(--space-page-hero-bottom)] pt-[var(--space-hero-pad-top)]">
        <Image
          src="/figma/hero-ellipse-2.svg"
          alt=""
          width={125}
          height={108}
          aria-hidden
          className="pointer-events-none absolute left-[clamp(4px,2vw,24px)] top-[clamp(120px,18vw,200px)] z-0 h-[clamp(72px,14vw,160px)] w-[clamp(84px,16vw,180px)] opacity-95 max-md:top-[clamp(100px,22vw,160px)]"
        />
        <Image
          src="/figma/hero-ellipse-1.svg"
          alt=""
          width={268}
          height={264}
          aria-hidden
          className="pointer-events-none absolute right-[clamp(-24px,-4vw,12px)] top-[clamp(-40px,-6vw,-12px)] z-0 h-[clamp(120px,22vw,220px)] w-[clamp(120px,22vw,230px)] opacity-90"
        />
        <Image
          src="/figma/hero-ellipse-1.svg"
          alt=""
          width={268}
          height={264}
          aria-hidden
          className="pointer-events-none absolute bottom-[clamp(-48px,-8vw,-20px)] right-[clamp(8%,12vw,18%)] z-0 hidden h-[clamp(100px,18vw,190px)] w-[clamp(100px,18vw,200px)] opacity-[0.35] md:block"
        />

        <div className="figma-shell relative z-10">
          <Link href="/work" className="inline-flex items-center gap-2 text-[clamp(20px,1.9vw,24px)] font-bold">
            ← Back
          </Link>
          <h1 className="mt-8 text-[clamp(34px,3.2vw,40px)] font-black">📦 Akshar Packs</h1>
          <p className="mt-3 max-w-[1011px] text-[clamp(15px,3.6vw,20px)] leading-loose">
            Akshar Packs is a packaging solutions provider that delivers custom packaging solutions for a variety of
            industries. The goal of this redesign was to improve the user experience, clarity of product offerings, and
            conversion rates by streamlining product discovery and inquiry.
            <a
              href="https://aksharpacks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              {" "}
              https://aksharpacks.com/
            </a>
          </p>
          <CaseStudyImageTrigger
            src="/figma/akshar-hero.png"
            alt="Akshar Packs hero"
            className="mt-8 overflow-hidden rounded-[clamp(22px,2.1vw,30px)] border border-black shadow-[0_16px_48px_-16px_rgba(0,0,0,0.14)]"
          >
            <Image
              src="/figma/akshar-hero.png"
              alt="Akshar Packs hero"
              width={1001}
              height={480}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, min(1001px, 92vw)"
            />
          </CaseStudyImageTrigger>
          <dl className="mt-8 flex flex-col gap-3 text-[clamp(14px,3.5vw,24px)] sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-[clamp(14px,2.4vw,40px)] sm:gap-y-2">
            <div className="flex min-w-0 flex-wrap items-baseline gap-1.5">
              <dt className="font-extrabold">🧑‍💻 Role:</dt>
              <dd className="m-0 min-w-0 font-normal">UI/UX Design (End-to-End Product Design)</dd>
            </div>
            <div className="flex flex-wrap items-baseline gap-1.5">
              <dt className="shrink-0 font-extrabold">⏳ Duration:</dt>
              <dd className="m-0 font-normal">4 Weeks</dd>
            </div>
            <div className="flex flex-wrap items-baseline gap-1.5">
              <dt className="shrink-0 font-extrabold">📱 Platform:</dt>
              <dd className="m-0 font-normal">Web</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="figma-shell pb-[var(--space-content-pad-bottom)] pt-[var(--space-content-pad-top)]">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className={`pb-[clamp(1.75rem,6vw,2.75rem)] ${index === 0 ? "pt-0" : "pt-[clamp(1.75rem,6vw,2.75rem)]"}`}
          >
            <hr className="case-study-rule mb-[clamp(20px,2.8vw,28px)]" aria-hidden />
            <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">
              {section.icon} {section.title}:
            </h2>
            {Array.isArray(section.body) ? (
              <div className="mt-4 max-w-[1005px] space-y-4 text-[clamp(15px,3.4vw,16px)] leading-loose">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="mt-4 max-w-[1005px] text-[clamp(15px,3.4vw,16px)] leading-loose">{section.body}</p>
            )}
            {section.image && section.image2 ? (
              <div
                className={
                  section.stackImages
                    ? "mt-6 flex max-w-[1005px] flex-col gap-4"
                    : "mt-6 grid gap-4 md:grid-cols-2 md:gap-5"
                }
              >
                {section.stackImages ? (
                  <>
                    <CaseStudyContainedImage
                      src={section.image}
                      alt={section.title}
                      width={section.imageSize?.width ?? 1005}
                      height={section.imageSize?.height ?? 600}
                    />
                    <CaseStudyContainedImage
                      src={section.image2}
                      alt={
                        section.title === "Problem"
                          ? "Akshar Packs VoIP and CRM integration screen"
                          : `${section.title} visual 2`
                      }
                      width={section.image2Size?.width ?? 1005}
                      height={section.image2Size?.height ?? 600}
                    />
                  </>
                ) : (
                  <>
                    <CaseStudyImageTrigger
                      src={section.image}
                      alt={section.title}
                      className="overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]"
                    >
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={1005}
                        height={359}
                        className="h-auto w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </CaseStudyImageTrigger>
                    <CaseStudyImageTrigger
                      src={section.image2}
                      alt={`${section.title} visual 2`}
                      className="overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]"
                    >
                      <Image
                        src={section.image2}
                        alt={`${section.title} visual 2`}
                        width={1005}
                        height={359}
                        className="h-auto w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </CaseStudyImageTrigger>
                  </>
                )}
              </div>
            ) : null}
            {section.image && !section.image2 ? (
              <div className="mt-6 max-w-[1005px]">
                {section.containImage ? (
                  <CaseStudyContainedImage
                    src={section.image}
                    alt="Akshar Packs Our Legacy in Packaging section"
                    width={section.imageSize?.width ?? 1005}
                    height={section.imageSize?.height ?? 600}
                  />
                ) : (
                  <CaseStudyImageTrigger
                    src={section.image}
                    alt={section.title}
                    className="overflow-hidden rounded-[clamp(16px,1.4vw,20px)] border border-black shadow-[0_12px_36px_-14px_rgba(0,0,0,0.12)]"
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={1005}
                      height={315}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 768px) 100vw, min(1005px, 92vw)"
                    />
                  </CaseStudyImageTrigger>
                )}
              </div>
            ) : null}
          </article>
        ))}
      </section>
      <FigmaFooter />
    </div>
    </CaseStudyLightboxRoot>
  );
}
