import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap, FlaskConical, Award } from "lucide-react"

const researchAreas = [
  {
    icon: Award,
    title: "Redes Neurais aplicadas a Engenharia Civil Diagnóstica",
    description: "Machine Learning, Deep Learning, NLP",
    tags: ["ML", "Deep Learning", "NLP", "CNN", "Python"],
  },
  {
    icon: BookOpen,
    title: "Blockchain",
    description: "Análise de dados, visualização, estatística",
    tags: ["BEP-20", "Solidity", "Spring Boot", "Web3j", "PostgreSQL", "IPFS"],
  },
  {
    icon: FlaskConical,
    title: "Mapeamento animal na agropecuária",
    description: "Arquitetura, padrões, metodologias",
    tags: ["Microcontroladores", "Python", "C"],
  },
  {
    icon: GraduationCap,
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
        
        {/* Universidade e Construção de Comunidades */}
        <div className="space-y-6 mb-12 text-lg text-muted-foreground text-pretty leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground mb-4">Universidade e construção de comunidades</h2>
          <p>
            Ao ingressar na Universidade Federal de Sergipe em 2020, escolhi Ciência da Computação como uma forma de aprofundar uma paixão que já fazia parte da minha trajetória: transformar ideias em soluções através da tecnologia.
          </p>
          <p>
            Durante a graduação, desenvolvi minha base em fundamentos de computação, lógica matemática e desenvolvimento de software, enquanto buscava aplicar esse conhecimento em projetos práticos. Além do aprendizado técnico, comecei a atuar na organização de grupos de estudo e projetos colaborativos, reunindo pessoas com interesses semelhantes para compartilhar conhecimento e construir soluções em conjunto.
          </p>
          <p>
            Em 2021, junto com outros estudantes da área de computação, fundei a TYTO, inicialmente como uma comunidade de estudos voltada para troca de conhecimento, desenvolvimento técnico e colaboração entre alunos. O grupo cresceu a partir da ideia de que aprender tecnologia de forma colaborativa acelera a evolução de todos os envolvidos.
          </p>
          <p>
            A partir dessas conexões, começamos a transformar ideias e experimentos em projetos mais estruturados. Algumas iniciativas nasceram inicialmente como pesquisas e protótipos acadêmicos e, posteriormente, evoluíram para produtos e startups, como a EngScan e a Constructor.
          </p>
          <p>
            Essa experiência foi fundamental para minha formação como engenheiro: aprendi que construir software não envolve apenas tecnologia, mas também comunicação, liderança, colaboração e a capacidade de transformar conhecimento coletivo em soluções aplicáveis.
          </p>
        </div>

        {/* Áreas de Pesquisa */}
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

        {/* Contribuições Acadêmicas */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Contribuições Acadêmicas</h2>
          <Card>
            <CardContent className="p-8">
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Fundador do clube de tecnologia e computação (TYTO.club) e também cofundador da Liga Acadêmica de Desenvolvimento Web da UFS, tenho atuado na interseção entre ensino, pesquisa e aplicação prática. Ao longo dos anos, ensinei muitos estudantes de diferentes cursos a programar, criando pontes entre teoria e prática.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Iniciei pesquisas acadêmicas autônomas e, dentro do TYTO.club, estruturei um laboratório de pesquisa e um fluxo claro de transformação: da investigação, prototipagem e implementação social. Esse processo permitiu estender o clube para outros estados e garantir que os resultados acadêmicos gerem impacto real na comunidade, seja por ferramentas, parcerias ou projetos aplicados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}