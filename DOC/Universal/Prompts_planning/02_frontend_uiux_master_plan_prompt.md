# Frontend UIUX Master Plan Prompt

**Purpose:**
This is the second documentation-generation prompt in the split universal workflow. It creates the deep frontend plan from the already-locked shared contract blueprint.

## Machine-Readable Prompt Contract

```yaml
prompt_id: universal.prompts.02
stage: documentation-generation
mode: single-role
universal_inputs:
  - DOC/MASTER PLAN/Plan.md
  - DOC/Universal/GPT ROLES/ai-context.yaml
  - DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
  - DOC/Universal/Execution Constitution.md
role_binding:
  name: Frontend_UIUX_Generator
  file: DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md
project_inputs:
  - DOC/PROJECT PLAN/ai-context.yaml
  - DOC/PROJECT PLAN/README.md
  - DOC/PROJECT PLAN/Shared Contracts/
authoritative_outputs:
  - DOC/PROJECT PLAN/Frontend/
precedence:
  - DOC/MASTER PLAN/Plan.md remains the origin intent source.
  - Shared Contracts control system truth for frontend planning.
stop_condition: Documentation only. No implementation.
```

---

## When To Use

Use this prompt only after the project foundation and shared contracts step is complete.

This prompt exists so frontend planning gets a dedicated reasoning pass instead of being compressed inside a full one-shot orchestration request.

---

## Canonical Prompt Body

```text
Start by loading the universal planning package.

Before generating anything, read these files in order:
1. DOC/MASTER PLAN/Plan.md
2. DOC/Universal/GPT ROLES/ai-context.yaml
3. DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
4. DOC/Universal/Execution Constitution.md
5. DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md
6. DOC/PROJECT PLAN/ai-context.yaml
7. DOC/PROJECT PLAN/README.md
8. DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml
9. DOC/PROJECT PLAN/Shared Contracts/README.md
10. Any additional files inside DOC/PROJECT PLAN/Shared Contracts/ required to understand routes, roles, states, integrations, and scope
11. Inspect DOC/PROJECT PLAN/Frontend/ if it already exists

Bind this prompt to the Frontend_UIUX_Generator role only.

Your job in this step is to generate or refresh the full frontend master plan in DOC/PROJECT PLAN/Frontend/.

Required execution model:
1. Treat Shared Contracts as the controlling input.
2. Reuse and normalize valid existing frontend content instead of blindly replacing it.
3. Generate a deep frontend plan that is implementation-ready but still documentation only.
4. Record assumptions explicitly when a backend, API, or integration detail is not yet frozen.

Generate at minimum in DOC/PROJECT PLAN/Frontend/:
- ai-context.yaml
- README.md
- route and screen planning docs
- component and design-system planning docs
- state and client data-flow planning docs
- interaction and UX behavior docs
- assumptions ledger for unresolved server-side dependencies

The frontend plan must cover, at minimum:
- page and route map derived from the shared contract
- user journeys and task flows
- layout hierarchy and navigation model
- component boundaries and reuse strategy
- component registry and design-system governance model
- client state boundaries
- loading, empty, error, and permission states
- mobile navigation behavior, drawer or toggle behavior, iconography rules, and sticky-action rules for high-intent flows
- visual composition rules for hero sections, section rhythm, typography hierarchy, and cross-page layout variation
- explicit page-level acceptance criteria and anti-patterns for implementation agents to avoid
- accessibility, localization, responsiveness, and analytics hooks if relevant
- frontend dependencies on backend, API, auth, and integrations

Strict rules:
- Use DOC/MASTER PLAN/Plan.md as an intent cross-check, but do not let it override Shared Contracts silently.
- Do not invent payloads, permissions, lifecycle states, or integration side effects that are not supported by Shared Contracts.
- Do not override the shared contract silently.
- Do not allow vague styling guidance such as "modern", "clean", or "premium" without converting it into tokens, composition rules, and acceptance criteria.
- Do not allow page plans that repeat the same hero, card grid, and CTA rhythm across all public routes.
- Do not describe mobile as a scaled-down desktop layout; define mobile-first navigation, action reachability, and component behavior explicitly.
- Do not permit implementation guidance that hardcodes page content, design values, or ad-hoc component variants outside the documented design system.
- Do not start backend architecture, API design, security hardening, DevOps planning, or QA planning in this step.
- Do not start code implementation.

Final outcome:
Produce a complete frontend master plan under DOC/PROJECT PLAN/Frontend/ that is deeply reasoned, explicitly bounded by Shared Contracts, and ready for the backend and API phases to consume.
```

---

## Canonical Inputs

- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md`
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/README.md`
- `DOC/PROJECT PLAN/Shared Contracts/`

## Canonical Outputs

- `DOC/PROJECT PLAN/Frontend/`

## Important Decision

This prompt should remain isolated as its own reasoning pass. Do not merge it back into the contract step if frontend depth matters.