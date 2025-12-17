import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target, Users, TrendingUp } from "lucide-react"

const principles = [
  {
    icon: TrendingUp,
    title: "Visão de longo prazo",
    description: "Metas além do próximo trimestre com sustentabilidade. Faço uso de roadmap público, projetos em curso, decisões que priorizam durabilidade.",
  },
  {
    icon: Lightbulb,
    title: "Curiosidade e aprendizagem contínua",
    description: "Sempre estudando coisas novas e validando ideias. Procuro entender todo o nicho em que trabalho.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Faço uso de multíplas equipes, seja de desenvolvimento ou de pesquisa, orientadas a resolver problemas reais com decisões concretas usando tecnologias modernas que realmente resolvem o problema, não apenas por estar no hype.",
  },
  {
    icon: Target,
    title: "Foco no cliente/usuário",
    description: "Priorizo valor real com estudos de caso e feedback de usuários, métricas de uso e uma verificação do antes e depois.",
  },
]

export default function EmpreendedorPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Empreendedor</h1>
        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          Desde cedo, sempre tive a inquietude de criar, inventar e solucionar problemas usando o que sabia, seja através da marcenaria ou da eletrônica. Quando comecei a programar, tive acesso a ferramentas mais sofisticadas e me empolguei com o que poderia criar.
        </p>
        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          Ao longo da minha jornada, acumulei experiência em diversos nichos, o que me proporcionou uma visão ampla e estratégica do mundo dos negócios. Conheci muitas pessoas que me motivaram a abrir minha própria empresa e tive a coragem de arriscar abrir uma. "Até onde eu conseguiria chegar com isso?", pensei. Um colega designer disse que um cliente precisava de um web app. Querendo deixar de ser designer gráfico, aproveitei a oportunidade. Assim nasceu a TYTO em julho de 2021.
        </p>
        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          Em minha busca por uma área de especialização, explorei diversos setores para desenvolver um app que pudesse resolver problemas reais, considerando áreas como condomínios, hotelaria e corretoras de investimentos. Um dia, recebi uma sugestão inesperada de um amigo: criar uma solução para uma necessidade específica dentro da engenharia diagnóstica. A ideia não me convenceu de imediato, especialmente porque eu estava considerando outro projeto que parecia mais promissor.
        </p>
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Princípios Empreendedores</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <Card key={principle.title}>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <principle.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </div>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
	{/*
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Abordagem</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">1. Identificação de Oportunidades</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Analiso tendências de mercado, comportamento do consumidor e gaps tecnológicos para identificar
                    oportunidades de negócio viáveis.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">2. Validação Rápida</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizo metodologias ágeis e lean startup para validar hipóteses rapidamente, minimizando riscos e
                    otimizando recursos.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">3. Desenvolvimento Iterativo</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Construo MVPs (Minimum Viable Products) e itero baseado em feedback real de usuários, garantindo
                    product-market fit.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">4. Escalabilidade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Projeto soluções com arquitetura escalável desde o início, preparadas para crescer conforme a
                    demanda aumenta.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
	*/}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Visão</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed">
                Acredito que sempre existe mais de um caminho para a solução de um problema.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
