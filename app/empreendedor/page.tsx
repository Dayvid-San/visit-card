import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target, Users, TrendingUp } from "lucide-react"

const principles = [
  {
    icon: TrendingUp,
    title: "Mais dinheiro com menos trabalho",
    description: "Trabalhei para que pequenas e médias empresas tenham o ferramental necessário para fazer mais com menos.",
  },
  {
    icon: Lightbulb,
    title: "Incentivo ao ensino e aprendizado",
    description: "Acredito que a educação é um dos poucos recursos que não nos podem ser tirados. Por isso promovi eventos, comunidades, ligas e editais para que as pessoas que eu pudesse ajudar tivessem as mesmas oportunidades que eu tive com a educação.",
  },
  {
    icon: Users,
    title: "Comunidades e cooperação",
    description: "Fundei uma comunidade de computação chamada TYTO.code com o propósito de unir profissionais para a aplicação do desenvolvimento acadêmico independente na sociedade civil. Também fundei e incentivei a criação de ligas acadêmicas e clubes de computação e inovação.",
  },
  {
    icon: Target, 
    title: "Empresas e Startups",
    description: "Junto à comunidade, fundei empresas e startups para atender necessidades reais — desde pessoas comuns até grandes empresas. Ganhamos prêmios, reputação e seguimos presentes no mercado em áreas como engenharia civil, saúde, finanças e agronomia.",
  },
]

export default function EmpreendedorPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Empreendedor</h1>
        
        {/* História & Trajetória */}
        <div className="space-y-6 mb-12 text-lg text-muted-foreground text-pretty leading-relaxed">
          <p>
            Minha trajetória empreendedora nasceu do mesmo propósito que me levou à tecnologia: a vontade de criar, experimentar e transformar ideias em soluções reais. Antes mesmo da programação, eu já explorava diferentes formas de construir e resolver problemas, através de atividades como marcenaria e eletrônica.
          </p>
          <p>
            Quando comecei a programar, encontrei uma nova forma de criar: em vez de construir apenas objetos físicos, passei a desenvolver sistemas capazes de automatizar processos, organizar informações e resolver necessidades de pessoas e negócios.
          </p>
          <p>
            Ao longo da minha jornada, tive contato com diferentes áreas e profissionais, desenvolvendo uma visão ampla sobre como problemas reais surgem e como soluções digitais podem gerar valor. Essa experiência me levou a criar minha própria empresa, a TYTO, em julho de 2021.
          </p>
          <p>
            A oportunidade surgiu a partir de uma demanda real de um cliente que precisava de um web app. O projeto marcou minha transição de desenvolvedor e designer para alguém responsável por entender problemas de negócio, definir soluções, construir produtos e entregar resultados.
          </p>
          <p>
            Durante essa fase, explorei diferentes mercados em busca de problemas relevantes que pudessem ser resolvidos através de software, incluindo setores como condomínios, hotelaria e investimentos. Esse processo me ensinou uma das principais lições da engenharia de software aplicada a negócios: a tecnologia só tem valor quando resolve problemas reais.
          </p>
          <p>
            Essa busca me levou posteriormente a uma oportunidade inesperada no setor de engenharia diagnóstica, onde comecei a desenvolver uma solução envolvendo análise estrutural, modelos matemáticos e inteligência artificial.
          </p>
        </div>

        {/* Princípios Empreendedores */}
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

        {/* Visão */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Visão de mundo</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed">
                Sempre existe mais de um caminho para a solução de um problema.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}