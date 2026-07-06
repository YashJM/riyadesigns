import type { Metadata } from "next";
import { CelestialAbout } from "@/components/celestial/celestial-about";

export const metadata: Metadata = {
  title: "About",
  description: "About Riya Patel, UI/UX designer with a product mindset.",
};

export default function AboutPage() {
  return <CelestialAbout />;
}
