import { SectionHeading } from "@/components/shared/section-heading";
import { PlaceholderBlock } from "@/components/shared/placeholder-block";

export function IntroSection() {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="What this tool is for"
        title="[PLACEHOLDER: product explanation section title]"
        description="[PLACEHOLDER: plain-language product explanation]"
      />
      <div className="grid gap-3 md:grid-cols-2">
        <PlaceholderBlock value="[PLACEHOLDER: what users can do in this MVP]" />
        <PlaceholderBlock value="[PLACEHOLDER: what this MVP intentionally does not do]" />
      </div>
    </section>
  );
}

