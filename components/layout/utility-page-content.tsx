import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import type { UtilityPageContent } from "@/lib/types";

type UtilityPageContentProps = {
  content: UtilityPageContent;
};

export function UtilityPageContentSection({ content }: UtilityPageContentProps) {
  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="space-y-[var(--space-stack)]">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {content.title}
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">{content.intro}</p>
      </header>

      <section className="grid gap-[var(--space-stack)] md:grid-cols-2 lg:grid-cols-3">
        {content.sections.map((section) => (
          <Card key={section.heading} as="article" className="space-y-3">
            <h2 className="text-lg font-semibold">{section.heading}</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{section.body}</p>
          </Card>
        ))}
      </section>
    </PageShell>
  );
}
