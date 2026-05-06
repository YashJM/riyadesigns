import type { Metadata } from "next";
import { FigmaAboutFrame } from "@/components/figma-about-frame";

export const metadata: Metadata = {
  title: "About",
  description: "About Riya Patel, UI/UX designer with a product mindset.",
};

export default function AboutPage() {
  return <FigmaAboutFrame />;
}
