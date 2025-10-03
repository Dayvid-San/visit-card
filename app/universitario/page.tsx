import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap, FlaskConical, Award } from "lucide-react"

const researchAreas = [
  {
    icon: FlaskConical,
    title: "Inteligência Artificial",
    description: "Machine Learning, Deep Learning, NLP",
    tags: ["ML", "Deep Learning", "NLP", "Computer Vision"],
  },
  {
    icon: BookOpen,
    title: "Ciência de Dados",
    description: "Análise de dados, visualização, estatística",
    tags: ["Python", "R", "Data Analysis", "Statistics"],
  },
  {
    icon: GraduationCap,
    title: "Engenharia de Software",
    description: "Arquitetura, padrões, metodologias",
    tags: ["Architecture", "Design Patterns", "Agile"],
  },
  {
    icon: Award,
    title: "Pesquisa Aplicada",
    description: "Soluções práticas para problemas reais",
    tags: ["Applied Research", "Innovation", "Impact"],
  },
]

export default function UniversitarioPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Universitário</h1>
        <p className="mb-12 text-lg text-muted-foreground text-pretty">
          Pesquisador dedicado ao avanço do conhecimento científico na área de tecnologia. Meu trabalho acadêmico
          combina rigor metodológico com aplicação prática, buscando soluções inovadoras para desafios reais.
        </p>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Áreas de Pesquisa</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {researchAreas.map((area) => (
              <Card key={area.title}>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <area.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </div>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
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

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Metodologia de Pesquisa</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong className="text-foreground">Revisão bibliográfica rigorosa:</strong> Fundamento minha
                    pesquisa em literatura científica consolidada.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong className="text-foreground">Experimentação controlada:</strong> Conduzo experimentos com
                    metodologia científica robusta.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong className="text-foreground">Análise estatística:</strong> Utilizo métodos estatísticos
                    apropriados para validar resultados.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong className="text-foreground">Reprodutibilidade:</strong> Documento processos detalhadamente
                    para garantir reprodutibilidade.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong className="text-foreground">Publicação e compartilhamento:</strong> Contribuo para a
                    comunidade científica através de publicações e código aberto.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold">Contribuições Acadêmicas</h2>
          <Card>
            <CardContent className="p-8">
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Minha pesquisa foca na interseção entre teoria e prática, buscando não apenas avançar o conhecimento
                científico, mas também criar soluções que possam ser aplicadas em contextos reais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Participo ativamente da comunidade acadêmica através de publicações em conferências e periódicos,
                colaborações com outros pesquisadores, e orientação de estudantes. Acredito que a ciência deve ser
                acessível e que o conhecimento gerado na universidade deve beneficiar a sociedade como um todo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
