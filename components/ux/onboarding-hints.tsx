"use client";

import { useReducer } from "react";

const SESSION_KEY = "ahl-ux-hints-dismissed";

export function OnboardingHints() {
  const [, forceUpdate] = useReducer((value: number) => value + 1, 0);
  const dismissed =
    typeof window !== "undefined" &&
    window.sessionStorage.getItem(SESSION_KEY) === "true";

  if (dismissed) {
    return null;
  }

  return (
    <section className="border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_70%,transparent)]">
      <div className="mx-auto flex w-full max-w-[86rem] flex-wrap items-center gap-3.5 px-[var(--space-page-x)] py-4 text-xs text-[var(--muted)]">
        <span className="rounded-full border border-[var(--border)] px-3 py-1.5">
          Cmd/Ctrl + K for quick actions
        </span>
        <span className="rounded-full border border-[var(--border)] px-3 py-1.5">
          g + e/c/n/b for route jumps
        </span>
        <span className="rounded-full border border-[var(--border)] px-3 py-1.5">
          / focuses Explore search
        </span>
        <button
          type="button"
          className="ml-auto rounded-full border border-[var(--border)] px-3 py-1.5 hover:bg-[var(--surface-2)]"
          onClick={() => {
            window.sessionStorage.setItem(SESSION_KEY, "true");
            forceUpdate();
          }}
        >
          Dismiss
        </button>
      </div>
    </section>
  );
}
