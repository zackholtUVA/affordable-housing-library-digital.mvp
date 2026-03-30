import type { FilterGroup } from "@/lib/types";
import { placeholder } from "@/lib/utils";

export const filterGroups: FilterGroup[] = [
  {
    key: "goal",
    label: placeholder("goal filter"),
    options: [
      placeholder("goal filter 1"),
      placeholder("goal filter 2"),
      placeholder("goal filter 3"),
    ],
  },
  {
    key: "housingType",
    label: placeholder("housing type filter"),
    options: [
      placeholder("housing type filter 1"),
      placeholder("housing type filter 2"),
      placeholder("housing type filter 3"),
    ],
  },
  {
    key: "complexity",
    label: placeholder("complexity filter"),
    options: [
      placeholder("complexity filter 1"),
      placeholder("complexity filter 2"),
      placeholder("complexity filter 3"),
    ],
  },
];

