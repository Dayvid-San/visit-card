import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, FlaskConical, Globe, Smartphone } from "lucide-react"

const mainText = `Meu rumo em tecnologia começou em um ambiente naturalmente voltado à experimentação. Cresci cercado por eletrônica, programação e jogos digitais. Assim, como meus pais trabalhavam, eu também queria experimentar.

No final do ensino médio, retomei esse interesse de forma mais estruturada, estudando programação, estruturas de dados, bancos de dados e desenvolvimento de software. Um dos primeiros projetos que desenvolvi foi uma assistente virtual utilizando Java e Python, criada para auxiliar meus estudos, organizar informações e facilitar a memorização de conteúdos acadêmicos.

Desde então, mantenho uma abordagem de engenharia orientada a problemas: identificar uma necessidade, compreender o contexto e construir ferramentas que gerem valor. Durante minha graduação na UFS, continuei desenvolvendo aplicações para automatizar tarefas, explorar novas tecnologias e resolver desafios reais para mim e para pessoas próximas.
`
const skills = [
  {
    icon: Code2,
    title: "Front-end",
    description: "Design e desenvolvimento de páginas orientadas a UI e UX.",
    tags: ["React", "Angular", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: Database,
    title: "Back-end",
    description: "Foco em otimizar recursos e em escalabilidade. Assim, verificando viabilidade de processos e quais os melhores Trade-off para cada operação",
    tags: ["Node.js", "Java", "Python,", "Springboot", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Globe,
    title: "Outras tecnologias Web",
    description: "REST APIs, GraphQL, WebSockets",
    tags: ["REST", "GraphQL", "WebSockets",],
  },
  {
    icon: FlaskConical,
    title: "Inteligencia Artificial",
    description: "Uso, adaptações e desenvolvimento de modelos de acordo com a necessidade da aplicação",
    tags: ["ML", "DL", "CNN"],
  },
]

export default function ProgramadorPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Engenheiro de Software</h1>
        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          {mainText}
        </p>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Habilidades Técnicas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <Card key={skill.title}>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <skill.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </div>
                  <CardDescription>{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
	{/*
        <div>
          <h2 className="mb-6 text-2xl font-bold">Filosofia de Desenvolvimento</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong className="text-foreground">Código limpo e manutenível:</strong> Escrevo código pensando em
                    quem vai ler e manter no futuro.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong className="text-foreground">Performance primeiro:</strong> Otimizo desde o início, não como
                    uma reflexão tardia.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong className="text-foreground">Acessibilidade universal:</strong> Construo aplicações que todos
                    possam usar, independente de suas capacidades.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong className="text-foreground">Aprendizado contínuo:</strong> A tecnologia evolui rapidamente,
                    e eu evoluo junto.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        */}
      </div>
    </div>
  )
}
