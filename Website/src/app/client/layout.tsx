import type { ReactNode } from "react";

import { WorkspaceShell } from "@/components/workspace-shell";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return <WorkspaceShell role="client">{children}</WorkspaceShell>;
}