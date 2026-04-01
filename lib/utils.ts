import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { PLACEHOLDER_PREFIX } from "@/lib/constants";
import type {
  FilterKey,
  GlossaryTerm,
  HousingOption,
  PlaceholderText,
} from "@/lib/types";

export type ExploreFilterState = Record<FilterKey, string[]>;

export const EMPTY_FILTER_STATE: ExploreFilterState = {
  goal: [],
  housingType: [],
  complexity: [],
};

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function placeholder(label: string): PlaceholderText {
  return `[PLACEHOLDER: ${label}]` as PlaceholderText;
}

export function isPlaceholder(value: string): boolean {
  return value.startsWith(PLACEHOLDER_PREFIX);
}

export function normalizeSearchValue(value: string): string {
  return value.toLowerCase().trim();
}

export function filterHousingOptions(
  options: HousingOption[],
  query: string,
  filters: ExploreFilterState,
): HousingOption[] {
  const normalizedQuery = normalizeSearchValue(query);

  return options.filter((option) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      option.title.toLowerCase().includes(normalizedQuery) ||
      option.shortSummary.toLowerCase().includes(normalizedQuery) ||
      option.category.toLowerCase().includes(normalizedQuery);

    const matchesGoal =
      filters.goal.length === 0 ||
      option.primaryUseCases.some((item) => filters.goal.includes(item));
    const matchesType =
      filters.housingType.length === 0 ||
      filters.housingType.includes(option.category);
    const matchesComplexity =
      filters.complexity.length === 0 ||
      filters.complexity.includes(option.comparisonAttributes.complexity);

    return matchesQuery && matchesGoal && matchesType && matchesComplexity;
  });
}

export function groupGlossaryTerms(
  terms: GlossaryTerm[],
): Record<string, GlossaryTerm[]> {
  return terms.reduce<Record<string, GlossaryTerm[]>>((acc, term) => {
    const normalized = term.term.trim();
    const firstLetter = normalized.match(/[A-Za-z]/)?.[0]?.toUpperCase();
    const key = firstLetter ?? "#";
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(term);
    return acc;
  }, {});
}
