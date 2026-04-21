# Role And Access Model

## Purpose

This file defines planning-level user roles, access boundaries, and surface ownership. It is not a final authorization matrix, but it locks the actor model that later frontend, backend, API, and security planning must inherit.

## Canonical Roles

### Visitor
An unauthenticated public user browsing designers, portfolios, content, events, shop items, and AI guidance.

### Client
An authenticated or identified user seeking a designer, initiating inquiries, managing consultation intent, participating in messaging, and leaving eligible reviews.

### Designer
A professional user who maintains profile data, portfolio content, inquiry/booking availability, messages, optional commerce participation, and content/event participation where enabled.

### Admin
A platform governance user responsible for moderation, trust controls, operational review, dispute handling, and configuration oversight.

### Internal Operator (optional later)
A non-public operational role used only if support, trust, or content teams need narrower access than full admin.

## Planning-Level Access Boundaries

### Visitor access
- Can view public discovery routes
- Can browse portfolios, blog, events, and shop surfaces
- Can interact with AI assistant within public guidance boundaries
- Cannot manage private conversations, bookings, or protected account data

### Client access
- Can manage own profile/account details
- Can create or view own inquiries, bookings, and message threads
- Can leave reviews only for eligible engagements once trust rules are defined
- Cannot edit designer-owned content or admin-only governance surfaces

### Designer access
- Can manage own profile, portfolios, availability-related settings, and public-facing metadata
- Can respond to inquiries and messages routed to their account
- Can manage own eligible event/content/product records if those capabilities are enabled later
- Cannot access platform-wide governance tools or other designers' protected data

### Admin access
- Can review and govern users, listings, reviews, reported content, and selected operational records
- Can intervene in trust-sensitive workflows where policy allows
- Must have auditable actions in later security planning

## Permission Invariants

- Public content is readable without administrative elevation.
- Ownership rules apply to profiles, portfolios, messages, reviews, events, and commerce records.
- Review publication requires later trust rules; reviews are not assumed to be instantly public.
- Admin capabilities must be separated from public and end-user surfaces.
- AI assistant access does not imply access to protected records unless later contracts explicitly allow it.

## Identity And Verification Assumptions

- Designers may require stronger verification than clients.
- Clients may be allowed lightweight access initially, but protected workflows may require authentication.
- Final authentication mechanisms and risk controls belong to later security and backend planning.

## Open Access Questions

- Must clients authenticate before sending the first inquiry?
- What verification evidence is needed before a designer can go public?
- Do moderators and support agents need separate scoped roles instead of a single admin role?
