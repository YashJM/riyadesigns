import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

function SectionDivider() {
  return (
    <div className="flex w-full justify-center py-[clamp(1.25rem,5vw,2rem)]" aria-hidden>
      <img
        src="/figma/tripon-section-line.svg"
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
    <div
      className={`mt-[clamp(20px,2.5vw,28px)] overflow-hidden rounded-[clamp(18px,1.8vw,26px)] ${bordered ? "border border-black" : ""} ${maxWidthClass} mx-auto`}
    >
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full object-cover" sizes="96vw" />
    </div>
  );
}

const impactCards = [
  {
    src: "/figma/tripon-impact-1.png",
    w: 854,
    h: 154,
    alt: "40% faster booking completion",
  },
  {
    src: "/figma/tripon-impact-2.png",
    w: 854,
    h: 154,
    alt: "22% increase in engagement",
  },
  {
    src: "/figma/tripon-impact-3.png",
    w: 854,
    h: 123,
    alt: "28% reduction in drop-offs",
  },
] as const;

export function FigmaTriponFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />

      <section className="figma-gradient relative isolate overflow-hidden pb-[var(--space-page-hero-bottom)] pt-[var(--space-hero-pad-top)]">
        <img
          src="/figma/georges-bg-ellipse-left.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[max(0px,calc(50%-720px))] top-[clamp(160px,22vw,260px)] z-0 w-[min(354px,85vw)] max-w-none -translate-x-1/4 select-none md:left-[18px] md:translate-x-0"
        />
        <img
          src="/figma/georges-bg-ellipse-right.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-[-12%] right-[max(0px,calc(50%-640px))] z-0 w-[min(354px,92vw)] max-w-none translate-x-1/4 select-none md:right-[8%] md:translate-x-0"
        />
        <img
          src="/figma/georges-bg-ellipse-top.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[max(0px,calc(50%-560px))] top-[-28px] z-0 w-[min(278px,74vw)] max-w-none select-none md:right-[12%]"
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

          <h1 className="mt-[clamp(20px,3vw,32px)] text-[clamp(34px,3.2vw,40px)] font-black leading-tight">📍 TripOn</h1>

          <p className="mt-[clamp(16px,2vw,24px)] max-w-[1002px] text-[clamp(15px,3.8vw,20px)] leading-[2] text-black">
            TripOn is a mobile travel application designed to simplify how users discover destinations, plan trips, and
            book travel experiences in one seamless flow. The goal of this project was to create an intuitive and visually
            engaging experience that reduces planning effort and helps users move effortlessly from inspiration to booking.
          </p>

          <StudyImage
            src="/figma/tripon-hero.png"
            alt="TripOn product screens collage on blue background"
            width={1003}
            height={247}
            maxWidthClass="max-w-[min(100%,1003px)]"
          />

          <div className="mt-[clamp(20px,2.2vw,28px)] flex flex-col gap-2 text-[clamp(14px,3.5vw,24px)] sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-[clamp(18px,3vw,40px)] sm:gap-y-3">
            <p className="m-0 max-w-full min-w-0">
              <span className="font-extrabold">🧑‍💻 Role:</span> UI/UX Design (Interaction Design)
            </p>
            <p className="m-0">
              <span className="font-extrabold">⏳ Duration:</span> 12 Weeks
            </p>
            <p className="m-0">
              <span className="font-extrabold">📱 Platform:</span> Mobile
            </p>
          </div>
        </div>
      </section>

      <div className="figma-shell pb-[var(--space-content-pad-bottom)] text-black">
        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📝 Context:</h2>
          <p className="mt-4 max-w-[1002px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Planning a trip often requires switching between multiple platforms—searching destinations, comparing hotels,
            booking flights, and organizing itineraries. This fragmented experience increases effort, creates confusion,
            and slows down decision-making. TripOn was designed to bring all these actions into one cohesive ecosystem,
            guiding users smoothly from planning to booking to enjoying their trip—whether exploring cultural landmarks like
            the Statue of Unity or scenic destinations like Pangong Lake.
          </p>
          <StudyImage
            src="/figma/tripon-context-trio.png"
            alt="TripOn context screens: splash and onboarding"
            width={698}
            height={375}
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">⚠️ Problem:</h2>
          <p className="mt-4 max-w-[1000px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Users often feel overwhelmed when exploring travel options due to information overload and disconnected
            platforms. Managing bookings across different apps, navigating complex flows for flights and hotels, and lacking
            a centralized place for trip planning leads to frustration and inefficiency.
          </p>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🎯 Goal:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The goal was to design a travel experience that feels simple, fast, and inspiring. The interface needed to
            reduce the number of steps in key actions, present information clearly, and create a visually engaging
            environment that encourages exploration while keeping everything centralized in one place.
          </p>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🛠️ Design Process:</h2>
          <div className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            <p className="font-extrabold text-[clamp(18px,1.45vw,20px)] leading-[2.7]">🔄 Understanding User Flows</p>
            <p className="mt-1">
              The experience was structured around four key flows: onboarding and authentication, exploring destinations,
              booking travel, and managing trips. The onboarding experience introduces users to the app’s core
              value—helping them plan, book, and enjoy trips effortlessly—while setting a clear and engaging first
              impression.
            </p>
          </div>
          <StudyImage
            src="/figma/tripon-user-flow.png"
            alt="TripOn user flow and site map diagram"
            width={633}
            height={1024}
            maxWidthClass="max-w-[min(100%,880px)]"
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📐 Wireframing &amp; Structure</h2>
          <div className="mt-4 max-w-[1002px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            <p>
              The structure of the app prioritizes a search-first approach combined with visual exploration. The home
              screen presents a clear hierarchy, starting with search functionality, followed by categorized travel options
              and curated destinations. Card-based layouts were used to simplify scanning and reduce cognitive load, making
              it easier for users to browse and make decisions quickly.
            </p>
          </div>
          <StudyImage
            src="/figma/tripon-wireframe-sketch.png"
            alt="TripOn paper wireframe sketch"
            width={484}
            height={615}
            maxWidthClass="max-w-[min(100%,484px)]"
            bordered
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🎨 Visual Design &amp; System</h2>
          <div className="mt-4 max-w-[1002px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            <p>
              The visual design uses a clean blue gradient palette to evoke trust and a sense of travel. Large, immersive
              imagery plays a central role in influencing user decisions, while rounded components and spacing create a
              modern and approachable interface. This combination ensures the experience feels both functional and
              emotionally engaging.
            </p>
          </div>
          <StudyImage
            src="/figma/tripon-color-palette.png"
            alt="TripOn color palette swatches"
            width={856}
            height={409}
            maxWidthClass="max-w-[min(100%,856px)]"
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🔤 Typography</h2>
          <div className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            <p>
              Typography is designed to support quick scanning and decision-making. Key information such as pricing,
              ratings, and location is highlighted clearly, while minimal text ensures users are not overwhelmed. This
              improves readability and helps users compare options efficiently.
            </p>
          </div>
          <StudyImage
            src="/figma/tripon-typography.png"
            alt="Anek Gujarati and type scale for TripOn"
            width={856}
            height={265}
            maxWidthClass="max-w-[min(100%,856px)]"
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🔁 Key User Flows:</h2>

          <h3 className="mt-[clamp(20px,2.5vw,28px)] text-[clamp(18px,1.45vw,20px)] font-extrabold leading-[2.7]">
            🔐 Onboarding &amp; Login
          </h3>
          <p className="mt-2 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The onboarding and authentication flow is designed to minimize friction by offering simple entry points such as
            phone login, OTP verification, and social login. This ensures users can quickly access the app without unnecessary
            complexity, improving completion rates and first-time experience.
          </p>
          <StudyImage
            src="/figma/tripon-onboarding-flow.png"
            alt="TripOn onboarding and login screens"
            width={894}
            height={382}
            maxWidthClass="max-w-[min(100%,894px)]"
          />

          <SectionDivider />

          <h3 className="text-[clamp(18px,1.45vw,20px)] font-extrabold leading-[2.7]">🔍 Explore &amp; Discover</h3>
          <p className="mt-2 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Users can explore destinations through a visually rich interface that combines search, curated experiences, and
            detailed destination pages. High-quality images, ratings, and reviews help users make informed decisions while
            maintaining an engaging browsing experience.
          </p>
          <StudyImage
            src="/figma/tripon-explore-home.png"
            alt="TripOn home, search, and destination discovery screens"
            width={894}
            height={804}
            maxWidthClass="max-w-[min(100%,894px)]"
          />

          <SectionDivider />

          <h3 className="text-[clamp(18px,1.45vw,20px)] font-extrabold leading-[2.7]">✈️ Booking Flow</h3>
          <p className="mt-2 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The booking flow is designed as a clear, step-by-step process where users search for flights, select dates,
            view results, and confirm bookings. Each step is simplified to reduce cognitive load and guide users confidently
            through the process.
          </p>
          <StudyImage
            src="/figma/tripon-booking-flow.png"
            alt="TripOn flight booking screens"
            width={698}
            height={793}
          />

          <SectionDivider />

          <h3 className="text-[clamp(18px,1.45vw,20px)] font-extrabold leading-[2.7]">🧳 Trip Management</h3>
          <p className="mt-2 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            TripOn provides a centralized space where users can manage their trips, view upcoming plans, and save favorite
            destinations. Empty states are also thoughtfully designed to guide users when no trips are booked, encouraging
            further exploration.
          </p>
          <StudyImage
            src="/figma/tripon-trip-management.png"
            alt="Trip management and itineraries screens"
            width={698}
            height={378}
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">✅ Feedback &amp; UX Details</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            The app incorporates clear feedback mechanisms such as loading states, pricing transparency, and structured
            layouts to ensure users feel confident throughout their journey. These elements reduce uncertainty and improve
            trust during key actions like booking.
          </p>
          <StudyImage
            src="/figma/tripon-feedback.png"
            alt="Feedback, confirmations, and UX detail screens"
            width={698}
            height={374}
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📊 Impact:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            Simplifying complex travel flows and improving visual clarity led to a smoother and more engaging trip planning
            experience. Users were able to complete booking tasks up to 40% faster, while overall engagement increased by
            approximately 22% due to a more intuitive and visually driven interface. Streamlined onboarding and a more
            cohesive platform reduced drop-offs by around 28%, making the experience more seamless, accessible, and
            confidence-driven for users.
          </p>
          <div className="mt-6 flex max-w-[min(100%,854px)] flex-col gap-[clamp(12px,1.8vw,18px)]">
            {impactCards.map((card) => (
              <Image
                key={card.src}
                src={card.src}
                alt={card.alt}
                width={card.w}
                height={card.h}
                className="h-auto w-full rounded-[clamp(14px,1.2vw,18px)]"
              />
            ))}
          </div>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🚀 Final Outcome:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,3.4vw,16px)] leading-[2]">
            TripOn delivers a seamless and visually engaging travel experience by integrating discovery, booking, and trip
            management into one unified platform. By simplifying complex user flows and prioritizing clarity, the app
            enables users to explore destinations, book trips, and manage their plans with significantly less effort. The
            intuitive navigation, strong visual hierarchy, and real-time feedback enhance user confidence and efficiency,
            while also creating a scalable foundation for future travel features.
          </p>
        </section>
      </div>

      <FigmaFooter />
    </div>
  );
}
