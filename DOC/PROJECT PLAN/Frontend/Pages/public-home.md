# Public Home

## Routes Covered

- `/`

## Page Goal

Turn broad inspiration traffic into directed discovery, shortlist intent, or immediate consultation action while establishing the platform as visually credible and trustworthy.

## Primary CTA

- Find a Designer

## Secondary CTA

- Explore Projects
- Join as a Designer

## Hero Composition

Pattern:
- cinematic editorial hero with guided search block

Desktop:
- left: eyebrow, high-contrast headline, supporting lead, CTA row, trust ribbon
- right: layered project imagery or room vignettes with subtle metadata overlays

Mobile:
- stacked headline and lead
- guided search block appears immediately after copy
- visual media becomes a swipeable but manually controlled highlight strip

## Key Sections

1. Guided search block
2. Featured designers with distinct card density from project cards
3. Project inspiration gallery using staggered heights
4. Why trust this platform section with reviews/moderation cues
5. Events and editorial preview strip
6. Shop teaser with lifestyle framing
7. AI guide invitation with example prompts
8. Final conversion band with consultation and designer onboarding entry points

## State Rules

- loading: hero shell + search skeleton + featured card placeholders
- empty: if no featured data exists, fallback to evergreen editorial modules and CTAs
- error: preserve hero and swap dynamic modules with recovery cards

## Acceptance Criteria

- home hero includes proof, action, and guided entry; not headline-only
- featured designers and featured projects use visibly different card systems
- mobile keeps first CTA and search block within thumb-reachable early viewport
- no carousel auto-advance in hero or featured proof sections

## Anti-Patterns

- generic centered hero with two buttons and no guided search
- repeating identical grid treatment for designers, projects, and blog previews
- hiding trust proof below multiple decorative sections
