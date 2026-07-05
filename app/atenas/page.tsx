import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Brain, Gem, Sparkles, Code, Users, ExternalLink, CheckCircle2, Github } from "lucide-react"

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

// Dados do Projeto (Deusa Athena)
const projectData: ProjectDetail = {
  title: "Deusa Athena",
  subtitle: "A Inteligência por trás do TYTO.club: Gamificação, Automação e Mentoria AI",
  date: "2023 - Presente",
  role: "Criador & Lead AI/Backend Developer",
  heroImage: "/athena-hero.png", // Você precisará criar uma imagem para a Athena
  tags: ["Node.js", "TypeScript", "Python", "OpenAI API", "Discord.js", "Whatsapp-web.js", "PostgreSQL", "Docker", "RabbitMQ"],
  links: {
    demo: "https://tyto.club", // Exemplo, ajuste se houver uma demo pública
    github: "https://github.com/seu-usuario/athena-bot", // Exemplo, ajuste para o seu repo
  },
  overview:
    "Athena é a assistente inteligente central do TYTO.club. Ela centraliza e gerencia a gamificação (XP e tokens), automatiza a gestão de tarefas e cargos em plataformas como Discord e WhatsApp, agenda reuniões, propõe desafios práticos de desenvolvimento e, de forma inovadora, avalia soluções de código submetidas pelos membros. Com o 'Oráculo', Athena oferece respostas instantâneas, garantindo uma experiência interativa e gamificada para todos os clubistas.",
  challenges: [
    "Integrar múltiplas plataformas (Discord, WhatsApp) e APIs de IA de forma coesa.",
    "Desenvolver um sistema robusto de gamificação com XP e tokens em tempo real.",
    "Criar um avaliador de código baseado em IA que forneça feedback útil e preciso.",
    "Gerenciar a persistência de dados complexos (gamificação, tarefas, históricos) de forma escalável."
  ],
  solutions: [
    "Arquitetura modular baseada em micro-serviços (ou módulos bem definidos) para cada integração.",
    "Backend em Node.js com TypeScript para gerenciar a lógica de gamificação e as interações.",
    "Uso da OpenAI API para processamento de linguagem natural e avaliação inteligente de código.",
    "Implementação de um banco de dados PostgreSQL para dados relacionais e Redis para cache de alta performance.",
    "Sistema de fila (RabbitMQ) para processar requisições assíncronas de IA e interações de chat sem gargalos."
  ]
}

export default function Athena() {
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
              <Brain className="mr-2 h-6 w-6 text-primary" />
              Visão Geral da Athena
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {projectData.overview}
            </p>
          </section>

          <Separator />

          {/* Desafios e Soluções */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-500/80">Os Desafios da Construção</h3>
              <ul className="space-y-3">
                {projectData.challenges.map((item, i) => (
                  <li key={item.substring(0, Math.min(item.length, 20))} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-500/80">As Soluções Implementadas</h3>
              <ul className="space-y-3">
                {projectData.solutions.map((item, i) => (
                  <li key={item.substring(0, Math.min(item.length, 20))} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Separator />

          {/* Recursos Principais (em vez de Arquitetura Técnica) */}
          <section className="space-y-6">
             <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Sparkles className="mr-2 h-6 w-6 text-primary" />
              Recursos e Funcionalidades Chave
            </h2>
            <p className="text-muted-foreground">
              Athena não é apenas um bot, mas um ecossistema inteligente que impulsiona o engajamento e o aprendizado no TYTO.club.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="flex items-center p-4 gap-4">
                    <Gem className="h-8 w-8 text-yellow-500 shrink-0" />
                    <div>
                        <h4 className="font-semibold">Gamificação Centralizada</h4>
                        <p className="text-sm text-muted-foreground">Gerencia XP, tokens e recompensas para manter os clubistas engajados.</p>
                    </div>
                </Card>
                <Card className="flex items-center p-4 gap-4">
                    <Users className="h-8 w-8 text-blue-500 shrink-0" />
                    <div>
                        <h4 className="font-semibold">Automação Inteligente</h4>
                        <p className="text-sm text-muted-foreground">Administra tarefas, cargos e a organização em Discord e WhatsApp.</p>
                    </div>
                </Card>
                <Card className="flex items-center p-4 gap-4">
                    <Code className="h-8 w-8 text-green-500 shrink-0" />
                    <div>
                        <h4 className="font-semibold">Mentoria por IA e Avaliação de Código</h4>
                        <p className="text-sm text-muted-foreground">Propõe desafios de código e avalia as soluções, oferecendo feedback construtivo.</p>
                    </div>
                </Card>
                 <Card className="flex items-center p-4 gap-4">
                    <Brain className="h-8 w-8 text-purple-500 shrink-0" />
                    <div>
                        <h4 className="font-semibold">Oráculo de Respostas Instantâneas</h4>
                        <p className="text-sm text-muted-foreground">Disponibiliza um canal para respostas rápidas e dúvidas dos clubistas.</p>
                    </div>
                </Card>
            </div>

            {/* Placeholder para talvez um fluxo de interação ou arquitetura simplificada */}
            <Card className="overflow-hidden border-dashed bg-slate-50 dark:bg-slate-950/50 mt-6">
              <CardContent className="flex aspect-[16/9] flex-col items-center justify-center p-6 text-center text-muted-foreground">
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                   <span className="text-sm italic">
                    [Fluxo de Interação da Athena: Usuário → Discord/WhatsApp → Athena Bot (Node.js) → OpenAI API / PostgreSQL]
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
                  Visitar TYTO.club
                </a>
              </Button>
            )}
            {projectData.links.github && (
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href={projectData.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver Repositório (Exemplo)
                </a>
              </Button>
            )}
          </div>

          {/* Tecnologias */}
          <div className="space-y-4 rounded-lg border p-6 shadow-sm">
            <h3 className="font-semibold">Tecnologias Envolvidas</h3>
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
                <span className="text-muted-foreground">Período</span>
                <span className="font-medium">{projectData.date}</span>
              </div>
              <Separator />
               <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-green-600">Ativa e em Evolução</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}