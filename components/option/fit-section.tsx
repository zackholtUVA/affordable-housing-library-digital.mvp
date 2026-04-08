import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { CheckCircle2 } from "lucide-react";

type FitSectionProps = {
  option: HousingOption;
};

export function FitSection({ option }: FitSectionProps) {
  return (
    <Card as="section" className="space-y-4">
      <div className="flex items-start gap-3">
        <span className="shape-square surface-3d flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--surface-2)] text-[var(--accent)]">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Fit
          </p>
          <h2 className="text-xl font-semibold">Good fit if</h2>
        </div>
      </div>
      <ul className="mt-[var(--space-stack-loose)] space-y-[var(--space-stack-tight)] text-sm text-[var(--muted)]">
        {option.bestFor.map((item) => (
          <li key={item} className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
