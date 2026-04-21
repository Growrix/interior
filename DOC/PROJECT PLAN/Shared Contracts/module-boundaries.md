# Module Boundaries

## Purpose

This file defines planning-level module ownership and cross-domain boundaries. It prevents later frontend, backend, API, security, and operations planning from blurring responsibilities.

## Canonical Modules

### Discovery And Presentation Module
Owns public browsing of designers, projects, editorial content, events, products, and supporting marketing surfaces.

Responsibilities:
- expose public discovery surfaces
- present filterable/findable content inventories
- emphasize image-led browsing and trust signals

Does not own:
- protected record mutations
- moderation policy enforcement logic
- payment processing logic

### Identity And Access Module
Owns account identity, session boundaries, role recognition, and later authentication/authorization enforcement.

Responsibilities:
- user identity lifecycle
- role boundary enforcement
- protected surface access rules

Does not own:
- public content presentation rules
- business-specific inquiry or booking workflows beyond access control

### Designer Presence Module
Owns designer profile, portfolio, public metadata, optional public reputation display, and designer-managed content assets.

Responsibilities:
- designer profile records
- portfolio projects and media
- visibility readiness for public publishing

### Client Engagement Module
Owns inquiry initiation, consultation progression, and message-thread participation at a product level.

Responsibilities:
- inquiry records
- booking intent progression
- client-designer communication lifecycle

### Trust And Moderation Module
Owns reviews governance, reporting, moderation, abuse handling, and platform intervention points.

Responsibilities:
- review eligibility and moderation
- reported content escalation
- trust intervention pathways

### Content And Community Module
Owns blog articles, event listings, and non-commerce engagement content.

Responsibilities:
- article lifecycle
- event listing lifecycle
- editorial governance boundaries

### Commerce Module
Owns product catalog behavior and order flow only if direct platform commerce is later confirmed.

Responsibilities:
- product listing lifecycle
- cart/checkout/order contracts if applicable
- commerce policy touchpoints

Boundary note:
- if commerce is affiliate-only, this module narrows to outbound catalog linking and tracking expectations.

### AI Guidance Module
Owns AI assistant experience boundaries, recommendation use cases, and escalation rules.

Responsibilities:
- conversational guidance intent
- recommendation scope
- safe handoff to human-managed flows

Does not own:
- independent policy decisions
- access to protected records unless later approved

### Admin And Operations Module
Owns governance interfaces, operational review surfaces, and administrative intervention tooling.

Responsibilities:
- moderation surfaces
- support/governance surfaces
- selected configuration and oversight functions

## Cross-Module Dependency Rules

- Discovery depends on Designer Presence, Content, Commerce, and approved AI guidance outputs.
- Client Engagement depends on Identity, Designer Presence, and Trust rules.
- Trust and Moderation can inspect cross-domain records but must not redefine ownership of source entities.
- AI Guidance may reference discovery metadata and public content, but protected workflow access requires explicit future contracts.
- Admin and Operations may intervene across modules but do not replace domain ownership.

## Planning Boundary Rules

- Frontend planning may compose experiences across modules, but may not redefine module ownership.
- Backend planning may map services around these modules, but may not merge away critical trust or access boundaries without contract updates.
- Security, QA, and DevOps planning must preserve these module seams when defining controls and tests.
