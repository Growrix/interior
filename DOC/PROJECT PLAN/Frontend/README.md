# Frontend Master Plan

## Purpose

This folder contains the implementation-ready frontend planning layer for the Interior Design Platform.
It translates shared contracts into a concrete UI architecture, navigation model, design system, client-state plan, route-level page behavior, and assumptions ledger without starting implementation.

## Read Order

1. `ai-context.yaml`
2. `frontend-architecture.md`
3. `design-system-and-component-registry.md`
4. `state-and-client-data-flow.md`
5. `interaction-and-motion.md`
6. `assumptions-ledger.md`
7. the page-plan file for the route family being worked on

## Folder Contents

- `frontend-architecture.md` — surface model, layout hierarchy, route shells, navigation, acceptance framework
- `design-system-and-component-registry.md` — tokens, primitives, composites, page-section patterns, governance rules
- `state-and-client-data-flow.md` — client/server state boundaries, async-state handling, analytics hooks, permission handling
- `interaction-and-motion.md` — navigation behavior, iconography rules, drawer/sticky-action behavior, motion and form UX rules
- `assumptions-ledger.md` — unresolved backend/API/integration dependencies that the frontend must not invent
- `Pages/` — route-family page plans with goals, sections, states, acceptance criteria, and anti-patterns

## Planning Commitments

- Shared Contracts remain the controlling source of truth for routes, roles, states, and integrations.
- Mobile is planned as app-like web UX, not a compressed desktop layout.
- Desktop uses text-forward navigation and broader editorial composition.
- Mobile uses icon-assisted navigation and sticky high-intent actions where they improve speed and reachability.
- Public pages deliberately vary hero composition, proof order, and CTA rhythm by route purpose.

## Required Downstream Behavior

- Frontend implementation agents must consume this folder before writing route shells or page components.
- Backend and API planners must read the assumptions ledger and route dependencies before freezing contracts.
- Security and QA planning must inherit the same route families, role boundaries, and state expectations documented here.
