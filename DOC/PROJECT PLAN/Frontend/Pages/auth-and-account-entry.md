# Auth And Account Entry

## Routes Covered

- `/auth/sign-in`
- `/auth/sign-up`
- `/account`

## Goal

Move users into the correct protected surface with minimal friction while preserving interrupted intent from inquiry, booking, save, or designer onboarding flows.

## Layout Model

Desktop:
- split layout with concise benefit/proof panel on one side and focused form card on the other

Mobile:
- stacked layout with compact proof strip and short-form fields first
- social or alternate sign-in methods, if later approved, remain below the primary method

## Key Behaviors

- preserve origin intent such as `continue booking` or `return to saved designers`
- clearly distinguish `Client` and `Designer` onboarding intent when relevant
- avoid overloading sign-in with marketing content

## States

- loading: submit button + optional redirect spinner only
- error: inline credential/form errors plus top summary for screen readers
- success: short transition state then routed redirect
- permission mismatch: explain the destination and safe next route

## Acceptance Criteria

- no auth page requires more than one primary decision above the fold
- mobile keyboards do not hide submit or recovery links
- interruption recovery message is visible when user came from a protected action

## Anti-Patterns

- long marketing landing page embedded above auth form
- merging client and designer onboarding into ambiguous single-copy screens
