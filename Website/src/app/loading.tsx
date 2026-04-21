export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="surface-ring w-full max-w-xl rounded-4xl bg-surface p-8">
        <div className="h-4 w-28 animate-pulse rounded-full bg-inset" />
        <div className="mt-5 h-12 w-3/4 animate-pulse rounded-full bg-inset" />
        <div className="mt-4 h-28 animate-pulse rounded-[28px] bg-inset" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="h-24 animate-pulse rounded-3xl bg-inset" />
          <div className="h-24 animate-pulse rounded-3xl bg-inset" />
          <div className="h-24 animate-pulse rounded-3xl bg-inset" />
        </div>
      </div>
    </div>
  );
}