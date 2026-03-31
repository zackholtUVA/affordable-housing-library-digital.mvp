"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsRegionRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const focusSearch = () => {
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    };
    window.addEventListener("ux:focus-explore-search", focusSearch);
    return () => window.removeEventListener("ux:focus-explore-search", focusSearch);
  }, []);

  const focusFirstResultAction = () => {
    const button = resultsRegionRef.current?.querySelector<HTMLButtonElement>(
      "button[data-option-action='true']",
    );
    button?.focus();
  };

  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="space-y-4">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          [PLACEHOLDER: explore page heading]
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          [PLACEHOLDER: browse and narrow options using plain-language search and filters]
        </p>
      </header>

      <div className="grid gap-[var(--space-stack)] lg:grid-cols-[340px_minmax(0,1fr)]">
        <div className="min-w-0 space-y-[var(--space-stack)]">
          <SearchBar
            value={query}
            onChange={setQuery}
            inputRef={searchInputRef}
            onArrowDown={focusFirstResultAction}
          />
          <FilterPanel groups={filterGroups} filters={filters} onToggle={toggleFilter} />
        </div>

        <section className="min-w-0 space-y-[var(--space-stack)]">
          <div className="sticky-offset-ui shape-angular-md surface-3d sticky z-20 flex min-w-0 flex-wrap items-center gap-3 border border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_90%,transparent)] p-[max(1rem,var(--space-stack))] backdrop-blur-xl">
            <FilterChipBar filters={filters} onRemove={toggleFilter} onClear={resetFilters} />
            <button
              type="button"
              onClick={resetFilters}
              className="shape-angular-sm surface-3d surface-3d-interactive border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] hover:bg-[var(--surface-2)]"
            >
              [PLACEHOLDER: clear all + reset search]
            </button>
            <span className="ml-auto min-w-0 break-words text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] max-md:w-full md:text-right">
              [PLACEHOLDER: tip: press / to focus search]
            </span>
          </div>

          <div ref={resultsRegionRef} className="min-w-0">
            {filtered.length > 0 ? (
              <OptionGrid options={filtered} />
            ) : (
              <ExploreEmptyState onReset={resetFilters} />
            )}
          </div>

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
