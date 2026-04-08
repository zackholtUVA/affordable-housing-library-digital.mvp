"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

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

function parseCompareIds(search: string) {
  const params = new URLSearchParams(search);
  const raw = params.get("compare");
  if (!raw) {
    return [];
  }

  const seen = new Set<string>();
  const validIds: string[] = [];
  for (const part of raw.split(",")) {
    let id = part.trim();
    try {
      id = decodeURIComponent(id);
    } catch {
      // Ignore malformed segments and keep parsing the rest.
    }
    id = id.trim();
    if (!id || seen.has(id) || !optionById.has(id)) {
      continue;
    }
    seen.add(id);
    validIds.push(id);
    if (validIds.length >= COMPARE_MAX) {
      break;
    }
  }

  return validIds;
}

async function copyShareLink(url: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch {
      // Fall back to the legacy copy path below.
    }
  }

  if (typeof document === "undefined") {
    return false;
  }

  const textarea = document.createElement("textarea");
  textarea.value = url;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}

export default function ComparePage() {
  const { selectedIds, remove, clear, replace, add } = useCompareStore();
  const { markOptionViewed } = useSessionContext();
  const { addToast } = useUx();
  const hasHydratedFromQueryRef = useRef(false);

  useEffect(() => {
    if (hasHydratedFromQueryRef.current) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const nextIds = parseCompareIds(window.location.search);
    if (nextIds.length === 0) {
      return;
    }

    hasHydratedFromQueryRef.current = true;
    replace(nextIds);
    nextIds.forEach((id) => markOptionViewed(id));
  }, [markOptionViewed, replace]);

  const selectedOptions = selectedIds
    .map((id) => optionById.get(id))
    .filter((option): option is NonNullable<typeof option> => Boolean(option));
  const isFull = selectedOptions.length >= COMPARE_MAX;
  const buildShareLink = (ids: string[]) => {
    const encodedIds = ids.map((id) => encodeURIComponent(id)).join(",");
    return `${window.location.origin}/compare?compare=${encodedIds}`;
  };

  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="space-y-[var(--space-stack)]">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Compare housing options
        </h1>
        <p className="text-[var(--muted)]">
          Review tradeoffs side by side, then move forward with a clearer plan for next conversations.
        </p>
      </header>

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
          <div className="print:hidden mb-[var(--space-stack-tight)] flex min-w-0 flex-wrap items-center justify-between gap-[var(--space-stack-tight)] rounded-[var(--shape-radius-base)] border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] px-[max(1rem,var(--space-stack-tight))] py-[max(0.9rem,var(--space-stack-tight))]">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                Comparison set
              </p>
              <p className="text-sm font-medium text-[var(--text)]">
                {selectedOptions.length} of {COMPARE_MAX} selected
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {selectedIds.length > 0 ? (
                <Button
                  variant="ghost"
                  size="sm"
                  elevation="flat"
                  onClick={async () => {
                    const didCopy = await copyShareLink(buildShareLink(selectedIds));
                    addToast({
                      tone: didCopy ? "success" : "warning",
                      message: didCopy
                        ? "Share link copied to clipboard."
                        : "Copy blocked. You can share this page link manually.",
                    });
                  }}
                >
                  Copy share link
                </Button>
              ) : null}
              <Button
                variant="secondary"
                size="sm"
                elevation="flat"
                onClick={() => window.print()}
              >
                Print
              </Button>
              {isFull ? (
                <>
                  <Button variant="ghost" size="sm" elevation="flat" disabled title="Maximum of 3 options selected">
                    Add more options
                  </Button>
                  <Link href="/explore" className="text-sm font-medium text-[var(--link)] hover:text-[var(--link-hover)]">
                    Swap an option
                  </Link>
                </>
              ) : (
                <Link href="/explore">
                  <Button variant="secondary" size="sm" elevation="flat">
                    Add more options
                  </Button>
                </Link>
              )}
              <Button
                variant="ghost"
                size="sm"
                elevation="flat"
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
            </div>
          </div>

          <div className="hidden print:block">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Printable comparison
            </p>
            <h2 className="mt-2 text-xl font-semibold">{selectedOptions.length} selected options</h2>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm text-[var(--muted)]">
              {selectedOptions.map((option) => (
                <li key={`print-${option.id}`} className="shape-angular-sm border border-[var(--border)] px-3 py-1.5">
                  {option.title}
                </li>
              ))}
            </ul>
          </div>

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
                className="shape-angular-md surface-3d flex min-w-0 flex-col items-start justify-between gap-3 border border-[var(--border)] bg-[var(--surface)] px-4 py-3 sm:flex-row sm:items-center"
              >
                <p className="min-w-0 break-words text-sm">{option.title}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    remove(option.id);
                    addToast({
                      tone: "info",
                      message: `${option.title} removed from comparison.`,
                      action: {
                        label: "Undo",
                        onClick: () => {
                          add(option.id);
                          markOptionViewed(option.id);
                        },
                      },
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
            <Link href="/explore" className="text-sm font-medium text-[var(--link)] hover:text-[var(--link-hover)]">
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
