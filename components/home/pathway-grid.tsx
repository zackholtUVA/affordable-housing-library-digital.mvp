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
        title="[PLACEHOLDER: pathway section heading]"
        description="[PLACEHOLDER: pathway section support copy]"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pathways.map((pathway) => (
          <Card key={pathway.id} as="article" className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">{pathway.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{pathway.shortDescription}</p>
            </div>
            <div className="mt-6">
              <Link
                href={`/options/${pathway.linkedOptionIds[0]}`}
                className="text-sm font-medium text-[var(--accent)]"
              >
                [PLACEHOLDER: start here]
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
