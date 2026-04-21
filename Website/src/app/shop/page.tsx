import Link from "next/link";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import { Container, InfoCard, Section, SectionTitle, Tag } from "@/components/ui";
import { products } from "@/lib/site-data";

export default function ShopPage() {
  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <SectionTitle
            eyebrow="Curated shop"
            title="Product exploration that feels tied to interiors, not a marketplace clone."
            description="Editorial merchandising bands sit beside product cards so direct-cart and outbound-store models can share one public structure."
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <InfoCard className="bg-surface/90 p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <Tag tone="accent">Merchandising band</Tag>
                <h2 className="mt-4 font-display text-4xl leading-tight text-foreground">Objects that show up inside real project stories, not detached product dumps.</h2>
                <p className="mt-4 text-sm leading-8 text-muted">
                  The commerce model remains flexible, so the UI keeps the storytelling intact whether the primary action becomes add-to-cart or visit-store.
                </p>
              </div>
              <RemoteImage src={products[0].image} alt={products[0].title} width={1200} height={900} priority className="h-72 w-full rounded-3xl object-cover" />
            </div>
          </InfoCard>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <Link key={product.slug} href={`/shop/${product.slug}`}>
                <InfoCard className="bg-surface/90">
                  <RemoteImage src={product.image} alt={product.title} width={1000} height={800} className="h-64 w-full rounded-3xl object-cover" />
                  <Tag tone="accent" className="mt-5">
                    {product.category}
                  </Tag>
                  <h2 className="mt-3 text-2xl font-semibold text-foreground">{product.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted">{product.excerpt}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-primary">{product.priceLabel}</p>
                </InfoCard>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </PublicShell>
  );
}