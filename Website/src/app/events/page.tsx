import Link from "next/link";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import { Container, InfoCard, Section, SectionTitle, Tag } from "@/components/ui";
import { events } from "@/lib/site-data";

export default function EventsPage() {
  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <SectionTitle
            eyebrow="Events and workshops"
            title="Educational and promotional events that still feel editorial, not generic ticketing UI."
            description="Each event highlights host, format, and agenda while keeping the mobile detail route ready for save and register-style sticky actions."
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {events.map((event) => (
              <Link key={event.slug} href={`/events/${event.slug}`}>
                <InfoCard className="overflow-hidden bg-surface/90 p-3">
                  <RemoteImage src={event.image} alt={event.title} width={1200} height={800} className="h-80 w-full rounded-3xl object-cover" />
                  <div className="p-4 sm:p-6">
                    <Tag tone="accent">{event.format}</Tag>
                    <h2 className="mt-4 text-3xl font-semibold text-foreground">{event.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-muted">{event.date} • {event.location}</p>
                    <p className="mt-3 text-sm leading-7 text-muted">{event.excerpt}</p>
                  </div>
                </InfoCard>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}