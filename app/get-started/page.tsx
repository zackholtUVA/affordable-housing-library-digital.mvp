import Link from "next/link";
import { Star } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";

const pathwayCards = [
  {
    id: "build-adu",
    type: "primary" as const,
    title: "I Want to Build an ADU",
    description:
      "Compare designs, understand costs, and find pre-approved plans for your property.",
    href: "/start",
    ctaLabel: "Explore options",
  },
  {
    id: "affordable-housing",
    type: "secondary" as const,
    title: "I Need Affordable Housing",
    description:
      "Browse ADU rentals and housing assistance programs.",
    href: "/affordable-housing",
    ctaLabel: "Find housing",
  },
  {
    id: "architect-designer",
    type: "secondary" as const,
    title: "I'm an Architect / Designer",
    description:
      "Access plan catalogs and connect with homeowners.",
    href: "/for-designers",
    ctaLabel: "View resources",
  },
  {
    id: "contractor",
    type: "secondary" as const,
    title: "I'm a Contractor",
    description:
      "Find projects and access construction specifications.",
    href: "/for-contractors",
    ctaLabel: "View resources",
  },
];

export default function GetStartedPage() {
  const primaryCard = pathwayCards.find((card) => card.type === "primary")!;
  const secondaryCards = pathwayCards.filter((card) => card.type === "secondary");

  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="fade-in mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          Get started
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          What brings you here?
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
          Pick the path that matches your goal, and we&apos;ll guide you to the right next step.
        </p>
      </header>

      <section className="fade-in space-y-[var(--space-stack-loose)]">
        {/* Primary Card - ADU Builder */}
        <Link href={primaryCard.href} className="block">
          <Card
            as="article"
            className="group relative overflow-hidden border-2 border-[var(--accent)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-2)] p-[max(1.5rem,var(--space-card-pad))] transition-all hover:border-[var(--accent-strong)] hover:shadow-lg md:p-[max(1.8rem,var(--space-card-pad))]"
          >
            <div className="space-y-[var(--space-stack-tight)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                  <Star size={10} aria-hidden="true" />
                  Most popular
                </span>
              </div>
              <h2 className="min-w-0 break-words text-2xl font-semibold tracking-tight md:text-3xl">
                {primaryCard.title}
              </h2>
              <p className="max-w-2xl text-[var(--muted)]">
                {primaryCard.description}
              </p>
              <div className="pt-2">
                <Button size="md" className="group-hover:brightness-105">
                  {primaryCard.ctaLabel}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </div>
            </div>
          </Card>
        </Link>

        {/* Secondary Cards - 3 side-by-side */}
        <div className="grid gap-[var(--space-stack)] md:grid-cols-3">
          {secondaryCards.map((card) => (
            <Link key={card.id} href={card.href} className="block h-full">
              <Card
                as="article"
                className="group flex h-full flex-col justify-between p-6 transition-all hover:border-[var(--accent)] hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="min-w-0 break-words text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {card.description}
                  </p>
                </div>
                <div className="mt-[var(--space-stack-loose)]">
                  <span className="inline-flex items-center text-sm font-medium text-[var(--link)] transition-colors group-hover:text-[var(--link-hover)]">
                    {card.ctaLabel}
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
