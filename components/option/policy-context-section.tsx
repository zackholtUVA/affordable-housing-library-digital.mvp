import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { InfoCallout } from "@/components/shared/info-callout";
import { PlausibilityLegend } from "@/components/shared/plausibility-legend";

type PolicyContextSectionProps = {
  option: HousingOption;
};

export function PolicyContextSection({ option }: PolicyContextSectionProps) {
  return (
    <Card as="section" className="space-y-6">
      <h2 className="text-xl font-semibold">Local context</h2>
      <p className="min-w-0 break-words text-sm leading-relaxed text-[var(--muted)]">{option.policySummary}</p>
      <InfoCallout title="Why this badge appears">
        This option is currently marked <strong className="capitalize text-[var(--text)]">{option.policyConfidenceLabel}</strong> based on common review patterns. Confirm final applicability with your local jurisdiction.
      </InfoCallout>
      <PlausibilityLegend compact />
    </Card>
  );
}
