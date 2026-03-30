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
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Featured options"
        title="[PLACEHOLDER: featured option labels section title]"
        description="[PLACEHOLDER: featured option support copy]"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {options.slice(0, 3).map((option) => (
          <Card key={option.id} as="article">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold">{option.title}</h3>
              <Badge>{option.policyConfidenceLabel}</Badge>
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">{option.shortSummary}</p>
            <Link href={`/options/${option.slug}`} className="mt-4 inline-block text-sm font-medium text-[var(--accent)]">
              [PLACEHOLDER: view option details]
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

