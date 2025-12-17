import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, Layers, Cpu, CheckCircle2 } from "lucide-react"

// Interface estendida para detalhes profundos
interface ProjectDetail {
  title: string
  subtitle: string
  date: string
  role: string
  heroImage: string
  tags: string[]
  links: {
    demo?: string
    github?: string
    paper?: string
  }
  overview: string
  challenges: string[]
  solutions: string[]
  architectureUrl?: string // URL para o diagrama de arquitetura
}

// Dados do Projeto (EngScan) - Isso viria de um banco de dados ou CMS em produção
const projectData: ProjectDetail = {
  title: "EngScan",
  subtitle: "Solução baseada em microsserviços para análise de imagens e laudos automáticos",
  date: "2024 - 2025",
  role: "Lead Full-stack Developer & ML Engineer",
  heroImage: "/modern-ecommerce-dashboard.png", // Sua imagem existente
  tags: ["Nest.js", "Angular", "Python", "TensorFlow", "Tailwind", "PostgreSQL", "RabbitMQ", "Docker"],
  links: {
    demo: "https://engscan.com",
    github: "/portfolio/engscan",
  },
  overview:
    "O EngScan moderniza o fluxo de trabalho de engenheiros civis diagnósticos. Tradicionalmente, a análise de patologias em estruturas exige horas de inspeção manual e redação de relatórios. O EngScan automatiza esse processo utilizando Computer Vision para identificar falhas em fotos enviadas e gera laudos técnicos formatados instantaneamente.",
  challenges: [
    "Processamento de imagens de alta resolução causava gargalos na API principal.",
    "Necessidade de isolar o ambiente Python (ML) do núcleo da aplicação em Node.js.",
    "Gerar PDFs complexos com layout técnico exigido pelas normas ABNT."
  ],
  solutions: [
    "Arquitetura de microsserviços orientada a eventos usando RabbitMQ para comunicação assíncrona.",
    "Serviço dedicado de GPU em Python para rodar os modelos CNN (Redes Neurais Convolucionais).",
    "Fila de processamento em background (BullMQ) para geração de relatórios sem travar a interface do usuário."
  ]
}

export default function EngScan() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Botão Voltar */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="-ml-4 text-muted-foreground hover:text-primary">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Portfolio
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{projectData.title}</h1>
            <p className="text-xl text-muted-foreground">{projectData.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-sm py-1 px-3">
              {projectData.date}
            </Badge>
          </div>
        </div>
      </div>

      {/* Imagem Principal / Hero */}
      <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-xl border bg-muted shadow-sm">
        <Image
          src={projectData.heroImage}
          alt={`Capa do projeto ${projectData.title}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid gap-12 md:grid-cols-[1fr_300px] lg:gap-16">
        
        {/* Coluna Principal (Conteúdo) */}
        <div className="space-y-12">
          
          {/* Visão Geral */}
          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Layers className="mr-2 h-6 w-6 text-primary" />
              Visão Geral
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {projectData.overview}
            </p>
          </section>

          <Separator />

          {/* Desafios e Soluções */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-500/80">O Desafio</h3>
              <ul className="space-y-3">
                {projectData.challenges.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-500/80">A Solução</h3>
              <ul className="space-y-3">
                {projectData.solutions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Separator />

          {/* Arquitetura Técnica */}
          <section className="space-y-6">
             <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Cpu className="mr-2 h-6 w-6 text-primary" />
              Arquitetura do Sistema
            </h2>
            <p className="text-muted-foreground">
              O sistema utiliza uma abordagem desacoplada. O Frontend em Angular comunica-se com um Gateway API em NestJS. 
              Processos pesados (IA e Geração de PDF) são delegados a filas (RabbitMQ) e consumidos por workers especializados em Python.
            </p>
            
            {/* Placeholder para Diagrama de Arquitetura */}
            <Card className="overflow-hidden border-dashed bg-slate-50 dark:bg-slate-950/50">
              <CardContent className="flex aspect-[16/9] flex-col items-center justify-center p-6 text-center text-muted-foreground">
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                   {/* Aqui você colocaria a imagem real do diagrama */}
                   <span className="text-sm italic">
                    [Diagrama de Arquitetura de Microsserviços: Angular → NestJS Gateway → RabbitMQ → Python Workers]
                   </span>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Coluna Lateral (Metadados) */}
        <aside className="space-y-8">
          
          {/* Links de Ação */}
          <div className="flex flex-col gap-3">
            {projectData.links.demo && (
              <Button size="lg" className="w-full font-semibold" asChild>
                <a href={projectData.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Acessar Demo Online
                </a>
              </Button>
            )}
            {projectData.links.github && (
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href={projectData.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver Código Fonte
                </a>
              </Button>
            )}
          </div>

          {/* Tecnologias */}
          <div className="space-y-4 rounded-lg border p-6 shadow-sm">
            <h3 className="font-semibold">Stack Tecnológica</h3>
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
            <h3 className="font-semibold">Ficha Técnica</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Função</span>
                <span className="font-medium text-right">{projectData.role}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ano</span>
                <span className="font-medium">{projectData.date}</span>
              </div>
              <Separator />
               <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-green-600">Em Produção</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}