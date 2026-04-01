import { EmptyState } from "@/components/shared/empty-state";

type ExploreEmptyStateProps = {
  onReset: () => void;
};

export function ExploreEmptyState({ onReset }: ExploreEmptyStateProps) {
  return (
    <EmptyState
      title="No options match your current filters"
      description="Try widening one filter or clearing search text to see more pathways."
      actionLabel="Reset all filters"
      secondaryActionLabel="Learn the basics"
      secondaryActionHref="/basics"
      onAction={onReset}
    />
  );
}
