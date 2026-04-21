import { notFound } from "next/navigation";

import { PublicShell } from "@/components/public-shell";
import { Container, InfoCard, Section, Tag } from "@/components/ui";
import { policyPages } from "@/lib/site-data";

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.hasOwn(policyPages, slug)) {
    notFound();
  }

  const policy = policyPages[slug as keyof typeof policyPages];

  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <InfoCard className="bg-surface/90 p-6 sm:p-8">
            <Tag tone="info">Policy</Tag>
            <h1 className="mt-4 font-display text-5xl leading-tight text-foreground">{policy.title}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-muted">{policy.intro}</p>
            <div className="mt-8 space-y-4">
              {policy.sections.map((section) => (
                <div key={section} className="rounded-3xl bg-background/85 px-5 py-5 text-sm leading-7 text-muted">
                  {section}
                </div>
              ))}
            </div>
          </InfoCard>
        </Container>
      </Section>
    </PublicShell>
  );
}