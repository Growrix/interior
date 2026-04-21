# Domain State Model

## Purpose

This file defines the canonical domain entities and lifecycle states needed for shared planning. It does not freeze database schemas or API payloads, but it does lock the conceptual entities and state transitions that later roles must align to.

## Core Entities

### Designer Account
Represents the professional account identity used to manage public presence and platform participation.

Suggested lifecycle states:
- invited-or-created
- onboarding-in-progress
- pending-verification
- active
- suspended
- deactivated

### Client Account
Represents an end user seeking services or interacting with designers.

Suggested lifecycle states:
- guest-or-lightweight
- registered
- active
- restricted
- deactivated

### Designer Profile
Public-facing professional record containing bio, service area, style focus, budget indications, and trust signals.

Suggested lifecycle states:
- draft
- incomplete
- review-needed
- published
- hidden
- archived

### Portfolio Project
A designer-owned project case study with images, descriptive content, and categorical metadata.

Suggested lifecycle states:
- draft
- ready-for-review
- published
- hidden
- archived

### Inquiry
Initial client-to-designer intent record.

Suggested lifecycle states:
- created
- submitted
- acknowledged
- in-discussion
- closed-converted
- closed-not-converted
- blocked

### Consultation Booking
A consultation intent or scheduled engagement linked to an inquiry or direct action.

Suggested lifecycle states:
- requested
- pending-confirmation
- confirmed
- rescheduled
- completed
- canceled
- no-show

### Message Thread
Conversation record between client and designer, optionally with admin intervention later.

Suggested lifecycle states:
- open
- awaiting-client
- awaiting-designer
- closed
- flagged

### Review
Client-authored feedback associated with an eligible completed engagement.

Suggested lifecycle states:
- draft
- submitted
- under-review
- published
- rejected
- removed

### Blog Article
Editorial or designer-authored content entry.

Suggested lifecycle states:
- draft
- scheduled
- published
- archived

### Event Listing
A workshop or event listing associated with the platform or a designer.

Suggested lifecycle states:
- draft
- scheduled
- live
- completed
- canceled
- archived

### Product
A commerce listing for furniture, decor, accessories, or related goods.

Suggested lifecycle states:
- draft
- active
- unavailable
- discontinued
- archived

### Order
Commerce transaction record if direct checkout is later confirmed.

Suggested lifecycle states:
- initiated
- pending-payment
- paid
- fulfilled
- delivered
- refunded
- canceled

### AI Assistant Session
A bounded interaction record for guidance and recommendations.

Suggested lifecycle states:
- started
- active
- escalated-or-handed-off
- ended
- retained-or-expired-per-policy

## Cross-Entity Rules

- A published designer profile may depend on verification or completeness rules defined later.
- Reviews must be tied to trust eligibility rules before publication.
- Bookings may depend on inquiry state, direct scheduling rules, or availability logic defined later.
- Orders exist only if direct platform commerce is confirmed in later planning; otherwise commerce may be affiliate-based.
- AI assistant sessions must not assume access to protected user data without explicit later approval.

## Open State Questions

- Are reviews allowed after any inquiry, or only after completed consultations?
- Can designers publish portfolios before full verification?
- Does booking always require an inquiry first?
- Is order fulfillment platform-run, designer-run, or third-party fulfillment?
