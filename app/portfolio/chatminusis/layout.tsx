import type React from "react";
import { projectMetadata } from "@/lib/project-metadata";

export const metadata = projectMetadata(
  "chatminusis",
  "Chatminusis, end-to-end encrypted chat",
  "Case study: an end-to-end encrypted chat using MLS (RFC 9420), with a Rust core exposed to Flutter over FFI and Firebase or Supabase backends."
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
