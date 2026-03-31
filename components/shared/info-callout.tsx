import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type InfoCalloutProps = {
  title: ReactNode;
  children: ReactNode;
  tone?: "neutral" | "warning";
};

export function InfoCallout({
  title,
  children,
  tone = "neutral",
}: InfoCalloutProps) {
  return (
    <aside
      className={cn(
        "shape-angular-md surface-3d min-w-0 break-words border p-[max(1rem,var(--space-stack))]",
        tone === "warning"
          ? "border-[color-mix(in_oklab,var(--danger)_60%,var(--border))] bg-[color-mix(in_oklab,var(--danger)_14%,transparent)]"
          : "border-[var(--border)] bg-[var(--surface-2)]",
      )}
    >
      <h3 className="mb-2.5 text-sm font-semibold tracking-wide">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--muted)]">{children}</p>
    </aside>
  );
}
