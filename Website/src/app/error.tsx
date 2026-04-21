"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="surface-ring max-w-2xl rounded-4xl bg-surface p-8 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Route recovery</p>
        <h1 className="mt-4 font-display text-5xl leading-tight text-foreground">Something interrupted the current view.</h1>
        <p className="mt-4 text-sm leading-8 text-muted">
          The frontend keeps recovery language specific and calm: preserve the route frame, explain that the view can be retried, and avoid inventing backend failure details.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 min-h-11 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white"
        >
          Retry this route
        </button>
      </div>
    </div>
  );
}