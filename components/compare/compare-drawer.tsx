"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { housingOptions } from "@/data/housing-options";
import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { useUx } from "@/lib/ux";
import { Button } from "@/components/shared/button";
import { Tag } from "@/components/shared/tag";

const optionById = new Map(housingOptions.map((option) => [option.id, option]));

export function CompareDrawer() {
  const pathname = usePathname();
  const { selectedIds, remove, clear } = useCompareStore();
  const { addToast } = useUx();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleEscape = () => setExpanded(false);
    window.addEventListener("ux:escape", handleEscape);
    return () => window.removeEventListener("ux:escape", handleEscape);
  }, []);

  if (selectedIds.length === 0 || pathname === "/compare") {
    return null;
  }

  return (
    <aside className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_92%,transparent)] p-3 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Compare ({selectedIds.length}/{COMPARE_MAX})
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
                  message: "[PLACEHOLDER: option removed from compare]",
                });
              }}
            >
              {optionById.get(id)?.title ?? id}
            </Tag>
          ))}
        </div>

        <div className="flex items-center gap-2">
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
            Clear
          </Button>
          <Link href="/compare">
            <Button size="sm">Open compare page</Button>
          </Link>
        </div>
      </div>

      <div
        className={`mx-auto mt-2 w-full max-w-6xl overflow-hidden transition-[max-height,opacity] duration-300 ease-[var(--motion-easing-standard)] ${
          expanded ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 md:grid-cols-3">
          {selectedIds.map((id) => {
            const option = optionById.get(id);
            if (!option) {
              return null;
            }
            return (
              <article key={`${id}-summary`} className="rounded-lg bg-[var(--surface-2)] p-3">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                  [PLACEHOLDER: selected option]
                </p>
                <h3 className="mt-1 text-sm font-semibold">{option.title}</h3>
                <p className="mt-2 text-xs text-[var(--muted)]">{option.shortSummary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
