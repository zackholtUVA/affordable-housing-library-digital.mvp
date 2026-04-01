import { SectionHeading } from "@/components/shared/section-heading";
import { PlaceholderBlock } from "@/components/shared/placeholder-block";

export function IntroSection() {
  return (
    <section className="space-y-[var(--space-stack)]">
      <SectionHeading
        eyebrow="What this tool is for"
        title="A practical starting point before you commit to one housing path"
        description="Use this library to compare representative housing pathways, understand where review effort increases, and prepare better questions for local experts."
      />
      <div className="grid gap-[var(--space-stack)] md:grid-cols-2">
        <PlaceholderBlock
          label="What you can do here"
          value="Browse pathways by goal, compare up to three options side by side, and build a next-step checklist for planning conversations."
        />
        <PlaceholderBlock
          label="What this tool does not do"
          value="It does not replace local code review, legal advice, or parcel-specific feasibility analysis. Treat it as guidance for your first planning pass."
        />
      </div>
    </section>
  );
}
