"use client";

import Link from "next/link";

import { CompareEmptyState } from "@/components/compare/compare-empty-state";
import { CompareTable } from "@/components/compare/compare-table";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/shared/button";
import { InfoCallout } from "@/components/shared/info-callout";
import { housingOptionsBySlug } from "@/data/housing-options";
import { COMPARE_DEMO_PRESET, COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { useSessionContext } from "@/lib/session-context";
import { useUx } from "@/lib/ux";

const optionById = new Map(Array.from(housingOptionsBySlug.values()).map((option) => [option.id, option]));

export default function ComparePage() {
  const { selectedIds, remove, clear, replace } = useCompareStore();
  const { markOptionViewed } = useSessionContext();
  const { addToast } = useUx();
  const selectedOptions = selectedIds
    .map((id) => optionById.get(id))
    .filter((option): option is NonNullable<typeof option> => Boolean(option));

  return (
    <PageShell className="space-y-[var(--space-section)] pb-[max(0.5rem,var(--space-footer-top))]">
      <header className="space-y-[var(--space-stack)]">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Compare housing options
        </h1>
        <p className="text-[var(--muted)]">
          Review tradeoffs side by side, then move forward with a clearer plan for next conversations.
        </p>
      </header>

      <div className="flex min-w-0 flex-wrap items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            clear();
            addToast({
              tone: "info",
              message: "Comparison list cleared.",
            });
          }}
        >
          Clear compared options
        </Button>
        <Link href="/explore" className="text-sm font-medium text-[var(--accent)]">
          Add more options
        </Link>
        <span className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
          {selectedOptions.length}/{COMPARE_MAX}
        </span>
      </div>

      {selectedOptions.length === 0 ? (
        <CompareEmptyState
          onLoadSample={() => {
            replace(COMPARE_DEMO_PRESET.optionIds);
            COMPARE_DEMO_PRESET.optionIds.forEach((id) => markOptionViewed(id));
            addToast({
              tone: "success",
              message: `${COMPARE_DEMO_PRESET.title} loaded.`,
            });
          }}
        />
      ) : (
        <>
          <InfoCallout title="Current comparison set">
            You selected {selectedOptions.length} option
            {selectedOptions.length === 1 ? "" : "s"}. Compare rows highlight where one pathway is faster, lower effort, or more flexible than another.
          </InfoCallout>
          <CompareTable options={selectedOptions} />
        </>
      )}

      {selectedOptions.length > 0 ? (
        <div className="space-y-[var(--space-stack)]">
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
                      message: "Removed from comparison.",
                    });
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/next-steps">
              <Button>Continue to next steps</Button>
            </Link>
            <Link href="/explore" className="text-sm font-medium text-[var(--accent)]">
              Return to explore
            </Link>
          </div>
        </div>
      ) : null}

      <InfoCallout title="Comparison notes">
        Comparison values are representative guidance for early planning. Validate assumptions with local experts before making final commitments.
      </InfoCallout>
    </PageShell>
  );
}
