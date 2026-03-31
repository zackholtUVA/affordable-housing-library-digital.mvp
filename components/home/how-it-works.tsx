import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";

export function HowItWorks() {
  return (
    <section className="space-y-[var(--space-stack)]">
      <SectionHeading
        eyebrow="How it works"
        title="[PLACEHOLDER: how-it-works heading]"
        description="[PLACEHOLDER: how-it-works supporting copy]"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <Card key={step} className="relative overflow-hidden">
            <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--surface-3)] text-xs font-semibold">
              {index + 1}
            </span>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{step}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
