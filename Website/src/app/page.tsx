import Link from "next/link";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import {
  ActionLink,
  Container,
  Eyebrow,
  InfoCard,
  MetricGrid,
  Section,
  SectionTitle,
  Tag,
} from "@/components/ui";
import {
  articles,
  assistantPrompts,
  designers,
  events,
  homeProofMetrics,
  products,
  projects,
} from "@/lib/site-data";

export default function Home() {
  const featuredDesigners = designers.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <PublicShell>
      <Section className="pt-8 sm:pt-12 lg:pt-16">
        <Container wide>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <InfoCard className="relative overflow-hidden [background-image:var(--gradient-hero)] p-8 sm:p-10 lg:p-12">
              <div className="absolute inset-0 texture-grid opacity-60" />
              <div className="relative space-y-8">
                <div className="space-y-4">
                  <Eyebrow>Editorial discovery for interior design</Eyebrow>
                  <h1 className="max-w-3xl font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
                    Find a designer whose proof feels as strong as their taste.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                    Explore designer portfolios, compare styles and budgets, and move into consultation-ready conversations without losing the visual calm of a premium gallery experience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <ActionLink href="/designers">Find a Designer</ActionLink>
                  <ActionLink href={`/projects/${featuredProjects[0].slug}`} variant="secondary">
                    Explore Projects
                  </ActionLink>
                  <ActionLink href="/auth/sign-up" variant="ghost">
                    Join as a Designer
                  </ActionLink>
                </div>

                <div className="grid gap-4 rounded-3xl bg-surface/85 p-5 shadow-(--shadow-rest) sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">Guided search</p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Start with style, location, budget, or project type. Mobile keeps the entry within the first thumb-reachable viewport.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Warm Minimal",
                        "Chicago",
                        "Kitchen Renovation",
                        "$25k-$90k",
                      ].map((pill) => (
                        <Tag key={pill}>{pill}</Tag>
                      ))}
                    </div>
                  </div>
                  <ActionLink href="/designers" className="w-full sm:w-auto">
                    Search designers
                  </ActionLink>
                </div>

                <MetricGrid items={homeProofMetrics} />
              </div>
            </InfoCard>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <InfoCard className="overflow-hidden bg-surface/90 p-3">
                <div className="relative overflow-hidden rounded-3xl">
                  <RemoteImage
                    src={featuredProjects[0].image}
                    alt={featuredProjects[0].title}
                    width={1600}
                    height={1200}
                    priority
                    className="h-90 w-full object-cover"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-black/55 p-4 text-white backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">Featured project</p>
                    <p className="mt-2 font-display text-3xl">{featuredProjects[0].title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/80">{featuredProjects[0].summary}</p>
                  </div>
                </div>
              </InfoCard>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {featuredDesigners.slice(0, 2).map((designer) => (
                  <InfoCard key={designer.slug} className="overflow-hidden bg-surface/90 p-3">
                    <RemoteImage src={designer.image} alt={designer.name} width={900} height={700} className="h-48 w-full rounded-3xl object-cover" />
                    <div className="space-y-3 p-3">
                      <Tag tone="accent">{designer.location}</Tag>
                      <div>
                        <p className="text-lg font-semibold text-foreground">{designer.name}</p>
                        <p className="mt-1 text-sm leading-6 text-muted">{designer.specialty}</p>
                      </div>
                    </div>
                  </InfoCard>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            eyebrow="Featured designers"
            title="Distinct card density keeps designer proof separate from project storytelling."
            description="Each card reserves room for image, specialty, location, style, budget posture, and trust placeholders so browsing stays elegant instead of dashboard-heavy."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredDesigners.map((designer) => (
              <InfoCard key={designer.slug} className="bg-surface/90">
                <RemoteImage src={designer.image} alt={designer.name} width={1200} height={900} className="h-72 w-full rounded-3xl object-cover" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {designer.styles.map((style) => (
                    <Tag key={style}>{style}</Tag>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">{designer.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{designer.location}</p>
                    </div>
                    <Tag tone="success">{designer.rating} / 5</Tag>
                  </div>
                  <p className="text-sm leading-7 text-muted">{designer.bio}</p>
                  <div className="grid gap-2 text-sm text-muted">
                    <p>Budget: {designer.budget}</p>
                    <p>{designer.reviewCount} review placeholders visible</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ActionLink href={`/designers/${designer.slug}`}>Open profile</ActionLink>
                  <ActionLink href="/chat-assistant" variant="secondary">
                    Ask AI Guide
                  </ActionLink>
                </div>
              </InfoCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <SectionTitle
            eyebrow="Project inspiration"
            title="A staggered gallery gives project proof a different rhythm from designer cards."
            description="Project detail remains cinematic and narrative-led, so the home page previews that tone rather than collapsing everything into identical tiles."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <InfoCard className="overflow-hidden bg-surface/90 p-3">
              <RemoteImage src={featuredProjects[0].image} alt={featuredProjects[0].title} width={1600} height={1200} className="h-115 w-full rounded-3xl object-cover" />
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {featuredProjects[0].tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-4xl text-foreground">{featuredProjects[0].title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{featuredProjects[0].summary}</p>
                <ActionLink href={`/projects/${featuredProjects[0].slug}`} className="mt-6">
                  View project detail
                </ActionLink>
              </div>
            </InfoCard>
            <div className="grid gap-5">
              {featuredProjects.slice(1).map((project) => (
                <InfoCard key={project.slug} className="grid gap-4 bg-surface/90 p-4 sm:grid-cols-[200px_minmax(0,1fr)] sm:items-center">
                  <RemoteImage src={project.image} alt={project.title} width={1100} height={800} className="h-48 w-full rounded-3xl object-cover" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">{project.location}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{project.summary}</p>
                    <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex text-sm font-semibold text-brand-primary">
                      Read the project story
                    </Link>
                  </div>
                </InfoCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 xl:grid-cols-[1fr_1.1fr]">
            <InfoCard className="bg-brand-primary p-8 text-white">
              <Eyebrow className="text-white/70">Why trust this platform</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight">Proof sits near the action, not buried below decorative sections.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
                Reviews, moderation cues, response expectations, and project evidence stay close to the point where a visitor decides whether to save, message, or book.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  "Review eligibility remains explicit",
                  "Moderation paths stay visible",
                  "High-intent actions never become icon-only",
                ].map((item) => (
                  <div key={item} className="rounded-3xl bg-[var(--overlay-brand-glass)] p-4 text-sm leading-7 text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </InfoCard>
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard className="bg-surface/90">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Events</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">Educational and promotional events that still route toward discovery.</h3>
                <div className="mt-5 space-y-4">
                  {events.map((event) => (
                    <div key={event.slug} className="rounded-3xl bg-background/85 p-4">
                      <p className="text-sm font-semibold text-foreground">{event.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{event.date} • {event.format}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>
              <InfoCard className="bg-surface/90">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Editorial + shop</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">Content and commerce stay visually distinct from designer discovery.</h3>
                <div className="mt-5 space-y-4">
                  <div className="rounded-3xl bg-background/85 p-4">
                    <p className="text-sm font-semibold text-foreground">{articles[0].title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{articles[0].excerpt}</p>
                  </div>
                  <div className="rounded-3xl bg-background/85 p-4">
                    <p className="text-sm font-semibold text-foreground">{products[0].title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{products[0].excerpt}</p>
                  </div>
                </div>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <InfoCard className="bg-surface/90 p-8">
              <Eyebrow>AI Guide</Eyebrow>
              <h2 className="mt-4 font-display text-4xl text-foreground">Guided discovery stays helpful without implying private-data access.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Example prompts are intentionally distinct from live conversation turns. Unsupported answers should route back to search, help, or human contact instead of ending in a dead end.
              </p>
              <div className="mt-6 grid gap-3">
                {assistantPrompts.map((prompt) => (
                  <div key={prompt} className="rounded-3xl bg-background/85 px-4 py-4 text-sm leading-7 text-foreground">
                    {prompt}
                  </div>
                ))}
              </div>
              <ActionLink href="/chat-assistant" className="mt-6">
                Open AI guide
              </ActionLink>
            </InfoCard>

            <InfoCard className="[background-image:var(--gradient-brand-tint)] p-8">
              <Eyebrow>Final conversion band</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground">Move from inspiration into a concrete next step.</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Visitors can book a consultation, keep browsing designers, or choose the designer onboarding path without the page collapsing into generic CTA spam.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href="/contact">Book a Consultation</ActionLink>
                <ActionLink href="/designers" variant="secondary">
                  Browse designers
                </ActionLink>
                <ActionLink href="/auth/sign-up" variant="ghost">
                  Join as a Designer
                </ActionLink>
              </div>
            </InfoCard>
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}
