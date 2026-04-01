"use client";

import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { useSessionContext } from "@/lib/session-context";
import { useUx } from "@/lib/ux";
import { cn } from "@/lib/utils";
import type { HousingOption } from "@/lib/types";

type OptionCardProps = {
  option: HousingOption;
};

export function OptionCard({ option }: OptionCardProps) {
  const { toggle, isSelected, isFull } = useCompareStore();
  const { markOptionViewed } = useSessionContext();
  const { addToast } = useUx();
  const selected = isSelected(option.id);
  const limitReached = !selected && isFull;

  const handleCompareClick = () => {
    if (limitReached) {
      addToast({
        tone: "warning",
        message: "Comparison is full. Remove one option to add another.",
      });
      return;
    }

    toggle(option.id);
    markOptionViewed(option.id);
    addToast({
      tone: selected ? "info" : "success",
      message: selected
        ? "Removed from comparison."
        : "Added to comparison.",
    });
  };

  return (
    <Card
      as="article"
      className={cn(
        "flex h-full min-w-0 flex-col justify-between",
        selected
          ? "border-[color-mix(in_oklab,var(--accent)_55%,var(--border))]"
          : "",
      )}
    >
      <div className="min-w-0">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="min-w-0 break-words text-lg font-semibold">{option.title}</h3>
          <Badge>{option.policyConfidenceLabel}</Badge>
        </div>
        <p className="min-w-0 break-words text-sm leading-relaxed text-[var(--muted)]">
          {option.shortSummary}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/options/${option.slug}`}
          onClick={() => markOptionViewed(option.id)}
          className="text-sm font-medium text-[var(--accent)]"
        >
          View details
        </Link>
        <Button
          data-option-action="true"
          size="sm"
          variant={selected ? "secondary" : "primary"}
          onClick={handleCompareClick}
          aria-label={`${selected ? "Remove" : "Add"} ${option.title} from compare`}
          aria-describedby={limitReached ? `${option.id}-compare-limit` : undefined}
        >
          {selected ? "Remove from compare" : "Add to compare"}
        </Button>
      </div>
      {limitReached ? (
        <p
          id={`${option.id}-compare-limit`}
          className="mt-4 min-w-0 break-words text-xs text-[var(--danger)]"
          aria-live="polite"
        >
          You already selected {COMPARE_MAX} options. Remove one to add this option.
        </p>
      ) : null}
    </Card>
  );
}
