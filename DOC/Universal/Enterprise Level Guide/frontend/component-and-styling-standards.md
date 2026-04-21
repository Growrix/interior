# Component and Styling Standards

## Purpose

This document governs how frontend components should be structured, reused, and styled in the universal workflow.

## Component Taxonomy

### Primitives

- Buttons
- inputs
- badges
- cards
- dialogs
- tables
- tabs
- steppers

These belong in shared component layers and must remain business-agnostic.

### Feature Components

- queue status panels
- demo request forms
- payment upgrade prompts
- project timelines
- chat threads
- maintenance ticket forms

These belong in feature modules and may depend on domain-specific types and states.

## Component Rules

- Prefer composition over monolithic components.
- Shared components must not import feature-specific modules.
- Feature components may wrap shared primitives but should not duplicate them.
- Complex widgets should expose explicit props for status, permissions, and actions.
- Every public-facing component must map to a documented primitive, pattern, or approved composite.
- If a component introduces a new visual pattern, the design system documentation must be updated before implementation is considered complete.
- Route files must not become component graveyards for one-off hero, CTA, metric, or card variants.

## Styling Standards

- Use Tailwind CSS with a documented token system for color, spacing, radius, and typography.
- Establish semantic color usage for status families such as success, warning, danger, info, and neutral.
- Admin and developer surfaces may use denser operational layouts, while public and client surfaces should prioritize readability.
- Avoid hard-coded status colors across components. Use shared variants.
- Avoid hard-coded spacing, font sizing, icon sizing, alignment offsets, or ad-hoc responsive overrides in route-level code.
- Content-bearing public components should consume centralized content/configuration where the product plan defines shared content sources.

## Design Token Expectations

- Define brand tokens for primary, secondary, accent, surface, border, text, and muted text.
- Define semantic tokens for queue state, payment state, maintenance state, and system alerts.
- Keep typography and spacing scales consistent across surfaces.
- Define tokens for icon sizes, surface density, container widths, and breakpoint-specific type behavior.
- Define composition tokens or documented layout rules for hero spacing, proof modules, section transitions, and sticky actions.

## Layout Standards

- Use a consistent shell pattern for each dashboard type.
- Preserve predictable header, navigation, content, and action regions.
- Avoid layout shifts during async loads where possible.
- Public page layouts must use approved composition patterns rather than ad-hoc wrapper stacks.
- Mobile layouts must specify drawer, toggle, bottom action, and sticky CTA behavior through reusable patterns when those behaviors are required.

## Component Registry Expectations

- Maintain a registry of approved primitives, composites, and page-section patterns.
- Each registry entry should define purpose, allowed variants, token dependencies, breakpoint behavior, and accessibility requirements.
- Implementation work must reference the registry instead of inventing unnamed section structures in route files.

## Acceptance Criteria Expectations

- Public components should include measurable acceptance criteria for breakpoint behavior, alignment, state handling, and DS token usage.
- Hero, header, navigation, and CTA components should include explicit mobile acceptance criteria.

## Table and Timeline Standards

- Operational tables must support sorting, filtering, and clear status visibility.
- Timelines and steppers must align with documented lifecycle stages.
- Avoid hiding critical project state inside expandable controls by default.

## Comment and Naming Standards

- Name components by responsibility, not screen placement.
- Add comments only for non-obvious interaction logic or rendering constraints.
- Keep prop names explicit. Prefer `projectStatus` over `status` when ambiguity is possible.

## Anti-Patterns

- Duplicating the same conceptual component under different names because pages were designed independently.
- Encoding visual rules directly in route files instead of registry-backed components.
- Introducing bespoke mobile-only markup that bypasses the shared navigation or action patterns.