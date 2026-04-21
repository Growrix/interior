# Project Execution Index Template

## Purpose

This template is for generating DOC/PROJECT PLAN/Tasks/tasks.md after the full project planning chain is complete.

The output is not a new planning document. It is an execution index and coverage ledger that organizes already-approved project-plan decisions into an implementation order that an AI or engineering team can follow without losing coverage.

The output must not become the sole acceptance gate for implementation completion. Detailed docs under DOC/PROJECT PLAN/ remain authoritative for route names, page composition, interaction behavior, and release quality.

## Authoritative Inputs

Always derive tasks from the completed documentation set below, not from generic feature assumptions:

- DOC/MASTER PLAN/Plan.md
- DOC/Universal/GPT ROLES/ai-context.yaml
- DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
- DOC/Universal/Execution Constitution.md
- DOC/PROJECT PLAN/ai-context.yaml
- DOC/PROJECT PLAN/README.md
- DOC/PROJECT PLAN/Shared Contracts/
- DOC/PROJECT PLAN/Frontend/
- DOC/PROJECT PLAN/Backend/
- DOC/PROJECT PLAN/API and Data/
- DOC/PROJECT PLAN/Security/
- DOC/PROJECT PLAN/DevOps/
- DOC/PROJECT PLAN/QA/

## Output Contract

Generate or refresh only:

- DOC/PROJECT PLAN/Tasks/tasks.md

Do not implement code, configuration, assets, or new planning docs in this step.

## Core Principle

tasks.md must behave as a complete execution-order index of the approved plan.

It must:

- preserve the planning truth already locked in DOC/PROJECT PLAN/
- organize implementation sequencing without inventing new scope
- make coverage gaps obvious before implementation starts
- prevent AI execution drift by pointing to exact implementation files and exact planning sources
- remain simpler than the planning chain while still indexing every required implementation unit
- make it explicit that passing smoke tests alone is not enough to declare a route, phase, or frontend surface complete

It must not:

- collapse detailed plans into vague generic phases
- replace detailed frontend, backend, API, security, DevOps, or QA design with summary bullets
- omit major routes, endpoints, entities, workflows, integrations, controls, or release gates that already exist in the docs
- act as a standalone specification that overrides page-level docs, route contracts, or QA/release gates
- imply that tasks.md approval alone is enough to start or finish implementation without checking detailed docs and execution evidence

## Required Read Model

Load the documentation chain in this order before writing tasks.md:

1. DOC/MASTER PLAN/Plan.md
2. DOC/Universal/GPT ROLES/ai-context.yaml
3. DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
4. DOC/Universal/Execution Constitution.md
5. DOC/PROJECT PLAN/ai-context.yaml
6. DOC/PROJECT PLAN/README.md
7. DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml
8. DOC/PROJECT PLAN/Shared Contracts/README.md
9. DOC/PROJECT PLAN/Frontend/ai-context.yaml
10. DOC/PROJECT PLAN/Frontend/README.md
11. DOC/PROJECT PLAN/Backend/ai-context.yaml
12. DOC/PROJECT PLAN/Backend/README.md
13. DOC/PROJECT PLAN/API and Data/ai-context.yaml
14. DOC/PROJECT PLAN/API and Data/README.md
15. DOC/PROJECT PLAN/Security/ai-context.yaml
16. DOC/PROJECT PLAN/Security/README.md
17. DOC/PROJECT PLAN/DevOps/ai-context.yaml
18. DOC/PROJECT PLAN/DevOps/README.md
19. DOC/PROJECT PLAN/QA/ai-context.yaml
20. DOC/PROJECT PLAN/QA/README.md
21. Relevant detailed docs referenced by those README and ai-context files
22. Existing DOC/PROJECT PLAN/Tasks/tasks.md if it already exists

## Coverage Extraction Rules

Extract implementation tasks from the approved plan by layer.

### Shared Contracts Coverage

Map at minimum:

- canonical public routes
- utility routes
- domain entities and lifecycle states
- module boundaries
- integration categories
- unresolved blockers and approval dependencies

### Frontend Coverage

Map at minimum:

- global shell and shared layout
- design-system and reusable component tasks
- shared content or configuration tasks for nav, proof, CTA, and page-composition sources when those are planned
- every planned public route page
- every major conversion flow and fallback state
- analytics-safe client helpers if they are explicitly planned
- shared content/config tasks or clearly isolated provisional mock-data tasks when backend content is not yet live

Do not compress all frontend work into one or two generic tasks.
If the frontend plan contains page-level docs, tasks.md must contain page-level implementation tasks.
Do not allow frontend task wording that normalizes inline hardcoding of route maps, content inventories, proof data, or CTA lists directly inside route files.

### Backend Coverage

Map at minimum:

- domain types
- repositories or storage adapters
- domain services
- access-policy and audit foundations
- queue and job orchestration
- integration adapters

### API And Data Coverage

Map at minimum:

- public read endpoints
- public write endpoints
- canonical error and validation contracts
- state enforcement points
- callback or webhook handlers

### Security Coverage

Map at minimum:

- access control
- rate limiting and abuse protection
- webhook verification
- privacy and retention controls
- auditability
- incident and trust-boundary operationalization where implementation work is required

### DevOps Coverage

Map at minimum:

- CI and deployment workflows
- environment and secret wiring
- observability and alerting
- rollback and recovery assets
- post-deploy verification automation

### QA Coverage

Map at minimum:

- contract tests
- integration tests
- security tests
- end-to-end scenarios
- release evidence commands
- review gates and stop points

## Task Generation Rules

1. tasks.md is an execution index, not a new specification.
2. Every major documented contract, route, entity, workflow, integration category, control, and release gate must map to at least one task.
3. Tests must appear before the implementation they validate whenever applicable.
4. Tasks touching the same file must stay sequential.
5. Tasks touching different files may be marked [P] only when they are truly independent.
6. Frontend route tasks must be explicit at page level when page docs exist.
7. API tasks must be explicit at endpoint level when endpoint contracts exist.
8. Security, DevOps, and QA tasks are mandatory execution layers, not optional polish.
9. If the planning docs intentionally leave a decision unresolved, record it as a blocker or gated condition instead of inventing a solution.
10. If tasks.md already exists, reuse and normalize valid content rather than blindly replacing it.
11. Frontend tasks must carry completion checks for canonical route parity, navigation-link integrity, section completeness, state coverage, accessibility, and visual review.
12. Do not let smoke E2E coverage substitute for visual or page-completeness verification.
13. If booking or consultation-request behavior is documented but no standalone public route is approved in Shared Contracts, tasks must keep that workflow inside canonical routes rather than inventing /booking or another alias route.
14. Verify that every exact file path in tasks.md either already exists or is intentionally introduced by the approved plan; remove stale template leftovers instead of preserving them blindly.
15. Frontend-foundation tasks that are contract-safe may be sequenced before backend/API implementation, but API-dependent frontend behavior must wait for the relevant contracts.
16. When frontend-first execution is allowed, include a named frontend-lock review checkpoint before backend/API binding starts.
17. Frontend tasks for public routes must include breakpoint-specific checks for typography, alignment, iconography, and mobile navigation behavior.
18. Frontend tasks must name the shared content/configuration files to update when the page plan forbids route-level hardcoding.
19. Key public pages must include acceptance criteria for hero composition and page-level visual differentiation.

## Output Structure Requirements For tasks.md

The generated file must include all of the following sections:

1. Task plan title
2. Scope
3. Source references used
4. Execution baseline
5. Prerequisites
6. Blocked conditions
7. Ordered phases
8. Execution guardrails
9. Detailed numbered tasks with exact file paths
10. Review checkpoints
11. Dependencies
12. Parallelization notes
13. Evidence and validation commands
14. Implementation readiness note
15. Review gate

## Task Formatting Rules

- Use stable markdown headings.
- Use stable, unique task IDs. Keep simple numbered IDs such as T001, T002 for fresh plans, and preserve existing stable IDs when a refreshed plan is reorganized so external references do not drift.
- Each task must include exact file paths.
- Use [P] only for truly parallel-safe tasks.
- Prefer one task per implementation unit or tightly related file group.
- Keep wording concrete enough that a later execution prompt can act without reinterpretation.
- For frontend pages, include the canonical route path and enough acceptance detail that a future implementation cannot stop at hero-only or scaffold-only output.
- For public-facing frontend pages, acceptance details must also prevent repetitive layout scaffolds, missing mobile navigation behavior, or undocumented icon omissions.

## Execution Ordering Model

Use this ordering unless the project docs explicitly require a different sequence:

1. Review and approval baseline
2. Repository and runtime scaffolding
3. Tests-first coverage creation
4. Frontend foundation and canonical route shell
5. Frontend route completion and frontend-lock review
6. Shared backend and API foundations
7. Contract-bound frontend flow binding
8. Integrations, security, and operations
9. Release hardening and final verification

Within those phases, decompose by real project coverage, not by generic template buckets.

Frontend foundation work may appear before shared backend/API implementation when it is limited to shell, canonical route structure, tokens, reusable components, and section composition that does not depend on live contracts. Public-write forms, booking flows, dynamic content loading, analytics wiring, and persistence-dependent UX must remain gated by the relevant backend/API contracts. The frontend-lock review should freeze route inventory, navigation structure, section hierarchy, and component contracts before backend/API binding begins.

## Validation Checklist

Before finalizing tasks.md, verify all items below:

- [ ] Shared Contracts routes are represented in tasks.
- [ ] Frontend system docs are represented in tasks.
- [ ] Every planned public page is represented in tasks.
- [ ] Canonical Shared Contracts routes match the route paths used in frontend and QA tasks.
- [ ] Booking or consultation-request scenarios do not invent a standalone public route unless Shared Contracts explicitly approve one.
- [ ] A named frontend-lock review checkpoint exists when the execution model front-loads contract-safe frontend work.
- [ ] Backend modules and service boundaries are represented in tasks.
- [ ] API endpoints and error-contract work are represented in tasks.
- [ ] Security controls are represented in tasks.
- [ ] DevOps and release controls are represented in tasks.
- [ ] QA coverage and release evidence are represented in tasks.
- [ ] Navigation, footer, and mobile CTA link-integrity checks are represented in tasks.
- [ ] Frontend tasks include section-completeness and visual-review expectations for key public pages.
- [ ] Accessibility, contrast, and visual-regression checks are represented alongside functional E2E coverage.
- [ ] Frontend tasks include DS token usage and no-hardcoding checks for route content/configuration where relevant.
- [ ] Key public pages include hero-composition and breakpoint-level visual acceptance checks.
- [ ] Tests come before implementation where applicable.
- [ ] Parallel tasks do not modify the same file.
- [ ] Exact file paths were audited to remove stale template leftovers or platform-specific files that are not actually part of the approved plan.
- [ ] Blockers and unresolved decisions are explicit.
- [ ] tasks.md clearly states that it is an execution index, not the sole readiness or completion gate.