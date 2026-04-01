import type { UserPathway } from "@/lib/types";

const linkedOptionMap = [
  ["option-1", "option-6", "option-7"],
  ["option-2", "option-3", "option-4"],
  ["option-5", "option-10", "option-8"],
  ["option-4", "option-6", "option-1"],
  ["option-2", "option-7", "option-9"],
  ["option-3", "option-5", "option-10"],
];

const pathwayCopy: Array<Pick<UserPathway, "title" | "shortDescription">> = [
  {
    title: "I need space for family soon",
    shortDescription:
      "See options that can support multigenerational living or a nearby independent unit.",
  },
  {
    title: "I want a lower-cost first step",
    shortDescription:
      "Start with conversion pathways that often move faster and require less site work.",
  },
  {
    title: "I am planning a long-term property strategy",
    shortDescription:
      "Review higher-complexity pathways that may unlock stronger long-term flexibility.",
  },
  {
    title: "I am preparing for aging-in-place support",
    shortDescription:
      "Compare pathways that keep family or caregiver housing close and practical.",
  },
  {
    title: "I am exploring rental income potential",
    shortDescription:
      "Focus on options that can create separate living space while balancing review effort.",
  },
  {
    title: "I need to understand tradeoffs before committing",
    shortDescription:
      "Open a balanced set of options so you can compare complexity, timeline, and privacy.",
  },
];

export const pathways: UserPathway[] = linkedOptionMap.map((linkedOptionIds, index) => {
  const number = index + 1;
  return {
    id: `pathway-${number}`,
    title: pathwayCopy[index].title,
    shortDescription: pathwayCopy[index].shortDescription,
    linkedOptionIds,
  };
});
