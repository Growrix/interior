import Link from "next/link";
import { notFound } from "next/navigation";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import { Container, InfoCard, Section, Tag } from "@/components/ui";
import { articleBySlug, articles } from "@/lib/site-data";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ articleSlug: string }>;
}) {
  const { articleSlug } = await params;
  const article = articleBySlug[articleSlug];

  if (!article) {
    notFound();
  }

  const related = articles.filter((entry) => entry.slug !== article.slug).slice(0, 2);

  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[minmax(0,720px)_320px] xl:items-start">
            <InfoCard className="bg-surface/90 p-6 sm:p-8">
              <Tag tone="accent">{article.category}</Tag>
              <h1 className="mt-4 font-display text-5xl leading-tight text-foreground">{article.title}</h1>
              <p className="mt-3 text-sm leading-7 text-muted">{article.readingTime}</p>
              <RemoteImage src={article.image} alt={article.title} width={1500} height={1050} priority className="mt-6 h-105 w-full rounded-3xl object-cover" />
              <div className="mt-8 space-y-6 text-base leading-8 text-foreground/90">
                {article.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </InfoCard>
            <div className="space-y-6 xl:sticky xl:top-28 xl:h-fit">
              <InfoCard className="bg-surface/90">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Inline discovery paths</p>
                <div className="mt-4 space-y-3">
                  {article.references.map((reference) => (
                    <div key={reference} className="rounded-3xl bg-background/85 px-4 py-4 text-sm leading-7 text-muted">
                      {reference}
                    </div>
                  ))}
                </div>
              </InfoCard>
              <InfoCard className="bg-surface/90">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Keep exploring</p>
                <div className="mt-4 space-y-3">
                  {related.map((entry) => (
                    <Link key={entry.slug} href={`/blog/${entry.slug}`} className="block rounded-3xl bg-background/85 px-4 py-4 text-sm font-semibold text-foreground">
                      {entry.title}
                    </Link>
                  ))}
                </div>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}