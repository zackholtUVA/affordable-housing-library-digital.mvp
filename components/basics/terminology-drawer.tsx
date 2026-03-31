"use client";

import { useState } from "react";

import type { GlossaryTerm } from "@/lib/types";

type TerminologyDrawerProps = {
  term: GlossaryTerm;
};

export function TerminologyDrawer({ term }: TerminologyDrawerProps) {
  const [open, setOpen] = useState(false);
  return (
    <article className="shape-angular-lg surface-3d min-w-0 break-words border border-[var(--border)] bg-[var(--surface)]">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full min-w-0 items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="min-w-0 break-words text-sm font-semibold">{term.term}</span>
        <span className="text-xs text-[var(--muted)]">{open ? "Hide" : "Show"}</span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-[var(--motion-easing-standard)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 border-t border-[var(--border)] px-5 py-4 text-sm text-[var(--muted)]">
            <p className="leading-relaxed">{term.plainLanguageDefinition}</p>
            <p className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3 text-xs">
              {term.whyItMatters}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
