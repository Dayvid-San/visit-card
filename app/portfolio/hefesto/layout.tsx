import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "hefesto",
  "Hefesto, local-first AI assistant for code",
  "Case study: a local-first AI assistant that cites file, line and commit for every answer about a repository, and runs writing agents under human approval."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
