"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import type { GlossaryTerm } from "@/lib/types";

type TerminologyDrawerProps = {
  term: GlossaryTerm;
};

export function TerminologyDrawer({ term }: TerminologyDrawerProps) {
  const [open, setOpen] = useState(false);
  const contentId = `${term.id}-details`;

  return (
    <article className="shape-angular-lg surface-3d min-w-0 break-words border border-[var(--border)] bg-[var(--surface)]">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={contentId}
        className="flex w-full min-w-0 items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="min-w-0 break-words text-sm font-semibold">{term.term}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-[var(--muted)] transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        id={contentId}
        className={`grid transition-[grid-template-rows] duration-300 ease-[var(--motion-easing-standard)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 border-t border-[var(--border)] px-5 py-4 text-sm text-[var(--muted)]">
            <p className="leading-relaxed">{term.plainLanguageDefinition}</p>
            <p className="border-l-2 border-[var(--accent)] bg-[var(--surface-2)] px-4 py-3 text-xs leading-relaxed">
              {term.whyItMatters}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
