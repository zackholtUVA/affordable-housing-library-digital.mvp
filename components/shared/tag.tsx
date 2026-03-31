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
        "shape-angular-sm surface-3d inline-flex min-w-0 items-center gap-2 border px-3 py-1.5 text-xs font-medium",
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
          className="shape-square surface-3d bg-[var(--surface-3)] px-1.5 py-0.5 text-[10px] leading-none"
          onClick={onRemove}
        >
          x
        </button>
      ) : null}
    </span>
  );
}
