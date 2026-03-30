# Affordable Housing Library MVP - Build To-Do

This checklist is derived from `implementation.md` and ordered by dependency so we can build from zero to demo-ready.

## Phase A: Align Scope Before Coding

- [ ] Add or link the PRD in this repo (`docs/prd.md` or README link).
- [ ] Decide compare limit as a single rule (`max compared options = 3` recommended).
- [ ] Clarify whether dark mode is required for MVP or optional.
- [ ] Standardize location of planning docs (`docs/implementation-plan.md` vs root `implementation.md`).
- [ ] Define placeholder policy as one canonical format and examples.
- [ ] Create `docs/open-questions.md` and copy unresolved product questions into it.

Exit criteria:
- PRD is available to the team.
- Ambiguous requirements are resolved in writing.

## Phase B: Project Bootstrap

- [ ] Initialize Next.js + TypeScript app.
- [ ] Add Tailwind CSS and base global styles.
- [ ] Add ESLint + Prettier and lint scripts.
- [ ] Add test tooling (Vitest + Testing Library, or Jest + RTL).
- [ ] Create base folder structure (`app`, `components`, `data`, `lib`, `docs`).
- [ ] Add base app layout, metadata, and route stubs.
- [ ] Add base design tokens (spacing, color, type scale) in CSS variables.

Exit criteria:
- App runs locally.
- Lint and tests run from scripts.
- Route stubs render without errors.

## Phase C: Data and Types Foundation

- [ ] Create `lib/types.ts` with `HousingOption`, `UserPathway`, `GlossaryTerm`, `NextStepResource`.
- [ ] Add seed data files in `data/` with placeholder-only values.
- [ ] Add strict placeholder helpers or constants to keep text format consistent.
- [ ] Add `lib/constants.ts` for nav labels, CTA labels, and disclaimers.
- [ ] Add lightweight compare state module (`lib/compare-store.ts`).

Exit criteria:
- All pages can import typed mock data.
- No non-placeholder domain content exists in seed files.

## Phase D: Shared UI Primitives

- [ ] Build reusable `Button`, `Card`, `Badge/Tag`, `InfoCallout`, `PlaceholderBlock`.
- [ ] Build section scaffolding components (`SectionHeading`, `PageShell`).
- [ ] Build empty state component pattern.
- [ ] Add accessible focus and keyboard styles.
- [ ] Add unit tests for core primitives.

Exit criteria:
- Primitives are reused by feature pages.
- Core components pass accessibility sanity checks (keyboard, labels, heading order).

## Phase E: Global App Shell

- [ ] Build `SiteHeader` with top-level nav.
- [ ] Build `SiteFooter` with utility links and disclaimer.
- [ ] Build mobile nav menu behavior.
- [ ] Add optional breadcrumb pattern.
- [ ] Add persistent CTA entry point to `next-steps`.

Exit criteria:
- Header/footer/mobile nav are consistent across all routes.

## Phase F: Feature Pages

### Homepage (`/`)
- [ ] Build hero section.
- [ ] Build intro and "how it works" sections.
- [ ] Build pathway cards using placeholder pathways.
- [ ] Build featured options preview.
- [ ] Add trust/limitations block and CTAs.

### Explore (`/explore`)
- [ ] Build search bar and filter panel.
- [ ] Build active filter chip bar.
- [ ] Build option card + grid components.
- [ ] Implement client-side search and filter behavior.
- [ ] Add compare selection action.
- [ ] Add empty state + reset action.

### Option Detail (`/options/[slug]`)
- [ ] Build detail template sections (summary, fit, tradeoffs, policy context, considerations).
- [ ] Map placeholder data to each section.
- [ ] Add related options block.
- [ ] Add CTA to compare + next steps.
- [ ] Add nonbinding informational disclaimer.

### Compare (`/compare`)
- [ ] Build sticky compare tray/drawer.
- [ ] Build comparison table with placeholder rows.
- [ ] Add remove action and empty state.
- [ ] Enforce compare limit rule and explain it in UI.

### Next Steps (`/next-steps`)
- [ ] Build action-oriented structure (questions, docs, resources).
- [ ] Build reusable resource cards and checklist UI.
- [ ] Add lightweight print/copy-friendly layout if low effort.

### Basics (`/basics`)
- [ ] Build glossary list and term card/drawer.
- [ ] Add alphabetical grouping or search.
- [ ] Link terms/context from relevant detail pages.

Exit criteria:
- All planned routes are implemented and navigable.
- Each page uses placeholder-safe content blocks.

## Phase G: Accessibility, Responsive, QA

- [ ] Verify keyboard navigation for nav, filters, compare flow, drawers.
- [ ] Verify heading hierarchy and landmark semantics on every route.
- [ ] Validate color contrast and focus visibility.
- [ ] Test layouts on mobile, tablet, and desktop breakpoints.
- [ ] Add/finish tests for key flows:
- [ ] Explore search/filter behavior.
- [ ] Compare add/remove/empty state.
- [ ] Option detail route rendering by slug.
- [ ] Run a placeholder-content audit for all content-rich fields.
- [ ] Run a scope audit to ensure out-of-scope features were not added.

Exit criteria:
- MVP is demo-ready and passes agreed acceptance criteria.

## Phase H: Handoff

- [ ] Create `docs/content-model.md` (data objects + insertion points for real content).
- [ ] Create `docs/component-inventory.md` (component ownership + reuse map).
- [ ] Finalize `docs/open-questions.md` with unresolved decisions.
- [ ] Add demo script notes and screenshot list.

Exit criteria:
- Another developer can continue implementation without re-discovering assumptions.

