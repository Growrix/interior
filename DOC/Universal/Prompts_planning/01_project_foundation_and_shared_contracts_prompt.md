# Project Foundation And Shared Contracts Prompt

**Purpose:**
This is the first documentation-generation prompt in the split universal workflow. It creates or refreshes the root project planning entrypoint and locks the shared contract blueprint before specialization begins.

## Machine-Readable Prompt Contract

```yaml
prompt_id: universal.prompts.01
stage: documentation-generation
mode: single-role
universal_inputs:
  - DOC/MASTER PLAN/Plan.md
  - DOC/Universal/GPT ROLES/ai-context.yaml
  - DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
  - DOC/Universal/Execution Constitution.md
role_binding:
  name: Fullstack_Contract_Orchestrator
  file: DOC/Universal/GPT ROLES/Fullstack_Contract_Orchestrator.md
project_inputs:
  - DOC/PROJECT PLAN/
authoritative_outputs:
  - DOC/PROJECT PLAN/ai-context.yaml
  - DOC/PROJECT PLAN/README.md
  - DOC/PROJECT PLAN/Shared Contracts/
precedence:
  - DOC/MASTER PLAN/Plan.md defines original business intent.
  - Newly generated Shared Contracts become the source of truth for later planning phases.
stop_condition: Documentation only. No implementation.
```

---

## When To Use

Use this prompt at the start of Stage A documentation generation.

This prompt must run before frontend, backend, API, security, DevOps, or QA planning.

---

## Canonical Prompt Body

```text
Start by loading the universal planning package.

Before generating anything, read these files in order:
1. DOC/MASTER PLAN/Plan.md
2. DOC/Universal/GPT ROLES/ai-context.yaml
3. DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
4. DOC/Universal/Execution Constitution.md
5. DOC/Universal/GPT ROLES/Fullstack_Contract_Orchestrator.md
6. Inspect DOC/PROJECT PLAN/ if it already exists

Bind this prompt to the Fullstack_Contract_Orchestrator role only.

Your job in this step is to create or refresh the project foundation and shared contract blueprint under DOC/PROJECT PLAN/.

Required execution model:
1. Inspect DOC/PROJECT PLAN/ to determine what already exists.
2. Create or refresh DOC/PROJECT PLAN/ai-context.yaml and DOC/PROJECT PLAN/README.md as the root planning entrypoint for this project.
3. Create or refresh DOC/PROJECT PLAN/Shared Contracts/.
4. Generate the shared contract blueprint that will govern all later phases.
5. Reuse and normalize valid existing content instead of blindly replacing it.

The shared contract blueprint must lock, at minimum:
- project scope
- user roles and permissions at a planning level
- route and surface map
- domain entities and lifecycle states
- integration inventory
- non-functional requirements
- implementation sequence
- cross-role boundaries

Generate at minimum in DOC/PROJECT PLAN/Shared Contracts/:
- ai-context.yaml
- README.md
- additional markdown files needed for shared contracts

Strict rules:
- Treat DOC/MASTER PLAN/Plan.md as the original source of business intent.
- Do not generate frontend-only implementation detail as confirmed fact unless it is explicitly an assumption.
- Do not generate backend-only implementation detail as confirmed fact unless it is explicitly an assumption.
- Do not start specialized frontend, backend, API, security, DevOps, or QA planning in this step.
- Do not invent requirements outside DOC/MASTER PLAN/Plan.md unless clearly marked as assumptions.
- Keep DOC/PROJECT PLAN/ai-context.yaml current so later prompts can start from it.

Final outcome:
Produce the project root planning entrypoint plus a complete Shared Contracts documentation set that becomes the source of truth for all later documentation phases.
```

---

## Canonical Inputs

- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/Universal/GPT ROLES/Fullstack_Contract_Orchestrator.md`

## Canonical Outputs

- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/README.md`
- `DOC/PROJECT PLAN/Shared Contracts/`

## Important Decision

This is the required first prompt in the split documentation workflow. Do not skip it and do not replace it with frontend-first planning.