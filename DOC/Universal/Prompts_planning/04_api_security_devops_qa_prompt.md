# API Security DevOps QA Prompt

**Purpose:**
This is the fourth documentation-generation prompt in the split universal workflow. It completes the remaining documentation phases in one managed sequence after Shared Contracts, Frontend, and Backend planning are already stable.

## Machine-Readable Prompt Contract

```yaml
prompt_id: universal.prompts.04
stage: documentation-generation
mode: multi-role-sequential
universal_inputs:
  - DOC/MASTER PLAN/Plan.md
  - DOC/Universal/GPT ROLES/ai-context.yaml
  - DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
  - DOC/Universal/Execution Constitution.md
role_sequence:
  - name: API_Data_Contract_Architect
    file: DOC/Universal/GPT ROLES/API_Data_Contract_Architect.md
  - name: Security_Compliance_Trust_Architect
    file: DOC/Universal/GPT ROLES/Security_Compliance_Trust_Architect.md
  - name: DevOps_Reliability_Release_Planner
    file: DOC/Universal/GPT ROLES/DevOps_Reliability_Release_Planner.md
  - name: QA_Test_Release_Governor
    file: DOC/Universal/GPT ROLES/QA_Test_Release_Governor.md
project_inputs:
  - DOC/PROJECT PLAN/ai-context.yaml
  - DOC/PROJECT PLAN/README.md
  - DOC/PROJECT PLAN/Shared Contracts/
  - DOC/PROJECT PLAN/Frontend/
  - DOC/PROJECT PLAN/Backend/
authoritative_outputs:
  - DOC/PROJECT PLAN/API and Data/
  - DOC/PROJECT PLAN/Security/
  - DOC/PROJECT PLAN/DevOps/
  - DOC/PROJECT PLAN/QA/
  - DOC/PROJECT PLAN/ai-context.yaml
  - DOC/PROJECT PLAN/README.md
precedence:
  - DOC/MASTER PLAN/Plan.md remains the origin intent source.
  - Shared Contracts, Frontend, and Backend docs define current planning truth entering this prompt.
  - Later internal roles may refine outputs only through explicit documented conflict resolution.
stop_condition: Documentation only. No implementation.
```

---

## When To Use

Use this prompt only after the first three prompts are complete and reviewed.

This prompt groups the remaining four phases because they are still sequential, but they depend more on earlier artifacts than on separate blank-page reasoning.

---

## Canonical Prompt Body

```text
Start by loading the universal planning package.

Before generating anything, read these files in order:
1. DOC/MASTER PLAN/Plan.md
2. DOC/Universal/GPT ROLES/ai-context.yaml
3. DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
4. DOC/Universal/Execution Constitution.md
5. DOC/Universal/GPT ROLES/API_Data_Contract_Architect.md
6. DOC/Universal/GPT ROLES/Security_Compliance_Trust_Architect.md
7. DOC/Universal/GPT ROLES/DevOps_Reliability_Release_Planner.md
8. DOC/Universal/GPT ROLES/QA_Test_Release_Governor.md
9. DOC/PROJECT PLAN/ai-context.yaml
10. DOC/PROJECT PLAN/README.md
11. DOC/PROJECT PLAN/Shared Contracts/ai-context.yaml
12. DOC/PROJECT PLAN/Shared Contracts/README.md
13. DOC/PROJECT PLAN/Frontend/ai-context.yaml
14. DOC/PROJECT PLAN/Frontend/README.md
15. DOC/PROJECT PLAN/Backend/ai-context.yaml
16. DOC/PROJECT PLAN/Backend/README.md
17. Any additional files inside Shared Contracts, Frontend, and Backend needed to understand routes, states, integrations, auth, storage, and unresolved assumptions

Your job in this step is to complete the remaining documentation phases in strict internal sequence under DOC/PROJECT PLAN/.

Internal role sequence:
1. API_Data_Contract_Architect
    - Output: DOC/PROJECT PLAN/API and Data/
2. Security_Compliance_Trust_Architect
    - Output: DOC/PROJECT PLAN/Security/
3. DevOps_Reliability_Release_Planner
    - Output: DOC/PROJECT PLAN/DevOps/
4. QA_Test_Release_Governor
    - Output: DOC/PROJECT PLAN/QA/

Required execution model:
1. Run the internal role sequence strictly in order.
2. Every later internal phase must read the artifacts created by earlier internal phases.
3. Re-read the matching role file immediately before each internal phase writes outputs.
4. Reuse and normalize valid existing content instead of blindly replacing it.
5. At the end, refresh DOC/PROJECT PLAN/ai-context.yaml and DOC/PROJECT PLAN/README.md so they reflect the completed documentation system.

For each internal output folder, generate at minimum:
- ai-context.yaml
- README.md
- any additional role-specific markdown files required by that role

Phase requirements:

API and Data phase must:
- freeze canonical entities, schemas, events, statuses, APIs, and naming
- resolve conflicts between frontend needs and backend design explicitly
- record migration and versioning expectations where relevant

Security phase must:
- harden auth, authorization, privacy, auditability, abuse protection, and trust boundaries
- validate that security controls match the shared contract and backend architecture

DevOps phase must:
- define environments, CI/CD, deployment strategy, observability, rollback, recovery, and release controls
- consume the operational requirements from Backend and Security docs

QA phase must:
- define test strategy, contract validation, end-to-end flows, release gates, and post-deploy checks
- validate the whole documentation system as one releaseable plan

Strict rules:
- Use DOC/MASTER PLAN/Plan.md as an intent cross-check, but do not let it silently override approved project docs.
- Do not skip, reorder, or merge the internal four phases.
- Do not let any later phase silently change Shared Contracts, Frontend, or Backend truth.
- If a conflict is discovered, resolve it explicitly in documentation instead of silently choosing one side.
- Do not start code implementation.

Final outcome:
Produce a complete, implementation-ready documentation system under DOC/PROJECT PLAN/ with API/Data, Security, DevOps, and QA fully aligned to the first three planning steps.
```

---

## Canonical Inputs

- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/Universal/GPT ROLES/API_Data_Contract_Architect.md`
- `DOC/Universal/GPT ROLES/Security_Compliance_Trust_Architect.md`
- `DOC/Universal/GPT ROLES/DevOps_Reliability_Release_Planner.md`
- `DOC/Universal/GPT ROLES/QA_Test_Release_Governor.md`
- `DOC/PROJECT PLAN/ai-context.yaml`
- `DOC/PROJECT PLAN/README.md`
- `DOC/PROJECT PLAN/Shared Contracts/`
- `DOC/PROJECT PLAN/Frontend/`
- `DOC/PROJECT PLAN/Backend/`

## Canonical Outputs

- `DOC/PROJECT PLAN/API and Data/`
- `DOC/PROJECT PLAN/Security/`
- `DOC/PROJECT PLAN/DevOps/`
- `DOC/PROJECT PLAN/QA/`
- refreshed `DOC/PROJECT PLAN/ai-context.yaml`
- refreshed `DOC/PROJECT PLAN/README.md`

## Important Decision

This is the only split-workflow prompt that contains multiple roles, and it is allowed because those roles are still executed sequentially inside the same managed request.