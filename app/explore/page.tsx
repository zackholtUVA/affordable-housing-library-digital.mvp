"use client";

import { useMemo, useState } from "react";

import { EmptyState as SharedEmptyState } from "@/components/shared/empty-state";
import { PageShell } from "@/components/layout/page-shell";
import { ExploreEmptyState } from "@/components/explore/empty-state";
import { FilterChipBar } from "@/components/explore/filter-chip-bar";
import { FilterPanel } from "@/components/explore/filter-panel";
import { OptionGrid } from "@/components/explore/option-grid";
import { SearchBar } from "@/components/explore/search-bar";
import { filterGroups } from "@/data/filters";
import { housingOptions } from "@/data/housing-options";
import {
  filterHousingOptions,
  type ExploreFilterState,
} from "@/lib/utils";

function cloneEmptyFilters(): ExploreFilterState {
  return {
    goal: [],
    housingType: [],
    complexity: [],
  };
}

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<ExploreFilterState>(() => cloneEmptyFilters());

  const filtered = useMemo(
    () => filterHousingOptions(housingOptions, query, filters),
    [filters, query],
  );

  const toggleFilter = (groupKey: keyof ExploreFilterState, value: string) => {
    setFilters((current) => {
      const exists = current[groupKey].includes(value);
      return {
        ...current,
        [groupKey]: exists
          ? current[groupKey].filter((item) => item !== value)
          : [...current[groupKey], value],
      };
    });
  };

  const resetFilters = () => {
    setQuery("");
    setFilters(cloneEmptyFilters());
  };

  const hasActiveFilters = Object.values(filters).some((values) => values.length > 0);

  return (
    <PageShell className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          [PLACEHOLDER: explore page heading]
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          [PLACEHOLDER: browse and narrow options using plain-language search and filters]
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[290px_1fr]">
        <div className="space-y-4">
          <SearchBar value={query} onChange={setQuery} />
          <FilterPanel groups={filterGroups} filters={filters} onToggle={toggleFilter} />
        </div>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <FilterChipBar filters={filters} onRemove={toggleFilter} onClear={resetFilters} />
            {hasActiveFilters ? (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-medium text-[var(--muted)] underline-offset-2 hover:underline"
              >
                [PLACEHOLDER: clear all]
              </button>
            ) : null}
          </div>

          {filtered.length > 0 ? (
            <OptionGrid options={filtered} />
          ) : (
            <ExploreEmptyState onReset={resetFilters} />
          )}

          {!hasActiveFilters && query.length === 0 ? (
            <SharedEmptyState
              title="[PLACEHOLDER: compare guidance title]"
              description="[PLACEHOLDER: select up to three options to activate the sticky compare tray]"
            />
          ) : null}
        </section>
      </div>
    </PageShell>
  );
}
