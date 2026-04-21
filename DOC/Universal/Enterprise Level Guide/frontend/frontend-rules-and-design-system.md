# Frontend Rules & Design System Governance

## Purpose

This document enforces strict rules for universal UI development, ensuring all frontend work is maintainable, scalable, visually deliberate, and governed through a centralized design system (DS).

## No Hardcoding Policy

- All colors, spacing, typography, radii, and shadows must be referenced from the design system tokens.
- No direct hex, rgb, px, rem, or string values in component code or stylesheets unless explicitly defined in the DS.
- Linting and CI must block hardcoded style values in PRs.
- Route files must not hardcode reusable copy inventories, navigation definitions, proof metrics, badges, CTA lists, or section variants when the plan expects centralized content or configuration.
- One-off visual exceptions are forbidden unless added to the DS or explicitly approved as a documented pattern.

## Centralized Design System (DS)

- The DS is the only source of truth for UI primitives, tokens, and patterns.
- All UI components must consume tokens and primitives from the DS.
- The DS must be versioned and documented.
- Feature teams may not fork or override DS primitives without DS team review.
- The DS must include visual-composition guidance for hero sections, section rhythm, iconography, and responsive layout behavior for public-facing surfaces.
- Approved component and pattern registries must exist so implementation agents do not invent route-level UI structures.

## Design System Structure

- **Tokens:** color, spacing, typography, border, shadow, z-index, breakpoints, etc.
- **Primitives:** Button, Input, Card, Badge, Table, Modal, Tooltip, etc.
- **Patterns:** Form layouts, steppers, notifications, banners, etc.
- **Theming:** Support for light/dark mode and brand customization via tokens.
- **Composition Rules:** layout systems, hero structures, proof modules, navigation patterns, sticky actions, and iconography rules.
- **Content Contracts:** centralized navigation, shared content blocks, and reusable route configuration where public surfaces need consistency.

## Contribution & Governance

- All new UI primitives or patterns must be proposed via a DS RFC (request for comment) process.
- DS maintainers review and approve changes before merging.
- All DS changes must include documentation and usage examples.
- Feature teams must update their usage to the latest DS version as part of each release cycle.

## Automated Enforcement

- Linting rules (e.g., stylelint, eslint-plugin-tailwindcss) must block hardcoded values and style drift.
- Visual regression tests must be run for all UI changes.
- CI must fail if DS usage is bypassed or if new hardcoded values are introduced.
- CI or review automation must flag route-level duplication of content/configuration that should live in shared sources.
- Frontend review must include a breakpoint-level audit for typography, alignment, iconography, and mobile navigation behavior.

## Versioning & Updates

- The DS must follow semantic versioning.
- Breaking changes require a migration guide and communication to all frontend contributors.
- Feature teams must not pin to old DS versions without explicit approval.

## Documentation & Onboarding

- The DS must have clear, up-to-date documentation for all tokens, primitives, and patterns.
- New contributors must complete a DS onboarding checklist before merging UI code.
- The DS docs must include negative examples showing unacceptable hardcoding, layout drift, weak hero composition, and repetitive page scaffolding.
- Public-page documentation must include acceptance criteria that an AI or reviewer can apply without subjective guesswork.

## Anti-Patterns

- Hardcoded style values in component code or stylesheets.
- Duplicating primitives or tokens outside the DS.
- Bypassing DS review for new UI patterns.
- Inconsistent theming or brand application.
- Repeating the same hero, grid, and CTA structure across distinct public pages.
- Shipping mobile routes without documented toggle, drawer, bottom action, or equivalent touch-first navigation behavior when required by the page plan.
- Omitting icons from navigation or quick-scan UI where the documented interaction model depends on them.

## Definition of Done for UI Work

- All UI uses DS tokens and primitives.
- No hardcoded style values.
- Visual regression and linting pass.
- DS documentation is updated if new patterns or tokens are added.
- Shared content/configuration and route-level composition rules are respected.
- Breakpoint reviews confirm acceptable typography, spacing, alignment, iconography, and mobile navigation behavior.