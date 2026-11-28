import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "engscan",
  "EngScan, AI for building inspections",
  "Case study: a building inspection platform with two-stage AI (YOLO + ResNet), event-driven microservices and automatic PDF reports. 1st place in a state startup competition."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
