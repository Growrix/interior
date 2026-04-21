import Link from "next/link";
import { notFound } from "next/navigation";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import { ActionLink, Container, InfoCard, Section, Tag } from "@/components/ui";
import { designerBySlug, productBySlug, projectBySlug } from "@/lib/site-data";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = projectBySlug[projectSlug];

  if (!project) {
    notFound();
  }

  const designer = designerBySlug[project.designerSlug];
  const relatedProducts = project.relatedProductSlugs.map((slug) => productBySlug[slug]).filter(Boolean);

  return (
    <PublicShell>
      <Section className="pt-10">
        <Container wide>
          <div className="grid gap-6 xl:grid-cols-[1.35fr_400px]">
            <InfoCard className="overflow-hidden bg-surface p-3">
              <RemoteImage src={project.image} alt={project.title} width={1600} height={1200} priority className="h-140 w-full rounded-3xl object-cover" />
            </InfoCard>
            <InfoCard className="bg-surface xl:sticky xl:top-28 xl:h-fit">
              <Tag tone="accent">{project.location} • {project.year}</Tag>
              <h1 className="mt-4 font-display text-5xl leading-tight text-foreground">{project.title}</h1>
              <p className="mt-4 text-sm leading-8 text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-background/85 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Designer attribution</p>
                <p className="mt-2 text-lg font-semibold text-foreground">{designer.name}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{designer.specialty}</p>
                <Link href={`/designers/${designer.slug}`} className="mt-4 inline-flex text-sm font-semibold text-brand-primary">
                  View designer profile
                </Link>
              </div>
            </InfoCard>
          </div>
        </Container>
      </Section>

      <Section>
        <Container wide>
          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <InfoCard className="bg-surface/90">
                <h2 className="text-2xl font-semibold text-foreground">Project narrative</h2>
                <div className="mt-5 space-y-5">
                  {project.narrativeSections.map((section) => (
                    <div key={section.heading} className="rounded-3xl bg-background/85 p-5">
                      <h3 className="text-xl font-semibold text-foreground">{section.heading}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{section.body}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>
              <InfoCard className="bg-surface/90">
                <h2 className="text-2xl font-semibold text-foreground">Conversion prompt</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  The designer connection appears before the final conversion band so users can move from inspiration into a real next step without searching the footer.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ActionLink href={`/designers/${designer.slug}`}>View Designer</ActionLink>
                  <ActionLink href="/contact" variant="secondary">
                    Book Consultation
                  </ActionLink>
                </div>
              </InfoCard>
            </div>
            <div className="space-y-6">
              <InfoCard className="bg-surface/90">
                <h2 className="text-2xl font-semibold text-foreground">Related product references</h2>
                <div className="mt-5 space-y-4">
                  {relatedProducts.map((product) => (
                    <Link key={product.slug} href={`/shop/${product.slug}`} className="block rounded-3xl bg-background/85 p-4">
                      <p className="text-lg font-semibold text-foreground">{product.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{product.priceLabel}</p>
                    </Link>
                  ))}
                </div>
              </InfoCard>
              <InfoCard className="bg-surface/90">
                <h2 className="text-2xl font-semibold text-foreground">Recovery behavior</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  If related modules fail later, the core project content should still render cleanly and route the user toward the designer profile or broader discovery.
                </p>
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
          <ActionLink href={`/designers/${designer.slug}`} variant="secondary" className="px-3 text-xs">
            View Designer
          </ActionLink>
          <ActionLink href="/contact" className="px-3 text-xs">
            Book
          </ActionLink>
        </div>
      </div>
    </PublicShell>
  );
}