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
          [PLACEHOLDER: basics and glossary heading]
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          [PLACEHOLDER: reduce intimidation by explaining terms in plain language]
        </p>
      </header>

      <label className="block min-w-0">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          [PLACEHOLDER: search glossary]
        </span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="shape-angular-md surface-3d h-12 w-full min-w-0 border border-[var(--border)] bg-[var(--surface)] px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
          placeholder="[PLACEHOLDER: glossary search placeholder]"
        />
      </label>

      <section className="grid gap-[var(--space-stack)] md:grid-cols-3">
        {filteredTerms.slice(0, 3).map((term) => (
          <BasicsCard key={term.id} term={term} />
        ))}
      </section>

      {filteredTerms.length > 0 ? (
        <GlossaryList groupedTerms={grouped} />
      ) : (
        <Card className="text-center">
          <h2 className="text-lg font-semibold">[PLACEHOLDER: no matching terms]</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            [PLACEHOLDER: try another search term or browse all definitions]
          </p>
        </Card>
      )}
    </PageShell>
  );
}
