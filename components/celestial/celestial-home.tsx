import { CelestialFooter } from "@/components/celestial/celestial-footer";
import { CelestialHeader } from "@/components/celestial/celestial-header";
import { CelestialShell } from "@/components/celestial/celestial-shell";
import { FeaturedWork } from "@/components/celestial/featured-work";
import { HomeHero } from "@/components/celestial/home-hero";
import { SelectedImpact } from "@/components/celestial/selected-impact";

export function CelestialHome() {
  return (
    <CelestialShell>
      <CelestialHeader />
      <HomeHero />
      <SelectedImpact />
      <FeaturedWork />
      <CelestialFooter />
    </CelestialShell>
  );
}
