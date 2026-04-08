import Link from "next/link";
import { Building2, DoorOpen, House, HousePlus, Sparkles } from "lucide-react";

import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";

const aduTypes = [
  {
    title: "Backyard Cottage",
    description: "Standalone small home in your backyard.",
    icon: House,
  },
  {
    title: "Garage Conversion",
    description: "Transform existing garage—often most affordable.",
    icon: DoorOpen,
  },
  {
    title: "Basement Suite",
    description: "Convert basement with separate entrance.",
    icon: Building2,
  },
  {
    title: "Attached Addition",
    description: "New unit connected to your home.",
    icon: HousePlus,
  },
];

export function AduDefinitionSection() {
  return (
    <section
      id="what-is-adu"
      className="mt-[var(--space-section)] border-t border-[var(--border)] bg-[var(--surface)] px-[var(--space-page-x)] py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-6xl space-y-[var(--space-section)]">
        {/* Main Definition */}
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
            <Sparkles size={14} aria-hidden="true" />
            Understanding ADUs
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            What is an ADU?
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            An <strong className="text-[var(--text)]">Accessory Dwelling Unit (ADU)</strong> is a
            secondary housing unit on a single-family lot. Also known as granny flats, in-law
            suites, or backyard cottages, ADUs provide flexible living space for rental income, family housing, or home offices.
          </p>
        </div>

        {/* ADU Types */}
        <div className="space-y-[var(--space-stack)]">
          <h3 className="text-center text-lg font-semibold">Common Types</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aduTypes.map((type) => (
              <Card
                key={type.title}
                as="article"
                interactive={false}
                className="flex h-full flex-col gap-3 text-left"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--accent)]">
                  <type.icon size={20} aria-hidden="true" />
                </div>
                <h4 className="text-sm font-semibold">{type.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 pt-2 text-center">
          <Link href="/get-started">
            <Button size="md">Explore your options</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
