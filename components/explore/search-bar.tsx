"use client";

import type { RefObject } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
  onArrowDown?: () => void;
};

export function SearchBar({ value, onChange, inputRef, onArrowDown }: SearchBarProps) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        Search housing options
      </span>
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            onArrowDown?.();
          }
        }}
        placeholder={'Try "garage conversion" or "family flexibility"'}
        className="shape-angular-md surface-3d h-12 w-full min-w-0 border border-[var(--border)] bg-[var(--surface)] px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
      />
    </label>
  );
}
