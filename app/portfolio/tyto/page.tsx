import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Layers,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Trophy,
  Coins,
  Crown,
  Briefcase,
} from "lucide-react"

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
  }
  overview: string
  challenges: string[]
  solutions: string[]
}

const projectData: ProjectDetail = {
  title: "TYTO.club",
  subtitle:
    "Comunidade internacional de tecnologia que fundei em 2021 — hoje uma plataforma com economia gamificada, governança simulada e projetos reais para squads",
  date: "2021 - Presente",
  role: "Fundador & Lead Engineer",
  heroImage: "/Captura-tytoclub.png",
  tags: [
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Firebase Auth",
    "Firestore",
    "React Router",
    "Radix UI",
  ],
  links: {
    demo: "https://club.tytocode.com.br",
    github: "https://github.com/TYTO-club",
  },
  overview:
    "Fundei o TYTO.club em 2021, inicialmente como uma comunidade de estudos entre universitários de computação, e conduzi seu crescimento até a plataforma atual: um ecossistema onde membros acumulam XP, sobem de patente, ganham Dracmas (moeda interna) cumprindo missões, lideram ou participam de projetos reais e operam uma camada de governança simulada com Reinos, Polis, eleições e um tribunal monetário. Arquitetei e desenvolvi a plataforma do zero — frontend em React 19 + TypeScript + Vite, Firebase (Auth + Firestore) como base de dados primária para leituras em tempo real, e um backend REST dedicado para as regras de negócio mais sensíveis, como economia e missões.",
  challenges: [
    "Conceder conquistas sem duplicar ou perder registros quando duas rotinas do app disparavam a mesma verificação quase ao mesmo tempo, para membros diferentes competindo pelas mesmas metas.",
    "Proteger campos financeiros e de hierarquia (saldo, patente, cargos eletivos) sem depender só da interface — em um sistema onde XP e Dracmas valem \"moeda real\" dentro da comunidade, qualquer brecha de escrita direta vira uma forma de trapaça.",
    "Modelar em código uma estrutura de governança inteira — Reino, Polis, Colônias/Metrópoles, cargos eletivos com mandato e impeachment, tribunal monetário — mantendo tudo fiel a regulamentos escritos em prosa que evoluem junto com a comunidade.",
  ],
  solutions: [
    "Concessão de conquistas dentro de uma transação atômica do Firestore em vez de escritas simples: a transação sempre lê o estado já confirmado (não o que está em memória) e, de quebra, repara sozinha registros duplicados deixados por corridas passadas.",
    "Regras do Firestore com mais de 950 linhas como autoridade real de acesso — não só a UI: funções dedicadas bloqueiam qualquer escrita direta do usuário a saldo, patente ou cargo, e a suspensão automática por saldo negativo é reforçada tanto no client quanto no servidor.",
    "Os regulamentos internos (a \"Carta Institucional\", em Markdown) são a fonte da verdade do domínio, e o código é a implementação deles — cargos eletivos, mandatos e o tribunal monetário viram tipos e serviços dedicados, revisáveis independentemente do texto institucional.",
  ],
}

const features = [
  {
    icon: Trophy,
    title: "Progressão",
    description:
      "XP e 14 patentes (de Neófito a Dominador), cada uma com perks reais de acesso a projetos e benefícios — conquistas concedidas por transação atômica.",
  },
  {
    icon: Coins,
    title: "Economia (Dracmas)",
    description:
      "Moeda interna com histórico completo de transações, taxa mensal automática, empréstimos e reserva lastreada em dinheiro real.",
  },
  {
    icon: Crown,
    title: "Governança",
    description:
      "Reinos e Polis com cargos eletivos (Tribuno, Conselheiro, Dux Vecturium, Guarda Pretoriana), mandatos com prazo e impeachment por voto.",
  },
  {
    icon: Briefcase,
    title: "Projetos & Squads",
    description:
      "Papéis de líder/parceiro/colaborador por projeto, métricas reais de negócio (MRR, burn rate, churn) resumidas em um índice único de progresso.",
  },
]

export default function TytoClub() {
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
          alt={`Capa do ${projectData.title}`}
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
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{projectData.overview}</p>
          </section>

          <Separator />

          {/* O que a plataforma faz */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">O que a plataforma faz</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="p-4 bg-muted/30">
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
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
              O frontend fala com dois backends distintos por design: a maior parte das leituras (e algumas
              escritas) vai direto do navegador para o Firestore em tempo real, enquanto a economia, projetos e
              missões — a lógica de negócio mais sensível — passam por um backend REST dedicado, autenticado com o
              token do Firebase.
            </p>

            <Card className="overflow-hidden border-dashed bg-slate-50 dark:bg-slate-950/50">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <div className="w-full space-y-4 text-xs font-mono text-left">
                  <div className="p-3 rounded border bg-background">
                    <span className="text-blue-500 font-bold">[Frontend]</span> React 19 + Vite + TypeScript — Firebase
                    Auth, estado do usuário assinado em tempo real (onSnapshot)
                  </div>
                  <div className="text-center text-muted-foreground">↓ dois caminhos de dados</div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="p-3 rounded border bg-background">
                      <span className="text-purple-500 font-bold">[Firestore direto]</span> Leituras e escritas
                      simples via SDK client, tempo real
                    </div>
                    <div className="p-3 rounded border bg-background">
                      <span className="text-green-500 font-bold">[Backend REST]</span> Economia, projetos, missões —
                      fetch + Bearer &lt;ID token&gt;
                    </div>
                  </div>
                  <div className="text-center text-muted-foreground">↓ controle de acesso</div>
                  <div className="p-3 rounded border bg-background">
                    <span className="text-orange-500 font-bold">[firestore.rules]</span> 950+ linhas — autoridade real
                    de acesso, não a interface
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Segurança */}
          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
              Segurança como Camada Real, não de Conveniência
            </h2>
            <p className="text-muted-foreground">
              Mais de 45 coleções têm regras dedicadas no Firestore, cada uma derivando leitura/escrita de uma
              combinação de autenticação, membership de Polis/Reino/projeto, cargo eletivo ativo ou admin global:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>
                Campos sensíveis (saldo, patente, cargos) nunca são editáveis pelo próprio usuário via escrita
                direta — apenas por transações server-side/admin.
              </li>
              <li>
                Permissão de projetos é derivada diretamente do papel do membro (líder, parceiro, colaborador),
                validada nas regras, não apenas escondida na UI.
              </li>
            </ul>
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
                  Acessar Plataforma
                </a>
              </Button>
            )}
            {projectData.links.github && (
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href={projectData.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Repositório da Organização
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
                <span className="text-muted-foreground">Atuação</span>
                <span className="font-medium text-right">{projectData.role}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Período</span>
                <span className="font-medium">{projectData.date}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Arquitetura</span>
                <span className="font-medium text-primary">SPA + REST dedicado</span>
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
