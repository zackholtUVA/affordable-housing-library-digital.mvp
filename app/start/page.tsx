import Link from "next/link";

import { FeaturedOptions } from "@/components/home/featured-options";
import { HowItWorks } from "@/components/home/how-it-works";
import { IntroSection } from "@/components/home/intro-section";
import { PathwayGrid } from "@/components/home/pathway-grid";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/shared/button";
import { InfoCallout } from "@/components/shared/info-callout";
import { housingOptions } from "@/data/housing-options";
import { pathways } from "@/data/pathways";

export default function StartPage() {
  return (
    <PageShell className="space-y-[var(--space-section)]">
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
        <HowItWorks id="how-it-works" />
      </div>
      <div className="fade-in">
        <InfoCallout title="Trust and limitations" tone="warning">
          This library helps you compare pathways and prepare questions. Final decisions should always be confirmed with local planning staff and qualified professionals.
        </InfoCallout>
      </div>

      <section className="fade-in shape-angular-md surface-3d border border-[var(--border)] bg-[var(--surface)] p-[var(--space-card-pad)] text-center">
        <h2 className="text-2xl font-semibold">Ready to browse all options?</h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          Use our filtering tools to narrow down options by goals, pathway type, complexity, and pre-approval status.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link href="/explore">
            <Button size="sm" className="h-11 rounded-lg px-5 text-[15px] font-medium">
              Browse with filters
            </Button>
          </Link>
          <Link href="/compare" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)]">
            Go directly to Compare
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
