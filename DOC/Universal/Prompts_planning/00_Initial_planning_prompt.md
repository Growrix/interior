# Initial Planning Prompt

**Purpose:**
This is the reusable intake prompt for turning a rough idea into a human-grade initial plan. It is the recommended first step when `DOC/MASTER PLAN/Plan.md` is empty, outdated, or still too vague to drive the rest of the workflow.

## Machine-Readable Prompt Contract

```yaml
prompt_id: universal.prompts.00
stage: intake-and-initial-planning
mode: single-role
universal_inputs:
  - DOC/MASTER PLAN/Plan.md
  - DOC/Universal/GPT ROLES/ai-context.yaml
  - DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
  - DOC/Universal/Execution Constitution.md
role_binding:
  name: Planning_Agent
  file: DOC/Universal/GPT ROLES/Planning_Agent.md
authoritative_outputs:
  - DOC/MASTER PLAN/Plan.md
precedence:
  - The filled intake brief in this prompt is the primary source of truth for this step.
  - Existing DOC/MASTER PLAN/Plan.md may be reused if valid, but it must be refreshed to match the current request.
stop_condition: Initial planning only. No project-specific documentation generation. No implementation.
```

---

## When To Use

Use this prompt when you have an idea but do not yet have a strong master plan.

Use it before the numbered project-planning prompts when you want `DOC/MASTER PLAN/Plan.md` to become the clean starting source for the rest of the documentation workflow.

---

## Fillable Intake Area

I want to build a Interior Design website, which will be a platform for interior designers to showcase their work and connect with potential clients. The website will have a clean and modern design, with a focus on high-quality images of interior design projects.

The main features of the website will include:
1. Portfolio: Interior designers will be able to create a portfolio of their work, showcasing their projects with high-quality images and descriptions.
2. Search and Filter: Potential clients will be able to search for interior designers based on location, style, and budget. They will also be able to filter results based on specific criteria such as project type (residential, commercial, etc.) and design style (modern, traditional, etc.).
3. Contact and Booking: Clients will be able to contact interior designers directly through the website to inquire about their services and book consultations. The website will have a messaging system to facilitate communication between designers and clients.
4. Reviews and Ratings: Clients will be able to leave reviews and ratings for interior designers they have worked with, helping other potential clients make informed decisions when choosing a designer.5. Blog: The website will also feature a blog section where interior designers can share design tips, trends, and insights with their audience. This will help establish the website as a valuable resource for interior design enthusiasts and professionals alike.
6. Events and Workshops: The website will have a section dedicated to upcoming events and workshops related to interior design. This will allow designers to promote their events and provide opportunities for clients to learn more about the industry.
7. E-commerce: The website will also have an e-commerce section where interior designers can sell design-related products such as furniture, decor, and accessories. This will provide an additional revenue stream for designers and allow clients to easily purchase items they see in the designers' portfolios.
8. AI chat assistant: The website will feature an AI chat assistant that can help users navigate the site, answer questions about interior design, and provide personalized recommendations based on user preferences. This will enhance the user experience and make it easier for clients to find the right designer for their needs.

I want you to more focus on the user experience and beautiful design of the website, ensuring that it is easy to navigate and visually appealing. The website will be responsive, allowing users to access it from any device, including desktops, tablets, and App like mobile phones. The design will incorporate a clean and modern aesthetic, with a focus on high-quality images and a user-friendly interface. The color scheme will be neutral and sophisticated, with accents of color to highlight important elements and create visual interest. Overall, the goal is to create a platform that not only showcases the work of interior designers but also provides an enjoyable and seamless experience for users.


## Canonical Prompt Body

```text
Start by loading the universal planning package.

Before generating anything, read these files in order:
1. DOC/MASTER PLAN/Plan.md
2. DOC/Universal/GPT ROLES/ai-context.yaml
3. DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md
4. DOC/Universal/Execution Constitution.md
5. DOC/Universal/GPT ROLES/Planning_Agent.md

Bind this prompt to the Planning_Agent role only.

Your job in this step is to convert the filled intake brief into a high-quality initial planning document and write the result into DOC/MASTER PLAN/Plan.md.

Required execution model:
1. Read the filled intake brief in this prompt as the primary source.
2. Inspect DOC/MASTER PLAN/Plan.md and reuse any still-valid content.
3. Rewrite DOC/MASTER PLAN/Plan.md as a clean, structured initial planning artifact.
4. Keep the output generic enough to support any build type unless the intake brief explicitly narrows the domain.
5. Label assumptions, risks, and open questions explicitly instead of hiding uncertainty.

The output written to DOC/MASTER PLAN/Plan.md must include, when relevant:
- project or build summary
- problem or opportunity statement
- target users or stakeholders
- goals and success criteria
- in-scope areas
- out-of-scope items
- major features, spaces, pages, or modules
- user or stakeholder workflow summary
- style or experience direction
- constraints
- assumptions
- risks and open questions
- recommended next planning steps

Strict rules:
- Do not start implementation.
- Do not generate project-specific folders in this step.
- Do not invent deep architecture, data contracts, or delivery tasks unless they are explicitly part of the initial request.
- Treat the filled intake brief as more important than stale content already in DOC/MASTER PLAN/Plan.md.
- Produce an output that a human can review quickly and that later prompts can use as the original business-intent source.

Final outcome:
Deliver a reusable, human-grade initial plan in DOC/MASTER PLAN/Plan.md.
```

---

## Canonical Inputs

- `DOC/MASTER PLAN/Plan.md`
- `DOC/Universal/GPT ROLES/ai-context.yaml`
- `DOC/Universal/GPT ROLES/Documentation_Workflow_Playbook.md`
- `DOC/Universal/Execution Constitution.md`
- `DOC/Universal/GPT ROLES/Planning_Agent.md`

## Canonical Output

- `DOC/MASTER PLAN/Plan.md`

## Important Decision

This prompt is the reusable intake stage for the full workflow. Run it first whenever the master plan needs to be created, reset, or substantially clarified before deeper project planning begins.