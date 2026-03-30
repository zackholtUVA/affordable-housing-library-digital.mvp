import type { NextStepResource } from "@/lib/types";
import { placeholder } from "@/lib/utils";

const actionTypes = [
  "question list",
  "document checklist",
  "local contact pathway",
  "professional consultation",
] as const;

export const nextStepResources: NextStepResource[] = Array.from(
  { length: 12 },
  (_, index) => {
    const number = index + 1;
    return {
      id: `next-step-${number}`,
      title: placeholder(`next-step resource title ${number}`),
      description: placeholder(`next-step resource description ${number}`),
      actionType: placeholder(
        actionTypes[index % actionTypes.length],
      ),
      linkLabel: placeholder(`resource link label ${number}`),
      href: "#",
    };
  },
);

export const checklistPrompts = Array.from({ length: 6 }, (_, index) =>
  placeholder(`action checklist item ${index + 1}`),
);

export const documentPrompts = Array.from({ length: 6 }, (_, index) =>
  placeholder(`document gathering prompt ${index + 1}`),
);

export const questionPrompts = Array.from({ length: 6 }, (_, index) =>
  placeholder(`suggested question ${index + 1}`),
);

