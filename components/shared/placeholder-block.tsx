import type { ReactNode } from "react";

type PlaceholderBlockProps = {
  label?: ReactNode;
  value: string | ReactNode;
};

export function PlaceholderBlock({ label, value }: PlaceholderBlockProps) {
  return (
    <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface-2)] p-3">
      {label ? (
        <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
      ) : null}
      <p className="text-sm leading-6 text-[var(--text)]">{value}</p>
    </div>
  );
}

