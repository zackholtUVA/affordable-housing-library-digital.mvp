import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { BadgeInfo } from "lucide-react";

type PolicyContextSectionProps = {
  option: HousingOption;
};

export function PolicyContextSection({ option }: PolicyContextSectionProps) {
  return (
    <Card as="section" className="space-y-5">
      <div className="flex items-start gap-3">
        <span className="shape-square surface-3d flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--surface-2)] text-[var(--accent)]">
          <BadgeInfo className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Local context
          </p>
          <h2 className="text-xl font-semibold">Why this badge appears</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            This option is currently marked{" "}
            <strong className="capitalize text-[var(--text)]">{option.policyConfidenceLabel}</strong>{" "}
            based on common review patterns.
          </p>
        </div>
      </div>
      <p className="min-w-0 break-words text-sm leading-relaxed text-[var(--muted)]">{option.policySummary}</p>
    </Card>
  );
}
