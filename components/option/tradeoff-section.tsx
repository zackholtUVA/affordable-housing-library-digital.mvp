import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";

type TradeoffSectionProps = {
  option: HousingOption;
};

export function TradeoffSection({ option }: TradeoffSectionProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">[PLACEHOLDER: key tradeoffs]</h2>
      <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
        {option.keyTradeoffs.map((item) => (
          <li key={item} className="rounded-xl bg-[var(--surface-2)] px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
