import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";

type OptionSummaryProps = {
  option: HousingOption;
};

export function OptionSummary({ option }: OptionSummaryProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">What this is</h2>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        This pathway is typically used when households want to add housing while balancing speed, cost, and long-term flexibility.
      </p>
      <ul className="mt-[var(--space-stack-loose)] space-y-[var(--space-stack-tight)] text-sm text-[var(--muted)]">
        {option.primaryUseCases.map((item) => (
          <li
            key={item}
            className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
