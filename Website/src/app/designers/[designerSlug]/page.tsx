import Link from "next/link";
import { notFound } from "next/navigation";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import { ActionLink, Container, InfoCard, MetricGrid, Section, Tag } from "@/components/ui";
import { designerBySlug, getRelatedDesigners, projectBySlug } from "@/lib/site-data";

export default async function DesignerDetailPage({
  params,
}: {
  params: Promise<{ designerSlug: string }>;
}) {
  const { designerSlug } = await params;
  const designer = designerBySlug[designerSlug];

  if (!designer) {
    notFound();
  }

  const featuredProjects = designer.featuredProjectSlugs.map((slug) => projectBySlug[slug]).filter(Boolean);
  const relatedDesigners = getRelatedDesigners(designer.slug);
  return (
    <PublicShell>
      <Section className="pt-10">
        <Container wide>
          <div className="grid gap-6 xl:grid-cols-[1.4fr_420px]">
            <InfoCard className="overflow-hidden bg-surface p-3">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <RemoteImage src={designer.image} alt={designer.name} width={1400} height={1200} priority className="h-130 w-full rounded-3xl object-cover" />
                <div className="space-y-5 p-4 sm:p-6">
                  <Tag tone="success">{designer.rating} average score</Tag>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">{designer.location}</p>
                    <h1 className="mt-3 font-display text-5xl leading-tight text-foreground">{designer.name}</h1>
                    <p className="mt-3 text-base leading-8 text-muted">{designer.specialty}</p>
                  </div>
                  <p className="text-sm leading-7 text-muted">{designer.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {designer.styles.map((style) => (
                      <Tag key={style}>{style}</Tag>
                    ))}
                  </div>
                  <div className="grid gap-3 text-sm text-muted">
                    <p>Budget posture: {designer.budget}</p>
                    <p>{designer.reviewCount} review excerpts reserved for trust-safe publication flows</p>
                  </div>
                </div>
              </div>
            </InfoCard>

            <div className="space-y-6 xl:sticky xl:top-28 xl:h-fit">
              <InfoCard className="bg-surface">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Action rail</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">High-intent actions stay visible through long scroll depth.</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Messaging and booking remain passive entry states until backend contracts are frozen, but their position and priority are already locked into the page.
                </p>
                <div className="mt-6 grid gap-3">
                  <ActionLink href="/auth/sign-in">Save designer</ActionLink>
                  <ActionLink href="/contact" variant="secondary">
                    Message designer
                  </ActionLink>
                  <ActionLink href="/contact" variant="ghost">
                    Book consultation
                  </ActionLink>
                </div>
              </InfoCard>
              <MetricGrid items={designer.stats} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container wide>
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <InfoCard className="bg-surface/90">
                <h2 className="text-2xl font-semibold text-foreground">Featured projects</h2>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {featuredProjects.map((project) => (
                    <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-3xl bg-background/85 p-4 transition-transform duration-150 hover:-translate-y-1">
                      <RemoteImage src={project.image} alt={project.title} width={1100} height={800} className="h-56 w-full rounded-3xl object-cover" />
                      <p className="mt-4 text-xl font-semibold text-foreground">{project.title}</p>
                      <p className="mt-2 text-sm leading-7 text-muted">{project.summary}</p>
                    </Link>
                  ))}
                </div>
              </InfoCard>

              <InfoCard className="bg-surface/90">
                <h2 className="text-2xl font-semibold text-foreground">Process and fit</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {designer.process.map((step) => (
                    <div key={step} className="rounded-3xl bg-background/85 p-4 text-sm leading-7 text-muted">
                      {step}
                    </div>
                  ))}
                </div>
              </InfoCard>

              <InfoCard className="bg-surface/90">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold text-foreground">Reviews and reputation</h2>
                  <Tag tone="success">Average {designer.rating}</Tag>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Review excerpts remain separate from the average score so credibility stays legible even before trust and moderation workflows are fully implemented.
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-background/85 p-5 text-sm leading-7 text-muted">
                    “The studio translated vague reference images into a room that feels calmer every time we walk into it.”
                  </div>
                  <div className="rounded-3xl bg-background/85 p-5 text-sm leading-7 text-muted">
                    “Budget conversations were direct and never hidden behind moodboard language.”
                  </div>
                </div>
              </InfoCard>
            </div>

            <div className="space-y-6">
              <InfoCard className="bg-surface/90">
                <h2 className="text-2xl font-semibold text-foreground">FAQ and service area</h2>
                <div className="mt-5 space-y-4">
                  {designer.faq.map((item) => (
                    <div key={item.question} className="rounded-3xl bg-background/85 p-4">
                      <p className="text-sm font-semibold text-foreground">{item.question}</p>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>
              <InfoCard className="bg-surface/90">
                <h2 className="text-2xl font-semibold text-foreground">Related designers</h2>
                <div className="mt-5 space-y-4">
                  {relatedDesigners.map((item) => (
                    <Link key={item.slug} href={`/designers/${item.slug}`} className="block rounded-3xl bg-background/85 p-4">
                      <p className="text-lg font-semibold text-foreground">{item.name}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.specialty}</p>
                    </Link>
                  ))}
                </div>
              </InfoCard>
              <InfoCard className="bg-surface/90">
                <h2 className="text-2xl font-semibold text-foreground">Hidden or unavailable fallback</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  If a profile becomes hidden later, the route should preserve alternative discovery links and supportive copy rather than dropping users into a broken gallery.
                </p>
                <ActionLink href="/designers" variant="secondary" className="mt-5">
                  Browse other designers
                </ActionLink>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>

      <div className="fixed inset-x-4 bottom-4 z-40 rounded-3xl border border-border bg-surface/95 p-3 shadow-(--shadow-overlay) backdrop-blur lg:hidden">
        <div className="grid grid-cols-3 gap-2">
          <ActionLink href="/auth/sign-in" variant="secondary" className="px-3 text-xs">
            Save
          </ActionLink>
          <ActionLink href="/contact" variant="secondary" className="px-3 text-xs">
            Message
          </ActionLink>
          <ActionLink href="/contact" className="px-3 text-xs">
            Book
          </ActionLink>
        </div>
      </div>
    </PublicShell>
  );
}