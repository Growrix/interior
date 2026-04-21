# Public Discovery

## Routes Covered

- `/designers`

## Page Goal

Help visitors efficiently browse and narrow designers by style, location, budget, and project type while keeping the page elegant rather than dashboard-like.

## Primary CTA

- Open Designer Profile

## Secondary CTA

- Save Designer
- Ask AI Guide
- Reset Filters

## Layout Model

Desktop:
- compact utility hero with search field, short explanatory copy, and dynamic result summary
- left persistent filter rail or top filter bar depending on width
- main column for results, optional comparison strip, and pagination/load-more region

Mobile:
- top search bar stays visible after initial scroll
- filters open in a sheet with icon + label triggers
- result toolbar contains `Sort`, `Filters`, `Compare` using icon-assisted compact controls with text labels

## Key Sections

1. Utility hero with current search context
2. Filter and sort region
3. Results list or grid with variable card height based on proof density
4. Optional shortlist / comparison rail
5. AI assistance suggestion block when results are broad or weak
6. Recovery section for empty or over-filtered states

## Result Card Requirements

Each designer card should reserve space for:
- cover image
- designer name and location
- style tags
- budget indicator label
- trust signals such as rating/review count placeholders
- primary and secondary actions

## State Rules

- loading: skeleton cards and frozen toolbar layout
- empty: supportive language, visible reset, adjacent content links, AI assistant prompt suggestion
- error: keep current filters visible, show retry without clearing intent

## Acceptance Criteria

- mobile filter sheet includes sticky `Apply` and `Reset`
- desktop and mobile both preserve visibility of active filters
- icon usage improves scan speed but all core controls remain text-labeled
- result density can change across breakpoints without changing card meaning

## Anti-Patterns

- mobile results forcing users to scroll back to top for filters
- icon-only filter or sort triggers
- cards with identical proof density regardless of available data richness
