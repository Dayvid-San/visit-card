import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, Layers, Cpu, CheckCircle2, ShieldCheck, Globe2 } from "lucide-react"

// Interface estendida para os detalhes da arquitetura do TYTO.club
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
  subtitle: "Arquitetura Multi-Tenant isolada por escopo geográfico com React, NestJS e Firebase",
  date: "2025 - Presente",
  role: "Lead Software Architect & Full-stack Engineer",
  heroImage: "/Captura-tytoclub.png",
  tags: [
    "Nest.js",
    "Vite",
    "React",
    "TypeScript",
    "Firebase Firestore",
    "Multi-Tenancy",
    "Tailwind CSS",
    "ClickUp API",
    "Discord Bot"
  ],
  links: {
    demo: "https://club.tytocode.com.br",
    github: "https://github.com/TYTO-club",
  },
  overview:
    "O TYTO.club é uma plataforma comunitária e ecossistema operacional descentralizado focado na gestão de missões, economia interna (Dracmas), telemetria em tempo real de startups e gestão de squads. O sistema adota um modelo Multi-Tenant dinâmico para isolar a operação entre Núcleos Internacionais (Países) e Distritos Regionais (Subdivisões), garantindo total privacidade e governança granular de dados.",
  challenges: [
    "Escalar a comunidade para múltiplos países (ex: Brasil, Marrocos) impedindo vazamento de missões e dados entre núcleos regionais.",
    "Garantir atualizações de telemetria em tempo real (MRR, Burn Rate, IPT) sem sobrecarregar chamadas no banco de dados.",
    "Implementar um modelo de controle de acesso (RBAC) complexo baseado em Patentes/Tiers (Veterano, Elite) e papéis em projetos (Leader, Partner)."
  ],
  solutions: [
    "Modelagem de dados baseada em Escopo Hierárquico (GLOBAL, NUCLEO, DISTRICT) validada nativamente via Firestore Security Rules e NestJS TenantGuards.",
    "Arquitetura de Backend em NestJS desacoplada com Módulos para Auth, Economy, Marketplace, Projects e Integrations.",
    "Sincronização reativa de dados no frontend (React/Next.js) utilizando escutas em tempo real (onSnapshot) com cláusulas de consulta combinadas (AND/OR)."
  ]
}

export default function TytoArchitecture() {
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
          alt={`Capa da Arquitetura do ${projectData.title}`}
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
              Visão Geral do Ecossistema
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {projectData.overview}
            </p>
          </section>

          <Separator />

          {/* Desafios e Soluções */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-500/80">O Desafio de Engenharia</h3>
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
              <h3 className="text-xl font-semibold text-green-500/80">Solução de Arquitetura</h3>
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

          {/* Arquitetura Multi-Tenant & Segurança */}
          <section className="space-y-6">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Globe2 className="mr-2 h-6 w-6 text-primary" />
              Isolamento Multi-Tenant Geográfico
            </h2>
            <p className="text-muted-foreground">
              A infraestrutura segue o modelo <strong>Shared Database, Shared Process</strong>. O isolamento entre diferentes países e divisões regionais é mantido via <code>TenantGuard</code> na API NestJS e funções compostas de validação geográfica nas Security Rules do Firestore.
            </p>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-4 bg-muted/30">
                <h4 className="font-bold text-sm text-primary mb-1">Escopo GLOBAL</h4>
                <p className="text-xs text-muted-foreground">Missões, avisos e rankings acessíveis por qualquer membro do clã, independente da localização.</p>
              </Card>
              <Card className="p-4 bg-muted/30">
                <h4 className="font-bold text-sm text-primary mb-1">Escopo NUCLEO</h4>
                <p className="text-xs text-muted-foreground">Isolamento em nível de País (ex: BR, MA). Restringe operações e marketplaces para o contexto nacional.</p>
              </Card>
              <Card className="p-4 bg-muted/30">
                <h4 className="font-bold text-sm text-primary mb-1">Escopo DISTRICT</h4>
                <p className="text-xs text-muted-foreground">Subdivisão regional (ex: PR-MARINGA, SE-ARACAJU). Missões e demandas locais exclusivas da célula.</p>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Arquitetura Técnica em Camadas */}
          <section className="space-y-6">
             <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <Cpu className="mr-2 h-6 w-6 text-primary" />
              Topologia do Sistema (NestJS + Firebase)
            </h2>
            <p className="text-muted-foreground">
              A aplicação é dividida em três camadas principais: a camada reativa no Frontend (Next.js/React), a API Restful em NestJS com middlewares de validação de escopo e os ecossistemas externos desacoplados.
            </p>
            
            {/* Diagrama Textual / Card Visual */}
            <Card className="overflow-hidden border-dashed bg-slate-50 dark:bg-slate-950/50">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <div className="w-full space-y-4 text-xs font-mono text-left">
                  <div className="p-3 rounded border bg-background">
                    <span className="text-blue-500 font-bold">[Client Layer]</span> React / Next.js Dashboard → Querying Firestore Realtime + Axios /api
                  </div>
                  <div className="text-center text-muted-foreground">↓ Auth JWT & Tenant Injection</div>
                  <div className="p-3 rounded border bg-background">
                    <span className="text-green-500 font-bold">[API Gateway NestJS]</span> FirebaseAuthGuard → TenantGuard → Controllers (Missions, Economy, Telemetry)
                  </div>
                  <div className="text-center text-muted-foreground">↓ Business Rules & RBAC</div>
                  <div className="p-3 rounded border bg-background">
                    <span className="text-purple-500 font-bold">[Data & Integration Layer]</span> Firestore Security Rules | ClickUp API | Discord Bot Service
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Governança e Regras de Negócio */}
          <section className="space-y-4">
            <h2 className="flex items-center text-2xl font-bold tracking-tight">
              <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
              Governança e RBAC Integrado
            </h2>
            <p className="text-muted-foreground">
              A economia interna e as permissões de escrita em projetos e mercado dependem do nível hierárquico do membro:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Marketplace:</strong> Apenas membros com patente a partir de <em>Veterano</em> têm permissão de criar ofertas/pedidos de serviços.</li>
              <li><strong>Project Telemetry:</strong> Ações de atualização nos indicadores financeiros e operacionais (MRR, Burn Rate, IPT) são exclusivas para o líder vinculado (<code>members[uid] == 'leader'</code>) ou Administradores Globais.</li>
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
                <span className="font-medium text-primary">Multi-Tenant</span>
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