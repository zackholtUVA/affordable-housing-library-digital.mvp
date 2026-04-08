import HalideLanding from "@/components/ui/demo";
import type { HalideHeroContent } from "@/lib/types";

const launchHeroContent: HalideHeroContent = {
  title: "Build an ADU and Unlock Your Property's Potential",
  subtitle:
    "Accessory Dwelling Units (ADUs) are small secondary homes on your property—like backyard cottages or garage conversions. Explore your options, compare designs, and take the first step toward building.",
  ctaLabel: "Get started",
  ctaHref: "/get-started",
  secondaryCtaLabel: "What is an ADU?",
  secondaryCtaHref: "#what-is-adu",
};

export function LaunchHeroSection() {
  return <HalideLanding content={launchHeroContent} />;
}
