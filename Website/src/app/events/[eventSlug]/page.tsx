import { notFound } from "next/navigation";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import { ActionLink, Container, InfoCard, Section, Tag } from "@/components/ui";
import { eventBySlug } from "@/lib/site-data";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventSlug: string }>;
}) {
  const { eventSlug } = await params;
  const event = eventBySlug[eventSlug];

  if (!event) {
    notFound();
  }

  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <InfoCard className="overflow-hidden bg-surface/90 p-3">
              <RemoteImage src={event.image} alt={event.title} width={1500} height={1050} priority className="h-115 w-full rounded-3xl object-cover" />
            </InfoCard>
            <InfoCard className="bg-surface/90">
              <Tag tone="accent">{event.format}</Tag>
              <h1 className="mt-4 font-display text-5xl leading-tight text-foreground">{event.title}</h1>
              <p className="mt-4 text-sm leading-7 text-muted">Hosted by {event.host}</p>
              <p className="mt-1 text-sm leading-7 text-muted">{event.date} • {event.location}</p>
              <p className="mt-4 text-sm leading-8 text-muted">{event.excerpt}</p>
              <div className="mt-6 grid gap-3">
                <ActionLink href="/auth/sign-in">Save event</ActionLink>
                <ActionLink href="/contact" variant="secondary">
                  Register interest
                </ActionLink>
              </div>
            </InfoCard>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <InfoCard className="bg-surface/90">
            <h2 className="text-2xl font-semibold text-foreground">Agenda preview</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {event.agenda.map((item) => (
                <div key={item} className="rounded-3xl bg-background/85 p-4 text-sm leading-7 text-muted">
                  {item}
                </div>
              ))}
            </div>
          </InfoCard>
        </Container>
      </Section>
      <div className="fixed inset-x-4 bottom-4 z-40 rounded-3xl border border-border bg-surface/95 p-3 shadow-(--shadow-overlay) backdrop-blur lg:hidden">
        <div className="grid grid-cols-2 gap-2">
          <ActionLink href="/auth/sign-in" variant="secondary" className="px-3 text-xs">
            Save
          </ActionLink>
          <ActionLink href="/contact" className="px-3 text-xs">
            Register
          </ActionLink>
        </div>
      </div>
    </PublicShell>
  );
}