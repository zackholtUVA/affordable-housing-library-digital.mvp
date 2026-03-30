"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        [PLACEHOLDER: search bar label]
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="[PLACEHOLDER: search input placeholder]"
        className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
      />
    </label>
  );
}

