import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "artemis",
  "Ártemis, personal AI assistant",
  "Case study: a single-user AI assistant built with FastAPI and Claude tool use, with its own memory, drafts for email and calendar, and computer actions behind an allowlist."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
