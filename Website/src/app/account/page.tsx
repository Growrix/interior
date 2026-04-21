import { PublicShell } from "@/components/public-shell";
import { ActionLink, Container, InfoCard, Section, SectionTitle } from "@/components/ui";

export default function AccountPage() {
  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <SectionTitle
            eyebrow="Account routing"
            title="Choose the protected surface that matches your role without ambiguity."
            description="The route stays lightweight and role-aware so visitors do not have to parse a marketing page before reaching the right workspace."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <InfoCard className="bg-surface/90">
              <h2 className="text-2xl font-semibold text-foreground">Client area</h2>
              <p className="mt-2 text-sm leading-7 text-muted">Saved designers, inquiries, bookings, messages, and reviews.</p>
              <ActionLink href="/client/dashboard" className="mt-6">
                Open client workspace
              </ActionLink>
            </InfoCard>
              <InfoCard className="bg-surface/90">
              <h2 className="text-2xl font-semibold text-foreground">Designer area</h2>
              <p className="mt-2 text-sm leading-7 text-muted">Profile quality, portfolio, leads, content, events, and shop management.</p>
              <ActionLink href="/designer/dashboard" className="mt-6">
                Open designer workspace
              </ActionLink>
            </InfoCard>
              <InfoCard className="bg-surface/90">
              <h2 className="text-2xl font-semibold text-foreground">Admin area</h2>
              <p className="mt-2 text-sm leading-7 text-muted">Moderation, support, trust intervention, and configuration summaries.</p>
              <ActionLink href="/admin" className="mt-6">
                Open admin workspace
              </ActionLink>
            </InfoCard>
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}