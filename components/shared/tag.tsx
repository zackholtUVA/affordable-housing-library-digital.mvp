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
        "shape-angular-sm surface-3d inline-flex min-w-0 items-center gap-2 border px-3 py-2 text-xs font-medium leading-snug",
        active
          ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text)]"
          : "border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)]",
      )}
    >
      <span className="min-w-0 break-words">{children}</span>
      {onRemove ? (
        <button
          type="button"
          aria-label={`Remove ${String(children)}`}
          className="shape-square surface-3d ml-0.5 min-h-5 px-1.5 py-0.5 text-xs leading-none"
          onClick={onRemove}
        >
          x
        </button>
      ) : null}
    </span>
  );
}
