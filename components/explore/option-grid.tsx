import type { HousingOption } from "@/lib/types";
import { OptionCard } from "@/components/explore/option-card";

type OptionGridProps = {
  options: HousingOption[];
};

export function OptionGrid({ options }: OptionGridProps) {
  return (
    <div className="grid gap-[var(--space-stack)] md:grid-cols-2">
      {options.map((option) => (
        <OptionCard key={option.id} option={option} />
      ))}
    </div>
  );
}
