# Execution Constitution for Agency Documentation and Build Workflow

**Purpose:**
Defines the minimum strict workflow for the full system so AI does not drift between universal rules, role orchestration, project-specific documentation, and later implementation. This file governs both the documentation-generation phase and the later code-execution phase.

---

## 1. The Three Documentation Layers

### Universal Layer
Reusable cross-project assets.

Contains:
- `DOC/Universal/GPT ROLES/`
- `DOC/Universal/Prompts_planning/`
- `DOC/Universal/Prompts_Execution/`
- `DOC/Universal/Enterprise Level Guide/`
- this constitution

Purpose:
- defines how AI should think, route, and orchestrate work

### GPT Role Layer
The worker-role system that generates documentation.

Purpose:
- converts a project plan into structured project-specific artifacts
- each role owns one documentation domain only

### Project-Specific Layer
The generated documentation for one real project.

Contains:
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/README.md`
- `DOC/PROJECT PLAN/Shared Contracts/`
- `DOC/PROJECT PLAN/Frontend/`
- `DOC/PROJECT PLAN/Backend/`
- `DOC/PROJECT PLAN/API and Data/`
- `DOC/PROJECT PLAN/Security/`
- `DOC/PROJECT PLAN/DevOps/`
- `DOC/PROJECT PLAN/QA/`
- `DOC/PROJECT PLAN/Tasks/`

Purpose:
- becomes the only valid source for actual implementation work on that project

---

## 2. Canonical Workflow

There are three execution stages.

Universal planning package for every prompt:
- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- the bound GPT role file for the current prompt, or the completed role outputs if the prompt is task-planning or implementation

Precedence rule:
- `DOC/MASTER PLAN/Plan.md` defines original business intent
- generated project docs define current planning truth once they exist
- reviewed `DOC/PROJECT PLAN/Tasks/tasks.md` defines execution ordering truth

### Stage A: Documentation Generation
Recommended input chain:
- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/Prompts_planning/01_project_foundation_and_shared_contracts_prompt.md`
- `DOC/Universal/Prompts_planning/02_frontend_uiux_master_plan_prompt.md`
- `DOC/Universal/Prompts_planning/03_backend_system_master_plan_prompt.md`
- `DOC/Universal/Prompts_planning/04_api_security_devops_qa_prompt.md`

Fallback input:
- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/Prompts_Execution/99_master_orchestration_fallback_prompt.md`

Internal read order:
1. `DOC/Universal/GPT ROLES/ai-context.yaml`
2. `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
3. `DOC/Universal/Execution Constitution.md`
4. `DOC/MASTER PLAN/Plan.md`
5. the GPT role file bound to the current prompt

Output:
- complete project-specific documentation under `DOC/PROJECT PLAN/`

Rule:
- no code implementation is allowed during this stage
- split prompts are preferred when documentation depth matters
- the fallback master prompt is allowed only if it still executes the same internal sequence

### Stage B: Task Planning And Review
Input:
- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/Universal/Prompts_Execution/05_tasks_planning_prompt.md`
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/Universal/Template/tasks-template.md`

Output:
- `DOC/PROJECT PLAN/Tasks/tasks.md`

Rule:
- no implementation is allowed during this stage
- tasks.md must be reviewed before execution starts

Purpose:
- creates one execution-ready ordered task list from the completed project docs

### Stage C: Implementation Execution
Input:
- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/Tasks/tasks.md` for full-project execution

Optional frontend-first execution input when backend planning is intentionally deferred:
- `DOC/Universal/Prompts_Execution/06a_frontend_only_execution_prompt.md`
- `DOC/PROJECT PLAN/Shared Contracts/`
- `DOC/PROJECT PLAN/Frontend/`

Rule:
- once the project-specific documentation and reviewed tasks.md exist, all build work must start from those project-specific artifacts, not from the universal prompt
- Plan.md may be re-read for original intent, but it may not silently override approved project docs or reviewed tasks.md during implementation
- frontend-only execution is allowed only when Shared Contracts and Frontend are intentionally locked and the prompt explicitly stops before backend/API-dependent work

Purpose:
- keeps implementation grounded in the already-generated project docs instead of re-running orchestration logic

---

## 3. Required Order Inside Stage A

The role workflow must remain sequential.

Recommended split execution:
1. Project foundation and Shared Contracts
2. Frontend
3. Backend
4. API and Data
5. Security
6. DevOps
7. QA
8. Refresh `DOC/PROJECT PLAN/ai-context.yaml` and `DOC/PROJECT PLAN/README.md`

Allowed prompt grouping:
1. Prompt 1 handles project foundation and Shared Contracts
2. Prompt 2 handles Frontend
3. Prompt 3 handles Backend
4. Prompt 4 handles API and Data, then Security, then DevOps, then QA, then root refresh

Rules:
- every later phase must read earlier artifacts
- if a valid existing folder already exists, reuse and normalize it instead of blindly replacing it
- no phase may silently override shared contracts

---

## 4. Required Order Inside Stage B

Task planning must happen after documentation generation and before implementation.

Required task-planning sequence:
1. read the full project-specific documentation set
2. read `DOC/Universal/Template/tasks-template.md`
3. generate or refresh `DOC/PROJECT PLAN/Tasks/tasks.md`
4. stop for review approval

Rules:
- tasks.md must include exact paths and dependency order
- tasks.md may not invent work that conflicts with project-specific docs
- implementation may not begin until tasks.md is approved

---

## 5. Required Order Inside Stage C

Implementation work must remain contract-led and should prefer the documented execution track rather than a generic backend-first assumption.

Recommended execution order:
1. if using `DOC/Universal/Prompts_Execution/06a_frontend_only_execution_prompt.md`, read Shared Contracts and Frontend docs, implement only contract-safe frontend code, then stop for review before backend planning or binding
2. otherwise read `DOC/PROJECT PLAN/Tasks/tasks.md`
3. initialize project shell and repository structure
4. create or validate tests-first coverage and shared primitives
5. implement frontend foundation, canonical route shell, and reusable page composition that does not depend on live contracts
6. stop at the named frontend-lock review checkpoint if `DOC/PROJECT PLAN/Tasks/tasks.md` defines one
7. implement backend core services, persistence, queues, and public APIs against the locked surface model
8. bind contract-dependent frontend flows, dynamic content, and submission states
9. harden auth, permissions, integrations, CI/CD, observability, and deployment controls
10. enforce QA gates, evidence capture, and final verification

Rule:
- implementation may be vertical-slice by feature, but it may not violate the contracts defined in project-specific docs or the approved ordering in tasks.md
- if tasks.md defines a frontend-lock checkpoint, execution must pause there for review before backend or API binding continues
- frontend-only execution may not be used to invent API contracts, persistence behavior, or backend-owned state transitions

---

## 6. Canonical Entrypoints

For generating docs with the recommended split workflow:
- `DOC/Universal/Prompts_planning/01_project_foundation_and_shared_contracts_prompt.md`

For generating execution tasks from completed docs:
- `DOC/Universal/Prompts_Execution/05_tasks_planning_prompt.md`

For frontend-first implementation from locked Shared Contracts and Frontend docs:
- `DOC/Universal/Prompts_Execution/06a_frontend_only_execution_prompt.md`

For implementation from approved tasks:
- `DOC/Universal/Prompts_Execution/06_master_execution_prompt.md`

For generating docs with the fallback one-shot workflow:
- `DOC/Universal/Prompts_Execution/99_master_orchestration_fallback_prompt.md`

For using the generated project docs:
- `DOC/PROJECT PLAN/ai-context.yaml`

For using the reviewed execution plan:
- `DOC/PROJECT PLAN/Tasks/tasks.md`

For cross-role authority:
- `DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml`

If AI starts from any other file first, the workflow is off-track.

---

## 7. Stack And Tech Constraints

- The universal workflow does not force one fixed frontend, backend, database, provider, or deployment stack across every project.
- Stack, framework, provider, and runtime decisions must be locked in the generated project-specific docs, starting from Shared Contracts and then refined by the specialized planning phases.
- Universal docs may include reusable examples or reference patterns, but those examples are not binding workflow requirements unless a project-specific planning chain adopts them explicitly.
- CI/CD, operations, testing, release gates, and integration posture must be taken from the approved project-specific docs for the current project.

If project-specific docs later refine a stack detail, the project-specific layer wins over universal defaults.

---

## 8. Non-Negotiable Rules

Do:
- always read the current phase's `ai-context.yaml` and `README.md`
- always preserve the chain Universal -> GPT Roles -> Project Specific -> Implementation
- always keep `DOC/PROJECT PLAN/ai-context.yaml` current as the project root routing file
- always treat `DOC/PROJECT PLAN/Tasks/tasks.md` as the execution ordering file once it exists and is approved
- always validate implementation against QA and Security docs before considering a feature complete
- always treat a documented frontend-lock review checkpoint as binding when the project chooses a frontend-first execution track

Do not:
- do not invent features outside the project plan
- do not skip or reorder the orchestration phases
- do not skip the task planning and review gate in the recommended workflow
- do not start implementation before the project-specific docs exist
- do not treat frontend assumptions as backend truth
- do not let implementation bypass project-specific contracts
- do not let backend, API, or integration work silently redesign a locked frontend route inventory or section hierarchy without a documented contract update

---

## 9. Context Recovery

If context is lost during documentation generation, re-read:
1. `DOC/Universal/GPT ROLES/ai-context.yaml`
2. `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
3. `DOC/Universal/Execution Constitution.md`
4. `DOC/MASTER PLAN/Plan.md`

If context is lost during task planning, re-read:
1. `DOC/PROJECT PLAN/ai-context.yaml`
2. `DOC/PROJECT PLAN/README.md`
3. `DOC/PROJECT PLAN` role folder ai-context and README files
4. `DOC/Universal/Template/tasks-template.md`

If context is lost during implementation, re-read:
1. `DOC/PROJECT PLAN/ai-context.yaml`
2. `DOC/PROJECT PLAN/Tasks/tasks.md`
3. `DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml`
4. the current role folder's `ai-context.yaml`
5. the current role folder's `README.md`

---

## 10. Quality Gates

- no implementation is production-ready until QA gates pass
- all critical workflows must have test coverage
- no P0 or P1 defects are allowed at release
- any contract change must be reflected in affected project-specific docs before more code is added
- machine-readable prompt contracts and ai-context files must remain syntactically valid and must not drift from the prose workflow that surrounds them

---

**Concrete decision:**
You do not need another separate constitution file.
You need one strong constitution that governs the split planning workflow, the tasks review gate, the implementation workflow, and the fallback one-shot workflow, plus the handoff into `DOC/PROJECT PLAN/ai-context.yaml` and `DOC/PROJECT PLAN/Tasks/tasks.md`.
