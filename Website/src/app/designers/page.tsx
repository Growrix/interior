import Link from "next/link";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import { ActionLink, Container, InfoCard, Section, SectionTitle, Tag } from "@/components/ui";
import { designers } from "@/lib/site-data";

const filters = ["Location", "Style", "Budget", "Project type"];

export default function DesignersPage() {
  return (
    <PublicShell>
      <Section className="pt-10">
        <Container wide>
          <InfoCard className="bg-surface/90 p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-4">
                <SectionTitle
                  eyebrow="Public discovery"
                  title="Search designers with visible filters, strong proof, and graceful recovery states."
                  description="The page keeps a compact utility hero, active-filter visibility, and text-labeled controls on every device without becoming a dashboard clone."
                />
              </div>
              <div className="rounded-3xl bg-background/85 px-5 py-4">
                <p className="text-sm font-semibold text-foreground">{designers.length} curated designers available</p>
                <p className="mt-1 text-sm leading-6 text-muted">Filters remain visible during loading, empty, and retry states.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 rounded-3xl bg-background/90 p-4">
              <div className="min-w-55 flex-1 rounded-full bg-surface px-4 py-3 text-sm text-muted">
                Search by style, location, or project type
              </div>
              <ActionLink href="/chat-assistant" variant="secondary">
                Ask AI Guide
              </ActionLink>
            </div>
          </InfoCard>
        </Container>
      </Section>

      <Section>
        <Container wide>
          <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
            <InfoCard className="hidden h-fit bg-surface/90 xl:block">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Filters</p>
              <div className="mt-5 grid gap-3">
                {filters.map((filter) => (
                  <div key={filter} className="rounded-3xl bg-background/85 px-4 py-4 text-sm font-semibold text-foreground">
                    {filter}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>Warm Minimal</Tag>
                <Tag>Chicago</Tag>
                <Tag>$25k-$90k</Tag>
              </div>
            </InfoCard>

            <div className="space-y-5">
              <details className="surface-ring rounded-3xl bg-surface p-4 xl:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-foreground marker:hidden">
                  Filters and sort
                  <span className="rounded-full bg-brand-primary px-3 py-1 text-xs text-white">3 active</span>
                </summary>
                <div className="mt-4 grid gap-3">
                  {filters.map((filter) => (
                    <div key={filter} className="rounded-3xl bg-inset px-4 py-4 text-sm font-semibold text-foreground">
                      {filter}
                    </div>
                  ))}
                  <div className="mt-2 flex gap-3">
                    <button className="min-h-11 flex-1 rounded-full bg-brand-primary px-4 py-3 text-sm font-semibold text-white" type="button">
                      Apply
                    </button>
                    <button className="min-h-11 flex-1 rounded-full border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground" type="button">
                      Reset
                    </button>
                  </div>
                </div>
              </details>

              <div className="flex flex-wrap items-center gap-3 rounded-3xl bg-surface/90 px-4 py-4">
                <Tag tone="info">Sort</Tag>
                <Tag tone="info">Filters</Tag>
                <Tag tone="info">Compare</Tag>
                <div className="ml-auto text-sm leading-6 text-muted">Active filters remain visible across view states.</div>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {designers.map((designer) => (
                  <InfoCard key={designer.slug} className="bg-surface/90">
                    <RemoteImage src={designer.image} alt={designer.name} width={1200} height={900} className="h-72 w-full rounded-3xl object-cover" />
                    <div className="mt-5 flex flex-wrap gap-2">
                      {designer.styles.map((style) => (
                        <Tag key={style}>{style}</Tag>
                      ))}
                    </div>
                    <div className="mt-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-semibold text-foreground">{designer.name}</h2>
                          <p className="mt-1 text-sm leading-6 text-muted">{designer.location}</p>
                        </div>
                        <Tag tone="success">{designer.rating}</Tag>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted">{designer.specialty}</p>
                      <div className="mt-4 grid gap-1 text-sm text-muted">
                        <p>Budget posture: {designer.budget}</p>
                        <p>{designer.reviewCount} trust-signal placeholders</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <ActionLink href={`/designers/${designer.slug}`}>Open Designer Profile</ActionLink>
                      <ActionLink href="/chat-assistant" variant="secondary">
                        Ask AI Guide
                      </ActionLink>
                    </div>
                  </InfoCard>
                ))}
              </div>

              <InfoCard className="bg-surface/90">
                <Tag tone="info">Empty-state recovery</Tag>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">If a search narrows too far, recovery stays helpful and adjacent.</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Reset actions, nearby discovery links, and AI prompt suggestions remain available without clearing the visitor’s original intent or hiding the current filters.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ActionLink href="/designers" variant="secondary">
                    Reset filters
                  </ActionLink>
                  <Link href="/chat-assistant" className="inline-flex text-sm font-semibold text-brand-primary">
                    Try an AI-guided suggestion
                  </Link>
                </div>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}