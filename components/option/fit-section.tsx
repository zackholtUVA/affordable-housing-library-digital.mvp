import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";

type FitSectionProps = {
  option: HousingOption;
};

export function FitSection({ option }: FitSectionProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">Good fit if</h2>
      <ul className="mt-6 space-y-4 text-sm text-[var(--muted)]">
        {option.bestFor.map((item) => (
          <li key={item} className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
