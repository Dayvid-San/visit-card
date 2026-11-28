import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "maestro",
  "Maestro, AI agent orchestrator",
  "Case study: a local orchestrator of specialized AI agents that plan, implement and test code in isolated Git worktrees, with a CLI and a local API."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
