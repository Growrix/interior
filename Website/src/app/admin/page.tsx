import { WorkspacePage } from "@/components/workspace-page";
import { workspaceContent } from "@/lib/site-data";

export default function AdminOverviewPage() {
  return <WorkspacePage content={workspaceContent.admin.dashboard} />;
}