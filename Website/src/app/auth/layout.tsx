import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col rounded-4xl border border-border bg-surface/85 p-4 shadow-(--shadow-rest) sm:p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/" className="font-display text-3xl text-foreground">
            Interior
          </Link>
          <div className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-brand-primary">Auth entry preview</div>
        </div>
        {children}
      </div>
    </div>
  );
}