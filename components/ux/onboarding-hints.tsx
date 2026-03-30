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
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-4 py-2 text-xs text-[var(--muted)] md:px-6">
        <span className="rounded-full border border-[var(--border)] px-2 py-1">
          Cmd/Ctrl + K for quick actions
        </span>
        <span className="rounded-full border border-[var(--border)] px-2 py-1">
          g + e/c/n/b for route jumps
        </span>
        <span className="rounded-full border border-[var(--border)] px-2 py-1">
          / focuses Explore search
        </span>
        <button
          type="button"
          className="ml-auto rounded-full border border-[var(--border)] px-2 py-1 hover:bg-[var(--surface-2)]"
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
