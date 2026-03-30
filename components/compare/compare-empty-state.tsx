import { EmptyState } from "@/components/shared/empty-state";

export function CompareEmptyState() {
  return (
    <EmptyState
      title="[PLACEHOLDER: no options selected for comparison]"
      description="[PLACEHOLDER: add up to three options from explore or detail pages to compare side by side]"
      actionLabel="Explore options"
      actionHref="/explore"
    />
  );
}

