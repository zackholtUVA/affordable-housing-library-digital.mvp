import { EmptyState } from "@/components/shared/empty-state";

type ExploreEmptyStateProps = {
  onReset: () => void;
};

export function ExploreEmptyState({ onReset }: ExploreEmptyStateProps) {
  return (
    <EmptyState
      title="[PLACEHOLDER: no options match current filters]"
      description="[PLACEHOLDER: adjust search and filter criteria to view more options]"
      actionLabel="[PLACEHOLDER: reset all filters]"
      onAction={onReset}
    />
  );
}

