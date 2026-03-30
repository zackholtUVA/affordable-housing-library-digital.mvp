# Affordable Housing Library Digital MVP: Front-End Implementation Plan

Use Inter for font, use darm mode simple ux design

## 1. Document purpose

This document is an execution plan for a Cursor agent to build the front-end skeleton for the Affordable Housing Library Digital MVP.

The implementation should prioritize:

* a clear MVP front end
* reusable UI architecture
* placeholder content only for housing-, policy-, and locality-specific sections
* clean separation between interface structure and future real content
* strong support for future narrowing of scope without major refactors

This implementation plan is based on the PRD and should not exceed the PRD’s MVP boundaries. 

---

## 2. Product summary

Build a community-facing digital library front end that helps a nonexpert Charlottesville-area homeowner or small property owner:

* understand what the library is for
* browse a limited set of affordable / accessible housing options
* compare options at a high level
* see basic localized feasibility / policy context
* leave with a clear next step

This is an MVP prototype, not a production housing platform. It must not attempt to replace architects, planners, zoning professionals, or legal review. It must not include full property-specific analysis, full cost estimation, permit workflows, or heavy personalization. 

---

## 3. Build principles

### 3.1 MVP principles

* Build for the primary user first: nonexpert homeowner / small property owner.
* Keep the interface plain-language and low-jargon.
* Optimize for legibility, trust, and actionability.
* Favor reusable content templates over one-off pages.
* Keep all detailed housing, zoning, and resource content as placeholder data until scope is narrowed.
* Build the app so placeholder content can later be swapped with real content without changing the layout system.

### 3.2 Agent execution principles

* Do not invent final housing categories, policy interpretations, or localized recommendations beyond the PRD.
* Use clearly marked placeholder copy in all content-rich sections.
* Prefer a stable component system over premature feature complexity.
* Implement in phases with reviewable checkpoints.
* Keep file structure clean and obvious.
* Add comments only where future editors truly need context.
* Avoid overengineering backend infrastructure in the MVP.

### 3.3 Content placeholder rule

Every detailed content section must use one of these placeholder formats:

* `[PLACEHOLDER: short summary text goes here]`
* `[PLACEHOLDER: policy summary goes here]`
* `[PLACEHOLDER: next-step guidance goes here]`
* `[PLACEHOLDER: housing option data goes here]`
* `[PLACEHOLDER: comparison attributes go here]`

Do not replace placeholders with speculative final content.

---

## 4. Proposed technical scope

### 4.1 Front-end scope

Build only the front-end skeleton for:

* homepage
* browse / explore page
* housing option detail page
* comparison page / compare drawer
* next-step guidance page
* glossary / learn basics page
* basic app shell, routing, navigation, and responsive layout

### 4.2 Out-of-scope implementation items

Do not build the following in this phase:

* authentication
* user accounts
* saved favorites backed by a database
* address-specific property analysis
* cost calculators
* permit application workflows
* personalized recommendation engine
* LLM chatbot
* external API integrations
* CMS integration
* admin dashboard

These are either explicitly out of scope or reserved for later in the PRD. 

---

## 5. Suggested stack

If no stack is already chosen, use the following:

* **Framework**: Next.js
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **UI pattern**: component-based, utility-first
* **State**: local React state first; lightweight shared state only if needed for compare flow
* **Data source for MVP**: static local mock data
* **Icons**: lightweight icon library
* **Testing**: basic unit / component coverage for key flows
* **Accessibility**: semantic HTML and keyboard navigation from the start

Reasoning:

* The PRD is front-end and prototype oriented.
* Static mock data is the safest way to preserve placeholders while enabling real interaction.
* Typed UI and tests give the agent verifiable signals, which Cursor recommends for better agent performance.  ([Cursor][2])

---

## 6. Suggested repository structure

```text
app/
  layout.tsx
  page.tsx
  explore/page.tsx
  options/[slug]/page.tsx
  compare/page.tsx
  next-steps/page.tsx
  basics/page.tsx

components/
  layout/
    site-header.tsx
    site-footer.tsx
    page-shell.tsx
    breadcrumb.tsx
  home/
    hero-section.tsx
    pathway-grid.tsx
    intro-section.tsx
    featured-options.tsx
    how-it-works.tsx
  explore/
    filter-panel.tsx
    filter-chip-bar.tsx
    search-bar.tsx
    option-card.tsx
    option-grid.tsx
    empty-state.tsx
  option/
    option-hero.tsx
    option-summary.tsx
    fit-section.tsx
    tradeoff-section.tsx
    policy-context-section.tsx
    next-step-section.tsx
    related-options.tsx
  compare/
    compare-drawer.tsx
    compare-table.tsx
    compare-empty-state.tsx
  basics/
    glossary-list.tsx
    basics-card.tsx
    terminology-drawer.tsx
  shared/
    badge.tsx
    tag.tsx
    section-heading.tsx
    info-callout.tsx
    placeholder-block.tsx
    button.tsx
    card.tsx

data/
  housing-options.ts
  pathways.ts
  glossary.ts
  next-steps.ts
  filters.ts

lib/
  types.ts
  constants.ts
  utils.ts
  compare-store.ts

styles/
  globals.css

docs/
  implementation-plan.md
  content-model.md
  open-questions.md
```

---

## 7. Data modeling plan

The agent should create local static data models first. All content values should remain placeholders.

### 7.1 Housing option type

```ts
type HousingOption = {
  id: string
  slug: string
  title: string
  shortSummary: string
  category: string
  primaryUseCases: string[]
  bestFor: string[]
  keyTradeoffs: string[]
  policyConfidenceLabel: "often plausible" | "depends on details" | "needs close review"
  policySummary: string
  majorConsiderations: string[]
  nextSteps: string[]
  comparisonAttributes: {
    complexity: string
    privacy: string
    timeline: string
    flexibility: string
    incomePotential: string
    familyUsePotential: string
  }
  relatedOptionIds: string[]
  imageAlt: string
}
```

### 7.2 User pathway type

```ts
type UserPathway = {
  id: string
  title: string
  shortDescription: string
  linkedOptionIds: string[]
}
```

### 7.3 Glossary term type

```ts
type GlossaryTerm = {
  id: string
  term: string
  plainLanguageDefinition: string
  whyItMatters: string
}
```

### 7.4 Next-step resource type

```ts
type NextStepResource = {
  id: string
  title: string
  description: string
  actionType: string
  linkLabel?: string
  href?: string
}
```

### 7.5 Placeholder rule for all seed data

All initial seed data must use placeholder values such as:

```ts
title: "[PLACEHOLDER: option title]"
shortSummary: "[PLACEHOLDER: 1 sentence summary]"
policySummary: "[PLACEHOLDER: local policy context]"
```

---

## 8. Information architecture

### 8.1 Primary routes

* `/`: homepage
* `/explore`: browse and filter housing options
* `/options/[slug]`: individual housing option page
* `/compare`: side-by-side comparison
* `/next-steps`: action-oriented follow-up page
* `/basics`: glossary / basics / terminology support

### 8.2 Navigation model

Top-level navigation should include:

* Explore options
* Compare
* Learn the basics
* Next steps

Optional utility links:

* About this tool
* Limitations
* Sources
* Contact / partners

### 8.3 IA guardrail

Navigation labels must remain plain-language. Avoid technical or planning jargon unless required by the PRD.

---

## 9. Design system direction

### 9.1 Visual goals

* civic-tech feel
* clear and calm interface
* large readable headings
* strong visual hierarchy
* obvious calls to action
* limited decorative complexity
* trust-oriented rather than startup-flashy

### 9.2 Core reusable UI primitives

Build reusable versions of:

* buttons
* cards
* tags / badges
* callouts
* section wrappers
* empty states
* filter chips
* tables
* drawers / collapsible sections
* sticky compare tray

### 9.3 Placeholder-safe UI rule

Components must look complete even when filled with placeholder content.

Do not design components that depend on finalized housing content to make sense visually.

---

## 10. Phase-by-phase implementation plan

## Phase 0: Project bootstrap

### Objective

Set up the application foundation so future phases are easy to build and review.

### Tasks

* initialize project
* configure TypeScript
* configure Tailwind
* add global layout
* add base typography and spacing tokens
* set up route structure
* create shared UI primitives
* create placeholder data files
* create utility types
* add linting / formatting
* add minimal test setup if appropriate

### Deliverable

A running app with route stubs, design tokens, and placeholder data models.

---

## Phase 1: Global app shell and navigation

### Objective

Build the persistent application frame.

### Tasks

* create header with navigation
* create footer
* create responsive mobile navigation
* create generic page shell
* create breadcrumb pattern if needed
* define page width, spacing, and section rhythm
* add site-wide CTA pattern for “next steps”

### Deliverable

A consistent shell applied across all pages.

---

## Phase 2: Homepage

### Objective

Help first-time users immediately understand the tool and start exploring.

### Required sections

* hero
* product explanation
* “start with your situation” pathways
* featured housing options preview
* how the tool works
* trust / limitations note
* clear CTA to explore

### Placeholder content rules

Use placeholder pathway titles and descriptions only.
Do not finalize scenario labels yet.

### Tasks

* build hero section
* build situation / pathway cards
* build homepage introduction section
* build “featured options” preview cards
* build “how it works” section
* add CTA buttons to `/explore` and `/next-steps`

### Deliverable

A homepage that explains purpose and creates clear entry points.

---

## Phase 3: Explore page

### Objective

Allow users to browse, scan, and narrow a limited set of options without confusion.

### Required sections

* search bar
* filter panel
* active filter chips
* option grid
* compare actions
* empty state

### Filter categories

Use placeholder filter categories only until scope is narrowed. Example format:

* `[PLACEHOLDER: goal filter]`
* `[PLACEHOLDER: housing type filter]`
* `[PLACEHOLDER: complexity filter]`

### Tasks

* build filter panel UI
* implement local search over mock data
* implement simple filter logic
* build option cards
* add compare selection action
* create empty state and reset filters action

### Deliverable

A functional browse-and-filter interface using static placeholder data.

---

## Phase 4: Housing option detail page

### Objective

Create a reusable page template for individual housing option entries.

### Required sections

* page hero with title and short summary
* “what this is”
* “good fit if…”
* key tradeoffs
* major considerations
* localized context section
* related options
* next-step guidance
* disclaimer / limitations

### Placeholder content rules

Every subsection must use placeholder copy.

Do not write real policy guidance or real housing-specific advice.

### Tasks

* build detail page route
* create reusable content sections
* map placeholder data into sections
* build related options block
* build CTA to compare and next steps
* add clear disclaimer that content is informational and nonbinding

### Deliverable

A full reusable detail page template that can support real content later.

---

## Phase 5: Compare experience

### Objective

Allow users to compare selected options side by side.

### Required features

* compare selection from cards and detail pages
* compare drawer or sticky tray
* compare page / modal
* side-by-side table
* remove option action
* empty state when nothing selected

### Placeholder comparison rows

* `[PLACEHOLDER: complexity]`
* `[PLACEHOLDER: timeline]`
* `[PLACEHOLDER: privacy]`
* `[PLACEHOLDER: feasibility / policy sensitivity]`
* `[PLACEHOLDER: family use potential]`
* `[PLACEHOLDER: income potential]`

### Tasks

* create lightweight compare state
* build compare tray
* build compare page layout
* build reusable comparison table
* ensure rows degrade gracefully with placeholder data

### Deliverable

A working compare experience with up to 2 to 3 placeholder options.

---

## Phase 6: Next-step guidance page

### Objective

End the browsing journey with action-oriented guidance rather than passive exploration.

### Required sections

* summary intro
* common next-step categories
* suggested questions to answer
* suggested documents / information to gather
* suggested people / offices / resources to consult
* disclaimer about professional review

### Placeholder content rules

All specific action items must be placeholders until the team narrows scope and validates resource pathways.

### Tasks

* build page structure
* build reusable resource cards
* build action checklist UI
* create printable / copyable layout if easy
* link to this page from explore, compare, and detail pages

### Deliverable

A next-step page that feels actionable without pretending to give final advice.

---

## Phase 7: Basics / glossary page

### Objective

Reduce intimidation and jargon for nonexpert users.

### Required sections

* plain-language glossary list
* “why this matters” explanations
* optional grouped categories
* expandable terminology definitions

### Placeholder content rules

All definitions remain placeholder summaries until the team finalizes terminology scope.

### Tasks

* build glossary list
* add search or alphabetical grouping if lightweight
* build terminology drawer / accordion
* ensure easy navigation from detail pages

### Deliverable

A basic educational support page that complements browsing.

---

## Phase 8: Accessibility, responsiveness, and polish

### Objective

Make the MVP clean, usable, and presentable for the course showcase.

### Tasks

* ensure keyboard navigation
* ensure semantic heading order
* ensure sufficient contrast
* test mobile, tablet, desktop layouts
* refine spacing consistency
* improve empty states
* polish hover, focus, and active states
* ensure compare flow is understandable on small screens

### Deliverable

A visually coherent and accessible MVP front end.

---

## Phase 9: QA and handoff

### Objective

Prepare the project for review, demo, and future scope narrowing.

### Tasks

* clean dead code
* verify placeholder coverage
* verify no speculative real content slipped in
* verify routing and navigation
* verify compare flow
* verify page-level disclaimers
* document file structure
* document where future real content should be inserted
* add screenshot set or demo notes if useful

### Deliverable

A stable handoff-ready MVP front end.

---

## 11. Placeholder content specification

The agent must scaffold placeholder content for these areas only:

### Homepage placeholders

* site headline
* site subheadline
* pathway cards
* featured option labels
* how-it-works copy

### Explore placeholders

* filter labels
* card summaries
* badge labels
* empty state message

### Detail page placeholders

* summary paragraph
* fit criteria
* tradeoffs
* considerations
* local context summary
* next-step prompts

### Compare placeholders

* row names
* comparison values
* explanatory notes

### Next-step page placeholders

* action checklist items
* document gathering prompts
* contact resource labels

### Glossary placeholders

* terms
* definitions
* why-it-matters notes

---

## 12. Acceptance criteria for the front-end skeleton

The implementation is complete when:

* the app has all planned routes
* the homepage clearly communicates purpose
* users can browse a limited placeholder option set
* users can filter or search options
* users can open a detail page for an option
* users can compare selected options
* users can reach a clear next-step page
* educational / glossary support exists
* all detailed domain-specific content remains placeholder-only
* no out-of-scope features were built
* the interface is responsive and demo-ready

These acceptance criteria reflect the PRD’s must-have features and showcase goals. 

---

## 13. Known open questions

The agent should preserve these as unresolved placeholders, not solve them unilaterally.

* Which exact housing option categories should be included in MVP?
* Which user pathways should be shown on the homepage?
* How much Charlottesville-specific policy detail is appropriate?
* What comparison attributes matter most?
* What next-step resources are truly useful for the primary user?
* What glossary terms are essential vs optional?
* What level of visual detail is best for the showcase?

Create `docs/open-questions.md` if needed and record unresolved items there.

---

## 14. Future-ready extension points

Build with these future additions in mind, but do not implement them now:

* real content CMS
* location-specific policy layers
* saved compare state
* favorites
* user accounts
* address-specific flows
* cost estimation
* chatbot assistance
* external resource integrations

---

## 15. Final instruction block for the Cursor agent

When executing this plan:

1. Build the front-end skeleton only.
2. Keep all detailed product content as placeholder text.
3. Do not invent finalized housing, policy, or legal guidance.
4. Follow the PRD’s scope and non-goals.
5. Favor reusable components and clean file organization.
6. Implement in small, reviewable phases.
7. Leave clear seams for later insertion of real content.
8. Stop short of backend complexity unless explicitly requested.

---

## 16. Optional companion files to generate

The agent may also create:

* `docs/content-model.md`
* `docs/open-questions.md`
* `docs/component-inventory.md`

These should also use placeholders where scope-specific detail would otherwise be required.

