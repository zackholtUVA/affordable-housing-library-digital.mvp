import Link from "next/link";

import type { UserPathway } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";

type PathwayGridProps = {
  pathways: UserPathway[];
};

export function PathwayGrid({ pathways }: PathwayGridProps) {
  return (
    <section className="space-y-[var(--space-stack)]">
      <SectionHeading
        eyebrow="Start with your situation"
        title="Choose the scenario that best matches your current goal"
        description="Each pathway opens a focused set of options so you can compare tradeoffs without starting from scratch."
      />
      <div className="grid gap-[var(--space-stack)] md:grid-cols-2 lg:grid-cols-3">
        {pathways.map((pathway) => (
          <Card key={pathway.id} as="article" className="flex min-w-0 flex-col justify-between">
            <div className="min-w-0">
              <h3 className="min-w-0 break-words text-lg font-semibold">{pathway.title}</h3>
              <p className="mt-3 min-w-0 break-words text-sm leading-relaxed text-[var(--muted)]">
                {pathway.shortDescription}
              </p>
            </div>
            <div className="mt-8">
              <Link
                href={`/options/${pathway.linkedOptionIds[0]}`}
                className="text-sm font-medium text-[var(--accent)]"
              >
                View options
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
