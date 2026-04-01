import Link from "next/link";

import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";

type RelatedOptionsProps = {
  options: HousingOption[];
};

export function RelatedOptions({ options }: RelatedOptionsProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">Related options</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {options.map((option) => (
          <Link
            key={option.id}
            href={`/options/${option.slug}`}
            className="shape-angular-md surface-3d surface-3d-interactive min-w-0 break-words border border-[var(--border)] bg-[var(--surface-2)] px-5 py-4"
          >
            <p className="font-medium">{option.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{option.shortSummary}</p>
          </Link>
        ))}
      </div>
    </Card>
  );
}
