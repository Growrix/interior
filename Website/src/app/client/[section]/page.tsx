import { notFound } from "next/navigation";

import { WorkspacePage } from "@/components/workspace-page";
import { workspaceContent } from "@/lib/site-data";

export default async function ClientSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const content = workspaceContent.client[section];

  if (!content) {
    notFound();
  }

  return <WorkspacePage content={content} />;
}