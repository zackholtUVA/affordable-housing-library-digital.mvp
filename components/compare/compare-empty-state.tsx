import Link from "next/link";

import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";

type CompareEmptyStateProps = {
  onLoadSample: () => void;
};

export function CompareEmptyState({ onLoadSample }: CompareEmptyStateProps) {
  return (
    <Card className="mx-auto w-full max-w-[74rem] space-y-[var(--space-stack)] text-center">
      <h2 className="text-2xl font-semibold">Compare options side by side</h2>
      <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
        This page helps you evaluate tradeoffs across up to three pathways. You are seeing this empty state because no options are selected yet.
      </p>
      <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
        Load a sample set to preview how comparison works, or browse Explore to build your own comparison.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[var(--space-stack-tight)] pt-2">
        <Button onClick={onLoadSample}>Load sample comparison</Button>
        <Link href="/explore">
          <Button variant="secondary">Explore options</Button>
        </Link>
      </div>
    </Card>
  );
}
