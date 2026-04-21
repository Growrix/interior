# Backend System Master Plan Prompt

**Purpose:**
This is the third documentation-generation prompt in the split universal workflow. It creates the backend system plan from the shared contract blueprint while staying aware of the finalized frontend planning.

## Machine-Readable Prompt Contract

```yaml
prompt_id: universal.prompts.03
stage: documentation-generation
mode: single-role
universal_inputs:
  - DOC/MASTER PLAN/Plan.md
  - DOC/Universal/GPT ROLES/ai-context.yaml
  - DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
  - DOC/Universal/Execution Constitution.md
role_binding:
  name: Backend_System_Planner
  file: DOC/Universal/GPT ROLES/Backend_System_Planner.md
project_inputs:
  - DOC/PROJECT PLAN/ai-context.yaml
  - DOC/PROJECT PLAN/README.md
  - DOC/PROJECT PLAN/Shared Contracts/
  - DOC/PROJECT PLAN/Frontend/
authoritative_outputs:
  - DOC/PROJECT PLAN/Backend/
precedence:
  - DOC/MASTER PLAN/Plan.md remains the origin intent source.
  - Shared Contracts control system truth.
  - Frontend docs provide consumption needs but may not override Shared Contracts.
stop_condition: Documentation only. No implementation.
```

---

## When To Use

Use this prompt only after Shared Contracts and Frontend planning are complete.

This prompt gives backend architecture its own reasoning pass so service boundaries, domain rules, and integration behavior are not compressed into the later governance phases.

---

## Canonical Prompt Body

```text
Start by loading the universal planning package.

Before generating anything, read these files in order:
1. DOC/MASTER PLAN/Plan.md
2. DOC/Universal/GPT ROLES/ai-context.yaml
3. DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
4. DOC/Universal/Execution Constitution.md
5. DOC/Universal/GPT ROLES/Backend_System_Planner.md
6. DOC/PROJECT PLAN/ai-context.yaml
7. DOC/PROJECT PLAN/README.md
8. DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml
9. DOC/PROJECT PLAN/Shared Contracts/README.md
10. DOC/PROJECT PLAN/Frontend/ai-context.yaml
11. DOC/PROJECT PLAN/Frontend/README.md
12. Any additional files inside Shared Contracts and Frontend needed to understand routes, roles, states, and unresolved assumptions
13. Inspect DOC/PROJECT PLAN/Backend/ if it already exists

Bind this prompt to the Backend_System_Planner role only.

Your job in this step is to generate or refresh the backend system master plan in DOC/PROJECT PLAN/Backend/.

Required execution model:
1. Treat Shared Contracts as the controlling source of truth.
2. Use Frontend docs to understand consumption needs, but do not let frontend assumptions override shared contracts.
3. Reuse and normalize valid existing backend content instead of blindly replacing it.
4. Resolve contract gaps explicitly or record them as assumptions for the API/Data phase.

Generate at minimum in DOC/PROJECT PLAN/Backend/:
- ai-context.yaml
- README.md
- backend architecture docs
- service design and domain-rule docs
- auth and authorization planning docs
- storage and file-delivery planning docs
- queue, integration, payment, and external-system planning docs
- observability and reliability planning docs

The backend plan must cover, at minimum:
- service boundaries and modules
- domain logic and lifecycle enforcement
- auth, authorization, tenancy, and permissions handling
- persistence and storage responsibilities
- asynchronous workflows and queue usage
- integration orchestration and failure handling
- operational observability requirements handed into DevOps
- open issues that must be frozen later in API/Data, Security, or QA

Strict rules:
- Use DOC/MASTER PLAN/Plan.md as an intent cross-check, but do not let it override Shared Contracts or approved frontend assumptions silently.
- Do not silently override Shared Contracts.
- Do not invent API schemas as final truth in this step when they still need to be frozen later.
- Do not start the API/Data, Security, DevOps, or QA phases in this step.
- Do not start code implementation.

Final outcome:
Produce a complete backend system master plan under DOC/PROJECT PLAN/Backend/ that is contract-aligned, frontend-aware, and ready for the final governance prompt to freeze APIs and remaining operational controls.
```

---

## Canonical Inputs

- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/Universal/GPT ROLES/Backend_System_Planner.md`
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/README.md`
- `DOC/PROJECT PLAN/Shared Contracts/`
- `DOC/PROJECT PLAN/Frontend/`

## Canonical Outputs

- `DOC/PROJECT PLAN/Backend/`

## Important Decision

This prompt remains separate because backend planning is still a high-reasoning phase. Do not collapse it into the final governance pass.