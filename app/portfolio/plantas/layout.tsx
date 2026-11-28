import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "plantas",
  "Plant Monitor, ESP32 automatic watering",
  "Case study: ESP32 firmware, an ESP32-CAM, a Java backend and a PWA that water and monitor houseplants on the home network, without the cloud."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
