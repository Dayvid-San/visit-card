"use client"

import { Lock, Cog, Mailbox, Database } from "lucide-react"
import { ProjectCaseStudy, type CaseStudyConfig } from "@/components/project-case-study"

const config: CaseStudyConfig = {
  slug: "chatminusis",
  prefix: "chatminusis",
  tags: ["Rust", "MLS (RFC 9420)", "Flutter", "Dart", "FFI", "Firebase", "Supabase", "PostgreSQL (RLS)", "GitHub Actions"],
  links: [{ href: "https://github.com/Dayvid-San/chatminusis", labelKey: "caseStudy.github", kind: "github" }],
  features: [
    { key: "mls", icon: Lock },
    { key: "rust", icon: Cog },
    { key: "carrier", icon: Mailbox },
    { key: "backends", icon: Database },
  ],
  itemCount: 3,
  diagram: [
    [{ tag: "App Flutter", color: "text-blue-500", key: "chatminusis.diagram.app" }],
    { arrowKey: "chatminusis.diagram.arrow1" },
    [{ tag: "Rust + MLS", color: "text-orange-500", key: "chatminusis.diagram.core" }],
    { arrowKey: "chatminusis.diagram.arrow2" },
    [
      { tag: "Firebase", color: "text-yellow-500", key: "chatminusis.diagram.firebase" },
      { tag: "Supabase", color: "text-green-500", key: "chatminusis.diagram.supabase" },
    ],
  ],
  decisionCount: 3,
  facts: [
    { labelKey: "chatminusis.labels.protocol", valueKey: "chatminusis.protocolValue" },
    { labelKey: "chatminusis.labels.backends", valueKey: "chatminusis.backendsValue" },
  ],
}

export default function Chatminusis() {
  return <ProjectCaseStudy config={config} />
}
