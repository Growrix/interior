import { PublicShell } from "@/components/public-shell";
import { ActionLink, Container, InfoCard, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <PublicShell>
      <Section className="pt-16">
        <Container>
          <InfoCard className="bg-surface/90 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Unavailable resource</p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-foreground">This page is missing, hidden, or not ready to show.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-muted">
              Recovery stays polite and useful: route people back to discovery, help, or the nearest safe alternative instead of leaving them in a broken gallery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink href="/designers">Browse designers</ActionLink>
              <ActionLink href="/help" variant="secondary">
                Open help
              </ActionLink>
            </div>
          </InfoCard>
        </Container>
      </Section>
    </PublicShell>
  );
}