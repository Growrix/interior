import Link from "next/link";
import { notFound } from "next/navigation";

import { ActionLink, InfoCard, Tag } from "@/components/ui";
import { authContent } from "@/lib/site-data";

export default async function AuthModePage({
  params,
}: {
  params: Promise<{ mode: string }>;
}) {
  const { mode } = await params;

  if (!(mode === "sign-in" || mode === "sign-up")) {
    notFound();
  }

  const content = authContent[mode];

  return (
    <div className="grid flex-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <InfoCard className="[background-image:var(--gradient-auth-panel)] p-8 text-white">
        <Tag className="bg-[var(--overlay-brand-glass-md)] text-white" tone="default">
          {content.eyebrow}
        </Tag>
        <h1 className="mt-5 font-display text-5xl leading-tight">{content.title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-8 text-white/80">{content.description}</p>
        <div className="mt-8 space-y-3">
          {content.benefits.map((benefit) => (
            <div key={benefit} className="rounded-3xl bg-[var(--overlay-brand-glass)] px-4 py-4 text-sm leading-7 text-white/85">
              {benefit}
            </div>
          ))}
        </div>
      </InfoCard>
      <InfoCard className="flex flex-col justify-center bg-surface/90 p-8 sm:p-10">
        <Tag tone="info">Protected flow entry</Tag>
        <div className="mt-5 grid gap-4">
          <input className="min-h-12 rounded-2xl border border-border bg-background px-4" placeholder="Email address" />
          <input className="min-h-12 rounded-2xl border border-border bg-background px-4" placeholder={mode === "sign-in" ? "Password" : "Create password"} />
          {mode === "sign-up" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <button type="button" className="min-h-12 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground">
                Join as client
              </button>
              <button type="button" className="min-h-12 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground">
                Join as designer
              </button>
            </div>
          ) : null}
        </div>
        <p className="mt-5 text-sm leading-7 text-muted">{content.helper}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="min-h-11 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white">
            {content.primaryLabel}
          </button>
          <ActionLink href={content.altHref} variant="secondary">
            {content.altLabel}
          </ActionLink>
        </div>
        <Link href="/help" className="mt-5 inline-flex text-sm font-semibold text-brand-primary">
          Need account help?
        </Link>
      </InfoCard>
    </div>
  );
}