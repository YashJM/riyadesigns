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
      <section className="bg-linear-to-r from-[#ffe8ee] via-[#f6e8f3] to-[#e5e2ef]">
        <div className="mx-auto max-w-[1148px] px-5 pb-14 pt-[110px]">
          <h1 className="text-[56px] font-extrabold">Contact</h1>
          <p className="mt-4 max-w-[920px] text-[24px] leading-[1.4]">
            Have a project in mind? Let&apos;s create something impactful together.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1148px] px-5 pb-20 pt-10">
        <div className="rounded-[30px] border border-[#f1cad7] bg-[rgba(243,135,171,0.2)] p-10">
          <p className="text-[28px] font-bold">Preferred channels</p>
          <div className="mt-6 space-y-4 text-[22px]">
            <p>
              Email: <a className="underline" href="mailto:hello@riyadesigns.studio">hello@riyadesigns.studio</a>
            </p>
            <p>
              Linkedin:{" "}
              <a className="underline" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
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
