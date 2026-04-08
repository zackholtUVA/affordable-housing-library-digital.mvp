import Link from "next/link";

import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";

const aduTypes = [
  {
    title: "Backyard Cottage",
    description: "Standalone small home in your backyard.",
  },
  {
    title: "Garage Conversion",
    description: "Transform existing garage—often most affordable.",
  },
  {
    title: "Basement Suite",
    description: "Convert basement with separate entrance.",
  },
  {
    title: "Attached Addition",
    description: "New unit connected to your home.",
  },
];

export function AduDefinitionSection() {
  return (
    <section
      id="what-is-adu"
      className="border-t border-[var(--border)] bg-[var(--surface)] px-[var(--space-page-x)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Main Definition */}
        <div className="space-y-4 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
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
        <div className="space-y-6">
          <h3 className="text-center text-lg font-semibold">Common Types</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aduTypes.map((type) => (
              <Card
                key={type.title}
                as="article"
                interactive={false}
                className="text-center"
              >
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
