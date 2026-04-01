import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";

type ReviewSectionProps = {
  option: HousingOption;
};

export function ReviewSection({ option }: ReviewSectionProps) {
  return (
    <Card as="section">
      <h2 className="text-xl font-semibold">What to review</h2>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        Validate these items early to avoid redesigns, permit delays, or avoidable cost surprises.
      </p>
      <ul className="mt-6 space-y-4 text-sm text-[var(--muted)]">
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
