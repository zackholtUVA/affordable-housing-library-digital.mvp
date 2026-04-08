"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { housingOptions } from "@/data/housing-options";
import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { useSessionContext } from "@/lib/session-context";
import { useUx } from "@/lib/ux";
import { Button } from "@/components/shared/button";
import { Tag } from "@/components/shared/tag";

const optionById = new Map(housingOptions.map((option) => [option.id, option]));

export function CompareDrawer() {
  const pathname = usePathname();
  const { selectedIds, remove, clear, add } = useCompareStore();
  const { markOptionViewed } = useSessionContext();
  const { addToast } = useUx();
  const [expanded, setExpanded] = useState(false);
  const trayVisible = pathname !== "/compare";
  const hasSelections = selectedIds.length > 0;

  useEffect(() => {
    const handleEscape = () => setExpanded(false);
    window.addEventListener("ux:escape", handleEscape);
    return () => window.removeEventListener("ux:escape", handleEscape);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--floating-ui-clearance",
      trayVisible
        ? hasSelections
          ? "clamp(5.9rem, 13vw, 8rem)"
          : "clamp(4.6rem, 9vw, 5.75rem)"
        : "clamp(2.25rem, 4vw, 3rem)",
    );
    return () => {
      document.documentElement.style.setProperty(
        "--floating-ui-clearance",
        "clamp(2.25rem, 4vw, 3rem)",
      );
    };
  }, [hasSelections, trayVisible]);

  if (!trayVisible) {
    return null;
  }

  if (!hasSelections) {
    return (
      <aside
        className="surface-3d fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_90%,transparent)] p-[max(0.9rem,var(--space-stack-tight))] pb-[calc(max(0.9rem,var(--space-stack-tight))+env(safe-area-inset-bottom))] backdrop-blur-xl"
        aria-label="Compare tray"
      >
        <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Compare tray ({selectedIds.length} of {COMPARE_MAX} selected)
            </p>
            <p className="max-w-2xl text-sm text-[var(--muted)]">
              Start in Browse ADUs and add up to three options to compare side by side.
            </p>
          </div>
          <div className="flex min-w-0 flex-wrap items-center gap-2.5 md:justify-end">
            <Link href="/explore">
              <Button variant="secondary" size="sm">
                Browse ADUs
              </Button>
            </Link>
            <Link href="/compare">
              <Button size="sm" className="min-w-[10.5rem]">
                Open compare page
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="surface-3d fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_90%,transparent)] p-[max(0.9rem,var(--space-stack-tight))] pb-[calc(max(0.9rem,var(--space-stack-tight))+env(safe-area-inset-bottom))] backdrop-blur-xl"
      aria-label="Compare tray"
    >
      <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-[max(0.8rem,var(--space-stack-tight))] md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 flex-wrap items-center gap-2.5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Compare tray ({selectedIds.length} of {COMPARE_MAX} selected)
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded((current) => !current)}
            aria-expanded={expanded}
          >
            {expanded ? "Hide summary" : "Quick summary"}
          </Button>
          {selectedIds.map((id) => (
            <Tag
              key={id}
              active
              onRemove={() => {
                remove(id);
                addToast({
                  tone: "info",
                  message: `${optionById.get(id)?.title ?? id} removed from comparison.`,
                  action: {
                    label: "Undo",
                    onClick: () => {
                      add(id);
                      markOptionViewed(id);
                    },
                  },
                });
              }}
            >
              {optionById.get(id)?.title ?? id}
            </Tag>
          ))}
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-2.5 md:justify-end">
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
            Clear
          </Button>
          <Link href="/compare">
            <Button size="sm" className="min-w-[10.5rem]">
              Open compare page
            </Button>
          </Link>
        </div>
      </div>

      <div
        className={`mx-auto mt-4 w-full max-w-[92rem] overflow-hidden transition-[max-height,opacity] duration-300 ease-[var(--motion-easing-standard)] ${
          expanded ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="shape-angular-lg surface-3d grid gap-[var(--space-stack-tight)] border border-[var(--border)] bg-[var(--surface)] p-[var(--space-stack-tight)] md:grid-cols-3">
          {selectedIds.map((id) => {
            const option = optionById.get(id);
            if (!option) {
              return null;
            }
            return (
              <article
                key={`${id}-summary`}
                className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] p-3.5"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                  Selected option
                </p>
                <h3 className="mt-1 min-w-0 break-words text-sm font-semibold">{option.title}</h3>
                <p className="mt-2 min-w-0 break-words text-xs text-[var(--muted)]">{option.shortSummary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
