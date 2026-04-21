# Assumptions Ledger

## Purpose

This file records unresolved server-side, auth, API, and integration dependencies that the frontend plan must not silently invent.

## Auth And Identity

Assumptions:
- visitors may browse publicly without sign-in
- protected actions may require auth depending on later backend/security decisions
- designer verification state may affect public publication and CTA availability

Frontend dependency:
- backend/security must clarify anonymous inquiry allowance, session behavior, and verification gating

## Search And Filter Data

Assumptions:
- location, style, budget, and project-type filters exist as structured dimensions
- result counts, available facets, and suggestion quality are not yet guaranteed

Frontend dependency:
- API/data planning must define facet availability, empty-result semantics, and sorting rules

## Inquiry, Messaging, And Booking

Assumptions:
- inquiry and booking are separate but adjacent flows
- messaging threads exist after inquiry initiation or another allowed entry path
- calendar integration may be optional at launch

Frontend dependency:
- backend/API must freeze state transitions, notification timing, unread logic, and interruption recovery

## Reviews

Assumptions:
- review submission happens only for eligible engagements
- review publication may include moderation delay

Frontend dependency:
- backend/security must define eligibility, moderation visibility, edit/delete rules, and dispute messaging

## Commerce

Assumptions:
- frontend must support both direct-purchase and outbound-store variants without structural rewrite
- cart and checkout are conditional, not guaranteed for phase one

Frontend dependency:
- backend/API/business planning must clarify direct checkout, taxes, refunds, shipping, and fulfillment posture

## AI Assistant

Assumptions:
- assistant can guide navigation and recommend designers/content/products
- assistant must not display protected records without explicit later approval
- unsupported answers require a fallback to search, help, or human contact

Frontend dependency:
- API/data/security must define grounding, conversation retention, and escalation behavior

## Notifications And Realtime

Assumptions:
- realtime updates for messaging or booking may be absent at launch
- UI must tolerate polling or manual refresh patterns without breaking flow

Frontend dependency:
- backend/DevOps planning must define delivery posture for inbox updates, status changes, and transactional notices

## Localization

Assumptions:
- locale-aware formatting is required even if initial launch is single-language
- RTL support remains a system requirement even if not enabled day one

Frontend dependency:
- product/backend must clarify launch locales, currencies, and content governance by region
