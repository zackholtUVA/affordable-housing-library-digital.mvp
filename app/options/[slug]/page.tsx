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
    <PageShell className="space-y-6">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/explore", label: "Explore options" },
          { label: option.title },
        ]}
      />

      <OptionHero option={option} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <OptionActions optionId={option.id} />
        <Link href="/compare" className="text-sm font-medium text-[var(--accent)]">
          [PLACEHOLDER: view compare page]
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <OptionSummary option={option} />
        <FitSection option={option} />
        <TradeoffSection option={option} />
        <PolicyContextSection option={option} />
      </div>

      <NextStepSection option={option} />
      <RelatedOptions options={relatedOptions} />

      <InfoCallout title="[PLACEHOLDER: informational disclaimer]" tone="warning">
        {DETAIL_DISCLAIMER}
      </InfoCallout>
    </PageShell>
  );
}

