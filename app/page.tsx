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
    <PageShell className="space-y-[var(--space-section)]">
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
      <div className="fade-in">
        <HowItWorks />
      </div>
      <div className="fade-in">
        <InfoCallout title="Trust and limitations" tone="warning">
          This library helps you compare pathways and prepare questions. Final decisions should always be confirmed with local planning staff and qualified professionals.
        </InfoCallout>
      </div>
    </PageShell>
  );
}
