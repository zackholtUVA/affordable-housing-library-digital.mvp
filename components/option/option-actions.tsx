"use client";

import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { Button } from "@/components/shared/button";

type OptionActionsProps = {
  optionId: string;
};

export function OptionActions({ optionId }: OptionActionsProps) {
  const { isSelected, toggle, isFull } = useCompareStore();
  const selected = isSelected(optionId);
  const disabled = !selected && isFull;

  return (
    <Button
      variant={selected ? "secondary" : "primary"}
      disabled={disabled}
      onClick={() => toggle(optionId)}
    >
      {selected
        ? "[PLACEHOLDER: remove from compare]"
        : `[PLACEHOLDER: add to compare (${COMPARE_MAX} max)]`}
    </Button>
  );
}

