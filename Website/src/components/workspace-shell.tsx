"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { workspaceNav } from "@/lib/site-data";
import { cn } from "./ui";

type Role = keyof typeof workspaceNav;

const roleLabels: Record<Role, { title: string; subtitle: string }> = {
  client: {
    title: "Client workspace",
    subtitle: "Saved intent, inquiries, bookings, and messages",
  },
  designer: {
    title: "Designer workspace",
    subtitle: "Profile quality, portfolio, leads, and publishing",
  },
  admin: {
    title: "Admin governance",
    subtitle: "Moderation, support, and operational oversight",
  },
};

export function WorkspaceShell({ role, children }: { role: Role; children: ReactNode }) {
  const pathname = usePathname();
  const navItems = workspaceNav[role];
  const mobileItems = navItems.slice(0, 5);
  const roleMeta = roleLabels[role];

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-0">
      <a
        href="#workspace-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
      >
        Skip to workspace content
      </a>
      <div className="mx-auto flex min-h-screen max-w-360 gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <aside className="surface-ring hidden w-70 shrink-0 rounded-[28px] bg-surface p-6 lg:flex lg:flex-col">
          <Link href="/" className="rounded-3xl bg-brand-primary px-5 py-5 text-white">
            <p className="font-display text-3xl">Interior</p>
            <p className="mt-2 text-sm leading-6 text-white/80">{roleMeta.subtitle}</p>
          </Link>
          <nav className="mt-8 grid gap-2" aria-label={`${roleMeta.title} navigation`}>
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                    active ? "bg-surface text-brand-primary" : "text-foreground/80 hover:bg-surface/70 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto rounded-3xl bg-surface/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Preview posture</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              This shell preserves role-aware UI states while auth, permissions, notifications, and mutations remain deferred to later contracts.
            </p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <header className="surface-ring flex flex-wrap items-center justify-between gap-4 rounded-[28px] bg-surface px-5 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">{roleMeta.title}</p>
              <h1 className="mt-2 font-display text-4xl text-foreground">{roleMeta.subtitle}</h1>
            </div>
            <div className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-brand-primary">
              Contract-safe preview
            </div>
          </header>
          <div id="workspace-content" className="min-w-0">
            {children}
          </div>
        </div>
      </div>

      <nav className="surface-ring fixed inset-x-4 bottom-4 z-40 rounded-3xl bg-surface/95 px-3 py-3 backdrop-blur lg:hidden" aria-label={`${roleMeta.title} mobile navigation`}>
        <div className="grid grid-cols-5 gap-2">
          {mobileItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-2 py-2 text-center text-[11px] font-semibold",
                  active ? "bg-brand-primary text-white" : "text-foreground/75 hover:bg-surface/70",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}