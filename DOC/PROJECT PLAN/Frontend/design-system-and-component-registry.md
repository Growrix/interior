# Design System And Component Registry

## Brand Translation Into Tokens

### Type system
Recommended families:
- display: `Cormorant Garamond` or equivalent refined serif
- interface: `Manrope` or equivalent modern humanist sans
- mono/data: `IBM Plex Mono` or equivalent

Type roles:
- `display-xl` for home or flagship hero only
- `display-lg` for other premium hero statements
- `h1` through `h6` follow documented content hierarchy only
- `lead`, `body`, `body-sm`, `label`, `caption`, `overline`, `mono`

### Color token system
Base theme direction: warm gallery neutrals with architectural green and terracotta accents.

Core tokens:
- `bg.canvas = #F4EFE8`
- `bg.surface = #FBF8F4`
- `bg.inset = #ECE4DA`
- `text.primary = #1E1A17`
- `text.muted = #6B6259`
- `border.default = #D8CEC3`
- `brand.primary = #2F5A4F`
- `brand.secondary = #8A6A4A`
- `brand.accent = #B85C3B`
- `state.success = #2D6B57`
- `state.warning = #9C6A18`
- `state.danger = #A54436`
- `state.info = #355C7D`

Theme rule:
- default public presentation uses light, gallery-like surfaces
- dark theme remains supported by semantic token inversion, but route implementations may not hand-pick colors

### Spacing scale
Only use:
- `4, 8, 12, 16, 24, 32, 48, 64, 96`

### Radius scale
- `radius.sm = 8`
- `radius.md = 16`
- `radius.lg = 24`
- `radius.xl = 32`
- `radius.pill = 999`

### Shadow scale
- `shadow.rest = subtle ambient`
- `shadow.raise = card hover / elevated surface`
- `shadow.overlay = drawer, dialog, command layer`

### Motion tokens
- `motion.fast = 120ms`
- `motion.standard = 180ms`
- `motion.slow = 260ms`
- `motion.hero = 420ms`

### Icon tokens
- `icon.xs = 16`
- `icon.sm = 20`
- `icon.md = 24`
- `icon.lg = 32`

Iconography direction:
- outline-first base set
- filled variant reserved for active navigation state or urgent status
- navigation icons must remain visually simple and label-backed on mobile

## Layout Tokens

- public content width narrow: 720px
- public content width standard: 1120px
- public gallery width: 1280px
- app content width: 1440px max
- public section gap defaults: `64` desktop / `32` mobile
- card padding defaults: `24` desktop / `16` mobile

## Primitive Registry

Required primitives:
- button
- icon-button
- text-link
- input
- search-input
- select / filter-chip
- textarea
- checkbox / radio / toggle
- badge / status-pill
- avatar / image-frame
- card / panel
- sheet / drawer
- dialog / confirmation modal
- toast / inline alert
- tabs / segmented control
- pagination
- skeleton block
- empty-state block

Rules:
- icon-button cannot be the only affordance for destructive, booking, payment, or identity actions
- primary buttons use text labels; icons are optional supports
- filter chips must be tokenized, not ad-hoc colored tags

## Composite Registry

### Public composites
- editorial hero
- guided search bar
- proof ribbon
- designer card
- project gallery card
- testimonial cluster
- filter rail
- sticky bottom action bar
- product highlight rail
- article feature block
- event spotlight block

### App composites
- dashboard summary band
- queue list item
- inbox thread preview
- status timeline card
- detail side panel
- profile completeness panel
- moderation queue table

## Page-Section Patterns

Approved public patterns:
- cinematic hero
- search-led hero
- proof-first intro
- editorial split narrative
- masonry or staggered gallery
- comparison strip
- reassurance band
- sticky conversion rail

Approved app patterns:
- workspace header
- summary metrics row
- filtered list + detail split
- form canvas + live preview
- status timeline + action tray

## Governance Rules

- New section patterns require registry updates before implementation.
- Route files may compose approved patterns; they may not introduce unnamed bespoke sections.
- Public pages must vary composition using registry patterns, not custom one-off markup.
- Mobile behavior for drawers, sheets, bottom bars, and sticky CTAs must reuse documented patterns.

## Acceptance Criteria

- Every component maps to primitives or approved composites.
- No route hardcodes colors, spacing, icon sizes, or motion values outside tokens.
- Image frames preserve aspect-ratio intent across breakpoints.
- Iconography remains consistent: outline default, filled active, labels preserved where navigation meaning would otherwise be ambiguous.
