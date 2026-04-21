import { notFound } from "next/navigation";

import { PublicShell } from "@/components/public-shell";
import { RemoteImage } from "@/components/remote-image";
import { ActionLink, Container, InfoCard, Section, Tag } from "@/components/ui";
import { productBySlug } from "@/lib/site-data";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const product = productBySlug[productSlug];

  if (!product) {
    notFound();
  }

  const primaryLabel = product.commerceMode === "add-to-cart" ? "Add to Cart" : "Visit Store";

  return (
    <PublicShell>
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <InfoCard className="overflow-hidden bg-surface/90 p-3">
              <RemoteImage src={product.image} alt={product.title} width={1500} height={1200} priority className="h-120 w-full rounded-3xl object-cover" />
            </InfoCard>
            <InfoCard className="bg-surface/90">
              <Tag tone="accent">{product.category}</Tag>
              <h1 className="mt-4 font-display text-5xl leading-tight text-foreground">{product.title}</h1>
              <p className="mt-4 text-sm leading-8 text-muted">{product.excerpt}</p>
              <p className="mt-4 text-lg font-semibold text-foreground">{product.priceLabel}</p>
              <div className="mt-5 space-y-3">
                {product.features.map((feature) => (
                  <div key={feature} className="rounded-3xl bg-background/85 px-4 py-4 text-sm leading-7 text-muted">
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                <ActionLink href="/auth/sign-in">Save product</ActionLink>
                <ActionLink href="/contact" variant="secondary">
                  {primaryLabel}
                </ActionLink>
              </div>
            </InfoCard>
          </div>
        </Container>
      </Section>
      <div className="fixed inset-x-4 bottom-4 z-40 rounded-3xl border border-border bg-surface/95 p-3 shadow-(--shadow-overlay) backdrop-blur lg:hidden">
        <div className="grid grid-cols-2 gap-2">
          <ActionLink href="/auth/sign-in" variant="secondary" className="px-3 text-xs">
            Save
          </ActionLink>
          <ActionLink href="/contact" className="px-3 text-xs">
            {primaryLabel}
          </ActionLink>
        </div>
      </div>
    </PublicShell>
  );
}