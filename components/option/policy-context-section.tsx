import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { InfoCallout } from "@/components/shared/info-callout";

type PolicyContextSectionProps = {
  option: HousingOption;
};

export function PolicyContextSection({ option }: PolicyContextSectionProps) {
  return (
    <Card as="section" className="space-y-4">
      <h2 className="text-xl font-semibold">[PLACEHOLDER: localized policy context]</h2>
      <p className="text-sm text-[var(--muted)]">{option.policySummary}</p>
      <InfoCallout title="[PLACEHOLDER: policy confidence label]">
        {option.policyConfidenceLabel}
      </InfoCallout>
    </Card>
  );
}

