import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/shared/button";
import { InfoCallout } from "@/components/shared/info-callout";

const contractorResources = [
  {
    id: "project-listings",
    title: "ADU Project Listings",
    description:
      "Find homeowners actively seeking contractors for their ADU projects. Filter by project type, location, and timeline.",
    icon: "📋",
    href: "#",
    ctaLabel: "View projects",
    available: false,
  },
  {
    id: "specs-library",
    title: "Construction Specifications",
    description:
      "Access detailed construction specifications for various ADU types, including foundation requirements, utility connections, and finishing details.",
    icon: "📐",
    href: "#",
    ctaLabel: "View specifications",
    available: false,
  },
  {
    id: "permit-guides",
    title: "Permit Process Guides",
    description:
      "Navigate local permitting requirements with jurisdiction-specific guides and checklists for ADU construction.",
    icon: "📝",
    href: "#",
    ctaLabel: "View guides",
    available: false,
  },
  {
    id: "prefab-partners",
    title: "Prefab ADU Partnerships",
    description:
      "Connect with prefab ADU manufacturers looking for installation partners. Get certified to install popular prefab models.",
    icon: "🏗️",
    href: "#",
    ctaLabel: "View partnerships",
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
      <header className="fade-in space-y-4">
        <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          For Professionals
        </span>
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Contractor Resources
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          Connect with ADU projects in your area and access the resources you need to deliver quality work. From project leads to construction specifications, we&apos;re building tools to help you grow your ADU business.
        </p>
      </header>

      <section className="fade-in">
        <InfoCallout title="Join our contractor network" tone="info">
          We&apos;re building a vetted network of contractors experienced in ADU construction. Interested in receiving project referrals?{" "}
          <Link href="/contact" className="font-medium underline">
            Contact us to apply
          </Link>
          .
        </InfoCallout>
      </section>

      <section className="fade-in space-y-[var(--space-stack)]">
        <SectionHeading
          eyebrow="Tools & resources"
          title="Build your ADU business"
          description="Access resources designed specifically for contractors working on accessory dwelling units."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {contractorResources.map((resource) => (
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
                  <span className="rounded-full bg-[var(--surface-2)] px-2 py-1 text-xs font-medium text-[var(--muted)]">
                    Coming soon
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{resource.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {resource.description}
                </p>
              </div>
              <div className="mt-6">
                <Button size="sm" variant="ghost" disabled>
                  {resource.ctaLabel}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="fade-in space-y-[var(--space-stack)]">
        <SectionHeading
          eyebrow="Market opportunity"
          title="ADU project types in demand"
          description="Understand the most common ADU project types homeowners are pursuing."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projectTypes.map((project, index) => (
            <Card key={index} as="article" interactive={false}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
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
        <Card as="aside" className="bg-[var(--surface-2)] p-8 text-center">
          <h2 className="text-xl font-semibold">Want to be notified when we launch?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)]">
            We&apos;re actively building contractor tools and project matching features. Contact us to get early access and help shape what we build.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
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
