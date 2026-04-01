"use client";

import { useEffect } from "react";

import { Badge } from "@/components/shared/badge";
import { Card } from "@/components/shared/card";
import { useSessionContext } from "@/lib/session-context";
import type { HousingOption } from "@/lib/types";

type OptionHeroProps = {
  option: HousingOption;
};

export function OptionHero({ option }: OptionHeroProps) {
  const { markOptionViewed } = useSessionContext();

  useEffect(() => {
    markOptionViewed(option.id);
  }, [markOptionViewed, option.id]);

  return (
    <Card as="section" className="space-y-[var(--space-stack)]">
      <div className="flex flex-wrap items-center gap-3.5">
        <Badge>{option.category}</Badge>
        <Badge>{option.policyConfidenceLabel}</Badge>
      </div>
      <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {option.title}
      </h1>
      <p className="max-w-4xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
        {option.shortSummary}
      </p>
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
        <span>Complexity: {option.comparisonAttributes.complexity}</span>
        <span>Timeline: {option.comparisonAttributes.timeline}</span>
      </div>
    </Card>
  );
}
