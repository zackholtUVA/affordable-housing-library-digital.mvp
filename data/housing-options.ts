import type { HousingOption } from "@/lib/types";

export const housingOptions: HousingOption[] = [
  {
    id: "option-1",
    slug: "option-1",
    title: "Detached backyard cottage",
    shortSummary:
      "A small standalone home in the backyard that can support family housing or rental income.",
    category: "ADU or cottage",
    primaryUseCases: ["Family flexibility", "Rental income"],
    bestFor: [
      "Owners with enough lot depth for a separate structure",
      "Households that want clear separation between homes",
    ],
    keyTradeoffs: [
      "Higher upfront construction cost than interior conversions",
      "Often requires utility planning and exterior access review",
    ],
    policyConfidenceLabel: "often plausible",
    policySummary:
      "Many cities now allow detached accessory homes, but setbacks, height limits, and lot coverage still vary by neighborhood.",
    majorConsiderations: [
      "Confirm buildable area and setback constraints",
      "Budget for utility connections and site work",
    ],
    nextSteps: [
      "Request a zoning pre-check for detached accessory housing",
      "Collect rough cost ranges from two local design-build teams",
    ],
    comparisonAttributes: {
      complexity: "Moderate",
      privacy: "High privacy for both households",
      timeline: "Medium timeline",
      flexibility: "High design flexibility",
      incomePotential: "Strong",
      familyUsePotential: "Strong",
    },
    relatedOptionIds: ["option-2", "option-7"],
    imageAlt: "Detached backyard cottage behind an existing single-family home",
  },
  {
    id: "option-2",
    slug: "option-2",
    title: "Garage-to-studio conversion",
    shortSummary:
      "Convert an existing garage into a compact living unit with lower structural change.",
    category: "Interior conversion",
    primaryUseCases: ["Rental income", "Aging in place"],
    bestFor: [
      "Properties with an underused detached or attached garage",
      "Owners seeking a faster, lower-cost starting pathway",
    ],
    keyTradeoffs: [
      "Parking replacement rules may apply",
      "Layout can be constrained by existing structure size",
    ],
    policyConfidenceLabel: "depends on details",
    policySummary:
      "Garage conversions are increasingly supported, but code upgrades for egress, insulation, and parking can shape feasibility.",
    majorConsiderations: [
      "Check local parking replacement standards",
      "Verify ceiling height and insulation upgrades needed",
    ],
    nextSteps: [
      "Schedule a permit counter consult focused on garage conversions",
      "Get a quick feasibility walkthrough from a contractor",
    ],
    comparisonAttributes: {
      complexity: "Lower",
      privacy: "Medium privacy",
      timeline: "Shorter timeline",
      flexibility: "Moderate flexibility",
      incomePotential: "Moderate",
      familyUsePotential: "Moderate",
    },
    relatedOptionIds: ["option-1", "option-3"],
    imageAlt: "Converted garage studio with separate entry",
  },
  {
    id: "option-3",
    slug: "option-3",
    title: "Basement apartment conversion",
    shortSummary:
      "Create a lower-level apartment inside the existing home footprint to add a second unit.",
    category: "Interior conversion",
    primaryUseCases: ["Rental income", "Family flexibility"],
    bestFor: [
      "Homes with adequate ceiling height and possible exterior access",
      "Owners who want to avoid major exterior expansion",
    ],
    keyTradeoffs: [
      "Life-safety upgrades can be substantial",
      "Natural light and egress requirements can limit layouts",
    ],
    policyConfidenceLabel: "depends on details",
    policySummary:
      "Basement units can be feasible in many districts, but fire separation, exits, and ventilation standards often drive cost.",
    majorConsiderations: [
      "Confirm egress window and exit path requirements",
      "Assess moisture and waterproofing needs early",
    ],
    nextSteps: [
      "Order a code-focused feasibility review for the basement",
      "Draft a scope that includes fire, ventilation, and waterproofing",
    ],
    comparisonAttributes: {
      complexity: "Moderate",
      privacy: "Medium privacy",
      timeline: "Medium timeline",
      flexibility: "Moderate flexibility",
      incomePotential: "Strong",
      familyUsePotential: "Moderate",
    },
    relatedOptionIds: ["option-2", "option-4"],
    imageAlt: "Basement apartment entry with light well",
  },
  {
    id: "option-4",
    slug: "option-4",
    title: "Junior suite inside main home",
    shortSummary:
      "Carve out a compact suite with kitchenette and separate access while keeping one primary home address.",
    category: "Interior conversion",
    primaryUseCases: ["Family flexibility", "Aging in place"],
    bestFor: [
      "Households supporting an adult child or caregiver",
      "Owners wanting minimal site disruption",
    ],
    keyTradeoffs: [
      "Smaller living footprint can limit long-term tenant appeal",
      "Privacy separation is lower than detached options",
    ],
    policyConfidenceLabel: "often plausible",
    policySummary:
      "Junior suites are usually simpler than full second units, though utility, parking, and owner-occupancy rules may apply.",
    majorConsiderations: [
      "Review size caps and kitchen limitations in local code",
      "Plan sound separation for shared-wall comfort",
    ],
    nextSteps: [
      "Confirm whether the city classifies the suite as JADU or internal ADU",
      "Sketch one layout emphasizing a private entrance",
    ],
    comparisonAttributes: {
      complexity: "Lower",
      privacy: "Lower privacy",
      timeline: "Shorter timeline",
      flexibility: "Moderate flexibility",
      incomePotential: "Moderate",
      familyUsePotential: "Strong",
    },
    relatedOptionIds: ["option-3", "option-5"],
    imageAlt: "Small internal suite layout within existing house",
  },
  {
    id: "option-5",
    slug: "option-5",
    title: "Single-family to duplex conversion",
    shortSummary:
      "Reconfigure one house into two full dwellings to create long-term flexibility and potential income.",
    category: "Lot split / multi-unit",
    primaryUseCases: ["Rental income", "Family flexibility"],
    bestFor: [
      "Larger homes with multiple levels or broad floorplates",
      "Owners comfortable with higher permitting and construction effort",
    ],
    keyTradeoffs: [
      "Higher permitting complexity and inspection scope",
      "Construction can be disruptive while occupied",
    ],
    policyConfidenceLabel: "needs close review",
    policySummary:
      "Duplex conversion can be viable in many markets, but zoning overlays, life-safety upgrades, and utility separation often require close review.",
    majorConsiderations: [
      "Confirm density allowances and conversion rules",
      "Plan for utility metering and fire separation",
    ],
    nextSteps: [
      "Hold a pre-application meeting with planning staff",
      "Get concept-level plans from a licensed design professional",
    ],
    comparisonAttributes: {
      complexity: "Higher",
      privacy: "Medium privacy",
      timeline: "Longer timeline",
      flexibility: "High flexibility",
      incomePotential: "Strong",
      familyUsePotential: "Strong",
    },
    relatedOptionIds: ["option-6", "option-10"],
    imageAlt: "House conversion concept with two separate unit entries",
  },
  {
    id: "option-6",
    slug: "option-6",
    title: "Attached side-yard ADU",
    shortSummary:
      "Add a new unit connected to the main home, often along a side or rear wall.",
    category: "ADU or cottage",
    primaryUseCases: ["Aging in place", "Family flexibility"],
    bestFor: [
      "Lots with limited space for detached construction",
      "Owners wanting direct connection between households",
    ],
    keyTradeoffs: [
      "Design flexibility can be limited by existing structure",
      "Shared walls may reduce privacy",
    ],
    policyConfidenceLabel: "often plausible",
    policySummary:
      "Attached ADUs are commonly permitted, but floor-area limits and design standards can shape the final unit size.",
    majorConsiderations: [
      "Check maximum size and height allowances",
      "Coordinate structural tie-in with existing home framing",
    ],
    nextSteps: [
      "Run a quick massing sketch against local setback and height limits",
      "Get a structural consult for attachment points",
    ],
    comparisonAttributes: {
      complexity: "Moderate",
      privacy: "Medium privacy",
      timeline: "Medium timeline",
      flexibility: "Moderate flexibility",
      incomePotential: "Moderate",
      familyUsePotential: "Strong",
    },
    relatedOptionIds: ["option-1", "option-5"],
    imageAlt: "Attached side-yard ADU concept connected to existing house",
  },
  {
    id: "option-7",
    slug: "option-7",
    title: "Prefab backyard ADU",
    shortSummary:
      "Use a factory-built unit placed onsite to reduce custom design time while adding a separate home.",
    category: "ADU or cottage",
    primaryUseCases: ["Rental income", "Aging in place"],
    bestFor: [
      "Owners who value a predictable unit package",
      "Sites with clear crane/access logistics",
    ],
    keyTradeoffs: [
      "Delivery and placement logistics can be difficult",
      "Catalog options may limit customization",
    ],
    policyConfidenceLabel: "depends on details",
    policySummary:
      "Prefab ADUs can streamline decisions, but local foundation, transport, and utility requirements still control approvals.",
    majorConsiderations: [
      "Verify route access for module delivery",
      "Confirm whether local code accepts the selected prefab certification",
    ],
    nextSteps: [
      "Request site feasibility from two prefab vendors",
      "Validate foundation and utility requirements with local permit staff",
    ],
    comparisonAttributes: {
      complexity: "Moderate",
      privacy: "High privacy",
      timeline: "Medium timeline",
      flexibility: "Lower flexibility",
      incomePotential: "Strong",
      familyUsePotential: "Strong",
    },
    relatedOptionIds: ["option-1", "option-8"],
    imageAlt: "Prefab ADU being placed on a prepared backyard foundation",
  },
  {
    id: "option-8",
    slug: "option-8",
    title: "Small cottage court concept",
    shortSummary:
      "Plan multiple small homes around a shared open space, typically as a multi-unit redevelopment path.",
    category: "Lot split / multi-unit",
    primaryUseCases: ["Rental income", "Family flexibility"],
    bestFor: [
      "Larger lots with redevelopment potential",
      "Owners pursuing a longer-horizon project",
    ],
    keyTradeoffs: [
      "Entitlement risk and design review can be substantial",
      "Project management demands are significantly higher",
    ],
    policyConfidenceLabel: "needs close review",
    policySummary:
      "Cottage court pathways are promising in some jurisdictions, but they usually involve deeper entitlement work than ADU pathways.",
    majorConsiderations: [
      "Review minimum lot area, frontage, and shared access standards",
      "Evaluate financing strategy for phased development",
    ],
    nextSteps: [
      "Discuss conceptual yield with planning staff",
      "Engage a land-use consultant for an early feasibility memo",
    ],
    comparisonAttributes: {
      complexity: "Higher",
      privacy: "High privacy",
      timeline: "Longer timeline",
      flexibility: "High flexibility",
      incomePotential: "Strong",
      familyUsePotential: "Moderate",
    },
    relatedOptionIds: ["option-7", "option-10"],
    imageAlt: "Concept drawing of small cottage homes around a shared courtyard",
  },
  {
    id: "option-9",
    slug: "option-9",
    title: "Carriage house replacement unit",
    shortSummary:
      "Replace an aging accessory structure with a code-compliant small dwelling over or beside parking.",
    category: "ADU or cottage",
    primaryUseCases: ["Rental income", "Family flexibility"],
    bestFor: [
      "Lots with outdated detached structures",
      "Owners already planning major site upgrades",
    ],
    keyTradeoffs: [
      "Demolition and reconstruction costs can be high",
      "Site access during construction may be disruptive",
    ],
    policyConfidenceLabel: "depends on details",
    policySummary:
      "Replacement units can be feasible where ADUs are allowed, but historic overlays and parking configuration can affect approvals.",
    majorConsiderations: [
      "Check whether demolition triggers additional review",
      "Confirm parking and access layout requirements",
    ],
    nextSteps: [
      "Order a survey if structure location is uncertain",
      "Prepare a replacement concept with parking and circulation shown",
    ],
    comparisonAttributes: {
      complexity: "Moderate",
      privacy: "High privacy",
      timeline: "Medium timeline",
      flexibility: "Moderate flexibility",
      incomePotential: "Strong",
      familyUsePotential: "Moderate",
    },
    relatedOptionIds: ["option-1", "option-6"],
    imageAlt: "New carriage-style accessory dwelling replacing an older outbuilding",
  },
  {
    id: "option-10",
    slug: "option-10",
    title: "Urban lot split plus second home",
    shortSummary:
      "Divide one parcel into two legal lots, then add a second primary home with independent ownership potential.",
    category: "Lot split / multi-unit",
    primaryUseCases: ["Rental income", "Family flexibility"],
    bestFor: [
      "Owners considering a long-term property strategy",
      "Sites that can support separate access and services",
    ],
    keyTradeoffs: [
      "Survey, legal, and utility coordination adds complexity",
      "Approval timelines are typically longer than ADU pathways",
    ],
    policyConfidenceLabel: "needs close review",
    policySummary:
      "Lot splits are expanding in some states, but implementation details vary and can involve multiple agencies.",
    majorConsiderations: [
      "Confirm split eligibility and minimum lot dimensions",
      "Plan utility separation and legal parcel documentation",
    ],
    nextSteps: [
      "Consult a land-use professional on split feasibility",
      "Request preliminary utility service guidance from providers",
    ],
    comparisonAttributes: {
      complexity: "Higher",
      privacy: "High privacy",
      timeline: "Longer timeline",
      flexibility: "High flexibility",
      incomePotential: "Strong",
      familyUsePotential: "Strong",
    },
    relatedOptionIds: ["option-5", "option-8"],
    imageAlt: "Concept map showing one lot split into two buildable parcels",
  },
];

export const housingOptionsBySlug = new Map(
  housingOptions.map((option) => [option.slug, option]),
);

export function getHousingOptionBySlug(slug: string): HousingOption | undefined {
  return housingOptionsBySlug.get(slug);
}
