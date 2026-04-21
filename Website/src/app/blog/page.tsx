import Link from "next/link";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import { Container, InfoCard, Section, SectionTitle, Tag } from "@/components/ui";
import { articles } from "@/lib/site-data";

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <SectionTitle
            eyebrow="Editorial reading"
            title="Long-form content that routes readers back toward designers, projects, and practical next steps."
            description="Topic chips stay readable on mobile, article cards stay visually distinct from designer and product cards, and the overall page keeps an editorial rhythm instead of a catalog grid."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {articles.map((article) => (
              <Tag key={article.slug}>{article.category}</Tag>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Link href={`/blog/${featured.slug}`} className="block">
              <InfoCard className="overflow-hidden bg-surface/90 p-3">
                <RemoteImage src={featured.image} alt={featured.title} width={1500} height={1050} priority className="h-105 w-full rounded-3xl object-cover" />
                <div className="p-4 sm:p-6">
                  <Tag tone="accent">Featured article</Tag>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-foreground">{featured.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{featured.excerpt}</p>
                </div>
              </InfoCard>
            </Link>
            <div className="grid gap-5">
              {rest.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <InfoCard className="grid gap-4 bg-surface/90 p-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center">
                    <RemoteImage src={article.image} alt={article.title} width={900} height={700} className="h-44 w-full rounded-3xl object-cover" />
                    <div>
                      <Tag>{article.category}</Tag>
                      <h3 className="mt-3 text-2xl font-semibold text-foreground">{article.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{article.excerpt}</p>
                    </div>
                  </InfoCard>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}