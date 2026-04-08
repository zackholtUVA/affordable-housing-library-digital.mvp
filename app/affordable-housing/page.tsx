import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/shared/button";
import { InfoCallout } from "@/components/shared/info-callout";

const housingResources = [
  {
    id: "adu-rentals",
    title: "ADU Rental Listings",
    description:
      "Browse available accessory dwelling units for rent in your area. ADUs often offer more affordable options than traditional apartments.",
    icon: "🏡",
    href: "/explore",
    ctaLabel: "Browse ADU rentals",
    available: true,
  },
  {
    id: "housing-programs",
    title: "Housing Assistance Programs",
    description:
      "Learn about local, state, and federal programs that can help make housing more affordable, including vouchers and subsidies.",
    icon: "📋",
    href: "#",
    ctaLabel: "View programs",
    available: false,
  },
  {
    id: "affordability-calculator",
    title: "Affordability Calculator",
    description:
      "Estimate what you can afford based on your income and expenses. Understand how ADU rentals compare to other options.",
    icon: "🧮",
    href: "#",
    ctaLabel: "Calculate affordability",
    available: false,
  },
  {
    id: "waitlist-info",
    title: "Waitlist Information",
    description:
      "Get notified when new affordable ADU rentals become available in your preferred neighborhoods.",
    icon: "📬",
    href: "#",
    ctaLabel: "Join waitlist",
    available: false,
  },
];

const faqs = [
  {
    question: "What is an ADU and why might it be more affordable?",
    answer:
      "An ADU (Accessory Dwelling Unit) is a smaller secondary home on the same lot as a primary residence. ADUs are often more affordable because they're smaller, have lower utility costs, and homeowners may offer competitive rents to find quality tenants.",
  },
  {
    question: "How do I search for ADU rentals?",
    answer:
      "Use our browse tool to filter housing options. Look for garage conversions, backyard cottages, basement apartments, and junior suites. Many homeowners list these separately from traditional apartment listings.",
  },
  {
    question: "What should I consider when renting an ADU?",
    answer:
      "Consider privacy (shared vs. separate entrance), parking availability, utility arrangements (separate or shared meters), and the relationship with the property owner. ADUs offer a unique living situation that some renters find preferable to large apartment complexes.",
  },
];

export default function AffordableHousingPage() {
  return (
    <PageShell className="space-y-[var(--space-section)]">
      <header className="fade-in space-y-4">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Finding Affordable Housing
        </h1>
        <p className="max-w-3xl text-[var(--muted)]">
          Discover housing options that fit your budget. ADUs and accessory dwellings often provide more affordable alternatives to traditional rentals while offering unique benefits like neighborhood integration and smaller environmental footprints.
        </p>
      </header>

      <section className="fade-in">
        <InfoCallout title="ADUs and Affordable Housing" tone="info">
          Accessory Dwelling Units (ADUs) are increasingly recognized as a key part of the affordable housing solution. They add housing supply in existing neighborhoods, often at lower price points than new apartment construction, while helping homeowners offset their mortgage costs.
        </InfoCallout>
      </section>

      <section className="fade-in space-y-[var(--space-stack)]">
        <SectionHeading
          eyebrow="Housing resources"
          title="Find your next home"
          description="Explore available resources to help you find affordable housing options in your area."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {housingResources.map((resource) => (
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
        <SectionHeading
          eyebrow="Common questions"
          title="Understanding ADU rentals"
          description="Get answers to frequently asked questions about renting accessory dwelling units."
        />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} as="article" interactive={false} className="space-y-3">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="fade-in">
        <Card as="aside" className="bg-[var(--surface-2)] p-8 text-center">
          <h2 className="text-xl font-semibold">Ready to explore ADU options?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)]">
            Browse available housing options and filter by type, price range, and features to find the right fit for your needs.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link href="/explore">
              <Button size="md">Browse all options</Button>
            </Link>
            <Link href="/get-started" className="text-sm font-medium text-[var(--accent)]">
              ← Back to pathways
            </Link>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
