import type { FilterGroup } from "@/lib/types";

export const filterGroups: FilterGroup[] = [
  {
    key: "preApproved",
    label: "Approval status",
    options: ["Pre-Approved Plans"],
  },
  {
    key: "goal",
    label: "Your priority",
    options: ["Rental income", "Family flexibility", "Aging in place"],
  },
  {
    key: "housingType",
    label: "Pathway type",
    options: ["ADU or cottage", "Interior conversion", "Lot split / multi-unit"],
  },
  {
    key: "complexity",
    label: "Complexity",
    options: ["Lower", "Moderate", "Higher"],
  },
];
