import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  active?: boolean;
  onRemove?: () => void;
};

export function Tag({ children, active = false, onRemove }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium",
        active
          ? "border-[var(--accent)] bg-[color-mix(in_oklab,var(--accent)_22%,transparent)] text-[var(--text)]"
          : "border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)]",
      )}
    >
      {children}
      {onRemove ? (
        <button
          type="button"
          aria-label={`Remove ${String(children)}`}
          className="rounded-full bg-[var(--surface-3)] px-1 text-[10px] leading-none"
          onClick={onRemove}
        >
          x
        </button>
      ) : null}
    </span>
  );
}

