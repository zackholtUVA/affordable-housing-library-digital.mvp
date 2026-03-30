import { COMPARISON_LABELS } from "@/lib/constants";
import type { HousingOption } from "@/lib/types";

type CompareTableProps = {
  options: HousingOption[];
};

export function CompareTable({ options }: CompareTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
      <table className="min-w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--border)] bg-[var(--surface-2)]">
            <th className="w-64 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              [PLACEHOLDER: comparison attribute]
            </th>
            {options.map((option) => (
              <th
                key={option.id}
                className="min-w-56 px-4 py-3 text-sm font-semibold text-[var(--text)]"
              >
                {option.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(Object.keys(COMPARISON_LABELS) as Array<keyof typeof COMPARISON_LABELS>).map(
            (key) => (
              <tr key={key} className="border-b border-[var(--border)] last:border-0">
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                  {COMPARISON_LABELS[key]}
                </th>
                {options.map((option) => (
                  <td key={`${option.id}-${key}`} className="px-4 py-3 text-sm text-[var(--text)]">
                    {option.comparisonAttributes[key]}
                  </td>
                ))}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}

