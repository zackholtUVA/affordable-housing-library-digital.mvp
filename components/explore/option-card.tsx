"use client";

import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import type { HousingOption } from "@/lib/types";

type OptionCardProps = {
  option: HousingOption;
};

export function OptionCard({ option }: OptionCardProps) {
  const { toggle, isSelected, isFull } = useCompareStore();
  const selected = isSelected(option.id);
  const disabled = !selected && isFull;

  return (
    <Card as="article" className="flex h-full flex-col justify-between">
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold">{option.title}</h3>
          <Badge>{option.policyConfidenceLabel}</Badge>
        </div>
        <p className="text-sm text-[var(--muted)]">{option.shortSummary}</p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2">
        <Link href={`/options/${option.slug}`} className="text-sm font-medium text-[var(--accent)]">
          [PLACEHOLDER: view details]
        </Link>
        <Button
          size="sm"
          variant={selected ? "secondary" : "primary"}
          disabled={disabled}
          onClick={() => toggle(option.id)}
          aria-label={`${selected ? "Remove" : "Add"} ${option.title} from compare`}
        >
          {selected
            ? "[PLACEHOLDER: remove from compare]"
            : `[PLACEHOLDER: add to compare (${COMPARE_MAX} max)]`}
        </Button>
      </div>
    </Card>
  );
}

