# Public Detail Pages

## Routes Covered

- `/designers/:designerSlug`
- `/projects/:projectSlug`

## Designer Profile Goal

Convert evaluation into save, message, or booking action while proving credibility through projects, reviews, service fit, and profile completeness.

## Designer Profile Layout

Desktop:
- credibility hero with portrait/cover media, name, specialty, service-area cues, trust stats, CTA rail
- split body: narrative and proof on left, sticky action/summary card on right

Mobile:
- profile identity block first
- project preview strip second
- sticky bottom action bar with `Save`, `Message`, `Book`

Key sections:
1. identity + trust hero
2. service summary and style tags
3. featured projects preview
4. reviews and reputation block
5. process / what to expect narrative
6. FAQ / logistics / service area
7. related designers or project inspiration

States:
- loading keeps action rail skeleton visible
- hidden/unavailable profile uses graceful fallback and alternative discovery links

Acceptance criteria:
- action rail remains visible on long desktop scrolls
- mobile sticky bar never hides critical media or text
- reviews section clearly separates average score from review excerpts

Anti-patterns:
- pushing CTAs below long project galleries
- blending trust stats into decorative badges with weak contrast

## Project Detail Goal

Immerse users in one portfolio project and route them toward the designer profile, inquiry, or save action.

## Project Detail Layout

Desktop:
- cinematic media hero or opening gallery
- narrative column paired with designer action module
- section rhythm alternates gallery, story, material/style insights, and conversion prompt

Mobile:
- lead image or gallery stack
- concise project summary
- sticky bottom actions with `Save`, `View Designer`, `Book`

Key sections:
1. media-led opener
2. project summary and tags
3. narrative breakdown or room-by-room highlights
4. designer attribution card
5. related projects or product references
6. inquiry conversion band

Acceptance criteria:
- gallery controls stay touch-friendly and keyboard accessible
- designer attribution appears before final conversion band
- project detail does not reuse designer-profile hero layout

Anti-patterns:
- generic full-width gallery followed by undifferentiated text blocks
- hiding the designer connection until page footer
