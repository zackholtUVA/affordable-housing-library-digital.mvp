import Link from "next/link";

import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";

type RelatedOptionsProps = {
  options: HousingOption[];
};

export function RelatedOptions({ options }: RelatedOptionsProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">[PLACEHOLDER: related options]</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {options.map((option) => (
          <Link
            key={option.id}
            href={`/options/${option.slug}`}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3"
          >
            <p className="font-medium">{option.title}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{option.shortSummary}</p>
          </Link>
        ))}
      </div>
    </Card>
  );
}

