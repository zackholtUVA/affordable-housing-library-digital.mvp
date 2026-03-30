"use client";

import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { useUx } from "@/lib/ux";
import type { HousingOption } from "@/lib/types";

type OptionCardProps = {
  option: HousingOption;
};

export function OptionCard({ option }: OptionCardProps) {
  const { toggle, isSelected, isFull } = useCompareStore();
  const { addToast } = useUx();
  const selected = isSelected(option.id);
  const limitReached = !selected && isFull;

  const handleCompareClick = () => {
    if (limitReached) {
      addToast({
        tone: "warning",
        message: "[PLACEHOLDER: compare limit reached; remove one option first]",
      });
      return;
    }

    toggle(option.id);
    addToast({
      tone: selected ? "info" : "success",
      message: selected
        ? "[PLACEHOLDER: option removed from compare]"
        : "[PLACEHOLDER: option added to compare]",
    });
  };

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
          data-option-action="true"
          size="sm"
          variant={selected ? "secondary" : "primary"}
          onClick={handleCompareClick}
          aria-label={`${selected ? "Remove" : "Add"} ${option.title} from compare`}
          aria-describedby={limitReached ? `${option.id}-compare-limit` : undefined}
        >
          {selected
            ? "[PLACEHOLDER: remove from compare]"
            : `[PLACEHOLDER: add to compare (${COMPARE_MAX} max)]`}
        </Button>
      </div>
      {limitReached ? (
        <p
          id={`${option.id}-compare-limit`}
          className="mt-3 text-xs text-[var(--danger)]"
          aria-live="polite"
        >
          [PLACEHOLDER: compare limit reached; remove one selected option to add this]
        </p>
      ) : null}
    </Card>
  );
}
