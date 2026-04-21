# State And Client Data Flow

## Purpose

This file defines frontend state ownership, async-state behavior, and client-side interaction boundaries without inventing backend payloads or unsupported lifecycle states.

## State Ownership Model

### Server-authoritative state
Treat the following as server-authoritative and read-only from a contract perspective until backend/API planning freezes details:
- authentication and role recognition
- designer profile publication status
- portfolio publication status
- inquiry, booking, message, review, and order lifecycle state
- moderation decisions
- AI session retention or escalation status

### Client-managed view state
Frontend may own:
- local filter UI state
- sort mode and view density preferences
- drawer, sheet, tab, step, and modal visibility
- optimistic form draft state before submission
- saved comparison or shortlist view state only if backed by confirmed persistence later
- ephemeral assistant UI preferences and last-used prompt suggestions

### Cached remote state buckets
Organize client data by route family rather than by arbitrary component:
- public discovery datasets
- public detail datasets
- account dashboard summaries
- inbox / thread lists
- booking / inquiry queues
- content management lists
- moderation queues

## Loading, Empty, Error, Recovery Rules

### Discovery surfaces
- initial load uses skeleton search bar + result card placeholders
- empty search result state offers filter-reset and adjacent discovery links
- transient errors keep visible last-good filters and offer retry

### Detail surfaces
- media and proof load independently from non-critical related modules
- if related modules fail, the primary detail content must still render
- missing or hidden resources use polite recovery messaging, not broken galleries

### Authenticated queues
- preserve header, filters, and last-known counts during background refresh
- empty state must explain what action populates the queue
- permission errors use route-safe fallback and clear next step

### Forms and submissions
- field validation is inline and non-blocking where possible
- submission states must expose `idle`, `submitting`, `success`, `recoverable-error`
- user-facing wording must not invent backend error reasons beyond known categories

## Search, Filter, And Sort Behavior

- Public designers search is the primary browse-to-conversion stateful surface.
- Desktop uses persistent left or top filter regions depending on width.
- Mobile uses a filter sheet with sticky `Apply` and `Reset` actions and an active-filter count badge.
- Chips, pills, and toggles must reflect state consistently across search, saved views, and AI-guided links.

## Form State Boundaries

### Public contact / booking intent
- allow lightweight initiation path if backend later permits it
- if auth is required later, frontend must support interrupted flow continuation after sign-in

### Designer content management
- draft autosave behavior is allowed only as an assumption until backend supports it
- preview state remains clearly labeled as local preview until saved

### Commerce actions
- cart behavior must remain conditional until commerce model is frozen
- frontend must support both direct checkout and external-link fallback without rewriting page structure

## Permission And Role Rendering

- public routes never render protected record details
- route guards belong to app-shell level, not scattered component checks
- role-specific actions appear progressively based on confirmed access, with neutral placeholders or absence rather than misleading disabled clutter

## Analytics Hook Plan

Track at the UI layer without locking vendor details:
- search submitted
- filters applied / reset
- designer card opened
- project detail viewed
- inquiry started
- booking CTA clicked
- message thread opened
- review drafted / submitted
- product CTA clicked
- AI assistant opened / suggestion chosen

## Testability Expectations

- all primitives/composites expose stable selectors or story states
- route-level async states must be individually testable: default, loading, empty, success, error, permission-denied
- mobile drawer, bottom bar, and filter-sheet flows require interaction coverage
