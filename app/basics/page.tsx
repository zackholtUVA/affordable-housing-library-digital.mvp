"use client";

import { useMemo, useState } from "react";

import { BasicsCard } from "@/components/basics/basics-card";
import { GlossaryList } from "@/components/basics/glossary-list";
import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { glossaryTerms } from "@/data/glossary";
import { groupGlossaryTerms } from "@/lib/utils";

export default function BasicsPage() {
  const [query, setQuery] = useState("");

  const filteredTerms = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return glossaryTerms;
    }
    return glossaryTerms.filter((term) =>
      `${term.term} ${term.plainLanguageDefinition} ${term.whyItMatters}`
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  const grouped = useMemo(() => groupGlossaryTerms(filteredTerms), [filteredTerms]);

  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="space-y-4">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Housing basics and glossary
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          This page translates common planning terms into plain language so you can evaluate options with more confidence.
        </p>
      </header>

      <label className="block min-w-0">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          Search glossary
        </span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="shape-angular-md surface-3d h-12 w-full min-w-0 border border-[var(--border)] bg-[var(--surface)] px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
          placeholder="Search by term or definition"
        />
      </label>

      <section className="space-y-[var(--space-stack)]">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Key terms to know first</h2>
          <p className="text-sm text-[var(--muted)]">
            Start here if you want a quick primer before diving into the full glossary.
          </p>
        </div>
        <div className="grid gap-[var(--space-stack)] md:grid-cols-3">
        {filteredTerms.slice(0, 3).map((term) => (
          <BasicsCard key={term.id} term={term} />
        ))}
        </div>
      </section>

      {filteredTerms.length > 0 ? (
        <section className="space-y-[var(--space-stack)]">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Full glossary</h2>
            <p className="text-sm text-[var(--muted)]">
              Browse all terms alphabetically. Expand any row to see definition details and why the term matters.
            </p>
          </div>
          <GlossaryList groupedTerms={grouped} />
        </section>
      ) : (
        <Card className="text-center">
          <h2 className="text-lg font-semibold">No matching terms</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Try another search or clear your query to browse all definitions.
          </p>
        </Card>
      )}
    </PageShell>
  );
}
