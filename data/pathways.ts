import type { UserPathway } from "@/lib/types";
import { placeholder } from "@/lib/utils";

const linkedOptionMap = [
  ["option-1", "option-2", "option-3"],
  ["option-2", "option-4", "option-6"],
  ["option-3", "option-5", "option-7"],
  ["option-4", "option-6", "option-8"],
  ["option-5", "option-7", "option-9"],
  ["option-6", "option-8", "option-10"],
];

export const pathways: UserPathway[] = linkedOptionMap.map((linkedOptionIds, index) => {
  const number = index + 1;
  return {
    id: `pathway-${number}`,
    title: placeholder(`pathway title ${number}`),
    shortDescription: placeholder(`pathway description ${number}`),
    linkedOptionIds,
  };
});

