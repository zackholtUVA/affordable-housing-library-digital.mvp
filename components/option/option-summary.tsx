import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { FileText } from "lucide-react";

type OptionSummaryProps = {
  option: HousingOption;
};

export function OptionSummary({ option }: OptionSummaryProps) {
  return (
    <Card as="section" className="space-y-4">
      <div className="flex items-start gap-3">
        <span className="shape-square surface-3d flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--surface-2)] text-[var(--accent)]">
          <FileText className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Overview
          </p>
          <h2 className="text-xl font-semibold">What this is</h2>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        This pathway is typically used when households want to add housing while balancing speed, cost, and long-term flexibility.
      </p>
      <ul className="mt-[var(--space-stack-loose)] space-y-[var(--space-stack-tight)] text-sm text-[var(--muted)]">
        {option.primaryUseCases.map((item) => (
          <li
            key={item}
            className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
