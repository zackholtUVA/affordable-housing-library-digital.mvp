"use client";

import type { FilterGroup } from "@/lib/types";
import type { ExploreFilterState } from "@/lib/utils";
import { Card } from "@/components/shared/card";

type FilterPanelProps = {
  groups: FilterGroup[];
  filters: ExploreFilterState;
  onToggle: (groupKey: keyof ExploreFilterState, value: string) => void;
};

export function FilterPanel({ groups, filters, onToggle }: FilterPanelProps) {
  return (
    <Card as="section" className="space-y-[var(--space-stack)]">
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        [PLACEHOLDER: filter panel title]
      </h2>
      {groups.map((group) => (
        <fieldset key={group.key} className="space-y-4">
          <legend className="text-sm font-medium text-[var(--text)]">{group.label}</legend>
          <div className="space-y-3.5">
            {group.options.map((option) => {
              const checked = filters[group.key].includes(option);
              return (
                <label key={option} className="flex min-w-0 items-center gap-3 text-sm text-[var(--muted)]">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggle(group.key, option)}
                    className="shape-square surface-3d h-4 w-4 border border-[var(--border)] bg-[var(--surface)] accent-[var(--accent)]"
                  />
                  <span className="min-w-0 break-words">{option}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}
    </Card>
  );
}
