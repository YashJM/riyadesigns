import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyImageTrigger,
  CaseStudyLightboxRoot,
} from "@/components/case-study-lightbox";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";
import { MotionFadeIn } from "@/components/motion/fade-in";
import { MotionRevealGroup } from "@/components/motion/reveal";

function SectionDivider() {
  return (
    <div className="flex w-full justify-center py-[clamp(1.25rem,5vw,2rem)]" aria-hidden>
      <img
        src="/figma/zapp-section-line.svg"
        alt=""
        width={1002}
        height={1}
        className="block h-[2px] w-full max-w-[1002px]"
      />
    </div>
  );
}

function StudyImage({
  src,
  alt,
  width,
  height,
  maxWidthClass = "max-w-[min(100%,698px)]",
  bordered = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxWidthClass?: string;
  bordered?: boolean;
}) {
  return (
    <CaseStudyImageTrigger
      src={src}
      alt={alt}
      className={`mt-[clamp(20px,2.5vw,28px)] overflow-hidden rounded-[clamp(18px,1.8vw,26px)] ${bordered ? "border border-black" : ""} ${maxWidthClass} mx-auto`}
    >
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full object-cover" sizes="96vw" />
    </CaseStudyImageTrigger>
  );
}

const impactMetrics = [
  {
    src: "/figma/zapp-impact-metric-1.png",
    w: 854,
    h: 117,
    alt: "Impact: roughly 20% increase in engagement",
  },
  {
    src: "/figma/zapp-impact-metric-2.png",
    w: 854,
    h: 123,
    alt: "Impact: transfers and payments completed faster",
  },
  {
    src: "/figma/zapp-impact-metric-3.png",
    w: 854,
    h: 123,
    alt: "Impact: higher trust during money actions",
  },
  {
    src: "/figma/zapp-impact-metric-4.png",
    w: 854,
    h: 123,
    alt: "Impact: better financial awareness from analytics",
  },
] as const;

export function FigmaZappFrame() {
  return (
    <CaseStudyLightboxRoot>
    <div className="bg-[#fffdfb]">
      <FigmaHeader />

      <section className="figma-gradient motion-gradient-live relative isolate overflow-hidden pb-[var(--space-page-hero-bottom)] pt-[var(--space-hero-pad-top)]">
        <img
          src="/figma/georges-bg-ellipse-left.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[max(0px,calc(50%-720px))] top-[clamp(140px,20vw,240px)] z-0 w-[min(354px,85vw)] max-w-none -translate-x-1/4 select-none md:left-[10px] md:translate-x-0"
        />
        <img
          src="/figma/georges-bg-ellipse-right.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-[-10%] right-[max(0px,calc(50%-620px))] z-0 w-[min(354px,90vw)] max-w-none translate-x-1/4 select-none md:right-[6%] md:translate-x-0"
        />
        <img
          src="/figma/georges-bg-ellipse-top.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[max(0px,calc(50%-520px))] top-[-24px] z-0 w-[min(278px,72vw)] max-w-none select-none md:right-[10%]"
        />

        <MotionFadeIn className="figma-shell relative z-10">
          <Link
            href="/work"
            className="motion-link inline-flex items-center gap-[5px] text-[clamp(18px,1.8vw,24px)] font-bold text-black"
          >
            <span className="inline-flex size-[25px] items-center justify-center" aria-hidden>
              <span className="-rotate-135 inline-flex">
                <img src="/figma/georges-back-chevron.svg" alt="" width={18} height={18} className="block" />
              </span>
            </span>
            Back
          </Link>

          <h1 className="mt-[clamp(20px,3vw,32px)] text-[clamp(34px,3.2vw,40px)] font-black leading-tight">📲 Zapp Wallet</h1>

          <p className="mt-[clamp(16px,2vw,24px)] max-w-[1011px] text-[clamp(15px,3.8vw,20px)] leading-[2] text-black">
            Zapp Wallet is a mobile fintech application designed to simplify how users manage money — from sending payments
            to tracking expenses and handling everyday financial tasks. The goal of this project was to create a
            frictionless, intuitive, and trustworthy experience, where users can perform financial actions quickly while
            clearly understanding their money.
          </p>

          <CaseStudyImageTrigger
            src="/figma/zapp-hero-collage.png"
            alt="Zapp Wallet product screens collage"
            className="mt-[clamp(20px,2.5vw,28px)] overflow-hidden rounded-[clamp(22px,2.1vw,30px)] border border-black"
          >
            <Image
              src="/figma/zapp-hero-collage.png"
              alt="Zapp Wallet product screens collage"
              width={1001}
              height={247}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 1100px) 100vw, 1001px"
            />
          </CaseStudyImageTrigger>

          <div className="mt-[clamp(20px,2.2vw,28px)] flex flex-col gap-2 text-[clamp(14px,3.5vw,24px)] sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-[clamp(18px,3vw,40px)] sm:gap-y-3">
            <p className="m-0 max-w-full min-w-0">
              <span className="font-extrabold">🧑‍💻 Role:</span> UI/UX Design (Interaction Design)
            </p>
            <p className="m-0">
              <span className="font-extrabold">⏳ Duration:</span> 4 Weeks
            </p>
            <p className="m-0">
              <span className="font-extrabold">📱 Platform:</span> Mobile
            </p>
          </div>
        </MotionFadeIn>
      </section>

      <MotionRevealGroup className="figma-shell pb-[var(--space-content-pad-bottom)] text-black">
        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📝 Context:</h2>
          <p className="mt-4 max-w-[1003px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Zapp Wallet is a digital financial application built to help users manage their money, make payments, and
            track expenses in one place. While digital wallets offer powerful functionality, the experience often feels
            complex and overwhelming for everyday users. Many existing solutions present financial information in a
            cluttered and unintuitive way, requiring users to navigate multiple steps just to complete simple actions
            like sending money or checking their balance. Instead of feeling confident, users are left second-guessing
            their actions—something that becomes even more critical when dealing with finances. This project focused on
            simplifying that experience by designing a system that prioritizes clarity, speed, and trust. The goal was to
            remove friction from everyday financial interactions and create an interface that feels intuitive enough to
            use without thinking, while still powerful enough to support more advanced actions.
          </p>
          <StudyImage
            src="/figma/zapp-context-trio.png"
            alt="Zapp Wallet splash and onboarding screens"
            width={698}
            height={375}
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">⚠️ Problem:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Managing finances across multiple platforms often creates confusion and makes it difficult for users to track
            spending in real time or manage money efficiently. Users also struggle with slow, complex flows for sending
            money and understanding their overall financial habits. The challenge for Zapp Wallet was to simplify these
            experiences by reducing cognitive load and making key actions intuitive and fast. This led to a clean,
            user-friendly design that improves clarity, speed, and overall financial control.
          </p>
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🎯 Goal:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The goal of Zapp Wallet was to create a financial experience that is simple, fast, and trustworthy. Clarity
            was prioritized to make financial data easy to understand at a glance, while efficiency reduced the number
            of steps required for key actions like sending money. Strong visual feedback and a clean interface were used
            to build user confidence and trust. At the same time, engaging financial insights encouraged users to interact
            more actively with the app.
          </p>
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🛠️ Design Process:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            🔄 Understanding User Flows The initial phase focused on mapping key user journeys in Zapp Wallet to ensure
            essential actions like onboarding, payments, and transactions are simple, clear, and easy to complete. This
            helped reduce confusion and create a more intuitive, low-effort user experience.
          </p>
          <StudyImage
            src="/figma/zapp-user-flow-diagram.png"
            alt="User flow map for onboarding, payments, and core Zapp Wallet journeys"
            width={702}
            height={1024}
            maxWidthClass="max-w-[min(100%,900px)]"
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📐 Wireframing &amp; Structure</h2>
          <p className="mt-4 max-w-[895px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Low-fidelity wireframes were used to organize information and define user priorities, ensuring important
            actions are easily accessible and the overall flow feels intuitive and efficient.
          </p>
          <StudyImage
            src="/figma/zapp-wireframes.png"
            alt="Low-fidelity wireframes for Zapp Wallet flows"
            width={481}
            height={710}
            maxWidthClass="max-w-[min(100%,481px)]"
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🎨 Visual Design &amp; System</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The color system uses a balanced fintech palette to highlight key actions, maintain clarity, and reinforce
            trust, helping users focus easily and interact with financial data confidently.
          </p>
          <StudyImage
            src="/figma/zapp-color-system.png"
            alt="Zapp Wallet color palette and token layout"
            width={746}
            height={400}
            maxWidthClass="max-w-[min(100%,746px)]"
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🔤 Typography</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Typography is structured to make financial information, especially numbers, instantly readable and easy to
            compare at a glance. By emphasizing large, high-contrast values for key amounts, the design improves clarity
            and helps users make faster, more confident decisions.
          </p>
          <StudyImage
            src="/figma/zapp-typography.png"
            alt="Typography scale and Manrope usage for Zapp Wallet"
            width={856}
            height={265}
            maxWidthClass="max-w-[min(100%,856px)]"
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🔁 Key User Flows:</h2>
          <p className="mt-4 max-w-[997px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The onboarding and authentication flow is designed to help users get started quickly while maintaining strong
            security standards. By simplifying sign-up and identity verification into a few guided steps, it reduces
            drop-offs and improves completion rates. This balance of speed and security ensures users can access the app
            confidently without unnecessary complexity.
          </p>
          <StudyImage
            src="/figma/zapp-flow-grid.png"
            alt="Onboarding and authentication screen grid"
            width={768}
            height={1024}
            maxWidthClass="max-w-[min(100%,768px)]"
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🖥️ Dashboard Experience:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The dashboard is designed as a centralized hub that gives users instant visibility into their financial
            status, including balance and recent activity. Key actions are strategically placed for quick access,
            reducing the need to navigate through multiple screens. This ensures users can understand their finances at a
            glance and take action efficiently without any friction.
          </p>
          <StudyImage
            src="/figma/zapp-dashboard.png"
            alt="Dashboard and home experience mockups"
            width={1024}
            height={573}
            maxWidthClass="max-w-[min(100%,1062px)]"
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📤 Send Money Flow:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            This streamlined flow is designed to make money transfers as quick and effortless as possible by guiding users
            through only the essential steps. Users simply enter the amount, select a recipient, and confirm the
            transaction without unnecessary interruptions or complex navigation. By reducing cognitive load and removing
            extra decisions, the experience feels more direct and intuitive. This optimization significantly reduces
            friction, helping users complete transfers faster and with greater confidence.
          </p>
          <StudyImage
            src="/figma/zapp-send-money.png"
            alt="Send money and transfer flow screens"
            width={698}
            height={809}
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">⚡ Payments &amp; Features:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            This allows users to complete everyday financial tasks quickly without getting lost in menus, making the
            experience more efficient and intuitive. By grouping core actions like bill payments, QR scanning, and
            splitting expenses in one place, the app reduces effort and speeds up transactions.
          </p>
          <StudyImage
            src="/figma/zapp-payments-features.png"
            alt="Payments, QR, and daily feature screens"
            width={698}
            height={796}
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📈 Insights &amp; Analytics:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The app helps users understand spending behavior through charts, category insights, and transaction trends.
            This transforms the wallet from a utility into a financial guidance tool.
          </p>
          <StudyImage
            src="/figma/zapp-insights.png"
            alt="Insights and analytics views"
            width={698}
            height={375}
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">💳 Cards &amp; Wallet Management:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Users can manage saved cards, view balances, and securely top up funds using a guided card form.
          </p>
          <StudyImage
            src="/figma/zapp-cards-management.png"
            alt="Cards, balances, and top-up management screens"
            width={704}
            height={850}
            maxWidthClass="max-w-[min(100%,704px)]"
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">👤 Profile &amp; Settings:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Account controls, security preferences, language, password changes, and support are organized in one clean
            area for quick access.
          </p>
          <StudyImage
            src="/figma/zapp-profile-settings.png"
            alt="Profile, security, and settings screens"
            width={698}
            height={802}
          />
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">✅ Feedback &amp; Success States:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Strong visual confirmation was used after every important financial action — transfers, scans, withdrawals, and
            payments — reducing anxiety and increasing trust.
          </p>
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📊 Impact:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The design focused on improving usability, reducing friction, and increasing engagement — resulting in a
            smoother and more intuitive experience for users. By simplifying key flows and enhancing clarity, users were able
            to complete tasks faster and interact more confidently with the app, leading to higher overall engagement.
          </p>
          <div className="mt-6 flex max-w-[min(100%,854px)] flex-col gap-[clamp(12px,1.8vw,18px)]">
            {impactMetrics.map((m) => (
              <CaseStudyImageTrigger
                key={m.src}
                src={m.src}
                alt={m.alt}
                className="overflow-hidden rounded-[clamp(14px,1.2vw,18px)]"
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  width={m.w}
                  height={m.h}
                  className="h-auto w-full"
                />
              </CaseStudyImageTrigger>
            ))}
          </div>
        </section>

        <SectionDivider />

        <section className="motion-reveal">
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🚀 Final Outcome:</h2>
          <p className="mt-4 max-w-[1002px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Zapp Wallet delivers a clean and modern financial experience that simplifies how users manage their money on
            a daily basis. By reducing friction in key flows like sending money and making payments, the app enables faster
            and more intuitive interactions, improving overall usability and confidence. The introduction of clear visual
            hierarchy, quick actions, and real-time feedback helps users better understand their finances while encouraging
            more frequent engagement. As a result, task completion became significantly more efficient, with users able to
            complete transactions up to 35% faster, along with an overall increase in engagement of around 20%. The design
            also establishes a scalable foundation, making it easier to introduce future features without compromising
            clarity or user experience.
          </p>
        </section>
      </MotionRevealGroup>

      <FigmaFooter />
    </div>
    </CaseStudyLightboxRoot>
  );
}
