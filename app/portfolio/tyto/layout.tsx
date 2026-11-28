import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "tyto",
  "TYTO.club, community platform",
  "Case study: the platform of an international tech community, with a gamified economy, simulated governance and Firestore rules as the real access authority."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
