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
        <div className="figma-shell pb-[clamp(44px,5vw,56px)] pt-[clamp(88px,9vw,110px)]">
          <h1 className="text-[clamp(40px,4.2vw,56px)] font-extrabold">Contact</h1>
          <p className="mt-4 max-w-[920px] text-[clamp(18px,2vw,24px)] leading-[1.4]">
            Have a project in mind? Let&apos;s create something impactful together.
          </p>
        </div>
      </section>
      <section className="figma-shell pb-[clamp(56px,6vw,80px)] pt-[clamp(28px,3vw,40px)]">
        <div className="rounded-[clamp(24px,2.1vw,30px)] border border-[#f1cad7] bg-[rgba(243,135,171,0.2)] p-[clamp(20px,3vw,40px)]">
          <p className="text-[clamp(22px,2.2vw,28px)] font-bold">Preferred channels</p>
          <div className="mt-6 space-y-4 text-[clamp(18px,1.7vw,22px)]">
            <p>
              Email: <a className="underline" href="mailto:hello@riyadesigns.studio">hello@riyadesigns.studio</a>
            </p>
            <p>
              Linkedin:{" "}
              <a className="underline" href="https://www.linkedin.com/in/designerriya" target="_blank" rel="noopener noreferrer">
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
