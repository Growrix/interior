import type { ReactNode } from "react";

import { WorkspaceShell } from "@/components/workspace-shell";

export default function DesignerLayout({ children }: { children: ReactNode }) {
  return <WorkspaceShell role="designer">{children}</WorkspaceShell>;
}