---
document_type: workflow-playbook
scope: universal-role-orchestration
recommended_start: Fullstack_Contract_Orchestrator
---

# Documentation Workflow Playbook

## Purpose

- This file defines the practical workflow for using the GPT role system without losing architectural alignment.
- It exists so documentation is built in a controlled sequence instead of ad hoc role switching.

## Short Answer

- Do not ask all roles to generate everything at once in one uncontrolled prompt.
- Do not start with frontend or backend in isolation.
- Start with one orchestrated contract phase, then move through specialized roles in sequence.

## What To Do With An Existing Frontend Plan

- Do not delete an existing plan immediately only because it was created before orchestration.
- Treat it as a draft or legacy artifact.
- First, run the contract orchestration pass and compare the old plan against the new shared contract.
- Keep, revise, or replace sections only after that comparison.

Delete only if the old plan is structurally incompatible and would create confusion.

## Recommended Workflow

### Phase 0: Source Of Truth Setup

Goal:
- define one canonical planning root
- define one AI-first entrypoint
- define one human index

Required outputs:
- `ai-context.yaml`
- `README.md`

### Phase 1: Shared Contract Blueprint

Role:
- Fullstack Contract Orchestrator

Goal:
- define the system before specialization starts

This phase should lock:
- product scope
- surfaces
- role boundaries
- route map
- domain entities
- lifecycle states
- integration inventory
- non-functional requirements
- implementation sequence

Output rule:
- no specialized role should override this layer silently

### Phase 2: Frontend Planning

Role:
- Frontend UIUX Generator

Goal:
- build UI planning from the shared contract

Input rule:
- frontend must consume the shared contract before page planning

Output rule:
- frontend may define presentation and interaction
- frontend may not invent server-backed states, payloads, permissions, or integration behavior

### Phase 3: Backend Planning

Role:
- Backend System Planner

Goal:
- build backend architecture from the same shared contract

Output rule:
- backend must stay compatible with the route, role, and workflow definitions already locked in Phase 1

### Phase 4: API And Data Freeze

Role:
- API Data Contract Architect

Goal:
- convert the shared product model into canonical APIs, schemas, events, and status contracts

Why this phase is after frontend and backend planning:
- by this point both sides have context
- now the interface layer can be normalized and conflict-checked

### Phase 5: Security And Trust Hardening

Role:
- Security Compliance Trust Architect

Goal:
- harden auth, authorization, privacy, auditability, abuse protection, and trust boundaries

### Phase 6: DevOps And Release Planning

Role:
- DevOps Reliability Release Planner

Goal:
- define environments, release strategy, observability, recovery, rollout controls, and operational safety

### Phase 7: QA And Release Governance

Role:
- QA Test Release Governor

Goal:
- define test coverage, contract verification, end-to-end scenarios, release gates, and post-deploy checks

## Best Execution Model

Use a controlled one-by-one workflow with artifacts carried forward.

That means:
- one role runs
- it writes files
- next role reads those files
- next role extends or validates, not reinvents

This is the safest model.

## Recommended Universal Prompt Split

For reusable universal prompts, use this 6-step split:

1. Project foundation and Shared Contracts
2. Frontend planning
3. Backend planning
4. API and Data, then Security, then DevOps, then QA
5. Tasks planning and review gate
6. Implementation execution

Why this split works:
- Shared Contracts is the first source-of-truth lock
- Frontend needs its own deep reasoning pass
- Backend also needs its own deep reasoning pass
- the last four phases are still sequential, but they mostly freeze, harden, operationalize, and validate earlier work
- tasks planning gives execution one explicit ordered source of truth before coding begins
- execution can stay strict because it reads both the project docs and the reviewed task plan

This keeps the required sequence intact while reducing reasoning compression in the most architecture-heavy phases.

## Universal Prompt Package

Every universal prompt should load the same base package before any project-specific work:

1. `DOC/MASTER PLAN/Plan.md`
2. `DOC/Universal/GPT ROLES/ai-context.yaml`
3. `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
4. `DOC/Universal/Execution Constitution.md`
5. the bound GPT role file or the completed role outputs the prompt depends on

Interpretation rule:
- `DOC/MASTER PLAN/Plan.md` is the origin source for business intent
- project-specific docs become the current working truth once they are created
- tasks.md becomes the implementation ordering truth after review

## How Prompts Call Roles

- `01_project_foundation_and_shared_contracts_prompt.md` binds to `Fullstack_Contract_Orchestrator.md`
- `02_frontend_uiux_master_plan_prompt.md` binds to `Frontend_UIUX_Generator.md`
- `03_backend_system_master_plan_prompt.md` binds to `Backend_System_Planner.md`
- `04_api_security_devops_qa_prompt.md` runs `API_Data_Contract_Architect.md`, then `Security_Compliance_Trust_Architect.md`, then `DevOps_Reliability_Release_Planner.md`, then `QA_Test_Release_Governor.md`
- `05_tasks_planning_prompt.md` does not introduce a new role; it synthesizes the outputs produced by all prior roles
- `06_master_execution_prompt.md` does not introduce a new role; it executes the approved task plan against the role-generated project docs
- `99_master_orchestration_fallback_prompt.md` runs the full role chain sequentially inside one managed request

## Handoff To Execution

After project documentation is complete:

1. run `05_tasks_planning_prompt.md` to generate `DOC/PROJECT PLAN/Tasks/tasks.md`
2. review that tasks file
3. run `06_master_execution_prompt.md` only after approval

This handoff prevents the common failure mode where good documentation exists but execution starts without a concrete ordered build plan.

## When To Use All-In-One Prompts

You may use one large prompt only for a managed orchestration request, not for simultaneous freeform generation.

In that case the prompt must explicitly say:
- first create the shared contract blueprint
- then generate frontend from it
- then generate backend from it
- then freeze API and data contracts
- then harden security, DevOps, and QA
- every later phase must read earlier artifacts before writing new ones

So even in an all-in-one request, the internal execution must still be sequential.

## Recommended Folder Strategy

Use one root planning folder per project with this pattern:

- `ai-context.yaml`
- `README.md`
- shared contract docs
- frontend docs
- backend docs
- api and data docs
- security docs
- ops docs
- quality docs
- tasks docs

Do not scatter each role into unrelated folders without one root entrypoint.

## Prompt Pattern

Every prompt should include these fields:

- universal input package
- role to use
- role file to read
- target folder
- first file to read
- files that are already source of truth
- exact output scope
- instruction not to invent conflicting contracts

## Prompt Templates

### 1. Contract Blueprint Prompt

```text
Read DOC/MASTER PLAN/Plan.md, DOC/Universal/GPT ROLES/ai-context.yaml, DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md, DOC/Universal/Execution Constitution.md, and DOC/Universal/GPT ROLES/Fullstack_Contract_Orchestrator.md in order.
Use the Fullstack Contract Orchestrator role.
Create the shared contract blueprint for this project in [target folder].
Generate ai-context.yaml, README.md, product requirements, system architecture, module boundaries, route and surface map, domain states, integration inventory, and implementation sequence.
This is the source-of-truth phase. Do not write frontend-only or backend-only assumptions as facts unless they are explicitly marked as assumptions.
```

### 2. Frontend Planning Prompt

```text
Read DOC/MASTER PLAN/Plan.md, DOC/Universal/GPT ROLES/ai-context.yaml, DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md, DOC/Universal/Execution Constitution.md, DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md, and then [project ai-context.yaml].
Use the Frontend UIUX Generator role.
Read the shared contract docs first.
Generate the frontend plan in [target folder or frontend subfolder].
Do not invent payloads, permissions, server states, or integration side effects.
If any backend contract is missing, record it in an assumptions ledger instead of inventing behavior.
```

### 3. Backend Planning Prompt

```text
Read DOC/MASTER PLAN/Plan.md, DOC/Universal/GPT ROLES/ai-context.yaml, DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md, DOC/Universal/Execution Constitution.md, DOC/Universal/GPT ROLES/Backend_System_Planner.md, and then [project ai-context.yaml].
Use the Backend System Planner role.
Read the shared contract docs first.
Generate backend architecture, service rules, auth, storage, integrations, observability, and operational patterns.
Support the provider categories actually justified by the project docs. Reusable examples may include storage, email, payments, realtime, cache, queue, identity, or equivalent provider classes, but they are not mandatory defaults.
Do not invent workflows that conflict with the shared blueprint.
```

## Machine-Readable Alignment Rule

- The prose workflow, ai-context routing, prompt README, and prompt-contract YAML blocks must all describe the same sequence and authority model.
- If one of those layers changes, the others must be updated in the same review pass.
- Example prompt snippets in this playbook must follow the same universal input package as the canonical prompt docs.

### 4. API And Data Contract Prompt

```text
Read DOC/MASTER PLAN/Plan.md, DOC/Universal/GPT ROLES/ai-context.yaml, DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md, DOC/Universal/Execution Constitution.md, DOC/Universal/GPT ROLES/API_Data_Contract_Architect.md, and then [project ai-context.yaml].
Use the API Data Contract Architect role.
Read the shared contract docs plus the current frontend and backend docs.
Freeze canonical entities, status models, APIs, event contracts, and migration expectations.
Resolve naming or lifecycle conflicts explicitly instead of silently choosing one side.
```

### 5. Security Prompt

```text
Read DOC/MASTER PLAN/Plan.md, DOC/Universal/GPT ROLES/ai-context.yaml, DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md, DOC/Universal/Execution Constitution.md, DOC/Universal/GPT ROLES/Security_Compliance_Trust_Architect.md, and then [project ai-context.yaml].
Use the Security Compliance Trust Architect role.
Read the shared contract, backend, and API/data docs first.
Generate auth, authorization, tenant isolation, privacy, abuse protection, auditability, and incident guidance.
```

### 6. DevOps Prompt

```text
Read DOC/MASTER PLAN/Plan.md, DOC/Universal/GPT ROLES/ai-context.yaml, DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md, DOC/Universal/Execution Constitution.md, DOC/Universal/GPT ROLES/DevOps_Reliability_Release_Planner.md, and then [project ai-context.yaml].
Use the DevOps Reliability Release Planner role.
Read the shared contract, backend, API/data, and security docs first.
Generate environment strategy, CI/CD, observability, rollout, rollback, capacity, and recovery docs.
```

### 7. QA Prompt

```text
Read DOC/MASTER PLAN/Plan.md, DOC/Universal/GPT ROLES/ai-context.yaml, DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md, DOC/Universal/Execution Constitution.md, DOC/Universal/GPT ROLES/QA_Test_Release_Governor.md, and then [project ai-context.yaml].
Use the QA Test Release Governor role.
Read the shared contract, frontend, backend, API/data, security, and DevOps docs first.
Generate test strategy, contract matrix, e2e scenarios, release gates, and post-deploy validation.
```

## If You Want One Master Prompt

Use this shape:

```text
Read DOC/MASTER PLAN/Plan.md, DOC/Universal/GPT ROLES/ai-context.yaml, DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md, and DOC/Universal/Execution Constitution.md first.
Follow the role orchestration sequence strictly.

Phase 1: use Fullstack Contract Orchestrator to create the shared blueprint.
Phase 2: use Frontend UIUX Generator to create frontend docs from the shared blueprint.
Phase 3: use Backend System Planner to create backend docs from the same shared blueprint.
Phase 4: use API Data Contract Architect to freeze schemas, APIs, events, and states.
Phase 5: use Security Compliance Trust Architect to harden permissions, privacy, and trust boundaries.
Phase 6: use DevOps Reliability Release Planner to create release and operations docs.
Phase 7: use QA Test Release Governor to create testing and release gate docs.

Every phase must read the artifacts created by earlier phases.
No phase may silently invent a conflicting contract.
If conflict appears, write a conflict-resolution section before continuing.
```

## Practical Recommendation

- For high-quality output, use one-by-one role execution.
- For speed, use a master orchestration prompt, but force sequential phases inside the prompt.
- The orchestrator phase is mandatory either way.

## Final Rule

- The workflow is not role-by-role improvisation.
- The workflow is contract first, specialization second, hardening third, release validation last.