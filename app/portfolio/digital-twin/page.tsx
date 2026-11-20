"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Layers,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Scale,
  Users,
  ListChecks,
  TriangleAlert,
  CircleHelp,
  FlaskConical,
} from "lucide-react"
import { useContent } from "@/components/content-provider"
import { ProjectHeroImage } from "@/components/project-hero-image"

const projectData = {
  tags: ["Java", "Spring Boot", "TypeScript", "Event Sourcing", "Monte Carlo", "ClickUp API", "Discord"],
  challengeKeys: ["twin.challenges.item1", "twin.challenges.item2", "twin.challenges.item3"],
  solutionKeys: ["twin.solutions.item1", "twin.solutions.item2", "twin.solutions.item3"],
}

const mappingKeys = ["asset", "sensors", "state", "maintenance", "command"]

const architectureLayers = [
  { key: "ingest", color: "text-blue-500" },
  { key: "log", color: "text-amber-500" },
  { key: "state", color: "text-purple-500" },
  { key: "sim", color: "text-green-500" },
]

const decisionKeys = ["eventSourcing", "monteCarlo", "maturity", "agnostic"]

const ethicsKeys = ["twin.ethics.item1", "twin.ethics.item2", "twin.ethics.item3", "twin.ethics.item4", "twin.ethics.item5"]

const roadmapKeys = [
  "twin.roadmap.item1",
  "twin.roadmap.item2",
  "twin.roadmap.item3",
  "twin.roadmap.item4",
  "twin.roadmap.item5",
  "twin.roadmap.item6",
  "twin.roadmap.item7",
]

const riskKeys = ["twin.risks.item1", "twin.risks.item2", "twin.risks.item3"]

export default function DigitalTwin() {
  const { t } = useContent()
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Botão Voltar */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="-ml-4 text-muted-foreground hover:text-primary">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("projectDetail.back")}
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{t("twin.title")}</h1>
            <p className="text-xl text-muted-foreground">{t("twin.subtitle")}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-sm py-1 px-3">
              {t("twin.date")}
            </Badge>
          </div>
        </div>
      </div>

      <ProjectHeroImage slug="digital-twin" fallbackSrc="/placeholder.svg" alt={`Capa do projeto ${t("twin.title")}`} />

      {/* Fase do projeto: sem resultados medidos ainda */}
      <div className="mb-12 flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-muted-foreground">
        <FlaskConical className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
        <p>{t("twin.statusNote")}</p>
      </div>

      <div className="grid gap-12 md:grid-cols-[1fr_300px] lg:gap-16">
        {/* Coluna Principal (Conteúdo) */}
        <div className="space-y-12">
          {/* Visão Geral */}
          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Layers className="mr-2 h-6 w-6 text-primary" />
              {t("twin.overview.heading")}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{t("twin.overview.body")}</p>
            <Card className="bg-muted/30 p-5">
              <div className="flex items-start gap-3">
                <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 text-sm font-bold">{t("twin.question.heading")}</h3>
                  <p className="text-sm italic leading-relaxed text-muted-foreground">{t("twin.question.body")}</p>
                </div>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Mapeamento físico -> equipe */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">{t("twin.mapping.heading")}</h2>
            <p className="text-muted-foreground">{t("twin.mapping.intro")}</p>
            <div className="overflow-hidden rounded-lg border text-sm">
              <div className="grid grid-cols-[2fr_3fr] bg-muted/50 font-semibold">
                <div className="p-3">{t("twin.mapping.fromHeader")}</div>
                <div className="p-3">{t("twin.mapping.toHeader")}</div>
              </div>
              {mappingKeys.map((key) => (
                <div key={key} className="grid grid-cols-[2fr_3fr] border-t">
                  <div className="p-3 text-muted-foreground">{t(`twin.mapping.${key}.from`)}</div>
                  <div className="p-3">{t(`twin.mapping.${key}.to`)}</div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Desafios e Abordagem */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-500/80">{t("twin.challenges.heading")}</h3>
              <ul className="space-y-3">
                {projectData.challengeKeys.map((key) => (
                  <li key={key} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-500/80">{t("twin.solutions.heading")}</h3>
              <ul className="space-y-3">
                {projectData.solutionKeys.map((key) => (
                  <li key={key} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Separator />

          {/* Arquitetura */}
          <section className="space-y-6">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Cpu className="mr-2 h-6 w-6 text-primary" />
              {t("twin.architecture.heading")}
            </h2>
            <p className="text-muted-foreground">{t("twin.architecture.body")}</p>

            <Card className="overflow-hidden border-dashed bg-slate-50 dark:bg-slate-950/50">
              <CardContent className="p-6">
                <div className="w-full space-y-2 text-left font-mono text-xs">
                  {architectureLayers.map((layer, index) => (
                    <div key={layer.key} className="space-y-2">
                      {index > 0 && (
                        <div className="text-center text-muted-foreground">{t("twin.architecture.diagram.arrow")}</div>
                      )}
                      <div className="rounded border bg-background p-3">
                        <span className={`font-bold ${layer.color}`}>{t(`twin.architecture.diagram.${layer.key}Tag`)}</span>{" "}
                        {t(`twin.architecture.diagram.${layer.key}`)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground">{t("twin.architecture.syntheticNote")}</p>
          </section>

          <Separator />

          {/* Decisões com trade-offs */}
          <section className="space-y-6">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Scale className="mr-2 h-6 w-6 text-primary" />
              {t("twin.decisions.heading")}
            </h2>
            <div className="space-y-4">
              {decisionKeys.map((key) => (
                <Card key={key} className="space-y-2 p-5">
                  <h3 className="font-bold">{t(`twin.decisions.${key}.title`)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(`twin.decisions.${key}.body`)}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">{t("twin.decisions.tradeoffLabel")}</span>{" "}
                    {t(`twin.decisions.${key}.tradeoff`)}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Ética e privacidade */}
          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
              {t("twin.ethics.heading")}
            </h2>
            <p className="text-muted-foreground">{t("twin.ethics.intro")}</p>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
              {ethicsKeys.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ol>
          </section>

          <Separator />

          {/* Estudo de caso */}
          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Users className="mr-2 h-6 w-6 text-primary" />
              {t("twin.case.heading")}
            </h2>
            <p className="text-muted-foreground">{t("twin.case.body")}</p>
            <Link href="/portfolio/tyto" className="inline-block text-sm font-medium text-primary underline-offset-4 hover:underline">
              {t("twin.case.link")}
            </Link>
          </section>

          <Separator />

          {/* Plano de entregas */}
          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <ListChecks className="mr-2 h-6 w-6 text-primary" />
              {t("twin.roadmap.heading")}
            </h2>
            <p className="text-muted-foreground">{t("twin.roadmap.intro")}</p>
            <ol className="space-y-2">
              {roadmapKeys.map((key, index) => (
                <li key={key} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-xs">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{t(key)}</span>
                </li>
              ))}
            </ol>
          </section>

          <Separator />

          {/* Riscos */}
          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <TriangleAlert className="mr-2 h-6 w-6 text-primary" />
              {t("twin.risks.heading")}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {riskKeys.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Coluna Lateral (Metadados) */}
        <aside className="space-y-8">
          {/* Tecnologias */}
          <div className="space-y-4 rounded-lg border p-6 shadow-sm">
            <h3 className="font-semibold">{t("twin.labels.techStack")}</h3>
            <div className="flex flex-wrap gap-2">
              {projectData.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Info Adicional */}
          <div className="space-y-4 rounded-lg border bg-muted/50 p-6">
            <h3 className="font-semibold">{t("projectDetail.techSheet")}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">{t("twin.labels.role")}</span>
                <span className="font-medium text-right">{t("twin.role")}</span>
              </div>
              <Separator />
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">{t("projectDetail.period")}</span>
                <span className="font-medium">{t("twin.date")}</span>
              </div>
              <Separator />
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">{t("twin.labels.case")}</span>
                <span className="font-medium text-primary">{t("twin.caseValue")}</span>
              </div>
              <Separator />
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">{t("twin.labels.deliverables")}</span>
                <span className="font-medium text-right">{t("twin.deliverablesValue")}</span>
              </div>
              <Separator />
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">{t("projectDetail.status")}</span>
                <span className="font-medium text-right text-amber-600">{t("twin.status")}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
