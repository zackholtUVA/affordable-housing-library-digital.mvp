import type { HousingOption, PolicyConfidenceLabel } from "@/lib/types";
import { placeholder } from "@/lib/utils";

const confidenceCycle: PolicyConfidenceLabel[] = [
  "often plausible",
  "depends on details",
  "needs close review",
];

function createRelatedIds(index: number): string[] {
  const ids = [`option-${((index + 1) % 10) + 1}`, `option-${((index + 2) % 10) + 1}`];
  return ids;
}

function buildHousingOption(index: number): HousingOption {
  const number = index + 1;
  const optionId = `option-${number}`;
  const confidence = confidenceCycle[index % confidenceCycle.length];

  return {
    id: optionId,
    slug: optionId,
    title: placeholder(`option title ${number}`),
    shortSummary: placeholder(`1 sentence summary for option ${number}`),
    category: placeholder(`housing type filter ${((index % 3) + 1).toString()}`),
    primaryUseCases: [
      placeholder(`goal filter ${((index % 3) + 1).toString()}`),
      placeholder(`goal filter ${(((index + 1) % 3) + 1).toString()}`),
    ],
    bestFor: [
      placeholder(`good fit scenario ${number}.1`),
      placeholder(`good fit scenario ${number}.2`),
    ],
    keyTradeoffs: [
      placeholder(`tradeoff ${number}.1`),
      placeholder(`tradeoff ${number}.2`),
    ],
    policyConfidenceLabel: confidence,
    policySummary: placeholder(`local policy context for option ${number}`),
    majorConsiderations: [
      placeholder(`major consideration ${number}.1`),
      placeholder(`major consideration ${number}.2`),
    ],
    nextSteps: [
      placeholder(`next-step guidance ${number}.1`),
      placeholder(`next-step guidance ${number}.2`),
    ],
    comparisonAttributes: {
      complexity: placeholder(`complexity filter ${((index % 3) + 1).toString()}`),
      privacy: placeholder(`privacy profile ${number}`),
      timeline: placeholder(`timeline profile ${number}`),
      flexibility: placeholder(`flexibility profile ${number}`),
      incomePotential: placeholder(`income potential ${number}`),
      familyUsePotential: placeholder(`family use potential ${number}`),
    },
    relatedOptionIds: createRelatedIds(index),
    imageAlt: placeholder(`illustration alt text for option ${number}`),
  };
}

export const housingOptions: HousingOption[] = Array.from(
  { length: 10 },
  (_, index) => buildHousingOption(index),
);

export const housingOptionsBySlug = new Map(
  housingOptions.map((option) => [option.slug, option]),
);

export function getHousingOptionBySlug(slug: string): HousingOption | undefined {
  return housingOptionsBySlug.get(slug);
}

