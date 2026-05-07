import Image from "next/image";
import Link from "next/link";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

function SectionDivider() {
  return (
    <div className="flex w-full justify-center py-[clamp(20px,2.5vw,28px)]" aria-hidden>
      <img
        src="/figma/easygo-section-line.svg"
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
    src: "/figma/easygo-impact-1.png",
    w: 854,
    h: 122,
    alt: "35% faster bookings",
  },
  {
    src: "/figma/easygo-impact-2.png",
    w: 854,
    h: 150,
    alt: "20% increase in engagement",
  },
] as const;

export function FigmaEasygoFrame() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />

      <section className="figma-gradient relative isolate overflow-hidden pb-[clamp(28px,4vw,40px)] pt-[clamp(88px,9vw,110px)]">
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

          <h1 className="mt-[clamp(20px,3vw,32px)] whitespace-pre text-[clamp(34px,3.2vw,40px)] font-black leading-tight">
            {"🚗  EasyGo"}
          </h1>

          <p className="mt-[clamp(16px,2vw,24px)] max-w-[1002px] text-[clamp(15px,1.5vw,20px)] leading-[2] text-black">
            EasyGo is a mobile ride-booking application designed to simplify how users request rides, select vehicles, and
            manage their trips in a fast and seamless way. The goal of this project was to create an intuitive, real-time
            experience that reduces booking friction and helps users move from pickup to destination effortlessly.
          </p>

          <StudyImage
            src="/figma/easygo-hero.png"
            alt="EasyGo ride-booking collage on green background"
            width={1003}
            height={247}
            maxWidthClass="max-w-[min(100%,1003px)]"
          />

          <div className="mt-[clamp(20px,2.2vw,28px)] flex flex-wrap items-baseline gap-x-[clamp(18px,3vw,40px)] gap-y-3 text-[clamp(14px,1.55vw,24px)]">
            <p className="m-0 max-w-[min(100%,380px)]">
              <span className="font-extrabold">🧑‍💻 Role:</span> UI/UX Design (Interaction Design)
            </p>
            <p className="m-0 whitespace-nowrap">
              <span className="font-extrabold">⏳ Duration:</span> 10 Weeks
            </p>
            <p className="m-0 whitespace-nowrap">
              <span className="font-extrabold">📱 Platform:</span> Mobile
            </p>
          </div>
        </div>
      </section>

      <div className="figma-shell pb-[clamp(56px,6vw,88px)] text-black">
        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📝 Context:</h2>
          <div className="mt-4 max-w-[1003px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            <p>
              Booking a ride often involves unnecessary friction—manually entering locations, comparing ride types, and
              dealing with unclear pricing or wait times. Many ride-booking apps feel complex, especially during urgent
              situations when users need quick and reliable transportation.
            </p>
            <p className="mb-0">
              EasyGo was designed to streamline this experience by integrating location, ride selection, and trip tracking
              into one cohesive flow. The focus was to create a system where users can book a ride quickly, track it in real
              time, and feel confident throughout the journey.
            </p>
          </div>
          <StudyImage
            src="/figma/easygo-context-trio.png"
            alt="EasyGo context screens: onboarding and splash"
            width={698}
            height={375}
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">⚠️ Problem:</h2>
          <p className="mt-4 max-w-[1000px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            Users often encounter friction throughout the ride-booking experience due to unclear pricing, multi-step
            workflows, and limited real-time visibility of drivers. The lack of transparent fare estimates creates
            uncertainty, making users hesitant to proceed with bookings. Additionally, navigating through multiple screens to
            enter destinations, choose vehicle types, and confirm rides increases cognitive load and slows down the process.
            Real-time driver tracking is often inconsistent or hard to interpret, further reducing trust and overall user
            confidence in the experience.
          </p>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🎯 Goal:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            The goal was to design a ride-booking experience that feels intuitive, efficient, and dependable at every step.
            The focus was on minimizing user effort by streamlining the booking flow—reducing unnecessary steps and enabling
            users to complete actions quickly with minimal input. Clear and transparent real-time updates, such as driver
            location, arrival time, and fare details, were essential to build trust and eliminate uncertainty. Additionally,
            the experience aimed to create a seamless journey from booking to drop-off, ensuring users feel confident,
            informed, and stress-free throughout the entire process.
          </p>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🛠️ Design Process:</h2>
          <div className="mt-4 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            <p className="font-extrabold text-[clamp(18px,1.45vw,20px)] leading-[2.7]">🔄 Understanding User Journey</p>
            <p className="mt-1">
              The experience was structured into four key flows: onboarding and authentication, location and destination
              selection, ride booking, and trip tracking. The onboarding flow ensures quick access to the app, while the main
              experience focuses on enabling users to book rides with minimal effort.
            </p>
          </div>
          <StudyImage
            src="/figma/easygo-user-flow.png"
            alt="EasyGo user journey and site map"
            width={1011}
            height={834}
            maxWidthClass="max-w-[min(100%,1011px)]"
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📐 Wireframing &amp; Structure</h2>
          <div className="mt-4 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            <p>
              The app follows a map-first approach, where the user&apos;s location is automatically detected and displayed.
              Key actions such as entering a destination and selecting ride options are layered on top of the map, reducing
              navigation effort and keeping the experience focused.
            </p>
          </div>
          <StudyImage
            src="/figma/easygo-wireframe-sketch.png"
            alt="EasyGo paper wireframe sketch"
            width={494}
            height={611}
            maxWidthClass="max-w-[min(100%,494px)]"
            bordered
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🎨 Visual Design &amp; System</h2>
          <div className="mt-4 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            <p>
              The visual design uses a clean interface with green accents to highlight actions like booking and confirmations.
              The use of maps, car visuals, and route lines creates a real-time, dynamic experience that feels interactive and
              responsive.
            </p>
          </div>
          <StudyImage
            src="/figma/easygo-color-palette.png"
            alt="EasyGo color palette swatches"
            width={856}
            height={409}
            maxWidthClass="max-w-[min(100%,856px)]"
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">🔤 Typography</h2>
          <div className="mt-4 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            <p>
              Typography is optimized for quick decision-making, with clear emphasis on pricing, ride types, and timing.
              Important details such as fare, vehicle category, and ETA are highlighted to help users make fast and confident
              choices.
            </p>
          </div>
          <StudyImage
            src="/figma/easygo-typography.png"
            alt="Akatab type scale for EasyGo"
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
          <p className="mt-2 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            The onboarding flow is designed to minimize friction by offering simple sign-up, social login, and OTP
            verification. This ensures users can quickly access the app and start booking rides without unnecessary delays.
          </p>
          <StudyImage
            src="/figma/easygo-onboarding-flow.png"
            alt="EasyGo onboarding and login screens"
            width={894}
            height={382}
            maxWidthClass="max-w-[min(100%,894px)]"
          />

          <SectionDivider />

          <h3 className="text-[clamp(18px,1.45vw,20px)] font-extrabold leading-[2.7]">📍 Location &amp; Destination Selection</h3>
          <p className="mt-2 max-w-[1000px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            Users can easily select pickup and destination locations through map interaction, search, or saved places.
            Features like &quot;Favorites&quot; and &quot;Pick on map&quot; improve speed and convenience for frequent users.
          </p>
          <StudyImage
            src="/figma/easygo-location-flow.png"
            alt="EasyGo pickup and destination selection screens"
            width={698}
            height={378}
          />

          <SectionDivider />

          <h3 className="text-[clamp(18px,1.45vw,20px)] font-extrabold leading-[2.7]">🚗 Ride Booking Flow</h3>
          <p className="mt-2 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            The booking flow allows users to view route previews, compare ride types, and select options based on pricing and
            comfort. Users can also apply promo codes and choose payment methods before confirming the ride.
          </p>
          <StudyImage
            src="/figma/easygo-booking-flow.png"
            alt="EasyGo ride booking and payment screens"
            width={894}
            height={382}
            maxWidthClass="max-w-[min(100%,894px)]"
          />

          <SectionDivider />

          <h3 className="text-[clamp(18px,1.45vw,20px)] font-extrabold leading-[2.7]">
            ⏱️ Real-Time Tracking &amp; Trip Experience
          </h3>
          <p className="mt-2 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            Once booked, users can track their driver in real time, view arrival time, and communicate directly through call
            or message options. This enhances transparency and reduces uncertainty during the wait time.
          </p>
          <StudyImage
            src="/figma/easygo-tracking-flow.png"
            alt="EasyGo live tracking and trip experience screens"
            width={698}
            height={378}
          />

          <SectionDivider />

          <h3 className="text-[clamp(18px,1.45vw,20px)] font-extrabold leading-[2.7]">⭐ Feedback &amp; Completion</h3>
          <p className="mt-2 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            After the trip ends, users can rate their experience and provide feedback. The app also allows tipping, making
            the experience more interactive and user-driven.
          </p>
          <StudyImage
            src="/figma/easygo-feedback-completion.png"
            alt="EasyGo tipping, rating, and trip completion screens"
            width={442}
            height={374}
            maxWidthClass="max-w-[min(100%,442px)]"
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">✅ Feedback &amp; UX Details:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            The app includes important feedback mechanisms such as booking confirmation, loading states, and cancellation
            alerts. These elements ensure users always understand what&apos;s happening, especially during critical moments
            like booking or canceling a ride.
          </p>
          <StudyImage
            src="/figma/easygo-feedback-ux-detail.png"
            alt="EasyGo confirmations, loading, and cancellation feedback"
            width={442}
            height={374}
            maxWidthClass="max-w-[min(100%,442px)]"
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-[clamp(26px,2.7vw,32px)] font-extrabold">📊 Impact:</h2>
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            The design improvements focused on reducing friction and improving real-time clarity resulted in a smoother and
            more efficient ride-booking experience. Users were able to complete ride bookings up to 35% faster, while
            overall engagement increased by around 20%. Additionally, simplifying the booking flow and improving visibility
            reduced user uncertainty and increased trust in the platform.
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
          <p className="mt-4 max-w-[1001px] text-[clamp(15px,1.1vw,16px)] leading-[2]">
            EasyGo delivers a fast, intuitive, and reliable ride-booking experience by combining location tracking, ride
            selection, and trip management into one seamless flow. By simplifying key interactions and prioritizing real-time
            feedback, users can book rides, track drivers, and complete trips with minimal effort. The clean interface,
            map-first approach, and clear visual hierarchy enhance usability while building user confidence. The design also
            creates a scalable foundation, making it easy to expand features such as ride sharing, scheduling, and loyalty
            rewards in the future.
          </p>
        </section>
      </div>

      <FigmaFooter />
    </div>
  );
}
