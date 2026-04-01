"use client";

import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import { InfoCallout } from "@/components/shared/info-callout";
import { housingOptions } from "@/data/housing-options";
import {
  checklistPrompts,
  documentPrompts,
  nextStepResources,
  questionPrompts,
} from "@/data/next-steps";
import { useCompareStore } from "@/lib/compare-store";
import { useSessionContext } from "@/lib/session-context";
import { useUx } from "@/lib/ux";

const optionById = new Map(housingOptions.map((option) => [option.id, option]));

function resolveOptions(ids: string[]) {
  return ids
    .map((id) => optionById.get(id))
    .filter((option): option is NonNullable<typeof option> => Boolean(option));
}

export default function NextStepsPage() {
  const { selectedIds } = useCompareStore();
  const { buildSnapshot } = useSessionContext();
  const { addToast } = useUx();

  const snapshot = buildSnapshot(selectedIds);
  const selectedOptions = resolveOptions(snapshot.selectedIds);
  const recentExploredOptions = resolveOptions(snapshot.recentIds);
  const contextualized = selectedOptions.length > 0 || recentExploredOptions.length > 0;

  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="space-y-[var(--space-stack)]">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Turn exploration into an action-ready plan
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          Use these checklists to prepare focused conversations with planning staff, design professionals, and financing partners.
        </p>
      </header>

      <Card as="section" className="space-y-[var(--space-stack)]">
        <h2 className="text-lg font-semibold">
          {contextualized ? "Based on your current session" : "General planning guidance"}
        </h2>
        {contextualized ? (
          <>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              You can use this checklist with the options you selected or recently viewed, then adjust details with local experts.
            </p>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Selected for comparison</p>
              {selectedOptions.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedOptions.map((option) => (
                    <Link
                      key={`${option.id}-selected`}
                      href={`/options/${option.slug}`}
                      className="shape-angular-sm surface-3d surface-3d-interactive border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs text-[var(--text)]"
                    >
                      {option.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[var(--muted)]">No selected options yet. You can still use recently explored options below.</p>
              )}
            </div>
            {recentExploredOptions.length > 0 ? (
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Recently explored</p>
                <div className="flex flex-wrap gap-2">
                  {recentExploredOptions.map((option) => (
                    <Link
                      key={`${option.id}-recent`}
                      href={`/options/${option.slug}`}
                      className="shape-angular-sm surface-3d surface-3d-interactive border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs text-[var(--text)]"
                    >
                      {option.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            This checklist is currently general guidance. Explore and compare a few options first if you want tighter context.
          </p>
        )}
      </Card>

      <div className="flex flex-wrap gap-3">
        <Button variant="secondary" size="sm" onClick={() => window.print()}>
          Print checklist
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={async () => {
            const listText = [...questionPrompts, ...documentPrompts, ...checklistPrompts]
              .map((item) => `- ${item}`)
              .join("\n");

            try {
              await navigator.clipboard.writeText(listText);
              addToast({ tone: "success", message: "Checklist copied." });
            } catch {
              addToast({ tone: "warning", message: "Copy was blocked. Please copy manually." });
            }
          }}
        >
          Copy checklist
        </Button>
      </div>

      <div className="mt-[var(--space-stack)] grid gap-[var(--space-stack)] lg:grid-cols-3">
        <Card as="section" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Questions to answer</h2>
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              {contextualized ? "Session-related" : "General guidance"}
            </p>
          </div>
          <ul className="space-y-4 text-sm text-[var(--muted)]">
            {questionPrompts.map((item) => (
              <li key={item} className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card as="section" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Information to gather</h2>
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">General guidance</p>
          </div>
          <ul className="space-y-4 text-sm text-[var(--muted)]">
            {documentPrompts.map((item) => (
              <li key={item} className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card as="section" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Actions to consider next</h2>
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              {contextualized ? "Session-related" : "General guidance"}
            </p>
          </div>
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

      <div className="flex flex-wrap items-center gap-3">
        <Link href="/explore">
          <Button>Back to Explore</Button>
        </Link>
        <Link href="/compare" className="text-sm font-medium text-[var(--accent)]">
          Review compared options
        </Link>
      </div>

      <InfoCallout title="Professional review recommendation" tone="warning">
        Use these checklists to organize decisions, then confirm final feasibility with qualified local professionals.
      </InfoCallout>
    </PageShell>
  );
}
