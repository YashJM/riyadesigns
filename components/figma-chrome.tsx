import Image from "next/image";
import Link from "next/link";
import { FigmaHeader } from "@/components/figma-header";

export { FigmaHeader };

export function FigmaFooter() {
  return (
    <footer className="figma-gradient mt-[var(--space-footer-margin-top)] w-full">
      <div className="figma-shell pb-[max(var(--space-footer-pad-y),env(safe-area-inset-bottom))] pt-[var(--space-footer-pad-y)]">
        <h3 className="max-w-full text-[clamp(28px,8vw,60px)] leading-[1.1]">Let&apos;s build something that matters.</h3>
        <p className="mt-5 max-w-[680px] text-[clamp(16px,4vw,28px)] leading-[1.35] md:mt-6">
          Got an idea, a project, or just want to chat about design? I&apos;m all ears (and coffee ☕) 👇
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-[clamp(16px,1.7vw,24px)] md:mt-9">
          <a
            href="mailto:hello@riyadesigns.studio"
            className="motion-link inline-flex min-h-11 min-w-11 items-center gap-1 py-2"
          >
            <span>Email Me</span>
            <Image src="/figma/arrow.svg" alt="" width={19} height={19} aria-hidden className="h-[16px] w-[16px]" />
          </a>
          <span className="text-muted max-sm:hidden" aria-hidden>
            |
          </span>
          <a
            href="https://www.linkedin.com/in/designerriya"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-link inline-flex min-h-11 items-center gap-1 py-2"
          >
            <span>LinkedIn</span>
            <Image src="/figma/arrow.svg" alt="" width={19} height={19} aria-hidden className="h-[16px] w-[16px]" />
          </a>
        </div>
        <p className="mt-12 font-support text-[13px] font-light leading-normal md:mt-14">
          Designed and crafted by Riya Patel © 2026
        </p>
      </div>
    </footer>
  );
}
