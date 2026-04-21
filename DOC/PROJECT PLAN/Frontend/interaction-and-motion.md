# Interaction And Motion

## Navigation Behavior

### Public desktop
- header starts airy and translucent over hero zones, becomes solid after scroll threshold
- nav uses text labels first; icons are supporting only for search, saved, account, or AI guide shortcuts
- mega menus are not recommended; use concise route groups and spotlight cards only where needed

### Public mobile
- menu trigger opens full-height drawer from the right or bottom sheet from the bottom depending on route density
- drawer content order: primary discovery links, secondary learning/shop links, trust/support links, account actions
- each primary drawer item uses icon + label + optional short descriptor
- global search opens as a modal sheet with recent searches and suggested quick filters

### High-intent sticky actions
Use sticky bottom action bars on mobile for:
- designer profile: `Save`, `Message`, `Book`
- project detail: `Save`, `View Designer`, `Book`
- product detail: `Save`, `Add to Cart` or `Visit Store`
- event detail: `Save`, `Register` or `Contact Host`

Rules:
- max 3 actions in sticky bar
- primary action occupies largest affordance
- icons may appear, but labels stay mandatory

### Authenticated mobile navigation
- client and designer surfaces use bottom tabs with icon + label
- overflow destinations move into `More`
- deep screens keep the bottom tab bar only where it does not conflict with dense forms; otherwise use a contextual bottom action tray

## Iconography Rules

- icons accelerate recognition; they do not replace comprehension
- desktop top-level nav remains text-first
- mobile primary nav, filter triggers, trust markers, contact method chips, and status summaries may use icons
- never use icon-only navigation for first-time-discovery routes or destructive actions
- active nav state may switch from outline to filled icon, paired with stronger text color

## Form UX Rules

- multi-field forms group by task, not by backend object shape
- validation appears near the field and at summary level for long forms
- mobile keyboards, date pickers, and quantity steppers must not obscure primary submission actions
- interrupted submissions preserve user draft locally where feasible without implying server save

## Search And Filter Interactions

- filter changes may preview result count before apply on mobile if supported later; otherwise keep deterministic apply/reset model
- sorting controls remain single-tap and visible without entering advanced settings
- map-style interactions are optional and must not become the only location-discovery method

## Motion System

### Motion principles
- motion must guide attention, confirm action, or preserve context
- no decorative looping motion on primary reading surfaces
- all motion respects `prefers-reduced-motion`

### Recommended motion uses
- hero media fade/translate on first reveal
- drawer and sheet slide with opacity blend
- filter-chip activation via subtle color and scale change
- card hover or press elevation
- inline success confirmation for saved or inquiry actions

### Motion anti-patterns
- large parallax effects on image-heavy pages
- auto-advancing carousels in hero zones
- delayed page transitions that slow high-intent flows
- bounce or spring-heavy motion on premium editorial surfaces

## Accessibility Rules

- all drawers, sheets, dialogs, tabs, and sticky bars must expose focus order and screen-reader labels
- icon buttons need explicit accessible names
- touch targets remain at least 44x44 CSS px
- motion-based meaning must always have a static fallback cue
