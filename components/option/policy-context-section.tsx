import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { InfoCallout } from "@/components/shared/info-callout";

type PolicyContextSectionProps = {
  option: HousingOption;
};

export function PolicyContextSection({ option }: PolicyContextSectionProps) {
  return (
    <Card as="section" className="space-y-6">
      <h2 className="text-xl font-semibold">[PLACEHOLDER: localized policy context]</h2>
      <p className="min-w-0 break-words text-sm leading-relaxed text-[var(--muted)]">{option.policySummary}</p>
      <InfoCallout title="[PLACEHOLDER: policy confidence label]">
        {option.policyConfidenceLabel}
      </InfoCallout>
    </Card>
  );
}
