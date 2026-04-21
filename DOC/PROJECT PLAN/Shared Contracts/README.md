# Shared Contracts

## Purpose

This folder is the contract-first blueprint for the Interior Design Platform.
It locks the planning-level truths that all later specialized documentation must inherit.

## What Is Locked Here

- product scope and outcome direction
- user roles and access boundaries
- route and surface inventory
- domain entities and lifecycle states
- module boundaries and ownership lines
- integration inventory and contract expectations
- non-functional requirements
- implementation and dependency sequence

## Read Paths

### Minimum read path for any later role
1. `ai-context.yaml`
2. `product-requirements.md`
3. the file most relevant to the current task

### Required additional reads by role
- Frontend: `route-and-surface-map.md`, `role-and-access-model.md`, `domain-state-model.md`
- Backend: `module-boundaries.md`, `domain-state-model.md`, `integration-contract-index.md`
- API/Data: `domain-state-model.md`, `integration-contract-index.md`, `route-and-surface-map.md`
- Security: `role-and-access-model.md`, `integration-contract-index.md`, `system-architecture.md`
- DevOps/QA: `system-architecture.md`, `implementation-sequence.md`, `integration-contract-index.md`

## Contract Rules

- Do not silently override these contracts in later docs.
- If a shared state, route, role, or integration changes, update this folder first.
- Use canonical naming consistently across all later documents.
- Mark unresolved detail as assumptions or open questions instead of treating it as confirmed.

## Files

- `product-requirements.md`
- `role-and-access-model.md`
- `route-and-surface-map.md`
- `domain-state-model.md`
- `module-boundaries.md`
- `system-architecture.md`
- `integration-contract-index.md`
- `implementation-sequence.md`
