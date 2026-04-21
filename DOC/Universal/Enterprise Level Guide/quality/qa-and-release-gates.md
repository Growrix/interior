# QA and Release Gates

## Purpose

This document defines what must be true before changes are promoted across environments in the universal workflow.

## Release Philosophy

- The system should ship in small, verifiable increments.
- Critical flows require explicit acceptance evidence.
- Releases are blocked by unresolved auth, queue, payment, privacy, or delivery risks.

## Minimum QA Checklist

- feature behavior validated against the owning docs
- role-based access verified
- failure states verified
- logs or telemetry confirmed for critical new flows
- docs updated where contracts changed
- frontend changes validated against design-system, component-registry, and page-composition docs when applicable

## Release Gates by Area

### Product Gate

- The change matches documented business behavior.
- No undocumented lifecycle states were introduced.

### Security Gate

- Authorization is enforced server-side.
- RLS implications reviewed if data access changed.
- Secrets and webhooks handled correctly.

### Quality Gate

- Required tests are present and passing.
- Regression risk areas have explicit validation.

### Frontend Experience Gate

- Public pages meet documented acceptance criteria for hierarchy, proof placement, CTA clarity, and section completeness.
- Breakpoint review confirms typography, alignment, spacing, and iconography are consistent with the design system.
- Mobile navigation, drawer or toggle behavior, and sticky actions are validated on touch breakpoints where required.
- No undocumented hardcoded style values, content inventories, or route-level design exceptions are introduced.

### Operations Gate

- Monitoring or logs exist for high-impact paths.
- Deployment and rollback considerations are clear.

## Environment Promotion Guidance

- Local validates developer workflow correctness.
- Staging validates integrated behavior with near-production configuration.
- Production rollout should be incremental when the blast radius is meaningful.

## Blocker Conditions

- broken auth boundary
- payment reconciliation uncertainty
- queue ordering inconsistency
- cross-tenant data exposure risk
- missing rollback or mitigation plan for critical schema changes