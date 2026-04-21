# Client Surface

## Routes Covered

- `/client/dashboard`
- `/client/saved-designers`
- `/client/inquiries`
- `/client/bookings`
- `/client/messages`
- `/client/reviews`
- `/client/settings`

## Surface Goal

Give clients a calm, status-readable workspace for managing active designer relationships and follow-up actions.

## Navigation Model

Desktop:
- left sidebar with text labels and status counts

Mobile:
- bottom tab with icon + label for `Home`, `Inquiries`, `Bookings`, `Messages`, `Account`
- `Saved` may live inside Home dashboard or More depending on density

## Key Screen Intent

Dashboard:
- summary cards for saved designers, open inquiries, upcoming bookings, pending reviews

Saved Designers:
- comparison-friendly list with remove/save state, quick message/booking entry where allowed

Inquiries:
- queue of inquiry cards with status chip, latest activity, and CTA to message or review details

Bookings:
- upcoming/past split, schedule context, reschedule/cancel affordance only if later allowed

Messages:
- thread list + conversation view on desktop, stacked drill-in on mobile

Reviews:
- eligible review prompts, drafted reviews, published review references

Settings:
- profile basics, notification preferences, privacy/help links

## State Rules

- dashboard empty state teaches first action
- inbox empty state links back to discovery
- permission-sensitive actions fall back to explanatory callouts, not dead disabled buttons

## Acceptance Criteria

- every queue screen exposes clear status, latest activity, and next action
- mobile bottom nav remains visible on high-frequency screens, except when full-screen composition entry requires more room
- account screens avoid public-marketing visual language

## Anti-Patterns

- forcing clients into desktop-style side panels on small screens
- collapsing inquiry, booking, and message states into one undifferentiated activity feed
