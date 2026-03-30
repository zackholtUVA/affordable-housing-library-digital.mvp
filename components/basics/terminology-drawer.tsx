"use client";

import { useState } from "react";

import type { GlossaryTerm } from "@/lib/types";

type TerminologyDrawerProps = {
  term: GlossaryTerm;
};

export function TerminologyDrawer({ term }: TerminologyDrawerProps) {
  const [open, setOpen] = useState(false);
  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-semibold">{term.term}</span>
        <span className="text-xs text-[var(--muted)]">{open ? "Hide" : "Show"}</span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-[var(--motion-easing-standard)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-2 border-t border-[var(--border)] px-4 py-3 text-sm text-[var(--muted)]">
            <p>{term.plainLanguageDefinition}</p>
            <p className="rounded-lg bg-[var(--surface-2)] px-3 py-2 text-xs">{term.whyItMatters}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
