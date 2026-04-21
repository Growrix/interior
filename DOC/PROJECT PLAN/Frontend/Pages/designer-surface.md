# Designer Surface

## Routes Covered

- `/designer/dashboard`
- `/designer/profile`
- `/designer/portfolio`
- `/designer/inquiries`
- `/designer/bookings`
- `/designer/messages`
- `/designer/content`
- `/designer/events`
- `/designer/shop`
- `/designer/settings`

## Surface Goal

Help designers maintain a high-quality public presence, manage leads, and operate optional content/event/shop surfaces without losing sight of profile quality and response speed.

## Navigation Model

Desktop:
- workspace sidebar with text labels, completeness chip, and quick-create action

Mobile:
- bottom tab with icon + label for `Dashboard`, `Portfolio`, `Leads`, `Messages`, `More`
- create actions open from floating or header action menu, not crowded into tab bar

## Key Screen Intent

Dashboard:
- profile completeness, new leads, upcoming consultations, content/event/shop shortcuts

Profile:
- editable sections with live preview summary and completeness meter

Portfolio:
- project list, draft/published segmentation, create/edit/reorder tools

Inquiries and Bookings:
- queue and timeline behavior with next-action emphasis

Messages:
- communication-first surface with unread grouping and quick context cards

Content / Events / Shop:
- management lists plus creation entry; each uses shared list-detail or form-preview patterns

Settings:
- account, notifications, trust/verification cues, support links

## Acceptance Criteria

- designers always see profile or content completeness context without it dominating every screen
- project management differentiates draft from published status visually and semantically
- mobile actions prioritize adding/editing content and responding to leads without becoming icon clutter

## Anti-Patterns

- using public-facing card styles for operational editing surfaces
- burying lead-response actions behind multiple nested menus on mobile
