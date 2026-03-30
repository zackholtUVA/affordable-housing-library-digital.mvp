import Link from "next/link";

import { CTA_LABELS, HOME_HEADLINE, HOME_SUBHEADLINE } from "@/lib/constants";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";

export function HeroSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
      <Card className="p-8 md:p-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Affordable Housing Library MVP
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {HOME_HEADLINE}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[var(--muted)] md:text-lg">
          {HOME_SUBHEADLINE}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/explore">
            <Button>{CTA_LABELS.explore}</Button>
          </Link>
          <Link href="/next-steps">
            <Button variant="secondary">{CTA_LABELS.nextSteps}</Button>
          </Link>
        </div>
      </Card>
      <Card className="h-full bg-[color-mix(in_oklab,var(--accent)_12%,var(--surface))]">
        <h2 className="text-lg font-semibold">[PLACEHOLDER: trust and limitations note]</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          [PLACEHOLDER: explain informational purpose and nonbinding guidance]
        </p>
      </Card>
    </section>
  );
}

