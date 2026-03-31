import type { ReactNode } from "react";

type PlaceholderBlockProps = {
  label?: ReactNode;
  value: string | ReactNode;
};

export function PlaceholderBlock({ label, value }: PlaceholderBlockProps) {
  return (
    <div className="shape-angular-md surface-3d min-w-0 break-words border border-dashed border-[var(--border)] bg-[var(--surface-2)] p-[max(1rem,var(--space-stack))]">
      {label ? (
        <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
      ) : null}
      <p className="text-sm leading-relaxed text-[var(--text)]">{value}</p>
    </div>
  );
}
