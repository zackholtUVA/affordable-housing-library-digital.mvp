import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { ClipboardList } from "lucide-react";

type ReviewSectionProps = {
  option: HousingOption;
};

export function ReviewSection({ option }: ReviewSectionProps) {
  return (
    <Card as="section" className="space-y-4">
      <div className="flex items-start gap-3">
        <span className="shape-square surface-3d flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--surface-2)] text-[var(--accent)]">
          <ClipboardList className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Review
          </p>
          <h2 className="text-xl font-semibold">What to review</h2>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        Validate these items early to avoid redesigns, permit delays, or avoidable cost surprises.
      </p>
      <ul className="mt-[var(--space-stack-loose)] space-y-[var(--space-stack-tight)] text-sm text-[var(--muted)]">
        {option.majorConsiderations.map((item) => (
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
