import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";

const pathwayCards = [
  {
    id: "build-adu",
    type: "primary" as const,
    title: "I Want to Build an ADU",
    description:
      "Explore your options for adding a backyard cottage, garage conversion, or other accessory dwelling unit to your property. Compare designs, understand costs, and find pre-approved plans.",
    icon: "🏠",
    href: "/start",
    ctaLabel: "Explore ADU options",
  },
  {
    id: "affordable-housing",
    type: "secondary" as const,
    title: "I Need Affordable Housing",
    description:
      "Find resources for affordable rental housing, including ADU rentals and housing assistance programs.",
    icon: "🔑",
    href: "/affordable-housing",
    ctaLabel: "Find housing",
  },
  {
    id: "architect-designer",
    type: "secondary" as const,
    title: "I'm an Architect / Designer",
    description:
      "Access design resources, pre-approved plan catalogs, and connect with homeowners seeking ADU projects.",
    icon: "📐",
    href: "/for-designers",
    ctaLabel: "Designer resources",
  },
  {
    id: "contractor",
    type: "secondary" as const,
    title: "I'm a Contractor",
    description:
      "Find ADU projects, access construction specifications, and connect with homeowners ready to build.",
    icon: "🔨",
    href: "/for-contractors",
    ctaLabel: "Contractor resources",
  },
];

export default function GetStartedPage() {
  const primaryCard = pathwayCards.find((card) => card.type === "primary")!;
  const secondaryCards = pathwayCards.filter((card) => card.type === "secondary");

  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="fade-in space-y-4 text-center">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          What brings you here?
        </h1>
        <p className="mx-auto max-w-2xl text-[var(--muted)]">
          Choose the path that best matches your situation. We&apos;ll guide you to the right resources and next steps.
        </p>
      </header>

      <section className="fade-in space-y-8">
        {/* Primary Card - ADU Builder */}
        <Link href={primaryCard.href} className="block">
          <Card
            as="article"
            className="group relative overflow-hidden border-2 border-[var(--accent)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-2)] p-8 transition-all hover:border-[var(--accent-strong)] hover:shadow-lg md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)] text-4xl shadow-lg md:h-24 md:w-24 md:text-5xl">
                {primaryCard.icon}
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent-foreground)]">
                    Most popular
                  </span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
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
            </div>
          </Card>
        </Link>

        {/* Secondary Cards - 3 side-by-side */}
        <div className="grid gap-6 md:grid-cols-3">
          {secondaryCards.map((card) => (
            <Link key={card.id} href={card.href} className="block h-full">
              <Card
                as="article"
                className="group flex h-full flex-col justify-between p-6 transition-all hover:border-[var(--accent)] hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--surface-2)] text-2xl">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center text-sm font-medium text-[var(--accent)] transition-colors group-hover:text-[var(--accent-strong)]">
                    {card.ctaLabel}
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="fade-in">
        <Card as="aside" interactive={false} className="bg-[var(--surface-2)] p-6 text-center">
          <p className="text-sm text-[var(--muted)]">
            Not sure which path is right for you?{" "}
            <Link href="/basics" className="font-medium text-[var(--accent)] hover:underline">
              Learn the basics about ADUs
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-medium text-[var(--accent)] hover:underline">
              contact us for guidance
            </Link>
            .
          </p>
        </Card>
      </section>
    </PageShell>
  );
}
