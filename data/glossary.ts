import type { GlossaryTerm } from "@/lib/types";
import { placeholder } from "@/lib/utils";

export const glossaryTerms: GlossaryTerm[] = Array.from({ length: 20 }, (_, index) => {
  const number = index + 1;
  return {
    id: `term-${number}`,
    term: placeholder(`term ${number}`),
    plainLanguageDefinition: placeholder(`plain-language definition ${number}`),
    whyItMatters: placeholder(`why this matters note ${number}`),
  };
});

