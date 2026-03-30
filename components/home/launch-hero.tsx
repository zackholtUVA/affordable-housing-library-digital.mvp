import HalideLanding from "@/components/ui/demo";
import { CTA_LABELS, HOME_HEADLINE, HOME_SUBHEADLINE } from "@/lib/constants";
import type { HalideHeroContent } from "@/lib/types";

const launchHeroContent: HalideHeroContent = {
  kicker: "Affordable Housing Library MVP",
  archiveLabel: "[PLACEHOLDER: archive label]",
  title: HOME_HEADLINE,
  subtitle: HOME_SUBHEADLINE,
  telemetryLines: [
    "[PLACEHOLDER: locality telemetry 1]",
    "[PLACEHOLDER: locality telemetry 2]",
  ],
  ctaLabel: CTA_LABELS.explore,
  ctaHref: "/explore",
  bottomLeftLines: [
    "[PLACEHOLDER: launch support line 1]",
    "[PLACEHOLDER: launch support line 2]",
  ],
};

export function LaunchHeroSection() {
  return <HalideLanding content={launchHeroContent} />;
}

