import { PublicShell } from "@/components/public-shell";
import { Container, InfoCard, Section, SectionTitle } from "@/components/ui";

export default function AboutPage() {
  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <SectionTitle
            eyebrow="About the platform"
            title="A premium, image-forward way to discover designers with clearer trust and next-step signals."
            description="This route explains the platform mission, discovery posture, and trust framing without collapsing into unstyled marketing filler."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              "Discovery anchored in visual proof and service fit.",
              "Trust cues kept near the moment a user decides to inquire or book.",
              "Editorial, events, commerce, and AI guidance integrated without overwhelming the core browse-to-contact journey.",
            ].map((item) => (
              <InfoCard key={item} className="bg-surface/90 text-sm leading-7 text-muted">
                {item}
              </InfoCard>
            ))}
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}