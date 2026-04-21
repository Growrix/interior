import { PublicShell } from "@/components/public-shell";
import { ActionLink, Container, InfoCard, Section, SectionTitle, Tag } from "@/components/ui";
import { assistantPrompts, designers } from "@/lib/site-data";

export default function ChatAssistantPage() {
  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <SectionTitle
            eyebrow="AI guidance"
            title="A guided discovery surface that stays honest about its boundaries."
            description="Example prompts are visually distinct from the conversation stream, and fallback actions always route toward search, help, or human contact."
          />
          <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <InfoCard className="bg-surface/90">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Quick prompts</p>
              <div className="mt-5 space-y-3">
                {assistantPrompts.map((prompt) => (
                  <div key={prompt} className="rounded-3xl bg-background/85 px-4 py-4 text-sm leading-7 text-foreground">
                    {prompt}
                  </div>
                ))}
              </div>
            </InfoCard>
            <InfoCard className="bg-surface/90">
              <Tag tone="info">Example conversation</Tag>
              <div className="mt-5 space-y-4">
                <div className="rounded-[28px] rounded-tl-md bg-background/85 px-5 py-4 text-sm leading-7 text-foreground">
                  I need a designer who can soften an industrial loft without losing the architecture.
                </div>
                <div className="rounded-[28px] rounded-tr-md bg-brand-primary px-5 py-4 text-sm leading-7 text-white">
                  Start with warm-minimal and architectural filters. I can also show designers who highlight oak joinery, low-glare lighting, and renovation experience.
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {designers.slice(0, 2).map((designer) => (
                    <div key={designer.slug} className="rounded-3xl bg-background/85 p-4">
                      <p className="text-lg font-semibold text-foreground">{designer.name}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{designer.specialty}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl border border-dashed border-border px-5 py-4 text-sm leading-7 text-muted">
                  Unsupported requests should route to search, help, or contact support instead of inventing protected account information.
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionLink href="/designers">Open designer search</ActionLink>
                <ActionLink href="/help" variant="secondary">
                  Open help
                </ActionLink>
              </div>
            </InfoCard>
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}