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
        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          Para mim, a Universidade era o caminho natural. Então, por sugestão de um amigo, escolhi Ciências da Computação. Em 2020, me matriculei no curso pela Universidade Federal de Sergipe, onde desenvolvi minhas habilidades em lógica matemática e trabalho em equipe. Liderei grupos de trabalhos e estudos, além de iniciar meu aprendizado em tecnologias importantes para o desenvolvimento das minhas aplicações atuais, como o JavaScript (ECMA6).
        </p>
        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          Em julho de 2021, me juntei a três prodígios da minha faculdade: Willian Silveira, Myck Willian e Nathan Monteiro para fundar a Tyto (Taito), um grupo de estudos em que nos ajudávamos e compartilhávamos material de estudo.
        </p>
        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          Na universidade, tive a oportunidade de conhecer muitos talentos. Começamos a nos reunir em projetos que considerávamos interessantes e, com o tempo, fui agregando novas pessoas ao grupo de amigos que já me acompanhavam. Dessa colaboração nasceram várias iniciativas, que inicialmente se transformaram em pesquisas acadêmicas e, mais tarde, evoluíram para startups, como EngScan e Constructor.
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
	{/*
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
	*/}
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
