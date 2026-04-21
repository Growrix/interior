# Tasks Planning Prompt

**Purpose:**
This prompt creates the project execution task plan after all project-specific planning documentation is complete. It generates `DOC/PROJECT PLAN/Tasks/tasks.md` using the universal task template and the full project documentation context.

The output is an execution index, not a replacement for the detailed planning docs and not the sole gate for declaring implementation complete.

## Machine-Readable Prompt Contract

```yaml
prompt_id: universal.prompts.05
stage: task-planning-and-review
mode: cross-role-synthesis
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
  - DOC/PROJECT PLAN/
  - DOC/Universal/Template/tasks-template.md
authoritative_outputs:
  - DOC/PROJECT PLAN/Tasks/tasks.md
precedence:
  - DOC/MASTER PLAN/Plan.md remains the origin intent source.
  - Completed project docs are the authoritative planning source for task generation.
  - tasks.md becomes the authoritative execution-ordering index after review, while the detailed project docs remain authoritative for scope and acceptance.
stop_condition: Write or refresh tasks.md only, then stop.
```

---

## When To Use

Use this prompt only after the first four planning prompts are complete and the project-specific documentation under `DOC/PROJECT PLAN/` is stable.

This prompt is the required task-index generation step between planning and implementation when the workflow wants a human-reviewed execution index.

---

## Canonical Prompt Body

```text
Start by loading the universal planning package.

Before generating anything, read these files in order:
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
21. DOC/Universal/Template/tasks-template.md
22. Inspect DOC/PROJECT PLAN/Tasks/tasks.md if it already exists

This prompt does not bind to a new GPT role.
It synthesizes the outputs already created by the completed role folders.

Your job in this step is to create or refresh DOC/PROJECT PLAN/Tasks/tasks.md only.

Execution model:
1. Create DOC/PROJECT PLAN/Tasks/ if it does not already exist.
2. Use DOC/Universal/Template/tasks-template.md as the structural baseline, but adapt it to the current project-specific documentation set.
3. Generate a real project task plan with exact file paths, dependency ordering, review checkpoints, evidence commands, and implementation sequencing.
4. Use the project-specific documentation as source of truth; do not invent work that conflicts with the docs.
5. Reuse and normalize valid existing tasks content instead of blindly replacing it.
6. Stop after writing tasks.md. Do not start implementation.
7. If the project wants a human review step, record that expectation without presenting tasks.md as the only readiness or completion gate.

The tasks.md file must include, at minimum:
- task plan title and scope
- source references used to derive the tasks
- prerequisites and blocked conditions
- ordered phases
- execution guardrails
- numbered tasks with exact file paths
- dependency section
- parallelization notes
- review checkpoints
- evidence or validation commands where relevant
- implementation readiness note

Task generation rules:
- tests must come before implementation where applicable
- tasks touching the same file must remain sequential
- tasks touching different files may be marked parallel only if they are truly independent
- every major documented contract, entity, workflow, and user journey must map to tasks
- tasks must reflect security, DevOps, and QA gates rather than treating them as optional polish
- frontend route tasks must use canonical Shared Contracts paths exactly
- frontend tasks must include page-completeness, navigation-link integrity, accessibility, and visual-review expectations
- frontend tasks for public routes must include breakpoint-specific checks for typography, alignment, iconography, mobile navigation behavior, and hero composition where applicable
- smoke E2E tests must not be treated as sufficient evidence of premium UI completion
- frontend-foundation work that is contract-safe may be sequenced before backend/API implementation, but API-dependent frontend behavior must remain gated by the relevant contracts
- when frontend-first execution is permitted, tasks.md must include an explicit frontend-lock review checkpoint before backend/API binding begins
- organize the execution sequence so contract-safe frontend foundation and public-route composition can complete before backend/API implementation, followed by contract-bound frontend flow binding after the relevant backend/API work
- if booking or consultation-request behavior exists without an approved standalone public route, keep that workflow inside canonical routes such as /contact or /quote and do not invent /booking or other aliases
- do not normalize inline hardcoding of route maps, service catalogs, project lists, article lists, testimonial data, proof metrics, or CTA inventories inside route files when a shared source module or content contract is planned
- when the frontend plan defines centralized content/configuration or shared page-composition sources, tasks.md must point to those files explicitly instead of implying route-level hardcoding
- verify that every exact file path in tasks.md is either intentionally new or already part of the approved plan; remove stale template leftovers instead of preserving them

Strict rules:
- Use DOC/MASTER PLAN/Plan.md as the original intent reference, but derive task details from the completed project docs.
- Do not implement code, configuration, or assets in this step.
- Do not mutate project-specific planning docs except the new or refreshed tasks.md file.
- Do not skip review gating.
- Write tasks.md in stable markdown with explicit headings, exact file paths, and no ambiguous placeholders that would confuse later execution.
- If a required planning input is missing, report the gap in tasks.md as a blocker instead of inventing the missing design.
- Do not present tasks.md as a substitute for detailed page docs, route contracts, or release evidence.
- Do not let overall phase numbering trick the output into deferring contract-safe frontend-foundation work that can safely start earlier.
- Do not encode a fixed phase-number pause rule when the real review gate is a named frontend-lock checkpoint.

Final outcome:
Produce DOC/PROJECT PLAN/Tasks/tasks.md as the execution index and coverage ledger, then stop.
```

---

## Canonical Inputs

- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/README.md`
- all role folder docs under `DOC/PROJECT PLAN/`
- `DOC/Universal/Template/tasks-template.md`

## Canonical Outputs

- `DOC/PROJECT PLAN/Tasks/tasks.md`

## Important Decision

This prompt is mandatory in the recommended workflow when you want a human-reviewed execution index before coding starts.