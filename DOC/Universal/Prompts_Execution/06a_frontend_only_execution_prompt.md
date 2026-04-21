# Frontend-Only Execution Prompt

**Purpose:**
Use this prompt to build only the frontend-first, contract-safe portion of the product when Shared Contracts and Frontend planning are already complete, but backend planning and later governance phases are intentionally deferred.

## Machine-Readable Prompt Contract

```yaml
prompt_id: universal.prompts.06a
stage: implementation-execution
mode: frontend-only-from-approved-planning
universal_inputs:
  - DOC/MASTER PLAN/Plan.md
  - DOC/Universal/GPT ROLES/ai-context.yaml
  - DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
  - DOC/Universal/Execution Constitution.md
source_roles:
  - DOC/Universal/GPT ROLES/Fullstack_Contract_Orchestrator.md
  - DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md
project_inputs:
  - DOC/PROJECT PLAN/ai-context.yaml
  - DOC/PROJECT PLAN/README.md
  - DOC/PROJECT PLAN/Shared Contracts/
  - DOC/PROJECT PLAN/Frontend/
authoritative_outputs:
  - frontend implementation codebase
  - frontend assets
  - frontend configuration
precedence:
  - DOC/MASTER PLAN/Plan.md preserves original intent only.
  - Shared Contracts define route, role, state, and ownership truth.
  - Frontend docs define UI architecture, composition, navigation, tokens, and interaction truth.
  - Unfrozen backend, API, auth, analytics, and persistence details remain gated and may not be invented.
stop_condition: Complete only the contract-safe frontend slice, then stop before backend or API-dependent implementation.
```

---

## Canonical Usage

Use this prompt only when these conditions are true:
- `DOC/PROJECT PLAN/Shared Contracts/` is complete enough to control route and state truth
- `DOC/PROJECT PLAN/Frontend/` is complete enough to control frontend composition and behavior
- backend planning is intentionally deferred
- you want implementation to stop after the frontend-first slice is complete and reviewed

This prompt does not authorize backend services, API contract invention, database work, auth-provider wiring, payment wiring, queue design, or integration implementation.

---

## Canonical Prompt Body

```text
Start by loading the universal planning package.

Before building or implementing anything, read these files in order:
1. DOC/MASTER PLAN/Plan.md
2. DOC/Universal/GPT ROLES/ai-context.yaml
3. DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
4. DOC/Universal/Execution Constitution.md
5. DOC/PROJECT PLAN/ai-context.yaml
6. DOC/PROJECT PLAN/README.md
7. DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml
8. DOC/PROJECT PLAN/Shared Contracts/README.md
9. DOC/PROJECT PLAN/Shared Contracts/route-and-surface-map.md
10. DOC/PROJECT PLAN/Shared Contracts/role-and-access-model.md
11. DOC/PROJECT PLAN/Shared Contracts/domain-state-model.md
12. DOC/PROJECT PLAN/Shared Contracts/module-boundaries.md
13. DOC/PROJECT PLAN/Frontend/ai-context.yaml
14. DOC/PROJECT PLAN/Frontend/README.md
15. DOC/PROJECT PLAN/Frontend/frontend-architecture.md
16. DOC/PROJECT PLAN/Frontend/design-system-and-component-registry.md
17. DOC/PROJECT PLAN/Frontend/state-and-client-data-flow.md
18. DOC/PROJECT PLAN/Frontend/interaction-and-motion.md
19. DOC/PROJECT PLAN/Frontend/assumptions-ledger.md
20. All route-plan files under DOC/PROJECT PLAN/Frontend/Pages/
21. Inspect the current implementation codebase before changing anything

This prompt does not bind to a new GPT role.
It executes only from the approved Shared Contracts and Frontend planning artifacts.

Your job is to implement only the frontend slice that is fully supported by those two planning phases.

Allowed implementation scope:
1. app shell, route shell, layout hierarchy, and responsive navigation
2. design tokens, primitives, shared UI components, and composition helpers
3. public page composition, static or planned content/config plumbing, and mobile interaction behavior
4. documented loading, empty, error, disabled, and permission-denied UI states that do not require invented backend contracts
5. frontend structure, styling, assets, accessibility work, and test scaffolding for the implemented frontend slice

Blocked scope:
1. backend services, databases, queues, file-processing pipelines, and external integrations
2. final API schema invention, persistence writes, server mutations, auth-provider wiring, payments, moderation workflows, analytics endpoints, or live search backends
3. any route, state, permission, payload, or side effect not already supported by Shared Contracts and Frontend docs

Execution model:
1. Never invent requirements, flows, payloads, or states that are not documented.
2. Use Shared Contracts as the system truth and Frontend docs as the UI truth.
3. Implement only contract-safe frontend work that can stand without backend/API lock-in.
4. If a documented screen depends on unfrozen backend or API behavior, implement only the approved shell or passive UI state, or stop and report the blocker.
5. Do not consult nonexistent or unfinished Backend, API and Data, Security, DevOps, or QA folders as if they were approved authority.
6. Keep content/configuration, tokens, components, and page composition aligned to the documented registry and architecture.
7. Do not hardcode one-off route variants, layout values, icon treatments, or content structures when the Frontend docs require shared primitives or centralized sources.
8. When the contract-safe frontend slice is complete, stop and await user review before any backend planning or binding work begins.

Strict rules:
- Do not generate or rewrite tasks.md in this step.
- Do not start backend planning, API design, security planning, DevOps planning, or QA planning in this step.
- Do not silently redesign the approved route inventory, navigation model, or page section hierarchy.
- Do not treat missing backend detail as permission to invent server behavior.
- All code, configuration, and assets must follow the approved Shared Contracts and Frontend docs.

Final outcome:
Produce a frontend-first implementation that is fully aligned with Shared Contracts and Frontend planning, then stop before backend/API-dependent implementation.
```

---

## Canonical Inputs

- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/README.md`
- `DOC/PROJECT PLAN/Shared Contracts/`
- `DOC/PROJECT PLAN/Frontend/`

## Canonical Outputs

- frontend implementation codebase, assets, and configuration aligned to Shared Contracts and Frontend docs
- explicit stop before backend/API-dependent work or undocumented contract invention

## Important Decision

This file is the controlled frontend-first execution prompt for projects that want to build the UI from locked Shared Contracts and Frontend planning before backend planning is complete. It is not a replacement for the full-project execution prompt once the full documentation set and reviewed tasks exist.