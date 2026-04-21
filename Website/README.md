# Interior Frontend

This folder contains the Next.js App Router frontend implementation for the Interior Design Platform.

The current scope is intentionally frontend-only and contract-safe:
- public discovery, detail, content, commerce, and utility routes
- auth entry shells
- client, designer, and admin workspace shells
- shared tokens, shells, and page primitives

Deferred work remains deferred:
- backend services and persistence
- auth-provider wiring
- messaging, booking, review, and commerce mutations
- analytics and realtime integration

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Stack Lock

This repo now treats Next.js App Router with React and Tailwind CSS as the locked frontend baseline unless the user explicitly approves a different stack.

## Notes

- Route and surface behavior is driven by the docs under `DOC/PROJECT PLAN/Shared Contracts/` and `DOC/PROJECT PLAN/Frontend/`.
- Public pages use literal free-stock photography in the image areas.
- Protected routes are intentionally passive shells until backend and security planning are complete.
