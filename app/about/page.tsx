import type { Metadata } from "next";
import { CelestialAbout } from "@/components/celestial/celestial-about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Riya Patel is a Product Designer based in Ontario, Canada, focused on simplifying complex workflows across SaaS, CRM, fintech, and B2B products.",
};

export default function AboutPage() {
  return <CelestialAbout />;
}
