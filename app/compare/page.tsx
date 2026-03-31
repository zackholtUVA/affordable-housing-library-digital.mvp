"use client";

import Link from "next/link";

import { CompareEmptyState } from "@/components/compare/compare-empty-state";
import { CompareTable } from "@/components/compare/compare-table";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/shared/button";
import { InfoCallout } from "@/components/shared/info-callout";
import { housingOptionsBySlug } from "@/data/housing-options";
import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { useUx } from "@/lib/ux";

const optionById = new Map(Array.from(housingOptionsBySlug.values()).map((option) => [option.id, option]));

export default function ComparePage() {
  const { selectedIds, remove, clear } = useCompareStore();
  const { addToast } = useUx();
  const selectedOptions = selectedIds
    .map((id) => optionById.get(id))
    .filter((option): option is NonNullable<typeof option> => Boolean(option));

  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="space-y-4">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          [PLACEHOLDER: compare page heading]
        </h1>
        <p className="text-[var(--muted)]">
          [PLACEHOLDER: compare up to three options side-by-side and evaluate tradeoffs]
        </p>
      </header>

      <div className="flex min-w-0 flex-wrap items-center gap-3.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            clear();
            addToast({
              tone: "info",
              message: "[PLACEHOLDER: compare list cleared]",
            });
          }}
        >
          [PLACEHOLDER: clear compared options]
        </Button>
        <Link href="/explore" className="text-sm font-medium text-[var(--accent)]">
          [PLACEHOLDER: add more options]
        </Link>
        <span className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
          {selectedOptions.length}/{COMPARE_MAX}
        </span>
      </div>

      {selectedOptions.length === 0 ? <CompareEmptyState /> : <CompareTable options={selectedOptions} />}

      {selectedOptions.length > 0 ? (
        <div className="grid gap-[var(--space-stack)] md:grid-cols-3">
          {selectedOptions.map((option) => (
            <div
              key={`${option.id}-actions`}
              className="shape-angular-md surface-3d flex min-w-0 items-center justify-between gap-3 border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
            >
              <p className="min-w-0 break-words text-sm">{option.title}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  remove(option.id);
                  addToast({
                    tone: "info",
                    message: "[PLACEHOLDER: option removed from compare]",
                  });
                }}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      ) : null}

      <InfoCallout title="[PLACEHOLDER: comparison notes]">
        [PLACEHOLDER: comparison values are placeholders and not final planning guidance]
      </InfoCallout>
    </PageShell>
  );
}
