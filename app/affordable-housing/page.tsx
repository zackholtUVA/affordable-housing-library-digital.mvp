import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";
import { InfoCallout } from "@/components/shared/info-callout";

const housingResources = [
  {
    id: "adu-rentals",
    title: "ADU Rental Listings",
    description:
      "Browse available ADU rentals—often more affordable than traditional apartments.",
    href: "/explore",
    ctaLabel: "Browse rentals",
    available: true,
  },
  {
    id: "housing-programs",
    title: "Housing Assistance Programs",
    description:
      "Local, state, and federal programs including vouchers and subsidies.",
    href: "#",
    ctaLabel: "View programs",
    available: false,
  },
  {
    id: "affordability-calculator",
    title: "Affordability Calculator",
    description:
      "Estimate what you can afford and compare ADUs to other options.",
    href: "#",
    ctaLabel: "Calculate",
    available: false,
  },
  {
    id: "waitlist-info",
    title: "Waitlist Notifications",
    description:
      "Get notified when new affordable ADU rentals become available.",
    href: "#",
    ctaLabel: "Join waitlist",
    available: false,
  },
];

export default function AffordableHousingPage() {
  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="fade-in space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Finding Affordable Housing
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          Discover housing options that fit your budget. ADUs often provide more affordable alternatives to traditional rentals.
        </p>
      </header>

      <section className="fade-in">
        <InfoCallout tone="info">
          ADUs are increasingly recognized as a key part of the affordable housing solution—adding supply in existing neighborhoods at lower price points.
        </InfoCallout>
      </section>

      <section className="fade-in space-y-[var(--space-stack)]">
        <h2 className="text-2xl font-semibold">Find your next home</h2>
        <div className="grid gap-[var(--space-stack)] md:grid-cols-2">
          {housingResources.map((resource) => (
            <Card
              key={resource.id}
              as="article"
              className={`flex flex-col justify-between ${!resource.available ? "opacity-70" : ""}`}
            >
              <div className="space-y-[var(--space-stack-tight)]">
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <h3 className="min-w-0 break-words text-lg font-semibold">{resource.title}</h3>
                  {!resource.available && (
                    <span className="shrink-0 rounded-full bg-[var(--surface-2)] px-2 py-1 text-xs font-medium text-[var(--muted)]">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {resource.description}
                </p>
              </div>
              <div className="mt-[var(--space-stack-loose)]">
                {resource.available ? (
                  <Link href={resource.href}>
                    <Button size="sm" variant="secondary">
                      {resource.ctaLabel}
                    </Button>
                  </Link>
                ) : (
                  <Button size="sm" variant="ghost" disabled>
                    {resource.ctaLabel}
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="fade-in space-y-[var(--space-stack)]">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <details className="shape-angular-md surface-3d group border border-[var(--border)] bg-[var(--surface)]">
          <summary className="cursor-pointer list-none p-6 font-semibold hover:bg-[var(--surface-2)]">
            <div className="flex min-w-0 items-center justify-between gap-4">
              <span className="min-w-0 break-words">What is an ADU and why might it be more affordable?</span>
              <span className="shrink-0 transition-transform group-open:rotate-180">▼</span>
            </div>
          </summary>
          <div className="border-t border-[var(--border)] p-[max(1.2rem,var(--space-card-pad))] text-sm leading-relaxed text-[var(--muted)]">
            An ADU (Accessory Dwelling Unit) is a smaller secondary home on the same lot as a primary residence. ADUs are often more affordable because they&apos;re smaller, have lower utility costs, and homeowners may offer competitive rents.
          </div>
        </details>

        <details className="shape-angular-md surface-3d group border border-[var(--border)] bg-[var(--surface)]">
          <summary className="cursor-pointer list-none p-6 font-semibold hover:bg-[var(--surface-2)]">
            <div className="flex min-w-0 items-center justify-between gap-4">
              <span className="min-w-0 break-words">How do I search for ADU rentals?</span>
              <span className="shrink-0 transition-transform group-open:rotate-180">▼</span>
            </div>
          </summary>
          <div className="border-t border-[var(--border)] p-[max(1.2rem,var(--space-card-pad))] text-sm leading-relaxed text-[var(--muted)]">
            Use our browse tool to filter housing options. Look for garage conversions, backyard cottages, basement apartments, and junior suites.
          </div>
        </details>

        <details className="shape-angular-md surface-3d group border border-[var(--border)] bg-[var(--surface)]">
          <summary className="cursor-pointer list-none p-6 font-semibold hover:bg-[var(--surface-2)]">
            <div className="flex min-w-0 items-center justify-between gap-4">
              <span className="min-w-0 break-words">What should I consider when renting an ADU?</span>
              <span className="shrink-0 transition-transform group-open:rotate-180">▼</span>
            </div>
          </summary>
          <div className="border-t border-[var(--border)] p-[max(1.2rem,var(--space-card-pad))] text-sm leading-relaxed text-[var(--muted)]">
            Consider privacy (shared vs. separate entrance), parking availability, utility arrangements (separate or shared meters), and the relationship with the property owner.
          </div>
        </details>
      </section>

      <section className="fade-in">
        <Card as="aside" className="bg-[var(--surface-2)] p-[max(1.4rem,var(--space-card-pad))] text-center">
          <h2 className="text-xl font-semibold">Ready to explore ADU options?</h2>
          <div className="mt-[var(--space-stack-loose)] flex flex-wrap items-center justify-center gap-[var(--space-stack-tight)]">
            <Link href="/explore">
              <Button size="md">Browse all options</Button>
            </Link>
            <Link href="/get-started" className="text-sm font-medium text-[var(--link)] hover:text-[var(--link-hover)]">
              ← Back to pathways
            </Link>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
