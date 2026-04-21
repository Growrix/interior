import type { WorkspaceContent } from "@/lib/site-data";

import { InfoCard, StatePanel, Tag } from "./ui";

export function WorkspacePage({ content }: { content: WorkspaceContent }) {
  return (
    <div className="space-y-6">
      <InfoCard className="bg-surface">
        <Tag tone="info">{content.eyebrow}</Tag>
        <h2 className="mt-4 font-display text-4xl leading-tight text-foreground">{content.title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{content.description}</p>
      </InfoCard>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {content.summaryCards.map((card) => (
          <InfoCard key={card.label} className="bg-surface/85">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">{card.label}</p>
            <p className="mt-3 text-3xl font-semibold text-foreground">{card.value}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{card.note}</p>
          </InfoCard>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,1fr)]">
        <InfoCard className="bg-surface">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-foreground">{content.listTitle}</h3>
            <Tag>{content.items.length} items</Tag>
          </div>
          <div className="mt-6 space-y-4">
            {content.items.map((item) => (
              <div key={`${item.title}-${item.meta}`} className="rounded-[20px] border border-border bg-background/80 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.meta}</p>
                  </div>
                  <Tag tone="success">{item.status}</Tag>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">{item.detail}</p>
                <p className="mt-4 text-sm font-semibold text-brand-primary">{item.action}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        <div className="space-y-6">
          <InfoCard className="bg-surface">
            <h3 className="text-xl font-semibold text-foreground">{content.sidePanelTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {content.sidePanelItems.map((item) => (
                <li key={item} className="rounded-[18px] bg-background/80 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </InfoCard>
          <StatePanel
            title={content.stateTitle}
            description={content.stateDescription}
            actionHref={content.stateActionHref}
            actionLabel={content.stateActionLabel}
          />
        </div>
      </div>
    </div>
  );
}