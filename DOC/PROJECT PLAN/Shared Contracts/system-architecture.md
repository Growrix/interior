# System Architecture

## Purpose

This file defines the planning-level system architecture and cross-surface constraints for the Interior Design Platform. It does not commit to a framework or provider, but it establishes the architectural shape that later specialized planning must respect.

## Architectural Shape

The platform is a multi-surface web system with:
- public discovery and content surfaces
- protected client and designer account surfaces
- admin governance surfaces
- shared domain services supporting profile, portfolio, inquiry, booking, messaging, reviews, content, commerce, and AI guidance

## Architecture Principles

- Contract-first planning before specialization
- Clear separation between public, authenticated, and administrative surfaces
- Shared domain model across discovery, engagement, trust, commerce, and AI guidance
- Media-heavy performance discipline as a first-class concern
- Security and moderation readiness for user-generated and trust-sensitive content

## Surface Architecture Constraints

### Public surface
- optimized for discovery, inspiration, and conversion into inquiry or booking intent
- must remain resilient under heavy image usage and SEO-oriented traffic patterns

### Client and designer surfaces
- protect private records and workflow states
- must support clear status communication for inquiries, bookings, messages, and account-managed content

### Admin surface
- isolated from end-user surfaces
- must support trust intervention, moderation, and governance workflows

## Data And State Constraints

- Shared contracts define conceptual state before any schema freeze.
- User-generated content and media require explicit ownership, visibility, and moderation states.
- Messaging, booking, reviews, and orders are trust-sensitive records and require later security and audit planning.
- AI assistant interactions must be bounded by privacy and access rules.

## Media And File Constraints

- High-resolution imagery is a primary content type.
- Later architecture must support optimized upload, storage, resizing, delivery, and caching.
- File retention and deletion rules must be aligned with moderation and account lifecycle rules.

## Reliability And Recovery Expectations

- Discovery surfaces should degrade gracefully if selected integrations are unavailable.
- Inquiry, booking, messaging, reviews, and commerce workflows require clear failure and retry behavior later.
- Administrative moderation must preserve reversibility and evidence where policy requires it.

## Analytics And Observability Expectations

- Later planning should track discovery, inquiry initiation, booking progression, content engagement, commerce conversion, and AI assistant usage.
- Later DevOps and QA phases must inherit the same canonical route and entity model when defining telemetry and verification.

## Open Architecture Questions

- Will search rely on a database-native model or a dedicated search service?
- Will messaging be asynchronous only, or require realtime delivery guarantees?
- Will commerce be native checkout, hybrid checkout, or affiliate redirection?
- What analytics posture is acceptable for privacy-sensitive interactions and AI assistant usage?
