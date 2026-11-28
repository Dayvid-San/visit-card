import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "flugo",
  "Flugo, employee onboarding form",
  "Flugo: a multi-step employee onboarding form with schema validation and address autofill."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
