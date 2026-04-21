"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { footerGroups, publicNav } from "@/lib/site-data";
import { ActionLink, cn, Container } from "./ui";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.startsWith("/#")) {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PublicShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <Container className="flex min-h-18 items-center justify-between gap-4 py-4" wide>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
              ID
            </span>
            <div>
              <p className="font-display text-2xl leading-none text-foreground">Interior</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Design discovery</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {publicNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  isActive(pathname, item.href) ? "text-brand-primary" : "text-foreground/80 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ActionLink href="/chat-assistant" variant="secondary">
              AI Guide
            </ActionLink>
            <ActionLink href="/auth/sign-in" variant="ghost">
              Sign in
            </ActionLink>
            <ActionLink href="/contact">Book a Consultation</ActionLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ActionLink href="/designers" variant="secondary" className="px-4">
              Search
            </ActionLink>
            <Link
              href="/account"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold"
            >
              Acct
            </Link>
            <details className="group relative">
              <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold marker:hidden">
                Menu
              </summary>
              <div className="surface-ring absolute right-0 mt-3 w-[320px] rounded-3xl bg-surface p-5">
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Discover</p>
                    <div className="mt-3 grid gap-2">
                      {publicNav.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-2xl bg-surface px-4 py-3 text-sm font-semibold text-foreground"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Support</p>
                    <div className="mt-3 grid gap-2">
                      <Link href="/chat-assistant" className="rounded-2xl bg-surface px-4 py-3 text-sm font-semibold text-foreground">
                        AI Guide
                      </Link>
                      <Link href="/help" className="rounded-2xl bg-surface px-4 py-3 text-sm font-semibold text-foreground">
                        Help
                      </Link>
                      <Link href="/contact" className="rounded-2xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white">
                        Book a Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </Container>
      </header>

      <main id="main-content" className="flex-1 pb-24 lg:pb-0">
        {children}
      </main>

      <footer className="border-t border-border/70 bg-surface/80">
        <Container className="grid gap-8 py-12 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]" wide>
          <div className="space-y-4">
            <p className="font-display text-3xl text-foreground">Interior</p>
            <p className="max-w-sm text-sm leading-7 text-muted">
              A contract-safe frontend for discovering designers, reviewing project proof, and moving toward the right next conversation.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">{group.title}</p>
              <div className="grid gap-2">
                {group.links.map((link) => (
                  <Link key={link.label} href={link.href} className="text-sm leading-7 text-foreground/80 hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </footer>
    </div>
  );
}