"use client"

import { Brain, FileCheck2, FolderLock, Mic } from "lucide-react"
import { ProjectCaseStudy, type CaseStudyConfig } from "@/components/project-case-study"

const config: CaseStudyConfig = {
  slug: "artemis",
  prefix: "artemis",
  tags: [
    "Python",
    "FastAPI",
    "Claude API (tool use)",
    "SQLite (WAL)",
    "Firebase Auth",
    "FCM",
    "Google APIs",
    "TypeScript",
    "Web Speech API",
    "Railway",
    "pytest",
  ],
  noticeKey: "artemis.notice",
  features: [
    { key: "memory", icon: Brain },
    { key: "agents", icon: FileCheck2 },
    { key: "executor", icon: FolderLock },
    { key: "voice", icon: Mic },
  ],
  itemCount: 3,
  diagram: [
    [{ tag: "Frontend TypeScript", color: "text-blue-500", key: "artemis.diagram.front" }],
    { arrowKey: "artemis.diagram.arrow1" },
    [{ tag: "API FastAPI (Railway)", color: "text-purple-500", key: "artemis.diagram.api" }],
    { arrowKey: "artemis.diagram.arrow2" },
    [
      { tag: "Agent (Linux)", color: "text-green-500", key: "artemis.diagram.agent" },
      { tag: "Google", color: "text-pink-500", key: "artemis.diagram.google" },
    ],
  ],
  decisionCount: 4,
  limitationCount: 2,
  facts: [
    { labelKey: "artemis.labels.parts", valueKey: "artemis.partsValue" },
    { labelKey: "artemis.labels.tests", valueKey: "artemis.testsValue" },
  ],
}

export default function Artemis() {
  return <ProjectCaseStudy config={config} />
}
