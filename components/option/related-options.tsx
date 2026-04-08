import Link from "next/link";
import Image from "next/image";

import type { HousingOption } from "@/lib/types";
import { Badge } from "@/components/shared/badge";
import { Card } from "@/components/shared/card";
import { Home } from "lucide-react";

type RelatedOptionsProps = {
  options: HousingOption[];
};

export function RelatedOptions({ options }: RelatedOptionsProps) {
  return (
    <Card as="section" className="space-y-4">
      <h2 className="text-xl font-semibold">Related options</h2>
      <div className="mt-[var(--space-stack-loose)] grid gap-[var(--space-stack-tight)] md:grid-cols-2">
        {options.map((option) => (
          <Link
            key={option.id}
            href={`/options/${option.slug}`}
            className="shape-angular-md surface-3d surface-3d-interactive min-w-0 break-words border border-[var(--border)] bg-[var(--surface)] p-0"
          >
            {option.imageUrl ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[inherit] bg-[var(--surface-2)]">
                <Image
                  src={option.imageUrl}
                  alt={option.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {option.preApproved ? (
                  <span className="absolute left-2 top-2 rounded-full bg-[var(--accent)] px-2 py-1 text-xs font-semibold text-[var(--accent-foreground)]">
                    Pre-approved
                  </span>
                ) : null}
              </div>
            ) : (
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-t-[inherit] bg-[var(--surface-2)] text-[var(--muted)]">
                <Home className="h-6 w-6" aria-hidden="true" />
              </div>
            )}
            <div className="space-y-3 p-5">
              <div className="flex min-w-0 items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Related option
                  </p>
                  <p className="min-w-0 break-words font-medium">{option.title}</p>
                </div>
                <Badge className="shrink-0">{option.policyConfidenceLabel}</Badge>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{option.shortSummary}</p>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}
