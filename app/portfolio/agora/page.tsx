import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, Layers, Cpu, CheckCircle2 } from "lucide-react"

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
}

const projectData: ProjectDetail = {
  title: "Ágora",
  subtitle: "Predição automática do valor de imóveis por região, a partir de dados de mercado",
  date: "2024 - Presente",
  role: "Lead Full-stack Developer & ML Engineer",
  heroImage: "/placeholder.svg",
  tags: ["Python", "Scikit-learn", "Pandas", "FastAPI", "Next.js", "PostgreSQL"],
  links: {},
  overview:
    "Ágora surgiu enquanto eu explorava o setor de investimentos imobiliários em busca de problemas que valessem a pena resolver com software: comprador e corretor decidem preço de imóvel quase sempre no olho, comparando poucos anúncios manualmente. Ágora treina um modelo de regressão sobre dados históricos de imóveis anunciados (localização, área, quartos, padrão de acabamento, distância de pontos de interesse) para estimar automaticamente o valor de mercado de um imóvel numa região, e expõe isso numa API consumida por uma interface simples de consulta.",
  challenges: [
    "Dados de imóveis anunciados publicamente vêm sujos e inconsistentes: mesma característica descrita de formas diferentes por anúncio, valores discrepantes e duplicados.",
    "Preço de imóvel varia muito por bairro e até por rua, então um único modelo genérico para uma cidade inteira erra grosseiramente em regiões menos representadas nos dados.",
    "Precisava expor a predição de um jeito que desse pra confiar: um número sozinho, sem contexto, não convence ninguém a decidir sobre um imóvel.",
  ],
  solutions: [
    "Pipeline de limpeza e normalização em Pandas antes do treino, incluindo remoção de duplicados e outliers por faixa de preço/região.",
    "Modelo de regressão com a localização (bairro/região) como variável central, treinado e validado separadamente por região em vez de um único modelo nacional.",
    "API em FastAPI que devolve, além do valor estimado, a faixa de confiança e os imóveis comparáveis usados na estimativa, para dar contexto à predição.",
  ],
}

export default function Agora() {
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
              Pipeline de dados e treino em Python (Pandas + Scikit-learn), servido por uma API em FastAPI que
              carrega o modelo treinado e responde predições em tempo real. Um frontend em Next.js consome essa
              API para o formulário de consulta e a exibição dos imóveis comparáveis.
            </p>

            {/* Placeholder para Diagrama de Arquitetura */}
            <Card className="overflow-hidden border-dashed bg-slate-50 dark:bg-slate-950/50">
              <CardContent className="flex aspect-[16/9] flex-col items-center justify-center p-6 text-center text-muted-foreground">
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                   <span className="text-sm italic">
                    [Diagrama de Arquitetura: Dados de anúncios → Pipeline Pandas/Scikit-learn → API FastAPI → Next.js]
                   </span>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Coluna Lateral (Metadados) */}
        <aside className="space-y-8">
          {/* Links de Ação */}
          {(projectData.links.demo || projectData.links.github) && (
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
                    Mais Sobre
                  </a>
                </Button>
              )}
            </div>
          )}

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
                <span className="font-medium text-amber-600">Em desenvolvimento interno</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
