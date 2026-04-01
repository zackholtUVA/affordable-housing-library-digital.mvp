"use client";

import { Tag } from "@/components/shared/tag";
import { Button } from "@/components/shared/button";
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
    <div className="flex min-w-0 flex-wrap items-center gap-3">
      {entries.map((entry) => (
        <Tag
          key={`${entry.key}-${entry.value}`}
          active
          onRemove={() => onRemove(entry.key, entry.value)}
        >
          {entry.value}
        </Tag>
      ))}
      <Button type="button" variant="ghost" size="sm" onClick={onClear}>
        Reset filters
      </Button>
    </div>
  );
}
