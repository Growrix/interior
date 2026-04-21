# Master Execution Prompt (Implementation Phase)

**Purpose:**
Use this prompt to start the actual implementation/build phase for your project, after all project-specific documentation is complete and `DOC/PROJECT PLAN/Tasks/tasks.md` has been generated and reviewed. This prompt ensures the AI (or team) follows the generated documentation and approved task plan strictly, in sequence, and never loses context or invents requirements.

## Machine-Readable Prompt Contract

```yaml
prompt_id: universal.prompts.06
stage: implementation-execution
mode: implementation-from-approved-artifacts
universal_inputs:
  - DOC/MASTER PLAN/Plan.md
  - DOC/Universal/GPT ROLES/ai-context.yaml
  - DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
  - DOC/Universal/Execution Constitution.md
source_roles:
  - DOC/Universal/GPT ROLES/Fullstack_Contract_Orchestrator.md
  - DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md
  - DOC/Universal/GPT ROLES/Backend_System_Planner.md
  - DOC/Universal/GPT ROLES/API_Data_Contract_Architect.md
  - DOC/Universal/GPT ROLES/Security_Compliance_Trust_Architect.md
  - DOC/Universal/GPT ROLES/DevOps_Reliability_Release_Planner.md
  - DOC/Universal/GPT ROLES/QA_Test_Release_Governor.md
project_inputs:
  - DOC/PROJECT PLAN/ai-context.yaml
  - DOC/PROJECT PLAN/README.md
  - DOC/PROJECT PLAN/Shared Contracts/
  - DOC/PROJECT PLAN/Tasks/tasks.md
authoritative_outputs:
  - implementation codebase
  - assets
  - configuration
precedence:
  - DOC/MASTER PLAN/Plan.md preserves origin intent only.
  - Approved project docs define implementation contracts.
  - Reviewed tasks.md defines execution order.
stop_condition: Complete implementation without re-planning unless explicitly instructed.
# If tasks.md defines a frontend-lock checkpoint or equivalent early review gate,
# AI must pause there, await user review or approval, and only continue if explicitly instructed.
```

---

## Canonical Usage

Use this prompt together with the project root entrypoint:
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/Tasks/tasks.md`

The AI must read the project-specific documentation system, follow the contract and approved task order, and implement the site/app in strict, context-aware sequence.

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
6. DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml
7. DOC/PROJECT PLAN/Shared Contracts/README.md
8. DOC/PROJECT PLAN/README.md
9. DOC/PROJECT PLAN/Tasks/tasks.md

This prompt does not bind to a new GPT role.
It executes only from the approved project artifacts already produced by the earlier roles.


Your job is to implement the project (site/app) strictly according to the project-specific documentation and the approved task plan, following the build order and constraints defined in ai-context.yaml, tasks.md, and all referenced docs.


**Special Execution Rule:**
If DOC/PROJECT PLAN/Tasks/tasks.md defines a frontend-lock checkpoint or equivalent early review gate, you must PAUSE execution after completing that checkpoint and await user review and approval before proceeding into backend or API binding, integrations, or later phases. Do not hardcode this pause to a fixed phase number; follow the named checkpoint in tasks.md.

Execution model:
1. Never invent features, requirements, or flows not present in the documentation.
2. Never start if DOC/PROJECT PLAN/Tasks/tasks.md does not exist or has not been approved for execution.
3. Treat DOC/MASTER PLAN/Plan.md as the original intent source, but do not let it silently override approved project docs or reviewed tasks.md.
4. Always follow the build order and read_paths defined in DOC/PROJECT PLAN/ai-context.yaml and the ordered tasks defined in DOC/PROJECT PLAN/Tasks/tasks.md.
5. For each phase or task group, read the corresponding ai-context.yaml and README.md before starting work.
6. Never skip, reorder, or merge phases unless tasks.md explicitly permits it.
7. If tasks.md permits frontend-first implementation, you may front-load contract-safe frontend foundation, reusable components, and route composition before backend or API implementation.
8. Contract-dependent frontend behavior such as calculator submissions, public-form writes, booking requests, dynamic content loading, analytics wiring, or other persistence-dependent states must wait for the relevant backend and API contracts.
9. If tasks.md defines a frontend-lock checkpoint, STOP there and request user review or approval before continuing with backend or API binding or later phases.
10. If context is lost, re-read the project root ai-context.yaml, tasks.md, and referenced docs before continuing.
11. If a contract, task, or requirement is unclear, pause and request clarification; do not assume.
12. All implementation must pass the QA and Security gates defined in the documentation before release.
13. For frontend execution, treat the design system, component registry, visual-composition rules, and mobile-navigation rules as pass-fail requirements rather than optional styling guidance.
14. Do not ship public pages that stop at a static hero plus repeated generic sections; section hierarchy, visual contrast, proof placement, and conversion paths must match the approved page plan.
15. Do not introduce hardcoded layout values, icon treatments, route content, or one-off variants when the approved frontend docs require shared tokens, primitives, or centralized content/configuration.

Strict rules:
- Do not return to the universal orchestration prompt for implementation work.
- Do not generate or rewrite tasks.md in this step unless explicitly instructed to re-plan.
- Do not overwrite or ignore any project-specific documentation unless explicitly instructed.
- Do not start a new feature or phase until the previous approved task dependency is complete and validated.
- Do not let backend, API, or integration work silently redesign a locked public route inventory, navigation model, or page section hierarchy without a documented contract amendment.
- Do not treat visual quality as subjective polish; check against the documented acceptance criteria for hierarchy, contrast, responsive behavior, iconography, alignment, and layout variation.
- All code, configuration, and assets must match the documentation (structure, naming, stack, conventions).

Final outcome:
Produce a production-ready implementation that is fully aligned with the project-specific documentation and approved tasks.md plan, with no context drift, phase skipping, or undocumented features.
```

---

## Canonical Inputs

- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml`
- `DOC/PROJECT PLAN/Shared Contracts/README.md`
- `DOC/PROJECT PLAN/README.md`
- `DOC/PROJECT PLAN/Tasks/tasks.md`
- All referenced role folders and docs as defined in ai-context.yaml

## Canonical Outputs

- Production-ready codebase, assets, and configuration matching the documentation
- All implementation work validated against QA and Security gates

## Important Decision

This file is the full-project implementation prompt after the planning set is complete and `DOC/PROJECT PLAN/Tasks/tasks.md` has been reviewed. If you intentionally want to build only the frontend-first slice from locked Shared Contracts and Frontend docs before backend planning is complete, use `DOC/Universal/Prompts_Execution/06a_frontend_only_execution_prompt.md` instead. Do not use the documentation-generation prompts for execution.