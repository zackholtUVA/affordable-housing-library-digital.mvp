import Link from "next/link";

import type { HousingOption } from "@/lib/types";
import { Badge } from "@/components/shared/badge";
import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";

type FeaturedOptionsProps = {
  options: HousingOption[];
};

export function FeaturedOptions({ options }: FeaturedOptionsProps) {
  return (
    <section className="space-y-[var(--space-stack)]">
      <SectionHeading
        eyebrow="Featured options"
        title="Popular starting pathways to compare first"
        description="These examples balance feasibility, flexibility, and planning effort so you can quickly understand your range of choices."
      />
      <div className="grid gap-[var(--space-stack)] md:grid-cols-2 lg:grid-cols-3">
        {options.slice(0, 3).map((option) => (
          <Card key={option.id} as="article" className="min-w-0">
            <div className="flex min-w-0 items-start justify-between gap-3">
              <h3 className="min-w-0 break-words text-lg font-semibold">{option.title}</h3>
              <Badge>{option.policyConfidenceLabel}</Badge>
            </div>
            <p className="mt-5 min-w-0 break-words text-sm leading-relaxed text-[var(--muted)]">
              {option.shortSummary}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
              Best for: {option.bestFor[0]}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={`/options/${option.slug}`} className="text-sm font-medium text-[var(--accent)]">
                Learn more
              </Link>
              <Link href="/compare" className="text-sm font-medium text-[var(--accent)]">
                Compare options
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
