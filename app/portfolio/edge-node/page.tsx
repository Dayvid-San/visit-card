"use client"

import { CircuitBoard, Workflow, Puzzle, ShieldAlert } from "lucide-react"
import { ProjectCaseStudy, type CaseStudyConfig } from "@/components/project-case-study"

const config: CaseStudyConfig = {
  slug: "edge-node",
  prefix: "edgenode",
  tags: ["C++17", "ESP32-CAM", "HAL", "Computer Vision", "Vision LLM", "Unit Tests"],
  links: [{ href: "https://github.com/Dayvid-San/Portable-Inspection-Edge-Node", labelKey: "caseStudy.github", kind: "github" }],
  features: [
    { key: "hal", icon: CircuitBoard },
    { key: "pipeline", icon: Workflow },
    { key: "classifier", icon: Puzzle },
    { key: "failsafe", icon: ShieldAlert },
  ],
  itemCount: 3,
  diagram: [
    [{ tag: "ESP32-CAM", color: "text-blue-500", key: "edgenode.diagram.device" }],
    { arrowKey: "edgenode.diagram.arrow1" },
    [{ tag: "Pipeline", color: "text-purple-500", key: "edgenode.diagram.pipeline" }],
    { arrowKey: "edgenode.diagram.arrow2" },
    [
      { tag: "Classifier", color: "text-pink-500", key: "edgenode.diagram.classifier" },
      { tag: "Output", color: "text-green-500", key: "edgenode.diagram.result" },
    ],
  ],
  decisionCount: 3,
  facts: [
    { labelKey: "edgenode.labels.hardware", valueKey: "edgenode.hardwareValue" },
    { labelKey: "edgenode.labels.language", valueKey: "edgenode.languageValue" },
  ],
}

export default function EdgeNode() {
  return <ProjectCaseStudy config={config} />
}
