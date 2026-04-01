import type {
  CompareDemoPreset,
  ComparisonAttributes,
  PlausibilityDefinition,
  UtilityPageContent,
} from "@/lib/types";

export const APP_NAME = "Affordable Housing Library";

export const NAV_ITEMS = [
  { href: "/start", label: "Explore options" },
  { href: "/compare", label: "Compare" },
  { href: "/basics", label: "Learn the basics" },
  { href: "/next-steps", label: "Next steps" },
] as const;

export const UTILITY_LINKS = [
  { href: "/about", label: "About this tool" },
  { href: "/limitations", label: "Limitations" },
  { href: "/sources", label: "Sources" },
  { href: "/contact", label: "Contact / partners" },
] as const;

export const COMPARE_MAX = 3;
export const THEME_STORAGE_KEY = "ahl-theme";

export const GLOBAL_DISCLAIMER =
  "Free to use. No account required. This library supports early planning and does not replace legal, zoning, architectural, or financial advice.";

export const DETAIL_DISCLAIMER =
  "Use this page to organize questions and tradeoffs. Confirm site-specific feasibility with qualified local professionals before acting.";

export const PLACEHOLDER_PREFIX = "[PLACEHOLDER:";

export const CTA_LABELS = {
  explore: "Explore options",
  compare: "Compare selected options",
  nextSteps: "View next steps",
  basics: "Learn key terms",
} as const;

export const HOME_HEADLINE = "Compare Affordable Housing Paths with Confidence";
export const HOME_SUBHEADLINE =
  "Browse realistic housing pathways, compare tradeoffs, and move toward practical next steps with clearer direction.";

export const HOW_IT_WORKS_STEPS = [
  "Explore options that match your goals, property situation, and comfort level.",
  "Compare up to three pathways side by side so tradeoffs are easy to evaluate.",
  "Use a focused checklist to prepare conversations with your local team.",
];

export const COMPARISON_LABELS: Record<keyof ComparisonAttributes, string> = {
  complexity: "Complexity",
  timeline: "Typical timeline",
  privacy: "Privacy impact",
  flexibility: "Design flexibility",
  familyUsePotential: "Family use potential",
  incomePotential: "Income potential",
};

export const PLAUSIBILITY_DEFINITIONS: PlausibilityDefinition[] = [
  {
    label: "often plausible",
    definition: "Commonly workable in many areas with standard review.",
    usageNote: "Still verify local zoning, lot conditions, and permit requirements.",
  },
  {
    label: "depends on details",
    definition: "Can work, but outcomes hinge on site rules and design specifics.",
    usageNote: "Expect early conversations with planning staff or a local designer.",
  },
  {
    label: "needs close review",
    definition: "Usually requires careful analysis before deciding if it is viable.",
    usageNote: "Treat as a possibility to study, not a likely quick path.",
  },
];

export const COMPARE_DEMO_PRESET: CompareDemoPreset = {
  id: "starter-sample-compare",
  title: "Sample comparison",
  description:
    "A starter set showing a lower-complexity path, a mid-complexity path, and a higher-review path.",
  optionIds: ["option-1", "option-4", "option-7"],
};

export const UTILITY_PAGE_CONTENT: Record<string, UtilityPageContent> = {
  about: {
    title: "About this tool",
    intro:
      "Affordable Housing Library helps homeowners, small landlords, and community partners compare housing pathways before they commit to detailed design work.",
    sections: [
      {
        heading: "Who this is for",
        body: "People who want a plain-language starting point for adding housing, supporting family needs, or evaluating income-oriented options.",
      },
      {
        heading: "What it helps with",
        body: "This tool helps you scan options, compare tradeoffs, and prepare a practical list of next conversations.",
      },
      {
        heading: "How to use it",
        body: "Start in Explore, compare a few pathways, then move to Next steps to organize questions for local experts.",
      },
    ],
  },
  limitations: {
    title: "Limitations",
    intro:
      "This MVP is for educational planning support. It does not determine what is allowed on your specific site.",
    sections: [
      {
        heading: "Informational only",
        body: "Content is representative guidance and not legal, architectural, engineering, or financial advice.",
      },
      {
        heading: "Local rules vary",
        body: "Zoning, overlays, utility constraints, parking, fire access, and permitting timelines vary by jurisdiction and parcel.",
      },
      {
        heading: "Final decisions",
        body: "Before acting, confirm assumptions with planning staff and qualified professionals who can review your site conditions.",
      },
    ],
  },
  sources: {
    title: "Sources",
    intro:
      "A full source library is in progress. This MVP currently uses representative planning language intended for early orientation.",
    sections: [
      {
        heading: "Current source status",
        body: "Source references are being assembled into a publishable list aligned to each option and glossary term.",
      },
      {
        heading: "What to expect",
        body: "Future updates will include jurisdiction guidance pages, code references, and plain-language explainers from trusted housing organizations.",
      },
      {
        heading: "Using this responsibly",
        body: "Treat this experience as a launch point, then validate key assumptions with local primary sources.",
      },
    ],
  },
  contact: {
    title: "Contact and partners",
    intro:
      "Questions, partnership ideas, or feedback are welcome while the tool is in active development.",
    sections: [
      {
        heading: "General contact",
        body: "Email the project team at housing-library-team@example.org for feedback and collaboration requests.",
      },
      {
        heading: "Partner organizations",
        body: "We welcome housing nonprofits, local governments, and educational partners interested in piloting this resource.",
      },
      {
        heading: "Response scope",
        body: "The team can clarify UX and content intent, but cannot provide parcel-specific approvals or legal determinations.",
      },
    ],
  },
};
