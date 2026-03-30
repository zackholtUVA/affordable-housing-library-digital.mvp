import HalideLanding from "@/components/ui/demo";
import { CTA_LABELS } from "@/lib/constants";
import type { HalideHeroContent } from "@/lib/types";

const launchHeroContent: HalideHeroContent = {
  kicker: "Affordable Housing Library",
  archiveLabel: "MVP Decision Support Interface",
  title: "Compare Affordable Housing Paths with Confidence",
  subtitle:
    "Explore options, weigh tradeoffs, and move to clear next steps in one focused workflow.",
  telemetryLines: ["Session-only prototype", "No personal data stored"],
  ctaLabel: CTA_LABELS.explore,
  ctaHref: "/explore",
  bottomLeftLines: [
    "Compare up to three options side by side",
    "Use practical checklists before taking next steps",
  ],
};

export function LaunchHeroSection() {
  return <HalideLanding content={launchHeroContent} />;
}
