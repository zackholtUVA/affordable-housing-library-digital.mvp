import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";

type FitSectionProps = {
  option: HousingOption;
};

export function FitSection({ option }: FitSectionProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">[PLACEHOLDER: good fit if]</h2>
      <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
        {option.bestFor.map((item) => (
          <li key={item} className="rounded-lg bg-[var(--surface-2)] px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

