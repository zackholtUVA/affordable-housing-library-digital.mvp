"use client";

import { Tag } from "@/components/shared/tag";
import type { ExploreFilterState } from "@/lib/utils";

type FilterChipBarProps = {
  filters: ExploreFilterState;
  onRemove: (key: keyof ExploreFilterState, value: string) => void;
  onClear: () => void;
};

export function FilterChipBar({ filters, onRemove, onClear }: FilterChipBarProps) {
  const entries = Object.entries(filters).flatMap(([key, values]) =>
    values.map((value) => ({ key: key as keyof ExploreFilterState, value })),
  );

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {entries.map((entry) => (
        <Tag
          key={`${entry.key}-${entry.value}`}
          active
          onRemove={() => onRemove(entry.key, entry.value)}
        >
          {entry.value}
        </Tag>
      ))}
      <button
        type="button"
        onClick={onClear}
        className="text-xs font-medium text-[var(--muted)] underline-offset-2 hover:underline"
      >
        [PLACEHOLDER: reset filters]
      </button>
    </div>
  );
}
