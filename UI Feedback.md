## UI Feedback
***

## Global / Navigation

**1. The "Help" button is visually inconsistent with the rest of the nav.**
The four nav links (Get started, Browse ADUs, Compare, Learn the basics) use a dark pill/border style, while "Help" uses a raised 3D capsule with a glossy highlight. These two styles look like they belong to different design systems. Either flatten the Help button to match the other nav items, or elevate all nav items to match it. Consistency is key. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/)

**2. No active/selected state differentiation is obvious enough.**
The active nav tab shows a very subtle top-line accent. On a dark background, this is easy to miss. Consider a more prominent active indicator — a filled background, brighter text, or a clear underline — so users always know where they are. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/get-started)

**3. The nav link label "Browse ADUs" routes to `/start` (scenario selection), not `/explore` (the actual ADU browser).**
This is a serious navigation inconsistency. "Browse ADUs" implies you'll see a list of ADU options, but clicking it takes you to "Choose the scenario that best matches your current goal". The actual ADU browse grid lives at `/explore`. Either fix the routing or rename the nav label to "Choose your goal" or "Get started." [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/start)

**4. No mobile/responsive consideration is visible.**
The navbar contains 5 items plus a logo with no hamburger or collapsing pattern. On smaller screens this will overflow. Even at the current desktop viewport, the nav feels crowded. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/)

**5. The site title "Affordable Housing Library" in the top-left is not styled as a link to the homepage in a visually obvious way.**
It functions as one (confirmed in the page text), but it looks like plain text, not a clickable logo. Add an underline-on-hover or a subtle icon treatment to signal it's clickable. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/)

***

## Homepage (`/`)


**7. The hero CTA hierarchy is unclear.**
"Get started" (blue filled button) and "What is an ADU?" (plain text link) are stacked vertically. "What is an ADU?" should be visually secondary to "Get started," but the current styling makes it look like a plain anchor, which may be overlooked. Consider making it a ghost/outline button to preserve the visual hierarchy while still making it scannable. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/)

**8. The "Common Types" cards have no images or icons.**
The four cards (Backyard Cottage, Garage Conversion, Basement Suite, Attached Addition)  are text-only on a dark background. Small pictograms or icons for each type would make them more scannable and visually differentiated. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/)

**9. Spacing between the hero section and the "Understanding ADUs" section is inconsistent.**
There's a visible seam/gap between the dark card container and the section below. The two sections should either be clearly separated with intentional whitespace or unified into one continuous scroll. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/)

**10. The homepage footer's "TOP" scroll-to-top label is truncated/overlapping in the lower-left.**
In the scrolled-down view, a "TOP" label in the bottom-left corner is partially obscured. This element should be styled as a proper "Back to top" button with full visibility — ideally a fixed floating button on longer pages. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/)

***

## Get Started (`/get-started`)

**11. The page title "What brings you here?" lacks hierarchy context.**
There is no breadcrumb, no page label, and no sub-header telling users they're on a "Get Started" page. Users who land here from an external link or directly won't understand where they are in the site structure. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/get-started)

**12. The "MOST POPULAR" badge is visually heavy and out of place.**
The blue pill badge on "I Want to Build an ADU"  uses a saturated blue that dominates the card. Consider a softer treatment (e.g., a small star icon + italic text) so it adds signal without overwhelming the card title. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/get-started)


***

## Browse/Explore (`/explore` via "Explore options")

**15. The filter panel and the "how to read plausibility badges" explanation are competing for horizontal space.**
On load, the badge legend takes up significant real estate in the main content area, pushing the actual ADU cards below the fold. The legend should be collapsed by default with a "What do these badges mean?" toggle, or moved to a tooltip/popover on the badge itself. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/explore)


**17. The search bar placeholder text is slightly misleading.**
The placeholder reads "Try 'garage conversion' or 'family flexibility'". These are two very different query types (one a type, one a goal). Separate placeholder suggestions for different query intents, or just use something generic like "Search by name or goal." [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/explore)


**20. "Add to compare" appears on browse cards but no compare tray is shown until 1 item is added.**
There's no visual affordance showing how many items can be added or that a compare tray will appear. Users may not know that clicking "Add to compare" is doing anything. A subtle counter badge or a persistent empty compare tray at the bottom of the page would greatly improve discoverability.

***

## Option Detail Page (`/options/option-1`)

**21. The breadcrumb says "Explore options" but links to `/explore`, which the nav calls "Browse ADUs."**
The breadcrumb trail reads "Home / Explore options / Detached backyard cottage", but the nav link says "Browse ADUs." This inconsistency in naming is confusing. Unify the terminology across nav, breadcrumbs, and CTAs. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/options/option-1)

**22. "Add to compare" and "View compare" buttons are placed inline in the header area with no visual separation from the title block.**
The two buttons sit immediately after the complexity/timeline metadata in a cramped row. They should be more clearly delineated from the informational header — perhaps in a sticky action bar or after the first content section. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/options/option-1)

**23. "What this is," "Good fit if," "Key tradeoffs," and "What to review" are rendered as a 2-column card grid, but the cards have no visual icons or color differentiation.**
All four cards look identical in weight and style. Adding distinct icons (e.g., a checkmark for "Good fit if," a warning triangle for "Key tradeoffs") would help users quickly scan to the section they care about. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/options/option-1)

**24. The "How to read plausibility badges" explainer section is repeated on both the `/explore` and `/options/option-X` pages.**
This is redundant content. On the detail page, it could be replaced with a single tooltip linked from the badge itself, reducing page length and noise.

**25. "Related options" at the bottom only shows 2 items with no images.**
The related options section  uses text-only cards. Given that the browse grid shows images, the inconsistency is jarring. Images or icons should be applied consistently. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/options/option-1)

***

## Compare (`/compare`)

**26. The empty state message is helpful, but the two CTAs ("Explore options" and "Load sample comparison") are styled inconsistently.**
"Explore options" is a filled blue button; "Load sample comparison" is a gray/outlined button. The visual weight suggests Explore is primary, but for a new user, loading the sample is actually the lower-friction action. Consider making "Load sample comparison" the primary CTA in the empty state. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/compare)


**28. The "3/3" counter next to "Add more options" is rendered awkwardly.**
The text reads "Add more options 3 / 3" with the fraction broken across lines in the page text. When the limit is reached, the "Add more options" link should either be greyed out/disabled with a tooltip ("Maximum 3 options selected") or replaced with a "Swap an option" CTA. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/compare)

**29. "Remove" buttons on compared items have no confirmation dialog.**
Clicking "Remove" presumably removes the item immediately. For a decision-making tool where users may have spent time selecting items, an accidental removal would be frustrating. A quick undo toast or a confirmation prompt would help.

**30. No ability to save, share, or export the comparison.**
A core use case for this tool is bringing comparison results to conversations with planners or architects. There's no share link, PDF export, or print-friendly view. A "Print" or "Copy comparison link" feature would significantly increase the tool's utility. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/compare)

***

## Learn the Basics / Glossary (`/basics`)

**31. The "SEARCH GLOSSARY" label sits above the search bar but uses all-caps small text, making it look like an accessibility label rather than a visible heading.**
The label styling  is inconsistent with other section headings like "Key terms to know first." It should either be styled as a proper form label or integrated into the input placeholder. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/basics)

**32. The "Key terms to know first" cards have a nested sub-card pattern that is visually confusing.**
Each featured term card contains a smaller inner card with a contextual note. This nested card-within-card creates depth that doesn't clearly signal hierarchy. The contextual note could instead be an italic inline callout below the definition. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/basics)

**33. The full glossary uses "Show"/"Hide" toggles instead of the more conventional expand/collapse "+" icons.**
The text "Show"  requires reading, whereas a "+" or chevron (▶) icon is a universally understood expand affordance. Using icons here would be more scannable. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/basics)

**34. The alphabetical full glossary has no alphabet jump navigation.**
If this glossary grows to dozens of terms, users looking for a specific letter will have to scroll through everything. An A–Z jump bar (common in glossaries and dictionaries) would be a valuable addition.

***

## Next Steps (`/next-steps`)

**35. The page retains session state (recently explored options), but there's no explanation of how this works or how to reset it.**
The page shows "Recently explored: Prefab backyard ADU, Junior suite inside main home, Detached backyard cottage". A new user who hasn't done any exploring won't see this. There's no explanation that these come from local session data, nor how to clear them. Add a small note like "Based on your session — clear history." [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/next-steps)

**36. "Print checklist" and "Copy checklist" buttons are shown even when no options are selected.**
When "No selected options yet" is displayed, the Print/Copy buttons are still active. They should be disabled (greyed out) until at least one option is selected, or their behavior when clicked with no options should be clarified. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/next-steps)

***

## Footer Pages (About, Limitations, Sources, Contact)

**39. Footer links are not visually separated from the footer disclaimer text.**
The footer disclaimer and the four links (About, Limitations, Sources, Contact) are both in the same low-contrast gray text at the same size. The links should be more visually differentiated — perhaps underlined, with a slightly larger font size — so they're clearly navigable. [affordable-housing-library-digital.vercel](https://affordable-housing-library-digital.vercel.app/)

***

## Cross-Cutting / Interaction Issues

**42. No progress indicator or "you are here in the journey" context is shown at any point.**
The intended user flow is: Home → Get Started → Explore → Compare → Next Steps. But at no point does the UI communicate how far along this journey the user is. A simple step indicator (e.g., Step 2 of 4) or a persistent mini-nav showing completed steps would dramatically reduce user confusion.

**43. Page titles in the browser tab never change from "Affordable Housing Library MVP."**
Every page uses the same `<title>`. This is bad for usability (multiple open tabs look identical), SEO, and accessibility. Each page should have a unique, descriptive title (e.g., "Browse ADU Options | Affordable Housing Library").

**45. No 404/error page was encountered, but the site has no obvious fallback for broken routes.**
Attempting to navigate to non-existent sub-pages silently fails with no visible error state. A proper 404 page with links back to key areas of the site would improve the experience for users who mistype or share broken links.