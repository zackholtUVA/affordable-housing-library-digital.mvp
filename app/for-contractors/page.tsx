import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";
import { InfoCallout } from "@/components/shared/info-callout";

const contractorResources = [
  {
    id: "project-listings",
    title: "ADU Project Listings",
    description:
      "Find homeowners seeking contractors for ADU projects.",
    href: "#",
    ctaLabel: "View projects",
    available: false,
  },
  {
    id: "specs-library",
    title: "Construction Specifications",
    description:
      "Detailed specs for various ADU types and construction requirements.",
    href: "#",
    ctaLabel: "View specs",
    available: false,
  },
  {
    id: "permit-guides",
    title: "Permit Process Guides",
    description:
      "Jurisdiction-specific guides and checklists for ADU construction.",
    href: "#",
    ctaLabel: "View guides",
    available: false,
  },
  {
    id: "prefab-partners",
    title: "Prefab ADU Partnerships",
    description:
      "Connect with prefab manufacturers for installation partnerships.",
    href: "#",
    ctaLabel: "View partners",
    available: false,
  },
];

const projectTypes = [
  {
    title: "Detached ADUs",
    description: "Ground-up construction of standalone backyard cottages and accessory homes.",
    demand: "High demand",
  },
  {
    title: "Garage Conversions",
    description: "Converting existing garages into livable spaces with proper permitting.",
    demand: "Very high demand",
  },
  {
    title: "Prefab Installation",
    description: "Site preparation and installation of factory-built ADU modules.",
    demand: "Growing demand",
  },
  {
    title: "Interior Conversions",
    description: "Basement and interior space conversions to create junior ADUs.",
    demand: "Moderate demand",
  },
];

export default function ForContractorsPage() {
  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="fade-in space-y-3">
        <span className="text-sm font-medium uppercase tracking-wider text-[var(--link)]">
          For Professionals
        </span>
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Contractor Resources
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          Connect with ADU projects and access resources to grow your construction business.
        </p>
      </header>

      <section className="fade-in">
        <InfoCallout tone="info">
          We&apos;re building a vetted contractor network.{" "}
          <Link href="/contact" className="font-medium underline">
            Contact us to apply
          </Link>
          .
        </InfoCallout>
      </section>

      <section className="fade-in space-y-[var(--space-stack)]">
        <h2 className="text-2xl font-semibold">Tools & Resources</h2>
        <div className="grid gap-[var(--space-stack)] md:grid-cols-2">
          {contractorResources.map((resource) => (
            <Card
              key={resource.id}
              as="article"
              className={`flex flex-col justify-between ${!resource.available ? "opacity-70" : ""}`}
            >
              <div className="space-y-[var(--space-stack-tight)]">
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <h3 className="min-w-0 break-words text-lg font-semibold">{resource.title}</h3>
                  <span className="shrink-0 rounded-full bg-[var(--surface-2)] px-2 py-1 text-xs font-medium text-[var(--muted)]">
                    Coming soon
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {resource.description}
                </p>
              </div>
              <div className="mt-[var(--space-stack-loose)]">
                <Button size="sm" variant="ghost" disabled>
                  {resource.ctaLabel}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="fade-in space-y-[var(--space-stack)]">
        <h2 className="text-2xl font-semibold">Market Opportunity</h2>
        <div className="grid gap-[var(--space-stack-tight)] md:grid-cols-2">
          {projectTypes.map((project, index) => (
            <Card key={index} as="article" interactive={false}>
              <div className="flex min-w-0 items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[var(--accent)] px-2 py-1 text-xs font-medium text-[var(--accent-foreground)]">
                  {project.demand}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="fade-in">
        <Card as="aside" className="bg-[var(--surface-2)] p-[max(1.4rem,var(--space-card-pad))] text-center">
          <h2 className="text-xl font-semibold">Get notified when we launch</h2>
          <div className="mt-[var(--space-stack-loose)] flex flex-wrap items-center justify-center gap-[var(--space-stack-tight)]">
            <Link href="/contact">
              <Button size="md">Contact us</Button>
            </Link>
            <Link href="/explore">
              <Button size="md" variant="secondary">
                Browse ADU types
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
