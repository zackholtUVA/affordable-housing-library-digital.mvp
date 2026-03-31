import type { GlossaryTerm } from "@/lib/types";
import { Card } from "@/components/shared/card";

type BasicsCardProps = {
  term: GlossaryTerm;
};

export function BasicsCard({ term }: BasicsCardProps) {
  return (
    <Card as="article" className="space-y-3">
      <h3 className="text-base font-semibold">{term.term}</h3>
      <p className="text-sm leading-relaxed text-[var(--muted)]">{term.plainLanguageDefinition}</p>
      <p className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3 text-xs text-[var(--muted)]">
        {term.whyItMatters}
      </p>
    </Card>
  );
}
