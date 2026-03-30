import type { GlossaryTerm } from "@/lib/types";
import { Card } from "@/components/shared/card";

type BasicsCardProps = {
  term: GlossaryTerm;
};

export function BasicsCard({ term }: BasicsCardProps) {
  return (
    <Card as="article" className="space-y-2">
      <h3 className="text-base font-semibold">{term.term}</h3>
      <p className="text-sm text-[var(--muted)]">{term.plainLanguageDefinition}</p>
      <p className="rounded-lg bg-[var(--surface-2)] px-3 py-2 text-xs text-[var(--muted)]">
        {term.whyItMatters}
      </p>
    </Card>
  );
}

