"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowLeft, Layers, Cpu, CheckCircle2, Scale, Hourglass, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useContent } from "@/components/content-provider"
import { ProjectHeroImage } from "@/components/project-hero-image"

export interface DiagramBox {
  tag: string
  color: string
  key: string
}

export type DiagramRow = DiagramBox[] | { arrowKey: string }

export interface CaseStudyConfig {
  /** Route segment under /portfolio, also the projectPageImages/{slug} hero doc id. */
  slug: string
  /** Prefix of every text key of this project in the content registry. */
  prefix: string
  heroFallback?: string
  tags: string[]
  links?: { href: string; labelKey: string; kind: "github" | "demo" }[]
  noticeKey?: string
  features: { key: string; icon: LucideIcon }[]
  itemCount: number
  diagram: DiagramRow[]
  decisionCount: number
  limitationCount?: number
  facts: { labelKey: string; valueKey: string }[]
}

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1)

export function ProjectCaseStudy({ config }: { config: CaseStudyConfig }) {
  const { t } = useContent()
  const k = (suffix: string) => `${config.prefix}.${suffix}`

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="-ml-4 text-muted-foreground hover:text-primary">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("projectDetail.back")}
          </Link>
        </Button>
      </div>

      <div className="mb-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{t(k("title"))}</h1>
            <p className="text-xl text-muted-foreground">{t(k("subtitle"))}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-sm py-1 px-3">
              {t(k("date"))}
            </Badge>
          </div>
        </div>
      </div>

      <ProjectHeroImage
        slug={config.slug}
        fallbackSrc={config.heroFallback ?? "/placeholder.svg"}
        alt={`${t("projectDetail.coverAlt")} ${t(k("title"))}`}
      />

      <div className="grid gap-12 md:grid-cols-[1fr_300px] lg:gap-16">
        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Layers className="mr-2 h-6 w-6 text-primary" />
              {t("caseStudy.overview")}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{t(k("overview.body"))}</p>
          </section>

          <Separator />

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">{t("caseStudy.features")}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {config.features.map(({ key, icon: Icon }) => (
                <Card key={key} className="p-4 bg-muted/30">
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-bold text-sm mb-1">{t(k(`features.${key}.title`))}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{t(k(`features.${key}.description`))}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          <section className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-red-500/80">{t("caseStudy.challenges")}</h2>
              <ul className="space-y-3">
                {range(config.itemCount).map((i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {t(k(`challenges.item${i}`))}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-500/80">{t("caseStudy.solutions")}</h2>
              <ul className="space-y-3">
                {range(config.itemCount).map((i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                    {t(k(`solutions.item${i}`))}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Cpu className="mr-2 h-6 w-6 text-primary" />
              {t("caseStudy.architecture")}
            </h2>
            <p className="text-muted-foreground">{t(k("architecture.body"))}</p>
            <Card className="overflow-hidden border-dashed bg-slate-50 dark:bg-slate-950/50">
              <CardContent className="p-8">
                <div className="w-full space-y-4 text-left font-mono text-xs">
                  {config.diagram.map((row, i) =>
                    "arrowKey" in row ? (
                      <div key={i} className="text-center text-muted-foreground">
                        {t(row.arrowKey)}
                      </div>
                    ) : (
                      <div key={i} className={row.length > 1 ? "grid gap-3 sm:grid-cols-2" : ""}>
                        {row.map((box) => (
                          <div key={box.key} className="rounded border bg-background p-3">
                            <span className={`font-bold ${box.color}`}>[{box.tag}]</span> {t(box.key)}
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Scale className="mr-2 h-6 w-6 text-primary" />
              {t("caseStudy.decisions")}
            </h2>
            <p className="text-muted-foreground">{t("caseStudy.decisionsIntro")}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {range(config.decisionCount).map((i) => (
                <li key={i}>{t(k(`decisions.item${i}`))}</li>
              ))}
            </ul>
          </section>

          {config.limitationCount ? (
            <>
              <Separator />
              <section className="space-y-4">
                <h2 className="flex items-center text-2xl font-bold tracking-tight">
                  <Hourglass className="mr-2 h-6 w-6 text-primary" />
                  {t("caseStudy.limitations")}
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {range(config.limitationCount).map((i) => (
                    <li key={i}>{t(k(`limitations.item${i}`))}</li>
                  ))}
                </ul>
              </section>
            </>
          ) : null}
        </div>

        <aside className="space-y-8">
          {config.links?.length ? (
            <div className="flex flex-col gap-3">
              {config.links.map((link) => (
                <Button
                  key={link.href}
                  size="lg"
                  variant={link.kind === "demo" ? "default" : "outline"}
                  className="w-full font-semibold"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.kind === "github" ? <Github className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                    {t(link.labelKey)}
                  </a>
                </Button>
              ))}
            </div>
          ) : null}

          {config.noticeKey ? (
            <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">{t(config.noticeKey)}</div>
          ) : null}

          <div className="space-y-4 rounded-lg border p-6 shadow-sm">
            <h3 className="font-semibold">{t("caseStudy.techStack")}</h3>
            <div className="flex flex-wrap gap-2">
              {config.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-lg border bg-muted/50 p-6">
            <h3 className="font-semibold">{t("projectDetail.techSheet")}</h3>
            <div className="space-y-3 text-sm">
              {[
                { labelKey: "caseStudy.role", valueKey: k("role") },
                { labelKey: "projectDetail.period", valueKey: k("date") },
                ...config.facts,
                { labelKey: "projectDetail.status", valueKey: k("status") },
              ].map((fact, i) => (
                <div key={fact.labelKey}>
                  {i > 0 ? <Separator className="mb-3" /> : null}
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{t(fact.labelKey)}</span>
                    <span className="font-medium text-right">{t(fact.valueKey)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
