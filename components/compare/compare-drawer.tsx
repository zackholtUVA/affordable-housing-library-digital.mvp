"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { housingOptions } from "@/data/housing-options";
import { COMPARE_MAX } from "@/lib/constants";
import { useCompareStore } from "@/lib/compare-store";
import { Button } from "@/components/shared/button";
import { Tag } from "@/components/shared/tag";

const optionById = new Map(housingOptions.map((option) => [option.id, option]));

export function CompareDrawer() {
  const pathname = usePathname();
  const { selectedIds, remove, clear } = useCompareStore();

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
          {selectedIds.map((id) => (
            <Tag key={id} active onRemove={() => remove(id)}>
              {optionById.get(id)?.title ?? id}
            </Tag>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={clear}>
            Clear
          </Button>
          <Link href="/compare">
            <Button size="sm">Open compare page</Button>
          </Link>
        </div>
      </div>
    </aside>
  );
}

