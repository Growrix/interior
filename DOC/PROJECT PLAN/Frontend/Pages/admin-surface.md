# Admin Surface

## Routes Covered

- `/admin`
- `/admin/users`
- `/admin/designers`
- `/admin/reviews`
- `/admin/content`
- `/admin/events`
- `/admin/shop`
- `/admin/reports`
- `/admin/support`
- `/admin/settings`

## Surface Goal

Support moderation, trust, and operational governance with high-density but controlled interfaces that remain legible and reversible.

## Layout Model

Desktop-first:
- persistent sidebar
- top search and scoped filters
- data grid or queue layout with bulk-action support where safe

Responsive fallback:
- tablet retains side navigation in collapsible form
- mobile supports review and urgent moderation only; it is not the ideal surface for dense batch work

## Key Screen Intent

Admin dashboard:
- queue summaries, risk indicators, urgent actions, health snapshot

Users / Designers:
- lookup, status filters, detail drawer, moderation or verification entry points

Reviews / Content / Events / Shop:
- moderation queues with clear evidence context and reversible action confirmation

Reports / Support:
- issue queue, severity indicators, workflow ownership cues

Settings:
- platform configuration summaries and admin-only controls

## State Rules

- empty states show queue health, not generic emptiness
- destructive actions require confirmation with context summary
- permission gating must remove unavailable actions rather than teasing them

## Acceptance Criteria

- admin layouts prioritize scan speed and evidence visibility over decorative presentation
- status chips and queue groupings remain consistent across moderation domains
- mobile access does not hide confirmation context for risky actions

## Anti-Patterns

- reusing public-site visual compositions in admin tables and queues
- icon-only destructive actions
- actions that look immediate but actually depend on background moderation rules not surfaced in UI
