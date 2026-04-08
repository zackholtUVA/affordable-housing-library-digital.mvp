import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";
import { InfoCallout } from "@/components/shared/info-callout";

const designerResources = [
  {
    id: "pre-approved-catalog",
    title: "Pre-Approved Plan Catalog",
    description:
      "Browse pre-approved ADU designs from various jurisdictions.",
    icon: "📚",
    href: "/explore",
    ctaLabel: "View catalog",
    available: true,
  },
  {
    id: "design-guidelines",
    title: "Design Guidelines Library",
    description:
      "Access design guidelines, setback requirements, and code references.",
    icon: "📏",
    href: "#",
    ctaLabel: "View guidelines",
    available: false,
  },
  {
    id: "project-leads",
    title: "Project Opportunities",
    description:
      "Connect with homeowners seeking design services for ADU projects.",
    icon: "🤝",
    href: "#",
    ctaLabel: "Find projects",
    available: false,
  },
  {
    id: "submission-portal",
    title: "Design Submission Portal",
    description:
      "Submit your ADU designs to be featured in our catalog.",
    icon: "📤",
    href: "#",
    ctaLabel: "Submit designs",
    available: false,
  },
];

const benefits = [
  {
    title: "Reach More Clients",
    description: "Connect with homeowners actively researching ADU options in your service area.",
  },
  {
    title: "Showcase Your Work",
    description: "Feature your pre-approved designs in our catalog to demonstrate expertise.",
  },
  {
    title: "Streamlined Process",
    description: "Help clients understand feasibility before engaging, reducing project friction.",
  },
];

export default function ForDesignersPage() {
  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="fade-in space-y-3">
        <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          For Professionals
        </span>
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Architect & Designer Resources
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          Access tools, resources, and project opportunities to grow your ADU design practice.
        </p>
      </header>

      <section className="fade-in">
        <InfoCallout tone="info">
          We&apos;re building a network of qualified architects and designers.{" "}
          <Link href="/contact" className="font-medium underline">
            Contact us to learn more
          </Link>
          .
        </InfoCallout>
      </section>

      <section className="fade-in space-y-[var(--space-stack)]">
        <h2 className="text-2xl font-semibold">Tools & Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {designerResources.map((resource) => (
            <Card
              key={resource.id}
              as="article"
              className={`flex flex-col justify-between ${!resource.available ? "opacity-70" : ""}`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-2)] text-2xl">
                    {resource.icon}
                  </div>
                  {!resource.available && (
                    <span className="rounded-full bg-[var(--surface-2)] px-2 py-1 text-xs font-medium text-[var(--muted)]">
                      Coming soon
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold">{resource.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {resource.description}
                </p>
              </div>
              <div className="mt-6">
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
        <h2 className="text-2xl font-semibold">Why Partner</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} as="article" interactive={false} className="text-center">
              <h3 className="text-sm font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="fade-in">
        <Card as="aside" className="bg-[var(--surface-2)] p-8 text-center">
          <h2 className="text-xl font-semibold">Ready to get started?</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link href="/explore">
              <Button size="md">Browse design catalog</Button>
            </Link>
            <Link href="/contact">
              <Button size="md" variant="secondary">
                Contact us
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
