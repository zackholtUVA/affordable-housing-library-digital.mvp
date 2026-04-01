import { PLAUSIBILITY_DEFINITIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PlausibilityLegendProps = {
  className?: string;
  compact?: boolean;
};

export function PlausibilityLegend({ className, compact = false }: PlausibilityLegendProps) {
  return (
    <section
      className={cn(
        "shape-angular-md surface-3d min-w-0 break-words border border-[var(--border)] bg-[var(--surface)] p-[max(0.9rem,var(--space-stack))]",
        className,
      )}
      aria-label="Plausibility badge guide"
    >
      <h2 className="text-sm font-semibold text-[var(--text)]">How to read plausibility badges</h2>
      <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
        Badges indicate how likely a pathway is to work in many places before site-specific review.
      </p>
      <ul className={cn("mt-4 space-y-3", compact ? "text-xs" : "text-sm")}>
        {PLAUSIBILITY_DEFINITIONS.map((item) => (
          <li key={item.label} className="shape-angular-sm surface-3d min-w-0 break-words bg-[var(--surface-2)] px-3.5 py-3">
            <p className="text-sm font-semibold capitalize text-[var(--text)]">{item.label}</p>
            <p className="mt-1.5 text-[var(--muted)]">{item.definition}</p>
            <p className="mt-1 text-[var(--muted)]">{item.usageNote}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
