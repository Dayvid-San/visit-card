import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "edge-node",
  "Portable Inspection Edge Node",
  "Case study: an ESP32-CAM inspection device in C++17 with a hardware abstraction layer, a pluggable vision classifier and a fail-safe result model."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
