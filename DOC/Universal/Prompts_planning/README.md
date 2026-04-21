# Universal Planning Prompts README

This folder contains the canonical, machine-readable prompt surface for documentation generation and planning only.

The recommended workflow is the sequential planning chain. Each prompt reads the same universal input package, binds to the correct GPT role, and writes only its allowed planning scope.

---

## Universal Input Package

Every planning prompt in this folder must read these universal inputs first:

1. `DOC/MASTER PLAN/Plan.md`
2. `DOC/Universal/GPT ROLES/ai-context.yaml`
3. `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
4. `DOC/Universal/Execution Constitution.md`

Interpretation rules:
- `DOC/MASTER PLAN/Plan.md` is the original business-intent source
- project-specific docs become the current planning truth after they are generated
- reviewed `DOC/PROJECT PLAN/Tasks/tasks.md` becomes the execution ordering truth after planning is complete

Machine-readable rule:
- fenced `yaml` contracts in these prompt docs must remain valid YAML with stable keys, valid indentation, and sequence order that matches the prose workflow

---

## Prompt Order

Use the planning chain in this order:

0. `00_Initial_planning_prompt.md` when the project still needs `DOC/MASTER PLAN/Plan.md`
1. `01_project_foundation_and_shared_contracts_prompt.md`
2. `02_frontend_uiux_master_plan_prompt.md`
3. `03_backend_system_master_plan_prompt.md`
4. `04_api_security_devops_qa_prompt.md`

After planning is stable, hand off to `DOC/Universal/Prompts_Execution/` for tasks generation and implementation prompts.

---

## Prompt To Role Binding

- `01_project_foundation_and_shared_contracts_prompt.md` -> `DOC/Universal/GPT ROLES/Fullstack_Contract_Orchestrator.md`
- `02_frontend_uiux_master_plan_prompt.md` -> `DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md`
- `03_backend_system_master_plan_prompt.md` -> `DOC/Universal/GPT ROLES/Backend_System_Planner.md`
- `04_api_security_devops_qa_prompt.md` -> sequentially runs `API_Data_Contract_Architect.md`, `Security_Compliance_Trust_Architect.md`, `DevOps_Reliability_Release_Planner.md`, and `QA_Test_Release_Governor.md`

Execution-side prompts now live in `DOC/Universal/Prompts_Execution/`.

---

## Prompt Scope Summary

### 00_Initial_planning_prompt.md

Purpose:
- convert a rough idea or intake brief into `DOC/MASTER PLAN/Plan.md`
- prepare the project for the contract-first planning chain

Outputs:
- `DOC/MASTER PLAN/Plan.md`

### 01_project_foundation_and_shared_contracts_prompt.md

Purpose:
- create or refresh the project root planning entrypoint
- lock the Shared Contracts phase
- convert `DOC/MASTER PLAN/Plan.md` into the first project-specific source of truth

Outputs:
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/README.md`
- `DOC/PROJECT PLAN/Shared Contracts/`

### 02_frontend_uiux_master_plan_prompt.md

Purpose:
- generate deep frontend planning from Shared Contracts and original plan intent
- define UI architecture, route structure, state boundaries, and assumptions

Outputs:
- `DOC/PROJECT PLAN/Frontend/`

### 03_backend_system_master_plan_prompt.md

Purpose:
- generate backend architecture from Shared Contracts, Frontend needs, and original plan intent
- define services, auth, storage, integrations, observability, and domain rules

Outputs:
- `DOC/PROJECT PLAN/Backend/`

### 04_api_security_devops_qa_prompt.md

Purpose:
- freeze APIs and data contracts
- harden security, DevOps, and QA in strict internal sequence

Outputs:
- `DOC/PROJECT PLAN/API and Data/`
- `DOC/PROJECT PLAN/Security/`
- `DOC/PROJECT PLAN/DevOps/`
- `DOC/PROJECT PLAN/QA/`
- refreshed `DOC/PROJECT PLAN/ai-context.yaml`
- refreshed `DOC/PROJECT PLAN/README.md`

---

## Workflow Rules

- documentation-generation phases must stay sequential
- every later phase must read earlier artifacts before writing new ones
- no prompt may silently override Shared Contracts or approved project docs
- task planning and implementation prompts live in `DOC/Universal/Prompts_Execution/`
- machine-readable prompt contracts must be kept aligned with the surrounding prose and README guidance

---

## Quick Selection

- Use the planning chain in this folder when you are still generating or revising project documentation.
- Use `DOC/Universal/Prompts_Execution/05_tasks_planning_prompt.md` after the documentation set is complete.
- Use `DOC/Universal/Prompts_Execution/06a_frontend_only_execution_prompt.md` when only Shared Contracts and Frontend are locked and you intentionally want frontend-first implementation.
- Use `DOC/Universal/Prompts_Execution/06_master_execution_prompt.md` only after tasks are reviewed and approved.
- Use `DOC/Universal/Prompts_Execution/99_master_orchestration_fallback_prompt.md` when you intentionally want a one-shot managed orchestration request.
