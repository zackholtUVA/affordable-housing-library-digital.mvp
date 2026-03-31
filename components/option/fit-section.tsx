import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";

type FitSectionProps = {
  option: HousingOption;
};

export function FitSection({ option }: FitSectionProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">[PLACEHOLDER: good fit if]</h2>
      <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
        {option.bestFor.map((item) => (
          <li key={item} className="rounded-xl bg-[var(--surface-2)] px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
