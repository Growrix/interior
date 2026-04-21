# Route And Surface Map

## Purpose

This file defines the canonical surface separation and route inventory at a planning level. Route names are conceptual and stack-agnostic; later frontend and backend planning may refine path patterns without changing surface intent.

## Surface Model

### Public discovery surface
For unauthenticated browsing, search, comparison, content, product exploration, and AI-guided discovery.

### Authenticated client surface
For saved designers, inquiries, booking progress, message threads, review eligibility, and account management.

### Authenticated designer surface
For profile and portfolio management, inquiry/message handling, booking availability management, and optional event/content/product management.

### Admin governance surface
For moderation, review oversight, support workflows, trust intervention, and platform configuration control.

## Canonical Public Routes

- `/` — home / editorial landing / discovery entry
- `/designers` — search and filter results
- `/designers/:designerSlug` — designer profile
- `/projects/:projectSlug` — portfolio project detail
- `/blog` — blog index
- `/blog/:articleSlug` — article detail
- `/events` — events listing
- `/events/:eventSlug` — event detail
- `/shop` — product catalog
- `/shop/:productSlug` — product detail
- `/chat-assistant` or embedded assistant entry — AI guidance surface
- `/about`, `/contact`, `/help`, `/policies/*` — supporting public utility routes

## Canonical Account Routes

### Shared account entry
- `/auth/sign-in`
- `/auth/sign-up`
- `/account`

### Client routes
- `/client/dashboard`
- `/client/saved-designers`
- `/client/inquiries`
- `/client/bookings`
- `/client/messages`
- `/client/reviews`
- `/client/settings`

### Designer routes
- `/designer/dashboard`
- `/designer/profile`
- `/designer/portfolio`
- `/designer/inquiries`
- `/designer/bookings`
- `/designer/messages`
- `/designer/content`
- `/designer/events`
- `/designer/shop`
- `/designer/settings`

### Admin routes
- `/admin`
- `/admin/users`
- `/admin/designers`
- `/admin/reviews`
- `/admin/content`
- `/admin/events`
- `/admin/shop`
- `/admin/reports`
- `/admin/support`
- `/admin/settings`

## Navigation Invariants

- Public discovery must prioritize designers, projects, content, and trust signals.
- Primary navigation must remain simple and image-led on larger screens.
- Mobile navigation must support app-like clarity and speed; compact or icon-assisted patterns are allowed only if labels, discoverability, and accessibility remain strong.
- Route ownership must remain clear: public routes must not expose protected account data; admin routes must be isolated.

## Route Status Notes

Confirmed by business intent:
- public discovery, profiles, portfolios, blog, events, shop, AI assistance, and account surfaces all exist conceptually

Assumptions to validate later:
- exact saved-designers feature
- exact review management screen boundaries
- exact policy/help route inventory
