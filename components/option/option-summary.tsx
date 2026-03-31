import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { PlaceholderBlock } from "@/components/shared/placeholder-block";

type OptionSummaryProps = {
  option: HousingOption;
};

export function OptionSummary({ option }: OptionSummaryProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">[PLACEHOLDER: what this is]</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <PlaceholderBlock label="[PLACEHOLDER: summary paragraph]" value={option.shortSummary} />
        <PlaceholderBlock
          label="[PLACEHOLDER: major considerations]"
          value={option.majorConsiderations.join(" • ")}
        />
      </div>
    </Card>
  );
}
