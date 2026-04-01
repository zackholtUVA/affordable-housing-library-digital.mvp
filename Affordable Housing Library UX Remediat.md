# Affordable Housing Library UX Remediation Plan

## Document status

This document is the implementation plan for fixing the major UX, content, and trust issues identified in the latest professional audit of the Affordable Housing Library prototype.

This plan is intended for autonomous coding agents and human reviewers.

Primary goal: transform the current scaffold from a developer-looking prototype into a polished, credible, plain-language housing resource for a nontechnical real estate audience.

---

## 1. Context

The current product has a sound structural concept:

- Explore options
- Compare options
- Learn basics
- Identify next steps

However, the current experience still reads like a technical scaffold rather than a trustworthy public-facing tool.

The most urgent problems are:

- developer-facing language in the hero and navigation
- persistent power-user / keyboard-shortcut UI
- dead-end flows, especially on Compare
- generic, context-free Next Steps
- dark, tool-like visual language that does not fit the audience
- placeholder-heavy content that prevents user orientation
- missing trust infrastructure such as working footer links, definitions, and explanation of badges

This plan solves those issues in a phased, comprehensive way.

---

## 2. Product goals for the remediation

After these fixes, the product should feel:

- professional
- calm
- trustworthy
- nontechnical
- well-guided
- polished enough for a design review or course showcase

Users should be able to:

- understand what the tool is within a few seconds
- start browsing without confusion
- understand what comparison is for and how to use it
- interpret plausibility badges correctly
- see how Next Steps relate to their browsing
- trust the product enough to continue exploring

---

## 3. Non-goals

This remediation plan does **not** include:

- full backend personalization
- production authentication
- full CMS integration
- property-specific legal analysis
- cost calculators
- permit workflow tooling
- advanced recommendation engines
- chatbot features

The goal is to fix UX, information design, trust, and interaction quality within the current MVP scope.

---

## 4. Implementation rules for agents

### 4.1 General rules

- Do not introduce developer-oriented UI patterns unless explicitly approved.
- Do not invent technical jargon in user-facing copy.
- Prioritize plain language over cleverness.
- Remove friction before adding features.
- Favor conventional, trustworthy interaction patterns over startup-style novelty.
- Keep all new copy concise and audience-appropriate.
- When uncertain, optimize for a homeowner or community-facing user, not a power user.

### 4.2 Content rules

- Replace the highest-risk placeholder sections with realistic, representative sample copy.
- If final domain copy is still unknown, use **structured temporary copy** that reads like real user-facing content rather than bracketed placeholders.
- Do not leave `[PLACEHOLDER]` strings in any high-visibility area after this work.
- Footer trust pages may use temporary short-form content, but must function.

### 4.3 UX rules

- Every primary page must have a useful empty state.
- Every empty state must explain:
  - what this page is for
  - why the user is seeing the empty state
  - what to do next
- Every page should contain at least one clear next action.
- Avoid duplicated information blocks unless there is a strong purpose.

---

## 5. Audit issue map

This section maps the audit findings to implementation work.

| Audit issue | Priority | Solution area |
|---|---:|---|
| Developer-jargon subtitle in hero | High | Homepage content + positioning |
| Prototype / session-only disclaimer in hero | High | Homepage trust layer |
| Persistent keyboard shortcut hint bar | High | Global navigation cleanup |
| Compare page dead end | High | Compare IA, empty state, demo state |
| Quick Actions + CMD/CTRL K in nav | High | Global navigation cleanup |
| Homepage entirely placeholder | High | Homepage content population |
| Plausibility badges undefined | High | Badge system explanation |
| Next Steps not tied to explored options | High | Session-aware Next Steps |
| Footer links dead | High | Trust / utility pages |
| Light mode in main nav | Medium | Header simplification |
| Detail page summary repeated | Medium | Detail page information hierarchy |
| Compare CTA label awkward | Medium | Compare interaction redesign |
| Basics page glossary duplication | Medium | Basics IA cleanup |
| Lone "T" heading in glossary | Medium | Basics rendering cleanup |
| Dismissed hint bar reappears | Low | State persistence or full removal |

---

## 6. Workstream overview

Implementation should be split into these workstreams:

1. Global shell and trust cleanup
2. Homepage clarity and credibility rewrite
3. Explore flow and comparison UX improvement
4. Option detail page hierarchy cleanup
5. Next Steps contextualization
6. Basics / glossary restructuring
7. Visual polish and audience-fit pass
8. Trust pages, footer, and utility infrastructure
9. QA, accessibility, and regression testing

---

# 7. Workstream 1: Global shell and trust cleanup

## Goal

Remove the most obvious developer-tool signals and reframe the product as a public-facing housing resource.

## Problems addressed

- keyboard shortcut hint bar
- command palette language in nav
- dark utility-heavy chrome
- utility actions competing with primary navigation
- dismiss behavior polish
- misplaced prototype/data caveats

## Required changes

### 7.1 Remove persistent keyboard shortcut hint bar
- Remove the persistent hint banner from all pages.
- Do not show keyboard shortcut instructions in page chrome.
- If keyboard shortcuts remain in the product, they should only appear inside a dedicated help modal or advanced actions panel.

### 7.2 Rework top navigation
Current top nav likely includes too many utility elements.

Update top nav to include only user-meaningful primary destinations:

- Explore options
- Compare
- Learn the basics
- Next steps

Utility actions should move elsewhere:

- theme toggle: small icon button, far right, not a labeled nav item
- quick actions: remove from primary nav for now, or hide behind an overflow menu

### 7.3 Remove technical labels from visible navigation
- Remove visible `CMD/CTRL K`
- Remove route-jump style language
- Remove power-user signaling from primary chrome

### 7.4 Remove prototype disclaimers from hero area
- Remove `session-only prototype`
- Remove `no personal data stored` from hero
- If needed, add a quiet footer note such as:
  - `Free to use. No account required.`
  - `For planning support only. Not legal or professional advice.`

### 7.5 Simplify header visual hierarchy
- Brand left
- Primary nav center or right
- Small utility icons far right
- No stacked bars under the nav
- Avoid heavy framed buttons unless they are true CTAs

## Acceptance criteria
- No persistent shortcut bar appears on any page.
- The top nav contains only primary user destinations plus minimal utility controls.
- No visible keyboard shortcut text appears in the main navigation.
- No hero-area text refers to prototype/session behavior.
- Header feels lighter, calmer, and more audience-appropriate.

---

# 8. Workstream 2: Homepage clarity and credibility rewrite

## Goal

Make the homepage immediately understandable, credible, and actionable for a nontechnical housing audience.

## Problems addressed

- poor first impression
- developer jargon in hero
- lack of orientation
- oversized headline pushing useful information down
- floating or disconnected CTA
- placeholder-heavy sections

## Required changes

### 8.1 Rewrite hero messaging
Replace all technical/internal language with plain-language positioning.

### Hero content structure
- eyebrow or small kicker: optional, plain language only
- headline: outcome-focused
- supporting paragraph: what the product does and who it is for
- primary CTA: explore options
- secondary CTA: how it works or learn basics

### Example direction
Do **not** use this exact copy without review, but use it as tone guidance:

- Headline: `Explore affordable housing options with more confidence`
- Subcopy: `Browse example housing paths, compare tradeoffs, and identify practical next steps in one place.`
- CTA 1: `Explore options`
- CTA 2: `Learn how this works`

### 8.2 Reduce hero headline dominance
- Reduce headline size so supporting copy and primary CTA appear above the fold on common laptop viewports.
- Ensure users can see:
  - headline
  - one supporting paragraph
  - primary CTA
without scrolling.

### 8.3 Re-anchor primary CTA
- Place the primary CTA directly beneath the supporting text.
- Do not float it disconnected in the corner.
- Secondary CTA can sit beside it.

### 8.4 Populate homepage orientation sections with representative sample content
At minimum, replace placeholders in:

- What this tool is for
- Start with your situation
- Featured options
- How it works

This content does not need to be final, but must read like real user-facing content.

### 8.5 Build stronger pathway cards
The “Start with your situation” concept is good and should be preserved.

Pathways should feel scenario-based, not technical.

Structure:
- short user scenario title
- 1-sentence explanation
- clear action prompt

Example structure:
- `I want space for family`
- `See housing options that may support multigenerational living or nearby independent space.`
- `View options`

### 8.6 Improve “Featured options” trust
Each featured option card should include:

- real sample title
- one-sentence summary
- plausibility badge
- one short “best for” cue
- compare or learn more action

### 8.7 Rewrite “How it works”
Use a simple 3-step structure:
1. Explore options
2. Compare tradeoffs
3. Take your next step

Each step should include 1 concise sentence.

## Acceptance criteria
- Homepage no longer includes developer jargon.
- Users can understand purpose and next action within 5 seconds.
- Above-the-fold content includes a meaningful CTA.
- At least the highest-visibility homepage sections use real temporary copy rather than placeholder brackets.
- Pathway cards feel scenario-based and approachable.

---

# 9. Workstream 3: Explore flow and comparison UX improvement

## Goal

Make exploration intuitive and comparison understandable before the user has selected anything.

## Problems addressed

- Compare page dead end
- awkward compare button label
- unclear compare workflow
- no demo or preview of comparison value
- undefined badge system

## Required changes

### 9.1 Redesign compare interaction model
Change button label from:
- `Add to compare (3 max)`

To:
- `Add to compare`

Move capacity awareness elsewhere:
- sticky compare tray
- compare counter near page top
- compare page intro

### 9.2 Add compare selection feedback
When users add an option:
- button should change state
- card should visually reflect selection
- global compare tray should update count

Suggested patterns:
- `Added`
- `Remove from compare`
- compare tray showing `2 of 3 selected`

### 9.3 Add persistent compare tray
When at least one option is selected, show a sticky tray or footer bar with:
- selected option count
- selected option names or chips
- CTA to compare
- clear remove actions

### 9.4 Fix Compare page empty state
The empty state must no longer be a dead end.

Required content:
- short explanation of what comparison is for
- how to add options
- max number supported
- CTA back to Explore
- optional “Try sample comparison” button

### 9.5 Add demo comparison mode
If no options are selected, allow users to preview the value of Compare.

Possible approaches:
- pre-populate with 2 or 3 representative sample options
- or provide a “Load sample comparison” button

This is important because direct-nav users need to understand what Compare is.

### 9.6 Improve comparison page structure
Ensure the compare page contains:
- page intro
- selected items summary
- side-by-side table
- clear labels
- explanatory legend if necessary
- CTA toward Next Steps

### 9.7 Define plausibility badge system
Each badge must have a visible explanation.

Required options:
- inline legend near card grid
- tooltip on hover/focus
- compact help popover
- detail page explanation block

At minimum define:
- Often plausible
- Depends on details
- Needs close review

Definitions must be simple and non-legalistic.

### 9.8 Improve Explore page guidance
Add a short helper sentence near filters or page intro:
- what users can do here
- how comparison works
- what the badges mean

## Acceptance criteria
- Users can understand how comparison works without prior instruction.
- Compare page empty state is useful and instructional.
- Users receive immediate feedback when they add/remove options.
- Compare capacity is shown outside the button label.
- Badge meanings are explicitly defined somewhere obvious.

---

# 10. Workstream 4: Option detail page hierarchy cleanup

## Goal

Make detail pages feel information-rich, non-repetitive, and easier to scan.

## Problems addressed

- repeated summary copy
- lack of density
- possible confusion around badge meaning
- opportunity to improve next-step transitions

## Required changes

### 10.1 Remove summary duplication
Show the short summary only once near the page title.

Then structure the rest of the page as:
- What this is
- Good fit if
- Key tradeoffs
- What to review
- Local context
- Next steps
- Related options

Do not repeat the same one-line summary inside multiple cards.

### 10.2 Strengthen page intro block
Above the main content, show:
- title
- summary
- plausibility badge
- 1-2 key metadata cues if available

### 10.3 Improve section ordering
Recommended order:
1. What this is
2. Good fit if
3. Key tradeoffs
4. What to review
5. Local context
6. Next steps
7. Related options

This moves from understanding to evaluation to action.

### 10.4 Connect detail page to compare flow
Each detail page should offer:
- Add to compare
- View compare tray if active
- Next-step CTA

### 10.5 Add “why this badge appears” helper
On detail page, place the badge explanation closer to the content than on cards if possible.

## Acceptance criteria
- Summary only appears once in the intro area.
- Section order supports comprehension and decision-making.
- Detail page supports compare and next-step flows.
- Badge meaning is understandable from the detail page.

---

# 11. Workstream 5: Next Steps contextualization

## Goal

Turn Next Steps from a generic checklist into a context-aware planning page.

## Problems addressed

- generic, context-free guidance
- no tie to explored or compared options
- low perceived usefulness

## Required changes

### 11.1 Add session-aware context at page top
At the top of Next Steps, show what the user has explored or selected.

Examples:
- `Based on the options you explored`
- `You compared these options`
- selected option chips
- fallback message if none selected

### 11.2 Create two states for Next Steps
#### State A: contextualized
If user explored or selected options:
- show related options at top
- tailor questions/checklist language where possible
- highlight that these next steps are based on current exploration

#### State B: general guidance
If user has not explored enough:
- explain that the checklist is general
- prompt user to explore or compare for more tailored guidance

### 11.3 Tailor checklist buckets
Retain useful buckets, but make them feel more purposeful:

- Questions to answer
- Information to gather
- Actions to consider next

### 11.4 Add relevance messaging
Near each checklist or section, indicate whether it is:
- general guidance
- related to selected options
- worth confirming with local experts

### 11.5 Add links back into product flow
From Next Steps, users should be able to:
- return to Explore
- return to Compare
- review selected options again

## Acceptance criteria
- Next Steps page clearly indicates whether guidance is contextual or general.
- If compare/explore session data exists, the page surfaces it.
- The page no longer feels detached from the user journey.
- Users have an obvious next action.

---

# 12. Workstream 6: Basics / glossary restructuring

## Goal

Make the Basics page feel intentional, useful, and free of duplication or rendering artifacts.

## Problems addressed

- duplicate glossary patterns
- unclear sectioning
- lone “T” heading bug
- possible confusion between featured terms and full glossary

## Required changes

### 12.1 Choose a glossary architecture
Use one of these:

#### Option A: Featured terms + full glossary
If both patterns remain:
- add explicit section headings
- visually separate featured content from full glossary
- ensure the two patterns have distinct roles

Recommended:
- `Key terms to know first`
- `Full glossary`

#### Option B: Single unified glossary
If duplication adds no value:
- remove featured cards
- keep one searchable / expandable glossary list

### 12.2 Fix alphabetical rendering
- Remove the lone `T`
- Either implement complete alphabetical sectioning correctly or remove it entirely until needed

### 12.3 Improve page intro
Explain:
- why this page exists
- how it helps users
- what kind of terms are included

### 12.4 Strengthen scanability
Ensure glossary entries are easy to skim:
- term
- simple definition
- why it matters
- optional expand/collapse for extra detail

## Acceptance criteria
- No duplicate-feeling glossary presentation without explanation.
- No lone letter or rendering artifact appears.
- Basics page has a clear purpose and intro.
- Users can distinguish highlighted terms from the full glossary if both exist.

---

# 13. Workstream 7: Visual polish and audience-fit pass

## Goal

Shift the product away from “developer scaffold” toward “professional civic housing resource.”

## Problems addressed

- dark-theme developer-tool vibe
- placeholder / monospace atmosphere
- excessive chrome
- trust mismatch for audience
- under-polished spacing, hierarchy, CTA treatment

## Required changes

### 13.1 Reassess visual theme
If dark mode remains:
- it must feel restrained, elegant, and public-facing
- reduce “tooling” feel
- reduce terminal / command-palette associations

Preferred default:
- lighter or softer neutral theme
- high readability
- warm or calm accents rather than stark technical contrast

### 13.2 Audit typography
- minimize monospace usage in user-facing content
- reserve monospace for metadata only if needed
- strengthen hierarchy with readable, conventional type pairings
- reduce oversized display type where it hurts clarity

### 13.3 Improve spacing and rhythm
Review all pages for:
- inconsistent padding
- overly tall sections
- disconnected CTAs
- weak grouping of related content
- too much empty space around placeholder cards

### 13.4 Improve card design
Cards should feel:
- easy to scan
- content-led
- lightly interactive
- not overly framed or “dashboard-like”

### 13.5 Improve CTA hierarchy
Across the whole site:
- one clear primary CTA per section
- secondary actions visually subordinate
- consistent button labeling
- no utility buttons styled like primary workflow steps

### 13.6 Refine empty states
Empty states should include:
- explanation
- benefit
- clear action
- visual calm

Not just a blank card with a button.

## Acceptance criteria
- Product no longer visually resembles a dev tool.
- Typography is readable and professional.
- CTAs are consistent and purposeful.
- Empty states feel complete and helpful.
- Interface better fits homeowners and housing support audiences.

---

# 14. Workstream 8: Footer, trust pages, and utility infrastructure

## Goal

Make trust-critical utility links functional and useful.

## Problems addressed

- dead footer links
- weak trust signals
- no sources / limitations / contact scaffolding

## Required changes

### 14.1 Implement working footer destinations
At minimum, make these routes or modals functional:

- About this tool
- Limitations
- Sources
- Contact / partners

### 14.2 Define minimum content for each
#### About this tool
- what the tool does
- who it is for
- what it helps with

#### Limitations
- informational only
- not legal or professional advice
- does not determine site-specific compliance

#### Sources
- where information will eventually come from
- if still incomplete, say so clearly

#### Contact / partners
- placeholder contact email or team contact method
- mention course / team / partner context if appropriate

### 14.3 Improve footer layout
- make footer feel intentional, not an afterthought
- include trust note
- include utility links
- optional small “no account required” reassurance

## Acceptance criteria
- No footer link resolves to `#`.
- Trust pages are accessible from every page.
- Limitations and Sources are visible and functional.
- Footer supports credibility.

---

# 15. Workstream 9: Content replacement strategy

## Goal

Replace the most damaging placeholders with real temporary copy that supports UX testing.

## Problems addressed

- homepage and core flows are impossible to evaluate
- placeholder brackets destroy trust
- content hierarchy cannot be assessed

## Priority replacement order

### Tier 1: must replace immediately
- homepage hero
- homepage pathways
- homepage featured options
- how it works
- compare empty state
- badge legend text
- next steps intro
- footer page headings
- basics intro

### Tier 2: should replace next
- option card summaries
- detail page section intros
- checklist item labels
- glossary starter terms

### Tier 3: may remain semi-generic temporarily
- deeper glossary inventory
- secondary utility page body copy
- extended contextual helper text

## Content guidance
Temporary copy should be:
- plain language
- concise
- believable
- illustrative
- non-final but user-readable

Do **not** use bracket placeholders in any visible high-traffic page section after this phase.

## Acceptance criteria
- No hero, card grid, empty state, or page intro contains bracket placeholders.
- Product becomes reviewable with nontechnical users.
- The structure can now be meaningfully critiqued.

---

# 16. Workstream 10: Accessibility and interaction QA

## Goal

Ensure the fixes improve usability without introducing regressions.

## Required checks

### 16.1 Keyboard and focus
- nav usable by keyboard
- tooltips and modals accessible by keyboard
- compare tray accessible
- focus states visible

### 16.2 Semantics
- heading levels are logical
- landmarks exist
- buttons vs links are used correctly

### 16.3 Contrast and readability
- text contrast meets reasonable accessibility standards
- badge colors remain understandable
- dark/light themes both readable if both are retained

### 16.4 State handling
- compare selections persist appropriately within session
- dismissed transient UI does not reappear unexpectedly
- empty states are correctly triggered

### 16.5 Responsive behavior
Verify on:
- desktop
- tablet
- narrow mobile view

## Acceptance criteria
- No major navigation or readability regression.
- Compare flow works across viewport sizes.
- Interactive helpers remain accessible.
- UI state behavior feels stable and polished.

---

# 17. Recommended implementation order

## Phase 1: remove trust-damaging chrome
- remove shortcut bar
- simplify nav
- remove developer-facing labels
- relocate hero disclaimers

## Phase 2: fix homepage first impression
- rewrite hero
- reduce headline dominance
- re-anchor CTA
- populate top homepage sections

## Phase 3: fix compare flow
- add compare tray
- change compare CTA labeling
- add compare empty-state guidance
- add demo comparison mode
- define badge legend

## Phase 4: fix detail page and next steps
- remove summary repetition
- improve section hierarchy
- contextualize Next Steps
- connect compare/explore session state

## Phase 5: fix basics and trust infrastructure
- clean glossary architecture
- fix letter heading bug
- implement footer routes/pages

## Phase 6: visual polish and QA
- typography
- spacing
- CTA consistency
- theme adjustments
- regression + accessibility review

---

# 18. Suggested engineering tasks by area

## Header / nav
- remove keyboard hint bar component
- remove shortcut labels from visible nav
- move theme toggle to icon utility position
- simplify top nav items
- ensure spacing and hierarchy are calmer

## Homepage
- rewrite hero component
- resize display type
- realign CTA cluster
- populate pathway cards
- populate featured options cards
- populate how-it-works component

## Explore
- change compare CTA copy
- add selection state styling
- add helper intro
- add badge legend / tooltip
- add sticky compare tray

## Compare
- redesign empty state
- support sample/demo compare mode
- improve intro and workflow guidance
- add route back to Explore
- add CTA toward Next Steps

## Option detail
- deduplicate summary content
- revise section order
- add compare state integration
- add badge explanation hook

## Next Steps
- read compare/explore session context
- show explored option chips
- split contextual vs general state
- improve linkbacks to prior pages

## Basics
- choose one glossary IA or clearly separate two
- fix alphabetical bug
- add explanatory page intro

## Footer / utility pages
- create working routes or modals
- add minimal trust content
- remove dead anchors

---

# 19. Definition of done

This remediation is complete when:

- the product no longer visibly reads like a developer prototype
- first-time users can understand the purpose immediately
- comparison is understandable even from a cold start
- Next Steps reflects the user journey or clearly labels itself as general
- badge meanings are defined
- footer trust links work
- glossary page feels intentional and bug-free
- no high-visibility page relies on bracket placeholders
- visual hierarchy and navigation feel polished for a nontechnical housing audience

---

# 20. Agent handoff instructions

When implementing this plan:

1. Start with global trust and navigation cleanup before adding new UX complexity.
2. Fix first-impression issues before polishing lower-priority screens.
3. Replace visible placeholder brackets in all high-traffic areas.
4. Prefer representative temporary copy over empty scaffolding.
5. Do not add novel productivity-tool UI patterns.
6. Keep the product calm, conventional, and credible.
7. After each workstream, verify the acceptance criteria before moving on.
8. If a final content decision is unknown, implement the structure and use realistic temporary copy, not technical placeholder labels.

---

# 21. Optional repo instruction snippet for AGENTS.md

## UX remediation priority
Before making major UI changes, consult `docs/ux-remediation-plan.md`.

When working on user-facing pages:
- prefer plain language
- remove developer-facing patterns
- optimize for nontechnical housing users
- ensure empty states are actionable
- ensure trust pages and footer utilities function
- do not leave visible bracket placeholders on key pages

Prioritize:
1. Homepage clarity
2. Compare flow usability
3. Next Steps contextualization
4. Trust and footer infrastructure
5. Basics / glossary clarity