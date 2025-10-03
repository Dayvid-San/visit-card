import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Globe, Smartphone } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Front-end Development",
    description: "React, Angular, Java, Python, Next.js, TypeScript, Tailwind CSS",
    tags: ["React", "Angular", "Java", "Python", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: Database,
    title: "Back-end Development",
    description: "Node.js, PostgreSQL, MongoDB, Redis",
    tags: ["Node.js", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "REST APIs, GraphQL, WebSockets, PWA",
    tags: ["REST", "GraphQL", "WebSockets", "PWA"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Responsive",
    description: "Mobile-first design, responsive layouts",
    tags: ["Mobile-first", "Responsive", "Accessibility"],
  },
]

export default function ProgramadorPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Programador</h1>
        <p className="mb-12 text-lg text-muted-foreground text-pretty">
          Desenvolvedor full-stack especializado em criar experiências web modernas, performáticas e acessíveis.
          Apaixonado por código limpo, arquitetura escalável e as melhores práticas de desenvolvimento.
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
      </div>
    </div>
  )
}
