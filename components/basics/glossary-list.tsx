import type { GlossaryTerm } from "@/lib/types";
import { TerminologyDrawer } from "@/components/basics/terminology-drawer";

type GlossaryListProps = {
  groupedTerms: Record<string, GlossaryTerm[]>;
};

export function GlossaryList({ groupedTerms }: GlossaryListProps) {
  const groups = Object.entries(groupedTerms).sort(([a], [b]) => {
    if (a === "#" && b !== "#") {
      return 1;
    }
    if (b === "#" && a !== "#") {
      return -1;
    }
    return a.localeCompare(b);
  });
  const jumpTargets = groups.map(([letter]) => ({
    letter,
    label: letter === "#" ? "Other" : letter,
  }));

  return (
    <div className="space-y-[var(--space-section)]">
      <nav aria-label="Jump to glossary letter" className="flex flex-wrap gap-2">
        {jumpTargets.map(({ letter, label }) => (
          <a
            key={letter}
            href={`#glossary-${letter === "#" ? "other" : letter.toLowerCase()}`}
            className="shape-angular-sm surface-3d surface-3d-interactive border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)] hover:text-[var(--link-hover)]"
          >
            {label}
          </a>
        ))}
      </nav>

      {groups.map(([letter, terms]) => (
        <section
          key={letter}
          id={`glossary-${letter === "#" ? "other" : letter.toLowerCase()}`}
          aria-label={`Terms starting with ${letter === "#" ? "other characters" : letter}`}
          className="space-y-5"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            {letter === "#" ? "Other" : letter}
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
