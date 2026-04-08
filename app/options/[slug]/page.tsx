import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageShell } from "@/components/layout/page-shell";
import { InfoCallout } from "@/components/shared/info-callout";
import { FitSection } from "@/components/option/fit-section";
import { NextStepSection } from "@/components/option/next-step-section";
import { OptionActions } from "@/components/option/option-actions";
import { OptionHero } from "@/components/option/option-hero";
import { OptionSummary } from "@/components/option/option-summary";
import { PolicyContextSection } from "@/components/option/policy-context-section";
import { RelatedOptions } from "@/components/option/related-options";
import { ReviewSection } from "@/components/option/review-section";
import { TradeoffSection } from "@/components/option/tradeoff-section";
import { DETAIL_DISCLAIMER } from "@/lib/constants";
import { getHousingOptionBySlug, housingOptionsBySlug } from "@/data/housing-options";

export function generateStaticParams() {
  return Array.from(housingOptionsBySlug.keys()).map((slug) => ({ slug }));
}

export default async function OptionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const option = getHousingOptionBySlug(slug);

  if (!option) {
    notFound();
  }

  const relatedOptions = option.relatedOptionIds
    .map((id) => housingOptionsBySlug.get(id))
    .filter((candidate): candidate is NonNullable<typeof candidate> => Boolean(candidate));

  return (
    <PageShell className="space-y-[var(--space-section)]">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/explore", label: "Browse ADUs" },
          { label: option.title },
        ]}
      />

      <OptionHero option={option} />
      <section className="shape-angular-lg surface-3d border border-[var(--border)] bg-[var(--surface)] p-[max(1rem,var(--space-card-pad))]">
        <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Compare and browse
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
              Add this ADU to compare or step back to Browse ADUs for another option.
            </p>
          </div>
          <div className="flex min-w-0 flex-wrap items-start gap-3">
            <OptionActions optionId={option.id} className="max-w-xs" />
            <Link
              href="/explore"
              className="inline-flex min-h-[var(--control-min-h-sm)] items-center justify-center rounded-[var(--shape-radius-base)] border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-2 text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-3)]"
            >
              Browse ADUs
            </Link>
            <Link
              href="/compare"
              className="inline-flex min-h-[var(--control-min-h-sm)] items-center text-sm font-medium text-[var(--link)] hover:text-[var(--link-hover)]"
            >
              View compare
            </Link>
          </div>
        </div>
      </section>

      <div className="grid gap-[var(--space-stack)] lg:grid-cols-2">
        <OptionSummary option={option} />
        <FitSection option={option} />
        <TradeoffSection option={option} />
        <ReviewSection option={option} />
        <PolicyContextSection option={option} />
      </div>

      <NextStepSection option={option} />
      <RelatedOptions options={relatedOptions} />

      <InfoCallout title="Informational guidance only" tone="warning">
        {DETAIL_DISCLAIMER}
      </InfoCallout>
    </PageShell>
  );
}
