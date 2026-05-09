import type { Metadata } from "next";
import { FigmaFooter, FigmaHeader } from "@/components/figma-chrome";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Riya Designs for UI/UX and product strategy work.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#fffdfb]">
      <FigmaHeader />
      <section className="figma-gradient">
        <div className="figma-shell pb-[var(--space-page-hero-bottom)] pt-[var(--space-hero-pad-top)]">
          <h1 className="text-[clamp(32px,9vw,56px)] font-extrabold">Contact</h1>
          <p className="mt-4 max-w-[920px] text-[clamp(16px,4.2vw,24px)] leading-[1.45]">
            Have a project in mind? Let&apos;s create something impactful together.
          </p>
        </div>
      </section>
      <section className="figma-shell pb-[var(--space-content-pad-bottom)] pt-[var(--space-content-pad-top)]">
        <div className="rounded-[clamp(24px,2.1vw,30px)] border border-[#f1cad7] bg-[rgba(243,135,171,0.2)] p-[clamp(20px,3vw,40px)]">
          <p className="text-[clamp(18px,5vw,28px)] font-bold">Preferred channels</p>
          <div className="mt-6 space-y-4 text-[clamp(15px,4vw,22px)] break-words">
            <p>
              Email:{" "}
              <a className="underline break-all" href="mailto:hello@riyadesigns.studio">
                hello@riyadesigns.studio
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                className="underline break-all"
                href="https://www.linkedin.com/in/designerriya"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/designerriya
              </a>
            </p>
          </div>
        </div>
      </section>
      <FigmaFooter />
    </div>
  );
}
