import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText } from "lucide-react"
import Image from "next/image"

const programmerProjects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    date: "2024",
    role: "Lead Developer",
    github: "https://github.com/dayvid/ecommerce",
    demo: "https://ecommerce-demo.example.com",
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable chat application with WebSocket support, file sharing, and end-to-end encryption.",
    image: "/chat-application-interface.png",
    tags: ["React", "Node.js", "Socket.io", "Redis"],
    date: "2023",
    role: "Full-stack Developer",
    github: "https://github.com/dayvid/chat-app",
    demo: "https://chat-demo.example.com",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates, team workspaces, and analytics.",
    image: "/task-management-kanban.png",
    tags: ["Next.js", "GraphQL", "MongoDB", "Tailwind"],
    date: "2023",
    role: "Frontend Lead",
    github: "https://github.com/dayvid/task-manager",
    demo: "https://tasks-demo.example.com",
  },
]

const researchProjects = [
  {
    title: "Machine Learning for Medical Diagnosis",
    description: "Deep learning model for early detection of diseases from medical imaging data with 94% accuracy.",
    image: "/medical-ai-neural-network.jpg",
    tags: ["Python", "TensorFlow", "Computer Vision", "Healthcare"],
    date: "2024",
    role: "Lead Researcher",
    paper: "https://doi.org/10.1234/example",
    dataset: "https://dataset.example.com",
  },
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
]

export default function PortfolioPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Portfolio</h1>
        <p className="mb-16 text-lg text-muted-foreground text-pretty">
          Uma seleção dos meus projetos como programador e pesquisador, demonstrando a aplicação prática de tecnologias
          modernas e contribuições científicas.
        </p>

        {/* Programmer Section */}
        <section className="mb-24">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-primary" />
            <h2 className="text-3xl font-bold">Programmer</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programmerProjects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden">
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
                    <span className="text-xs text-muted-foreground">{project.role}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
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
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
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
            <div className="h-1 w-12 bg-chart-1" />
            <h2 className="text-3xl font-bold">Researcher</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchProjects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden">
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
                    <span className="text-xs text-muted-foreground">{project.role}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
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
                        <a href={project.paper} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Paper
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.dataset && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.dataset} target="_blank" rel="noopener noreferrer">
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
  )
}
