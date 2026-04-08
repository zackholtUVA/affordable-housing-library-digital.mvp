import Link from "next/link";

import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";

const aduTypes = [
  {
    title: "Backyard Cottage",
    description: "A standalone small home in your backyard, offering maximum privacy and flexibility.",
    icon: "🏡",
  },
  {
    title: "Garage Conversion",
    description: "Transform an existing garage into a livable space—often the most affordable option.",
    icon: "🚗",
  },
  {
    title: "Basement Suite",
    description: "Convert unused basement space into a separate apartment with its own entrance.",
    icon: "🏠",
  },
  {
    title: "Attached Addition",
    description: "Add a new unit connected to your home, ideal for family or aging-in-place needs.",
    icon: "🔗",
  },
];

const benefits = [
  {
    title: "Generate rental income",
    description: "Offset your mortgage or create a new income stream.",
  },
  {
    title: "House family members",
    description: "Keep aging parents or adult children close while maintaining privacy.",
  },
  {
    title: "Increase property value",
    description: "ADUs can significantly boost your home's market value.",
  },
  {
    title: "Address housing needs",
    description: "Help your community by adding quality housing supply.",
  },
];

export function AduDefinitionSection() {
  return (
    <section
      id="what-is-adu"
      className="border-t border-[var(--border)] bg-[var(--surface)] px-[var(--space-page-x)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Main Definition */}
        <div className="space-y-6 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
            Understanding ADUs
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            What is an ADU?
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            An <strong className="text-[var(--text)]">Accessory Dwelling Unit (ADU)</strong> is a
            secondary housing unit on a single-family lot. Also known as granny flats, in-law
            suites, or backyard cottages, ADUs provide flexible living space that can be used for
            rental income, family housing, or home offices.
          </p>
        </div>

        {/* ADU Types */}
        <div className="space-y-8">
          <h3 className="text-center text-xl font-semibold">Common ADU Types</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aduTypes.map((type) => (
              <Card
                key={type.title}
                as="article"
                interactive={false}
                className="text-center"
              >
                <div className="mb-4 text-4xl">{type.icon}</div>
                <h4 className="font-semibold">{type.title}</h4>
                <p className="mt-2 text-sm text-[var(--muted)]">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-8">
          <h3 className="text-center text-xl font-semibold">Why Build an ADU?</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <h4 className="font-semibold">{benefit.title}</h4>
                <p className="mt-1 text-sm text-[var(--muted)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 pt-4 text-center">
          <p className="text-[var(--muted)]">
            Ready to explore what&apos;s possible on your property?
          </p>
          <Link href="/get-started">
            <Button size="md">Find your path forward</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
