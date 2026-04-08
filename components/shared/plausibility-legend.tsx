import { ChevronDown } from "lucide-react";

import { PLAUSIBILITY_DEFINITIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PlausibilityLegendProps = {
  className?: string;
  compact?: boolean;
  collapsible?: boolean;
};

function PlausibilityLegendBody({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
        Badges indicate how likely a pathway is to work in many places before site-specific review.
      </p>
      <ul className={cn("mt-4 space-y-3", compact ? "text-xs" : "text-sm")}>
        {PLAUSIBILITY_DEFINITIONS.map((item) => (
          <li
            key={item.label}
            className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-3.5 py-3"
          >
            <p className="text-sm font-semibold capitalize text-[var(--text)]">{item.label}</p>
            <p className="mt-1.5 text-[var(--muted)]">{item.definition}</p>
            <p className="mt-1 text-[var(--muted)]">{item.usageNote}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export function PlausibilityLegend({
  className,
  compact = false,
  collapsible = false,
}: PlausibilityLegendProps) {
  const containerClassName = cn(
    "shape-angular-md surface-3d min-w-0 break-words border border-[var(--border)] bg-[var(--surface)] p-[max(0.9rem,var(--space-stack))]",
    className,
  );

  if (collapsible) {
    return (
      <details className={containerClassName}>
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[var(--text)] [&::-webkit-details-marker]:hidden">
          <span>What do badges mean?</span>
          <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)]" aria-hidden="true" />
        </summary>
        <div className="pt-1">
          <PlausibilityLegendBody compact={compact} />
        </div>
      </details>
    );
  }

  return (
    <section className={containerClassName} aria-label="Plausibility badge guide">
      <h2 className="text-sm font-semibold text-[var(--text)]">How to read plausibility badges</h2>
      <PlausibilityLegendBody compact={compact} />
    </section>
  );
}
