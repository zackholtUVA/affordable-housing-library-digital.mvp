import Link from "next/link";

import type { HousingOption } from "@/lib/types";
import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";

type NextStepSectionProps = {
  option: HousingOption;
};

export function NextStepSection({ option }: NextStepSectionProps) {
  return (
    <Card as="section" className="space-y-5">
      <h2 className="text-xl font-semibold">[PLACEHOLDER: next-step guidance]</h2>
      <ul className="space-y-3 text-sm text-[var(--muted)]">
        {option.nextSteps.map((step) => (
          <li key={step} className="rounded-xl bg-[var(--surface-2)] px-4 py-3">
            {step}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        <Link href="/compare">
          <Button variant="secondary" size="sm">
            Compare options
          </Button>
        </Link>
        <Link href="/next-steps">
          <Button size="sm">View next steps</Button>
        </Link>
      </div>
    </Card>
  );
}
