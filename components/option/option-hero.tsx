import { Badge } from "@/components/shared/badge";
import { Card } from "@/components/shared/card";
import type { HousingOption } from "@/lib/types";

type OptionHeroProps = {
  option: HousingOption;
};

export function OptionHero({ option }: OptionHeroProps) {
  return (
    <Card as="section" className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{option.category}</Badge>
        <Badge>{option.policyConfidenceLabel}</Badge>
      </div>
      <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {option.title}
      </h1>
      <p className="max-w-4xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
        {option.shortSummary}
      </p>
    </Card>
  );
}
