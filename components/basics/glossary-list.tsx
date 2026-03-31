import type { GlossaryTerm } from "@/lib/types";
import { TerminologyDrawer } from "@/components/basics/terminology-drawer";

type GlossaryListProps = {
  groupedTerms: Record<string, GlossaryTerm[]>;
};

export function GlossaryList({ groupedTerms }: GlossaryListProps) {
  const groups = Object.entries(groupedTerms).sort(([a], [b]) => a.localeCompare(b));
  return (
    <div className="space-y-[var(--space-section)]">
      {groups.map(([letter, terms]) => (
        <section key={letter} aria-label={`Terms starting with ${letter}`} className="space-y-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            {letter}
          </h2>
          <div className="space-y-4">
            {terms.map((term) => (
              <TerminologyDrawer key={term.id} term={term} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
