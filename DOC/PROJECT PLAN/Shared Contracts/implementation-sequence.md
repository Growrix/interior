# Implementation Sequence

## Purpose

This file defines the contract-level delivery order that later specialized plans and task planning must refine. It is not a sprint plan, but it does lock dependency direction.

## Delivery Principles

- Shared contracts first
- Foundation before specialization
- Trust-sensitive workflows must be hardened before production release
- Vertical slices are preferred over disconnected functional silos

## Canonical Build Order

### 1. Shared contract lock
Outputs already established in this phase:
- root project AI entrypoint
- shared contract blueprint
- canonical roles, routes, entities, and boundaries

### 2. Frontend planning
Must consume shared contracts and define:
- design system and navigation behavior
- responsive layout strategy
- page-level experience rules
- loading, empty, success, error, and recovery states

Special note:
- mobile may use more compact or icon-supported navigation patterns where appropriate, but that decision belongs to frontend planning and must preserve clarity/accessibility.

### 3. Backend planning
Must consume shared contracts and define:
- service boundaries
- persistence strategy
- server-side workflow orchestration
- messaging, booking, reviews, commerce, and AI support services

### 4. API/data + security + DevOps + QA planning
Sequentially refine:
- canonical APIs, schemas, and event/status contracts
- auth, moderation, privacy, and abuse controls
- environments, release strategy, telemetry, and recovery controls
- verification strategy, test coverage, and release gates

### 5. Tasks planning and review
Generate ordered implementation tasks only after specialized docs exist.

### 6. Implementation
Begin only after reviewed tasks exist.

## Critical Dependency Notes

- Route and state definitions from Shared Contracts must exist before frontend/backend specialization.
- Messaging, reviews, bookings, commerce, and AI assistant work all require later security and QA attention.
- Commerce implementation cannot start as native checkout until the commerce model is explicitly chosen.
- AI assistant implementation cannot assume access to user-private data.

## Release Risk Notes

- Trust and moderation workflows are release-critical for reviews, messaging, and public listings.
- Media performance is release-critical because the product is image-forward.
- Any direct payment workflow introduces rollback, refund, and operational support requirements that must be validated before launch.
