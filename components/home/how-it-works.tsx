import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";

type HowItWorksProps = {
  id?: string;
};

export function HowItWorks({ id }: HowItWorksProps) {
  return (
    <section id={id} className="space-y-[var(--space-stack)]">
      <SectionHeading
        eyebrow="How it works"
        title="A three-step workflow for clearer housing decisions"
        description="Move from broad exploration to grounded next steps without losing track of tradeoffs."
      />
      <div className="grid gap-[var(--space-stack)] md:grid-cols-3">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <Card key={step} className="relative overflow-hidden">
            <span className="shape-square surface-3d mb-2 inline-flex h-7 w-7 items-center justify-center bg-[var(--surface-3)] text-xs font-semibold">
              {index + 1}
            </span>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{step}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
