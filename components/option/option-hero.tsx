import { Badge } from "@/components/shared/badge";
import { Card } from "@/components/shared/card";
import type { HousingOption } from "@/lib/types";

type OptionHeroProps = {
  option: HousingOption;
};

export function OptionHero({ option }: OptionHeroProps) {
  return (
    <Card as="section" className="p-7 md:p-9">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{option.category}</Badge>
        <Badge>{option.policyConfidenceLabel}</Badge>
      </div>
      <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {option.title}
      </h1>
      <p className="mt-4 max-w-3xl text-base text-[var(--muted)] md:text-lg">
        {option.shortSummary}
      </p>
    </Card>
  );
}

