export type Theme = "dark" | "light";

export type PlaceholderText = `[PLACEHOLDER: ${string}]`;

export type PolicyConfidenceLabel =
  | "often plausible"
  | "depends on details"
  | "needs close review";

export type ComparisonAttributes = {
  complexity: string;
  privacy: string;
  timeline: string;
  flexibility: string;
  incomePotential: string;
  familyUsePotential: string;
};

export type HousingOption = {
  id: string;
  slug: string;
  title: PlaceholderText;
  shortSummary: PlaceholderText;
  category: PlaceholderText;
  primaryUseCases: PlaceholderText[];
  bestFor: PlaceholderText[];
  keyTradeoffs: PlaceholderText[];
  policyConfidenceLabel: PolicyConfidenceLabel;
  policySummary: PlaceholderText;
  majorConsiderations: PlaceholderText[];
  nextSteps: PlaceholderText[];
  comparisonAttributes: ComparisonAttributes;
  relatedOptionIds: string[];
  imageAlt: PlaceholderText;
};

export type UserPathway = {
  id: string;
  title: PlaceholderText;
  shortDescription: PlaceholderText;
  linkedOptionIds: string[];
};

export type GlossaryTerm = {
  id: string;
  term: PlaceholderText;
  plainLanguageDefinition: PlaceholderText;
  whyItMatters: PlaceholderText;
};

export type NextStepResource = {
  id: string;
  title: PlaceholderText;
  description: PlaceholderText;
  actionType: PlaceholderText;
  linkLabel?: PlaceholderText;
  href?: string;
};

export type FilterKey = "goal" | "housingType" | "complexity";

export type FilterGroup = {
  key: FilterKey;
  label: PlaceholderText;
  options: PlaceholderText[];
};

export type ShortcutId =
  | "openPalette"
  | "openShortcutHelp"
  | "goHome"
  | "goExplore"
  | "goCompare"
  | "goNextSteps"
  | "goBasics";

export type CommandAction = {
  id: string;
  title: string;
  section: "Navigate" | "Actions" | "Preferences";
  shortcut?: string;
  run: () => void;
};

export type UxToast = {
  id: string;
  tone: "info" | "success" | "warning";
  message: string;
  durationMs?: number;
};

export type HalideHeroLayer = {
  id: string;
  background: string;
  depth: number;
  blendMode?: "normal" | "screen" | "overlay" | "multiply" | "soft-light";
  opacity: number;
  filter: string;
};

export type HalideHeroContent = {
  kicker: string;
  title: string;
  subtitle: string;
  archiveLabel: string;
  telemetryLines: string[];
  ctaLabel: string;
  ctaHref: string;
  bottomLeftLines: string[];
};
