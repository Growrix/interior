# Frontend Architecture

## Product Experience Translation

Requested brand signals are translated into the following frontend posture:
- premium = generous spacing, restrained motion, editorial typography contrast, proof-rich heroes
- modern = clean compositional rules, fast scanning, minimal ornament, strong card discipline
- image-forward = photography and project visuals anchor narrative and conversion decisions
- app-like mobile = touch-first nav, compact actions, persistent progress visibility, reduced cognitive load

## Surface Shells

### Public discovery shell
Purpose:
- attract, inspire, and convert browsing into inquiry, saved intent, booking, or product exploration

Shell model:
- desktop: transparent-to-solid header transition, text-forward nav, large search entry, footer with trust/help links
- tablet: compact top bar, persistent search shortcut, category rail or sheet-based filters
- mobile: slim top bar, search-first trigger, drawer menu for global routes, sticky bottom action only on high-intent detail pages

### Client shell
Purpose:
- manage saved designers, inquiry status, bookings, messages, reviews, and settings with clear state visibility

Shell model:
- desktop: left sidebar + top utility bar + primary content panel
- mobile: bottom tab bar with icon + label for `Home`, `Inquiries`, `Bookings`, `Messages`, `Account`; top bar carries context action

### Designer shell
Purpose:
- manage profile, portfolio, inquiries, bookings, messages, content/event/shop entries, and settings

Shell model:
- desktop: workspace sidebar with section text labels, utility status chips, right-side contextual action rail where needed
- mobile: segmented home dashboard plus bottom tab bar with icon + label for `Dashboard`, `Portfolio`, `Leads`, `Messages`, `More`

### Admin shell
Purpose:
- dense governance operations with explicit search, filters, queues, and reversible actions

Shell model:
- desktop: high-density sidebar, top search, filter bar, data-first content area
- mobile/tablet: access supported, but operational priority remains desktop/tablet first; mobile uses drawer + stacked filters + sticky bulk-action tray only when necessary

## Breakpoint Model

Use the following canonical breakpoints and container targets:
- `xs` 360-479px: single-column touch-first layout
- `sm` 480-767px: enhanced mobile, bottom action ready
- `md` 768-1023px: tablet split layouts and sheet-driven filters
- `lg` 1024-1279px: desktop editorial/public and app sidebars
- `xl` 1280-1439px: wide desktop
- `2xl` 1440px+: premium gallery and comparison layouts

Container rules:
- public editorial pages: max 1280px with asymmetric media allowance
- public catalog pages: max 1360px with 12-column grid on desktop
- authenticated surfaces: max 1440px but content panels capped by task density

## Navigation Model

### Global public navigation
Desktop:
- text links for `Designers`, `Projects`, `Blog`, `Events`, `Shop`
- right cluster: `AI Guide`, `Sign in`, high-contrast `Book a Consultation` or `Join as a Designer`

Mobile:
- top bar with logo, search trigger, saved/account shortcut, menu icon
- drawer groups links into `Discover`, `Learn`, `Shop`, `Support`
- icon-assisted list items allowed inside drawer, but each item keeps a visible text label
- detail pages may add a sticky bottom action bar for `Save`, `Message`, `Book`, or `Buy` depending on route intent

### Authenticated navigation rules
- primary navigation on mobile must always pair icon + label
- destructive or high-risk actions never appear as icon-only buttons
- desktop app surfaces prefer text labels with supporting status chips instead of icon-only sidebars

## Visual Composition Rules

### Hero variation system
- Home: immersive editorial hero with guided search block and featured proof ribbon
- Designers index: utility-first search hero with compact editorial header and inline filter storytelling
- Designer profile: credibility hero with identity, proof stats, and conversion rail
- Project detail: cinematic media hero with narrative scaffolding and related action cluster
- Blog/events/shop: each gets a distinct lead pattern so the site does not feel templated

### Section rhythm system
Use one primary rhythm plus one contrasting secondary rhythm per page:
- editorial stack: wide image, narrative text, social proof, CTA
- comparative stack: filters/results, comparison row, assistive guidance, CTA/recovery
- proof stack: metrics/reviews/project evidence before action ask
- transactional stack: detail, trust/reassurance, action, recovery/help

## Accessibility And Localization Architecture

- Every shell includes skip link, keyboard-visible focus states, and semantic landmarks.
- Navigation, drawers, sheets, and sticky bars must remain fully operable via keyboard and screen reader.
- Text, alt text, status text, dates, prices, and measurements must remain externalizable.
- Layouts must tolerate longer translated strings and optional RTL mirroring.

## Performance And SEO Architecture

- Public image modules assume progressive media loading, responsive sizes, and deferred below-the-fold galleries.
- Public detail pages must preserve crawlable structure, stable headings, and share-preview readiness.
- Heavy carousels are discouraged; swipe galleries must degrade gracefully.

## Acceptance Framework

A frontend implementation passes architecture review only if:
- each surface uses the correct shell behavior for its role and device class
- mobile high-intent routes define sticky actions or quick actions explicitly
- no public page reuses another page's full hero/section rhythm without justification
- text labels remain visible for primary mobile navigation
- async states do not cause severe layout shift or hidden status ambiguity
