import { COMPARISON_LABELS } from "@/lib/constants";
import type { HousingOption } from "@/lib/types";

type CompareTableProps = {
  options: HousingOption[];
};

export function CompareTable({ options }: CompareTableProps) {
  return (
    <div className="shape-angular-lg surface-3d min-w-0 overflow-x-auto border border-[var(--border)] bg-[var(--surface)]">
      <table className="min-w-[760px] border-collapse text-left md:min-w-full">
        <thead>
          <tr className="border-b border-[var(--border)] bg-[var(--surface-2)]">
            <th className="shape-square sticky left-0 z-20 w-72 bg-[var(--surface-2)] px-6 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Comparison attribute
            </th>
            {options.map((option) => (
              <th
                key={option.id}
                className="min-w-60 px-6 py-5 text-sm font-semibold text-[var(--text)]"
              >
                {option.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(Object.keys(COMPARISON_LABELS) as Array<keyof typeof COMPARISON_LABELS>).map(
            (key) => (
              <tr
                key={key}
                className="group border-b border-[var(--border)] transition-colors hover:bg-[var(--surface-2)] last:border-0"
              >
                <th className="shape-square sticky left-0 z-10 bg-[var(--surface)] px-6 py-5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)] group-hover:bg-[var(--surface-2)]">
                  {COMPARISON_LABELS[key]}
                </th>
                {options.map((option) => (
                  <td
                    key={`${option.id}-${key}`}
                    className="min-w-0 break-words px-6 py-5 text-sm text-[var(--text)]"
                  >
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
