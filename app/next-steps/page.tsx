"use client";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import { InfoCallout } from "@/components/shared/info-callout";
import {
  checklistPrompts,
  documentPrompts,
  nextStepResources,
  questionPrompts,
} from "@/data/next-steps";

export default function NextStepsPage() {
  return (
    <PageShell className="space-y-[calc(var(--space-section)*0.9)]">
      <header className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          [PLACEHOLDER: next-step guidance heading]
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          [PLACEHOLDER: summarize action-oriented next steps following option exploration]
        </p>
      </header>

      <div className="flex flex-wrap gap-2.5">
        <Button variant="secondary" size="sm" onClick={() => window.print()}>
          [PLACEHOLDER: print checklist]
        </Button>
        <Button variant="ghost" size="sm">
          [PLACEHOLDER: copy checklist]
        </Button>
      </div>

      <div className="grid gap-[var(--space-stack)] lg:grid-cols-3">
        <Card as="section" className="space-y-6">
          <h2 className="text-lg font-semibold">[PLACEHOLDER: suggested questions]</h2>
          <ul className="space-y-4 text-sm text-[var(--muted)]">
            {questionPrompts.map((item) => (
              <li key={item} className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card as="section" className="space-y-6">
          <h2 className="text-lg font-semibold">[PLACEHOLDER: documents to gather]</h2>
          <ul className="space-y-4 text-sm text-[var(--muted)]">
            {documentPrompts.map((item) => (
              <li key={item} className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card as="section" className="space-y-6">
          <h2 className="text-lg font-semibold">[PLACEHOLDER: action checklist]</h2>
          <ul className="space-y-4 text-sm text-[var(--muted)]">
            {checklistPrompts.map((item) => (
              <li key={item} className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <section className="grid gap-[var(--space-stack)] md:grid-cols-2 lg:grid-cols-3">
        {nextStepResources.map((resource) => (
          <Card key={resource.id} as="article" className="space-y-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              {resource.actionType}
            </p>
            <h3 className="text-base font-semibold">{resource.title}</h3>
            <p className="text-sm text-[var(--muted)]">{resource.description}</p>
            <a href={resource.href} className="text-sm font-medium text-[var(--accent)]">
              {resource.linkLabel}
            </a>
          </Card>
        ))}
      </section>

      <InfoCallout title="[PLACEHOLDER: professional review disclaimer]" tone="warning">
        [PLACEHOLDER: users should consult qualified professionals for final decisions]
      </InfoCallout>
    </PageShell>
  );
}
