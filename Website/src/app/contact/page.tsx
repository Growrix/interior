import { PublicShell } from "@/components/public-shell";
import { ActionLink, Container, InfoCard, Section, SectionTitle, Tag } from "@/components/ui";

export default function ContactPage() {
  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <InfoCard className="bg-surface/90">
              <SectionTitle
                eyebrow="Support and consultation entry"
                title="A contact surface that stays actionable instead of becoming a catch-all dead-end form."
                description="The same shell can support consultation intent, support routing, or escalation to human help once backend and security work are complete."
              />
              <div className="mt-6 grid gap-3">
                <div className="rounded-3xl bg-background/85 px-4 py-4 text-sm leading-7 text-muted">
                  Consultation requests remain a protected flow later, but the route already preserves the right framing and next-step language.
                </div>
                <div className="rounded-3xl bg-background/85 px-4 py-4 text-sm leading-7 text-muted">
                  Support, trust, and booking questions should be routed clearly instead of mixed into one ambiguous inbox.
                </div>
              </div>
            </InfoCard>
            <InfoCard className="bg-surface/90">
              <Tag tone="info">Passive frontend form</Tag>
              <form className="mt-5 grid gap-4">
                <input className="min-h-12 rounded-2xl border border-border bg-background px-4" placeholder="Your name" />
                <input className="min-h-12 rounded-2xl border border-border bg-background px-4" placeholder="Email address" />
                <select className="min-h-12 rounded-2xl border border-border bg-background px-4">
                  <option>Consultation request</option>
                  <option>Platform support</option>
                  <option>Trust or moderation question</option>
                </select>
                <textarea className="min-h-40 rounded-2xl border border-border bg-background px-4 py-3" placeholder="Tell us what you need" />
                <div className="flex flex-wrap gap-3">
                  <button type="button" className="min-h-11 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white">
                    Continue when backend is ready
                  </button>
                  <ActionLink href="/help" variant="secondary">
                    Browse help
                  </ActionLink>
                </div>
              </form>
            </InfoCard>
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}