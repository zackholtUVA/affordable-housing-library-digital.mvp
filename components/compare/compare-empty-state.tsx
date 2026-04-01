import Link from "next/link";

import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";

type CompareEmptyStateProps = {
  onLoadSample: () => void;
};

export function CompareEmptyState({ onLoadSample }: CompareEmptyStateProps) {
  return (
    <Card className="space-y-5 text-center">
      <h2 className="text-2xl font-semibold">Compare options side by side</h2>
      <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
        This page helps you evaluate tradeoffs across up to three pathways. You are seeing this empty state because no options are selected yet.
      </p>
      <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
        Start from Explore, or load a sample set to preview how comparison works before you commit.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link href="/explore">
          <Button>Explore options</Button>
        </Link>
        <Button variant="secondary" onClick={onLoadSample}>
          Load sample comparison
        </Button>
      </div>
    </Card>
  );
}
