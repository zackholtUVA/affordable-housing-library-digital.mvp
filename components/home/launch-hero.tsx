import HalideLanding from "@/components/ui/demo";
import { CTA_LABELS } from "@/lib/constants";
import type { HalideHeroContent } from "@/lib/types";

const launchHeroContent: HalideHeroContent = {
  kicker: "Affordable Housing Library",
  archiveLabel: "Planning guidance for early housing decisions",
  title: "Compare Affordable Housing Paths with Confidence",
  subtitle:
    "Explore realistic options, weigh tradeoffs, and move toward practical next steps with clearer direction.",
  telemetryLines: ["Community-facing decision support", "Built for plain-language comparison"],
  ctaLabel: CTA_LABELS.explore,
  ctaHref: "/explore",
  bottomLeftLines: [
    "Start with your situation and goals",
    "Use side-by-side comparison before contacting local experts",
  ],
};

export function LaunchHeroSection() {
  return <HalideLanding content={launchHeroContent} />;
}
