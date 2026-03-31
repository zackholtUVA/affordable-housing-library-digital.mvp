import { FeaturedOptions } from "@/components/home/featured-options";
import { HowItWorks } from "@/components/home/how-it-works";
import { IntroSection } from "@/components/home/intro-section";
import { LaunchHeroSection } from "@/components/home/launch-hero";
import { PathwayGrid } from "@/components/home/pathway-grid";
import { PageShell } from "@/components/layout/page-shell";
import { InfoCallout } from "@/components/shared/info-callout";
import { housingOptions } from "@/data/housing-options";
import { pathways } from "@/data/pathways";

export default function HomePage() {
  return (
    <PageShell className="space-y-[calc(var(--space-section)*0.9)]">
      <LaunchHeroSection />
      <div className="fade-in">
        <IntroSection />
      </div>
      <div className="fade-in">
        <PathwayGrid pathways={pathways} />
      </div>
      <div className="fade-in">
        <FeaturedOptions options={housingOptions} />
      </div>
      <div className="fade-in space-y-[calc(var(--space-stack)*0.95)]">
        <HowItWorks />
        <InfoCallout title="[PLACEHOLDER: trust and limitations]" tone="warning">
          [PLACEHOLDER: this tool is informational and nonbinding; users should consult qualified local professionals]
        </InfoCallout>
      </div>
    </PageShell>
  );
}
