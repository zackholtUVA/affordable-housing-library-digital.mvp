import HalideLanding from "@/components/ui/demo";
import { CTA_LABELS } from "@/lib/constants";
import type { HalideHeroContent } from "@/lib/types";

const launchHeroContent: HalideHeroContent = {
  title: "Compare Affordable Housing Paths with Confidence",
  subtitle:
    "Explore realistic options, understand tradeoffs, and prepare better conversations with local experts.",
  ctaLabel: CTA_LABELS.explore,
  ctaHref: "/start",
  secondaryCtaLabel: "Learn how this works",
  secondaryCtaHref: "/start#how-it-works",
};

export function LaunchHeroSection() {
  return <HalideLanding content={launchHeroContent} />;
}
