# Visual Composition and Hero Standards

## Purpose

This document defines the universal standards that keep public-facing frontend work from collapsing into flat, repetitive layouts. It governs page composition, hero quality, layout variation, and the visual rules that implementation agents must follow.

## Core Principles

- Build one visual system, not one repeated page template.
- Distinction between pages should come from composition, emphasis, and content hierarchy, not ad-hoc styling.
- Hero sections must carry narrative and conversion work together.
- Mobile layouts must feel intentionally touch-first, not like compressed desktop pages.
- Visual ambition must stay inside the design system and component registry.

## Page Composition Rules

- Public pages must define a primary composition pattern and a secondary rhythm pattern.
- Adjacent pages should not reuse the exact same hero structure, proof order, and CTA grouping unless the route purpose is intentionally identical.
- Section rhythm should alternate between information, proof, action, and recovery modules to prevent visual fatigue.
- Long pages should include transition sections that reset attention through layout or surface contrast.

## Hero Requirements

Every major public page hero must define all of the following:

- intent of the page
- primary headline hierarchy
- supporting subcopy role
- primary CTA and secondary CTA
- proof cluster, stat cluster, trust marks, or validation signal
- media, preview, illustration, or deliberate text-only justification
- desktop composition behavior
- mobile composition behavior
- anti-patterns that would make the hero generic or underpowered

At least one of the following must be present unless the product explicitly prohibits it:

- trust or proof module in the hero zone
- stat or outcome cluster
- contextual media block
- quick-action or guided-entry block

## Hero Anti-Patterns

- oversized headline with no supporting proof or action structure
- identical left-copy/right-image heroes across all public pages
- stacking every hero into centered text plus two buttons regardless of route goal
- removing quick-scan cues such as icons, stats, badges, or proof labels when they are needed for comprehension

## Layout Variation Rules

- Vary section composition through grid weight, content width, media placement, proof density, and surface contrast.
- Do not vary pages through random decoration or arbitrary spacing changes.
- Use asymmetry intentionally, but preserve alignment logic and reading flow.
- Desktop, tablet, and mobile variants should preserve intent while changing composition where necessary.

## Navigation and Action Rules for Mobile

- High-intent public routes must define a visible mobile navigation affordance.
- If a drawer is used, document trigger placement, grouped links, icon usage, close behavior, and persistent primary actions.
- If a sticky mobile action bar is used, document when it appears, what actions it contains, and how it avoids obscuring content.
- Icons should be used when they improve recognition speed for navigation, trust, contact methods, or dense action clusters.

## Typography and Alignment Rules

- Display type must be reserved for true hero or brand-emphasis moments.
- Heading rhythm must step down cleanly between page sections.
- Body copy width, alignment, and line length must be systemized by layout type.
- Baseline spacing and alignment must remain consistent across cards, forms, and proof modules.

## Review Checklist

- Is this page composition distinct from adjacent pages with different goals?
- Does the hero combine message, proof, and action rather than only headline and button?
- Are mobile navigation and sticky actions explicit where needed?
- Are icons present where quick scanning depends on them?
- Are alignment, type scale, and spacing derived from the design system rather than improvised?
- Can an implementation agent build the page without inventing layout behavior?