import { notFound } from "next/navigation";

import { WorkspacePage } from "@/components/workspace-page";
import { workspaceContent } from "@/lib/site-data";

export default async function AdminSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  if (section === "dashboard") {
    notFound();
  }

  const content = workspaceContent.admin[section];

  if (!content) {
    notFound();
  }

  return <WorkspacePage content={content} />;
}