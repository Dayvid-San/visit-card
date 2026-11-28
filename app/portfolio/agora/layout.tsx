import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "agora",
  "Ágora, property appreciation forecasting",
  "Ágora: a property appreciation forecasting project for investors, currently in validation. Frontend and team coordination."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
