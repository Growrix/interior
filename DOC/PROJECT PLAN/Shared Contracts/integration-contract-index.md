# Integration Contract Index

## Purpose

This file lists the integration domains that later specialized planning must evaluate and either adopt, defer, or reject. It does not select vendors yet unless later project-specific planning explicitly does so.

## Integration Domains

### Authentication And Identity
Status: required domain

Purpose:
- account creation, sign-in, session handling, and role-aware protected access

Contract expectations:
- support visitor, client, designer, and admin roles
- support stronger trust controls for designer/admin accounts if required later

### Media Storage And Delivery
Status: required domain

Purpose:
- upload, store, transform, and deliver portfolio/project/profile/product imagery

Contract expectations:
- responsive media handling
- performance-aware delivery
- moderation and retention compatibility

### Search And Filtering
Status: required domain

Purpose:
- support discovery by location, style, budget, project type, and related metadata

Contract expectations:
- consistent filter vocabulary across public discovery and AI guidance references
- graceful behavior for empty, partial, or low-quality datasets

### Messaging / Notifications
Status: required domain

Purpose:
- support inquiry follow-up, booking communication, and system notifications

Contract expectations:
- clear distinction between in-product messaging and outbound notifications
- later decision needed on async-only vs realtime-assisted behavior

### Booking / Calendar Coordination
Status: required domain

Purpose:
- support consultation request and confirmation flows

Contract expectations:
- later rules must define whether bookings are internal only or sync with external calendars
- later rules must define rescheduling, cancellation, and no-show behavior

### Reviews And Trust Signals
Status: required product capability; integration need unknown

Purpose:
- manage review eligibility, moderation, publication, and trust display

Contract expectations:
- publication cannot be assumed without moderation/trust rules
- later anti-abuse and audit needs must be defined

### Commerce / Payments
Status: conditional domain

Purpose:
- support direct product sales if native commerce is confirmed

Contract expectations:
- later phases must decide direct checkout vs affiliate model
- taxes, refunds, fulfillment, and dispute posture must be explicitly defined before implementation

### Email / Transactional Communication
Status: likely required domain

Purpose:
- verification, inquiry notifications, booking updates, moderation notices, commerce receipts if applicable

### Analytics And Product Insight
Status: likely required domain

Purpose:
- measure discovery, conversion, content engagement, commerce behavior, and AI assistant usage

Contract expectations:
- later analytics design must respect privacy and consent requirements

### AI Assistant / LLM Capability
Status: required domain

Purpose:
- provide site navigation help, general design guidance, and discovery recommendations

Contract expectations:
- grounded to approved platform content and rules where possible
- bounded from protected data unless later authorized
- escalation or fallback behavior required for unsupported requests

### Maps / Geolocation
Status: optional domain

Purpose:
- location-based designer discovery or service-area visualization

Contract expectations:
- only needed if the project later requires richer geographic interactions beyond text filters

## Ownership Boundaries

- Shared Contracts own the decision space and contract expectations.
- Backend, API, security, DevOps, and QA planning must refine these domains without changing business-intent scope.
- Frontend planning may reference integration-dependent UX only when shared assumptions are clearly labeled.

## Open Integration Questions

- Is realtime messaging mandatory or optional?
- Does booking need calendar sync at launch?
- Is direct payment in phase one or deferred?
- Must AI assistant use retrieval over internal content, or can it stay limited to guided navigation plus general answers?
