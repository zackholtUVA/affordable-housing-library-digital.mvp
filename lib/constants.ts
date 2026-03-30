import type { PlaceholderText } from "@/lib/types";

export const APP_NAME = "Affordable Housing Library";

export const NAV_ITEMS = [
  { href: "/explore", label: "Explore options" },
  { href: "/compare", label: "Compare" },
  { href: "/basics", label: "Learn the basics" },
  { href: "/next-steps", label: "Next steps" },
] as const;

export const UTILITY_LINKS = [
  { href: "#", label: "About this tool" },
  { href: "#", label: "Limitations" },
  { href: "#", label: "Sources" },
  { href: "#", label: "Contact / partners" },
] as const;

export const COMPARE_MAX = 3;
export const THEME_STORAGE_KEY = "ahl-theme";

export const GLOBAL_DISCLAIMER =
  "This MVP provides informational placeholders only and does not replace legal, zoning, architectural, or planning advice.";

export const DETAIL_DISCLAIMER =
  "Content on this page is placeholder-only for MVP prototyping and should be reviewed by qualified local professionals before action.";

export const PLACEHOLDER_PREFIX = "[PLACEHOLDER:";

export const CTA_LABELS = {
  explore: "Explore options",
  compare: "Compare selected options",
  nextSteps: "View next steps",
  basics: "Learn key terms",
} as const;

export const HOME_HEADLINE = "[PLACEHOLDER: site headline]" as PlaceholderText;
export const HOME_SUBHEADLINE =
  "[PLACEHOLDER: site subheadline]" as PlaceholderText;

export const HOW_IT_WORKS_STEPS = [
  "[PLACEHOLDER: describe how users start]",
  "[PLACEHOLDER: describe how users compare options]",
  "[PLACEHOLDER: describe how users choose next actions]",
] as PlaceholderText[];

export const COMPARISON_LABELS: Record<
  keyof import("@/lib/types").ComparisonAttributes,
  PlaceholderText
> = {
  complexity: "[PLACEHOLDER: complexity]",
  timeline: "[PLACEHOLDER: timeline]",
  privacy: "[PLACEHOLDER: privacy]",
  flexibility: "[PLACEHOLDER: flexibility]",
  familyUsePotential: "[PLACEHOLDER: family use potential]",
  incomePotential: "[PLACEHOLDER: income potential]",
};

