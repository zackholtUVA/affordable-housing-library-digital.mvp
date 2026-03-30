import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";

type TradeoffSectionProps = {
  option: HousingOption;
};

export function TradeoffSection({ option }: TradeoffSectionProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">[PLACEHOLDER: key tradeoffs]</h2>
      <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
        {option.keyTradeoffs.map((item) => (
          <li key={item} className="rounded-lg bg-[var(--surface-2)] px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

