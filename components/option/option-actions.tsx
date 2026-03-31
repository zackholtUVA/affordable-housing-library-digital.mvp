"use client";

import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { useUx } from "@/lib/ux";
import { Button } from "@/components/shared/button";

type OptionActionsProps = {
  optionId: string;
};

export function OptionActions({ optionId }: OptionActionsProps) {
  const { isSelected, toggle, isFull } = useCompareStore();
  const { addToast } = useUx();
  const selected = isSelected(optionId);
  const limitReached = !selected && isFull;

  const handleToggle = () => {
    if (limitReached) {
      addToast({
        tone: "warning",
        message: "[PLACEHOLDER: compare limit reached; remove one option first]",
      });
      return;
    }
    toggle(optionId);
    addToast({
      tone: selected ? "info" : "success",
      message: selected
        ? "[PLACEHOLDER: option removed from compare]"
        : "[PLACEHOLDER: option added to compare]",
    });
  };

  return (
    <div className="min-w-0 space-y-4">
      <Button variant={selected ? "secondary" : "primary"} onClick={handleToggle}>
        {selected
          ? "[PLACEHOLDER: remove from compare]"
          : `[PLACEHOLDER: add to compare (${COMPARE_MAX} max)]`}
      </Button>
      {limitReached ? (
        <p className="min-w-0 break-words text-xs text-[var(--danger)]">
          [PLACEHOLDER: compare limit reached; remove one option to continue]
        </p>
      ) : null}
    </div>
  );
}
