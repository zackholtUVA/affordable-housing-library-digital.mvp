import Link from "next/link";

import { FeaturedOptions } from "@/components/home/featured-options";
import { HowItWorks } from "@/components/home/how-it-works";
import { PathwayGrid } from "@/components/home/pathway-grid";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/shared/button";
import { housingOptions } from "@/data/housing-options";
import { pathways } from "@/data/pathways";

export default function StartPage() {
  return (
    <PageShell className="space-y-[var(--space-section)]">
      <div className="fade-in">
        <PathwayGrid pathways={pathways} />
      </div>
      <div className="fade-in">
        <FeaturedOptions options={housingOptions} />
      </div>
      <div className="fade-in">
        <HowItWorks id="how-it-works" />
      </div>

      <section className="fade-in shape-angular-md surface-3d border border-[var(--border)] bg-[var(--surface)] p-[var(--space-card-pad)] text-center">
        <h2 className="text-2xl font-semibold">Browse all ADU options</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
          Use filters to narrow by goals, type, and pre-approval status.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link href="/explore">
            <Button size="sm" className="h-11 rounded-lg px-5 text-[15px] font-medium">
              Browse all
            </Button>
          </Link>
          <Link href="/compare" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)]">
            Compare
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
