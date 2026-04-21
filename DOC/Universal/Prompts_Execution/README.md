# Universal Execution Prompts README

This folder contains the canonical prompt surface for execution-adjacent work: task generation, frontend-first implementation, full implementation, and the managed orchestration fallback.

These prompts operate after or alongside planning, depending on which artifacts are intentionally locked.

---

## Universal Input Package

Every prompt in this folder must begin by reading the relevant subset of these universal inputs:

1. `DOC/MASTER PLAN/Plan.md`
2. `DOC/Universal/GPT ROLES/ai-context.yaml`
3. `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
4. `DOC/Universal/Execution Constitution.md`

Interpretation rules:
- `DOC/MASTER PLAN/Plan.md` preserves original business intent
- Shared Contracts remain the system truth for routes, roles, states, and ownership
- specialized project folders become execution authority only after they are approved or intentionally locked
- `DOC/PROJECT PLAN/Tasks/tasks.md` becomes the ordering authority for full-project implementation after review

---

## Prompt Inventory

### 05_tasks_planning_prompt.md

Use when:
- the full project documentation set is complete enough to derive an ordered execution plan

Output:
- `DOC/PROJECT PLAN/Tasks/tasks.md`

### 06a_frontend_only_execution_prompt.md

Use when:
- Shared Contracts and Frontend planning are locked
- backend planning is intentionally deferred
- you want AI to build only contract-safe frontend code and stop before backend/API-dependent work

Outputs:
- frontend implementation code, assets, and configuration aligned to Shared Contracts and Frontend docs only

### 06_master_execution_prompt.md

Use when:
- the full planning set is complete
- `DOC/PROJECT PLAN/Tasks/tasks.md` exists and has been reviewed

Outputs:
- production-ready implementation aligned to the approved docs and task order

### 99_master_orchestration_fallback_prompt.md

Use when:
- you intentionally want a one-shot managed orchestration request instead of the split planning chain

Outputs:
- the project documentation system under `DOC/PROJECT PLAN/`

---

## Selection Rules

- Use `05_tasks_planning_prompt.md` only after planning docs are stable enough for execution ordering.
- Use `06a_frontend_only_execution_prompt.md` only for frontend-first implementation from `Shared Contracts/` and `Frontend/`.
- Use `06_master_execution_prompt.md` only for full-project implementation from reviewed `tasks.md`.
- Use `99_master_orchestration_fallback_prompt.md` only when you are intentionally bypassing the split planning chain.

---

## Guardrails

- Do not use execution prompts to rewrite planning docs unless the prompt explicitly allows that.
- Do not let frontend-only execution invent backend contracts, API schemas, or persistence behavior.
- Do not start full implementation before reviewed `DOC/PROJECT PLAN/Tasks/tasks.md` exists.
- Keep machine-readable prompt contracts aligned with the execution constitution and the role-index ai-context.