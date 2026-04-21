# Project Plan — Interior Design Platform

## Purpose

This folder is the project-specific planning layer for the Interior Design Platform.
It converts the original intent from `DOC/MASTER PLAN/Plan.md` into the contract-first documentation that later planning phases and implementation must follow.

## Current Stage

Current stage: Shared Contracts and Frontend planning complete.

The current locked planning set defines the source-of-truth contract for:
- project scope and experience direction
- user roles and planning-level permissions
- route and surface inventory
- domain entities and lifecycle states
- module boundaries
- integration expectations
- non-functional requirements
- implementation sequencing
- frontend architecture, design system, page composition, and mobile behavior

## Read First

For downstream AI or human planning work, read in this order:
1. `DOC/PROJECT PLAN/ai-context.yaml`
2. `DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml`
3. `DOC/PROJECT PLAN/Shared Contracts/README.md`
4. the specific shared-contract file relevant to the task

## Folder Structure

- `Shared Contracts/` — source-of-truth blueprint for all later planning phases
- `Frontend/` — locked frontend master plan used for UI-first review and frontend-only execution
- `Tasks/` — execution plan after later documentation phases are complete and reviewed

Planned later folders:
- `Backend/`
- `API and Data/`
- `Security/`
- `DevOps/`
- `QA/`

## Shared Contract Coverage

The shared contract set currently includes:
- product requirements and planning assumptions
- role and access boundaries
- route and surface map
- domain entities and lifecycle states
- module boundaries and ownership
- system architecture constraints
- integration and contract expectations
- implementation sequence

## Phase Rules

- This documentation phase does not include implementation.
- Shared Contracts may refine `DOC/MASTER PLAN/Plan.md`, but may not silently contradict it.
- Later specialized docs must inherit these contracts before adding detail.

## Immediate Next Step

Choose one of these controlled next steps:

1. Run `DOC/Universal/Prompts_Execution/06a_frontend_only_execution_prompt.md` if you want to build only the contract-safe frontend slice now.
2. Run `DOC/Universal/Prompts_planning/03_backend_system_master_plan_prompt.md` when you are ready to continue planning the backend.
