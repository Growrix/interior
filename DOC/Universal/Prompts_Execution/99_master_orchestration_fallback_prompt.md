# Master Orchestration Prompt (Reusable Fallback)

**Purpose:**
This is the fallback one-shot prompt for generating a complete documentation set for any project using the universal role-based orchestration system. It always includes the frontend phase. It does not implement product code. It orchestrates the GPT roles in sequence so AI creates or updates the correct files from `DOC/MASTER PLAN/Plan.md` into `DOC/PROJECT PLAN/`.

## Machine-Readable Prompt Contract

```yaml
prompt_id: universal.prompts.99
stage: documentation-generation
mode: full-managed-sequence
universal_inputs:
   - DOC/MASTER PLAN/Plan.md
   - DOC/Universal/GPT ROLES/ai-context.yaml
   - DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
   - DOC/Universal/Execution Constitution.md
role_sequence:
   - DOC/Universal/GPT ROLES/Fullstack_Contract_Orchestrator.md
   - DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md
   - DOC/Universal/GPT ROLES/Backend_System_Planner.md
   - DOC/Universal/GPT ROLES/API_Data_Contract_Architect.md
   - DOC/Universal/GPT ROLES/Security_Compliance_Trust_Architect.md
   - DOC/Universal/GPT ROLES/DevOps_Reliability_Release_Planner.md
   - DOC/Universal/GPT ROLES/QA_Test_Release_Governor.md
project_inputs:
   - DOC/PROJECT PLAN/
authoritative_outputs:
   - DOC/PROJECT PLAN/ai-context.yaml
   - DOC/PROJECT PLAN/README.md
   - DOC/PROJECT PLAN/Shared Contracts/
   - DOC/PROJECT PLAN/Frontend/
   - DOC/PROJECT PLAN/Backend/
   - DOC/PROJECT PLAN/API and Data/
   - DOC/PROJECT PLAN/Security/
   - DOC/PROJECT PLAN/DevOps/
   - DOC/PROJECT PLAN/QA/
precedence:
   - DOC/MASTER PLAN/Plan.md defines original business intent.
   - Each later role must consume earlier generated docs rather than silently replacing them.
stop_condition: Documentation only. No implementation.
```

---

## How To Use

Use this prompt with your project plan source `DOC/MASTER PLAN/Plan.md` only when you intentionally want one managed orchestration request.

The AI must read the universal orchestration system, follow the strict role sequence, and generate the full documentation set for any project, always including frontend.

If you need deeper reasoning, tracked handoff, and reviewed execution planning, use the numbered planning chain in `DOC/Universal/Prompts_planning/` and the later handoff prompts in `DOC/Universal/Prompts_Execution/` instead of this fallback prompt.

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
6. DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md
7. DOC/Universal/GPT ROLES/Backend_System_Planner.md
8. DOC/Universal/GPT ROLES/API_Data_Contract_Architect.md
9. DOC/Universal/GPT ROLES/Security_Compliance_Trust_Architect.md
10. DOC/Universal/GPT ROLES/DevOps_Reliability_Release_Planner.md
11. DOC/Universal/GPT ROLES/QA_Test_Release_Governor.md

Your job is to generate or update the full documentation set in DOC/PROJECT PLAN/ by orchestrating the GPT roles in strict sequence, always including the frontend phase.

You are not implementing the website or product code yet.
You are creating the implementation-ready documentation that later execution will follow.

Execution model:
1. Inspect DOC/PROJECT PLAN/ to see what already exists.
2. Create or refresh DOC/PROJECT PLAN/ai-context.yaml and DOC/PROJECT PLAN/README.md as the project root entrypoint.
3. Run the role workflow sequentially, never in parallel.
4. Every later phase must read the artifacts created by earlier phases.
5. Re-read the matching role file immediately before each phase writes outputs.
6. If a valid existing folder already exists, reuse and normalize it instead of blindly replacing it.

Role sequence (always include frontend):
1. Fullstack_Contract_Orchestrator
   - Output: DOC/PROJECT PLAN/Shared Contracts/
2. Frontend_UIUX_Generator
   - Output: DOC/PROJECT PLAN/Frontend/
3. Backend_System_Planner
   - Output: DOC/PROJECT PLAN/Backend/
4. API_Data_Contract_Architect
   - Output: DOC/PROJECT PLAN/API and Data/
5. Security_Compliance_Trust_Architect
   - Output: DOC/PROJECT PLAN/Security/
6. DevOps_Reliability_Release_Planner
   - Output: DOC/PROJECT PLAN/DevOps/
7. QA_Test_Release_Governor
   - Output: DOC/PROJECT PLAN/QA/

For each role output folder, generate at minimum:
- ai-context.yaml
- README.md
- any additional role-specific markdown files required by that role

Strict orchestration rules:
- Do not invent requirements outside DOC/MASTER PLAN/Plan.md unless clearly marked as assumptions.
- Do not skip, reorder, or merge phases.
- Do not let one role write another role's documentation type.
- Do not start code implementation.
- If context becomes unclear, re-read the universal files and the project root ai-context.yaml before continuing.
- Keep DOC/PROJECT PLAN/ai-context.yaml updated so it remains the canonical AI entrypoint after generation is complete.

Final outcome:
Produce a complete, implementation-ready documentation system under DOC/PROJECT PLAN/ that is internally consistent, sequentially generated, and ready for the later build phase.
```

---

## Canonical Inputs

- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/Universal/GPT ROLES/Fullstack_Contract_Orchestrator.md`
- `DOC/Universal/GPT ROLES/Frontend_UIUX_Generator.md`
- `DOC/Universal/GPT ROLES/Backend_System_Planner.md`
- `DOC/Universal/GPT ROLES/API_Data_Contract_Architect.md`
- `DOC/Universal/GPT ROLES/Security_Compliance_Trust_Architect.md`
- `DOC/Universal/GPT ROLES/DevOps_Reliability_Release_Planner.md`
- `DOC/Universal/GPT ROLES/QA_Test_Release_Governor.md`

## Canonical Outputs

- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/README.md`
- `DOC/PROJECT PLAN/Shared Contracts/`
- `DOC/PROJECT PLAN/Frontend/`
- `DOC/PROJECT PLAN/Backend/`
- `DOC/PROJECT PLAN/API and Data/`
- `DOC/PROJECT PLAN/Security/`
- `DOC/PROJECT PLAN/DevOps/`
- `DOC/PROJECT PLAN/QA/`

## Important Decision

This file remains valid for one-shot orchestration, but it is no longer the recommended default when planning depth, review gates, and tracked execution matter.
For the preferred split workflow, use:
- `DOC/Universal/Prompts_planning/01_project_foundation_and_shared_contracts_prompt.md`
- `DOC/Universal/Prompts_planning/02_frontend_uiux_master_plan_prompt.md`
- `DOC/Universal/Prompts_planning/03_backend_system_master_plan_prompt.md`
- `DOC/Universal/Prompts_planning/04_api_security_devops_qa_prompt.md`
- `DOC/Universal/Prompts_Execution/05_tasks_planning_prompt.md`
- `DOC/Universal/Prompts_Execution/06_master_execution_prompt.md`

If you intentionally want frontend-first implementation before backend planning is complete, use `DOC/Universal/Prompts_Execution/06a_frontend_only_execution_prompt.md` after Shared Contracts and Frontend are locked.

After the documentation exists, the recommended full-project path is to run `DOC/Universal/Prompts_Execution/05_tasks_planning_prompt.md`, review `DOC/PROJECT PLAN/Tasks/tasks.md`, and only then use `DOC/Universal/Prompts_Execution/06_master_execution_prompt.md` for implementation.

