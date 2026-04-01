"use client";

import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { useSessionContext } from "@/lib/session-context";
import { useUx } from "@/lib/ux";
import { Button } from "@/components/shared/button";

type OptionActionsProps = {
  optionId: string;
};

export function OptionActions({ optionId }: OptionActionsProps) {
  const { isSelected, toggle, isFull } = useCompareStore();
  const { markOptionViewed } = useSessionContext();
  const { addToast } = useUx();
  const selected = isSelected(optionId);
  const limitReached = !selected && isFull;

  const handleToggle = () => {
    if (limitReached) {
      addToast({
        tone: "warning",
        message: "Comparison is full. Remove one option to add another.",
      });
      return;
    }
    toggle(optionId);
    markOptionViewed(optionId);
    addToast({
      tone: selected ? "info" : "success",
      message: selected
        ? "Removed from comparison."
        : "Added to comparison.",
    });
  };

  return (
    <div className="min-w-0 space-y-4">
      <Button variant={selected ? "secondary" : "primary"} onClick={handleToggle}>
        {selected ? "Remove from compare" : "Add to compare"}
      </Button>
      {limitReached ? (
        <p className="min-w-0 break-words text-xs text-[var(--danger)]">
          You already selected {COMPARE_MAX} options. Remove one to continue.
        </p>
      ) : null}
    </div>
  );
}
