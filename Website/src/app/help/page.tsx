import { PublicShell } from "@/components/public-shell";
import { Container, InfoCard, Section, SectionTitle, Tag } from "@/components/ui";

const categories = [
  "Account and access",
  "Booking and consultation expectations",
  "Reviews and trust",
  "Shop and product questions",
];

export default function HelpPage() {
  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <SectionTitle
            eyebrow="Help center"
            title="Searchable help categories and clear support routing without an unstyled utility dump."
            description="Help remains readable, indexable, and structured for later content expansion while preserving the right account, booking, and trust groupings now."
          />
          <InfoCard className="mt-8 bg-surface/90 p-5">
            <div className="min-h-12 rounded-full border border-border bg-background px-5 py-3 text-sm text-muted">
              Search help articles, account support, booking FAQs, or trust guidance
            </div>
          </InfoCard>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {categories.map((category) => (
              <InfoCard key={category} className="bg-surface/90">
                <Tag tone="info">Help category</Tag>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">{category}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Reserved for searchable articles and support routing once the content and backend support model are approved.
                </p>
              </InfoCard>
            ))}
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}