import type { NextStepResource } from "@/lib/types";

const actionTypes = [
  "Question list",
  "Document checklist",
  "Local contact pathway",
  "Professional consultation",
] as const;

const resourceTitles = [
  "Questions for your planning counter visit",
  "Property packet prep checklist",
  "Neighborhood context review worksheet",
  "Budget scenario starter template",
  "Design brief one-page outline",
  "Permit timeline planning guide",
  "Utility coordination call checklist",
  "Tenant/lifestyle fit discussion prompts",
  "Financing conversation prep list",
  "Risk flags to validate early",
  "Local consultant shortlist template",
  "Decision review meeting agenda",
];

export const nextStepResources: NextStepResource[] = resourceTitles.map((title, index) => {
  const number = index + 1;
  return {
    id: `next-step-${number}`,
    title,
    description:
      "Use this worksheet to organize assumptions, questions, and follow-up tasks before making final commitments.",
    actionType: actionTypes[index % actionTypes.length],
    linkLabel: "Open guidance",
    href: "/sources",
  };
});

export const checklistPrompts = [
  "Set one primary goal for this project (family housing, income, or flexibility).",
  "Choose 2-3 options to compare so tradeoffs stay manageable.",
  "List red flags that would make an option unrealistic for your site.",
  "Define your budget comfort range before requesting proposals.",
  "Plan who will review legal, design, and construction assumptions.",
  "Schedule a decision checkpoint after each major consultation.",
];

export const documentPrompts = [
  "Parcel number, site address, and recent property records",
  "Existing floor plans or a hand sketch with dimensions",
  "Photos of access paths, utilities, and slope conditions",
  "Any prior permit files or planning correspondence",
  "A rough budget range and financing assumptions",
  "Household needs summary (timing, occupancy, privacy)",
];

export const questionPrompts = [
  "What pathway is most likely to pass review on this specific lot?",
  "Which design changes reduce risk without hurting livability?",
  "What timeline should we expect for approvals and inspections?",
  "What total cost range is realistic after code upgrades?",
  "What assumptions need written confirmation before moving forward?",
  "What is our fallback option if the first pathway stalls?",
];
