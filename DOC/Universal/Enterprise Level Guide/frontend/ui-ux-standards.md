# UI and UX Standards

## Purpose

This document defines universal experience standards for products built with this workflow. The UI must communicate trust, clarity, and next actions without ambiguity, while remaining visually deliberate rather than template-flat.

## Experience Principles

- Clarity over decoration.
- Trust through explicit status and timelines.
- Actionability over density.
- Consistency across surfaces, with role-appropriate tone and controls.
- Professional polish without obscuring critical information.

## SaaS UX Rules

- Every role-facing screen must answer: what is happening, what is expected next, and what the user can do now.
- Queue, assignment, delivery, payment, and maintenance states must be visible as structured UI, not buried in paragraphs.
- Destructive actions require confirmation and visible consequences.
- Money-related flows must clearly distinguish pending, successful, failed, and refunded states.
- Empty states should guide the next meaningful action.

## Public UX Standards

- Showcase trust signals early: demo wall, reviews, process transparency, maintenance promise.
- Demo request flows should reduce friction while preserving data quality.
- Priority upsell messaging must be clear, honest, and non-deceptive.
- Public content must avoid suggesting that hidden routes are a security guarantee.
- Public pages must not all follow the same hero, card-grid, and CTA rhythm.
- Each major public route should feel like part of one system while still having a distinct information hierarchy and layout emphasis.
- Icon usage should support recognition and scan speed in nav, trust bands, quick actions, and dense information clusters.
- Hero sections must establish immediate visual hierarchy through composition, proof, and CTA structure rather than typography alone.

## Dashboard UX Standards

- Dashboards should begin with a summary layer, then expand into detailed workflow views.
- Tables and timelines must expose critical status, owner, urgency, and deadline information.
- Notifications should deep link into the exact area requiring attention.
- Chat and uploads must show confirmation, progress, and recovery states.

## Form Standards

- Required fields must be clearly marked.
- Validation must be immediate where helpful and final on submit.
- File constraints must be visible before upload.
- Long forms should be staged or grouped logically.
- Preserve user input on recoverable failure.

## Error and Recovery UX

- Authorization failures should redirect or block with a clear, non-leaky message.
- Recoverable server errors should provide retry guidance.
- Realtime interruptions should show reconnect state without discarding unsent user intent.
- Payment failures should preserve the original request state and explain the next step.

## Status Communication Standards

- Use consistent status labels across UI, API, and data docs.
- Pair badges with contextual explanation when the status has business implications.
- ETA should include both the current estimate and the reason it can change.

## Mobile and Responsive Standards

- All primary user tasks must be possible on small screens.
- Dense tables should collapse into cards or summary rows on mobile.
- Critical actions must remain reachable without hover-only interactions.
- Mobile navigation must define a visible entry pattern such as toggle, drawer, bottom action bar, or bottom navigation when route density or conversion pressure requires it.
- Touch-first public flows should define thumb-reachable primary actions instead of assuming desktop header patterns are sufficient.
- Typography, spacing, and section alignment must be reviewed per breakpoint; desktop values must not be blindly scaled down.
- If icons are part of the interaction model on desktop, their mobile behavior must be defined explicitly rather than omitted by default.

## Public Visual Composition Standards

- Page composition should alternate rhythm through contrast in layout, density, media treatment, proof modules, and CTA grouping.
- Hero sections should combine at least a headline group plus one of these: proof cluster, stat cluster, media block, quick action block, or product preview.
- Long pages should insert proof, trust, or transition modules before fatigue sets in.
- Visual differentiation must come from the design system and composition rules, not random one-off styling.

## Typography and Alignment Standards

- Type scale must be documented per breakpoint, with explicit display, heading, body, label, and caption usage.
- Text alignment shifts must be intentional and systemized; do not mix arbitrary centered and left-aligned blocks without a layout reason.
- Cards, forms, and content modules must share baseline spacing and heading alignment rules from the design system.

## Anti-Patterns

- Reusing one generic hero structure across all public pages.
- Omitting mobile navigation affordances on touch-heavy routes.
- Using text-only quick-scan blocks where icons or visual markers are required for speed and clarity.
- Allowing type sizes or spacing to drift between similar sections without a documented reason.

## Approval UX Standards

- Demo and delivery approval screens must distinguish between approve, request revision, and ask a question.
- Revision requests should route into the same project communication history.