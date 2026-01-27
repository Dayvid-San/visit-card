import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
import Image from "next/image";

interface ProgrammerProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  role: string;
  github: string;
  demo?: string;
}

interface ResearchProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  role: string;
  paper?: string;
  dataset?: string;
  github?: string;
}

const programmerProjects: ProgrammerProject[] = [
  {
    title: "EngScan",
    description:
      "EngScan é uma solução baseada em microsserviços para análise de imagens e geração automática de laudos. Interface em Angular, APIs e lógica de negócio em NestJS, biblioteca Python para composição de relatórios e modelos de machine learning (rede neural e CNN) que realizam diagnóstico automatizado a partir dos dados e imagens.",
    image: "/1745068914878.png",
    tags: [
      "Nest.js",
      "Angular",
      "Python",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Stripe",
    ],
    date: "2024-2026",
    role: "Full-stack Developer",
    github: "/engscan",
    demo: "https://engscan.com",
  },
  {
    title: "TYTO.club",
    description:
      "O site do clube reúne projetos, colaboração e gamificação em um único lugar. Cada membro acessa um dashboard com os projetos ativos, organiza tarefas via cards estilo Trello, acumula XP e moedas internas (criptomoeda do clube) e escreve notas em Markdown que podem ser compartilhadas com outros clubistas.",
    image: "/logotipo_simples_1.png",
    tags: ["Next.JS", "Springboot", "Java", "Typescript", "Python", "Postgres"],
    date: "2025",
    role: "Full-stack Developer",
    github: "https://github.com/Dayvid-San/tyto-server",
    demo: "https://tytocode.com.br",
  },
  {
    title: "Atena",
    description:
      "Atena é o assistente inteligente do TYTO.club: centraliza a gamificação (XP e tokens), automatiza a gestão de tarefas e cargos em Discord e WhatsApp, agenda reuniões e propõe desafios práticos, inclusive avalia as soluções de código. Tudo com respostas instantâneas quando um clubista pergunta ao Oráculo.",
    image: "/simbolo.png",
    tags: ["Python", "SQLite", "Tailwind"],
    date: "2025",
    role: "Full",
    github: "https://github.com/Dayvid-San/Bot-XP-Discord",
    demo: "https://tytocode.com.br/tytoclub/bot",
  },
  {
    title: "Owlcoin",
    description:
      "Owlcoin (OWL) é o token nativo do ecossistema do Clube e do MMORPG associado. Projetado como um BEP-20 (Binance Smart Chain), o OWL unifica recompensas, comércio e governança entre a plataforma do Clube e o jogo, suportando tanto fluxo econômico interno quanto trocas dentro do jogo.",
    image: "/tytocoin.png",
    tags: ["BEP-20", "Solidity", "Spring Boot", "Web3j", "PostgreSQL", "IPFS"],
    date: "2025",
    role: "Full",
    github: "https://github.com/Dayvid-San",
    demo: "https://tytocode.com.br/tytoclub/coin",
  },
  {
    title: "Collis delus Angelus",
    description:
      "Jogo MMORPG de estratégia e investigação. Os jogadores podem tanto lutar em grupos quanto sozinhos assim também fazem trocas comerciais, investem em guildas e investigam a história do jogo",
    image: "/alexander.png",
    tags: ["Typescript", "NextJS", "Spring Boot", "PostgreSQL", "Java"],
    date: "2025-2026",
    role: "Desenvolvedor Web e roteirista",
    github: "https://github.com/Dayvid-San",
    demo: "https://collisangelus.vercel.app/",
  },
];

const researchProjects: ResearchProject[] = [
  {
    title: "Machine Learning na Engenharia Civil Diagnóstica",
    description: "Deep learning model para avaliação de .",
    image: "/medical-ai-neural-network.jpg",
    tags: ["Python", "TensorFlow", "Computer Vision", "Healthcare"],
    date: "2024",
    role: "Lead Researcher",
    paper: "https://medium.com/@dayvidsan/aplica%C3%A7%C3%A3o-da-computa%C3%A7%C3%A3o-na-engenharia-civil-diagn%C3%B3stica-64a0efb464dc",
    dataset: "",
  },
  /*
  {
    title: "Natural Language Processing for Sentiment Analysis",
    description: "NLP system for analyzing sentiment in social media posts with multilingual support.",
    image: "/nlp-sentiment-analysis-visualization.jpg",
    tags: ["Python", "NLP", "BERT", "Data Science"],
    date: "2023",
    role: "Co-researcher",
    paper: "https://doi.org/10.1234/example2",
    github: "https://github.com/dayvid/sentiment-analysis",
  },
  {
    title: "Optimization Algorithms for Resource Allocation",
    description: "Novel algorithms for efficient resource allocation in distributed systems with improved performance.",
    image: "/algorithm-optimization-graph.jpg",
    tags: ["Algorithms", "Optimization", "Distributed Systems"],
    date: "2023",
    role: "Principal Investigator",
    paper: "https://doi.org/10.1234/example3",
  },
  */
];

export default function PortfolioPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Portfolio
        </h1>
        <p className="mb-16 text-lg text-muted-foreground text-pretty">
          Uma seleção dos meus projetos como programador e pesquisador,
          demonstrando a aplicação prática de tecnologias modernas e
          contribuições científicas e acadêmicas.
        </p>

        {/* Programmer Section */}
        <section className="mb-24">
          <div className="mb-8 flex items-center gap-3">
            <h2 className="text-3xl font-bold">Programador</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programmerProjects.map((project) => (
              <Card
                key={project.title}
                className="flex flex-col overflow-hidden"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline">{project.date}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {project.role}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target=""
                          rel="noopener noreferrer"
                        >
                          Detalhes
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Researcher Section */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <h2 className="text-3xl font-bold">Pesquisador</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchProjects.map((project) => (
              <Card
                key={project.title}
                className="flex flex-col overflow-hidden"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline">{project.date}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {project.role}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.paper && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Paper
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Detalhes
                        </a>
                      </Button>
                    )}
                    {project.dataset && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.dataset}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Dataset
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
