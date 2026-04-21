import Link from "next/link";
import type { ReactNode } from "react";

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        wide ? "max-w-340" : "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-8 sm:py-12 lg:py-16", className)}>
      {children}
    </section>
  );
}

export function Tag({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "success" | "info";
  className?: string;
}) {
  const toneMap = {
    default: "bg-inset text-foreground",
    accent: "bg-brand-accent/12 text-brand-accent",
    success: "bg-success/12 text-success",
    info: "bg-info/12 text-info",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const variantMap = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary/90",
    secondary: "bg-surface text-foreground ring-1 ring-border hover:bg-inset",
    ghost: "bg-transparent text-foreground hover:bg-surface/70",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-150",
        variantMap[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function InfoCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("surface-ring rounded-3xl bg-surface p-6", className)}>
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: ReactNode;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-3", align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{title}</h2>
      {description ? <p className="max-w-3xl text-base leading-8 text-muted">{description}</p> : null}
    </div>
  );
}

export function MetricGrid({ items }: { items: Array<{ label: string; value: string; hint?: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <InfoCard key={item.label} className="bg-surface/80">
          <p className="text-3xl font-semibold text-foreground">{item.value}</p>
          <p className="mt-2 text-sm font-semibold text-foreground">{item.label}</p>
          {item.hint ? <p className="mt-1 text-sm leading-6 text-muted">{item.hint}</p> : null}
        </InfoCard>
      ))}
    </div>
  );
}

export function StatePanel({
  title,
  description,
  actionHref,
  actionLabel,
}: {
  title: string;
  description: string;
  actionHref: string;
  actionLabel: string;
}) {
  return (
    <InfoCard className="bg-surface/80">
      <Tag tone="info">Recovery state</Tag>
      <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
      <ActionLink href={actionHref} variant="secondary" className="mt-5">
        {actionLabel}
      </ActionLink>
    </InfoCard>
  );
}