import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import photoDayvid from "@/public/emBeloHorizonte.jpeg"

export default function HomePage() {
  return (
    <div className="container flex items-center justify-between px-4 py-16 md:py-24">
      {/* Hero Section */}
      <Image src={photoDayvid} alt="Foto de Dayvid Santana"/>
      <section className="mb-24 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
          Olá, meu nome é 
          <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">Dayvid</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl">
          Sou Programador e pesquisador em Redes Neurais Artificiais. Tenho conhecimento em diferentes nichos, mas gosto principalmente de computadores, de automação e sinto satisfação em resolver problemas reais. Acredito que sempre existe mais de um caminho para a solução de um problema.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/portfolio">
              Ver Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/programador">Conheça meu trabalho</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-4xl">
        <Card>
          <CardContent className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-balance">Sobre Dayvid</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou um profissional multifacetado que transita entre o mundo da programação, do empreendedorismo e da
                pesquisa acadêmica. Minha jornada começou com a curiosidade sobre como a tecnologia pode transformar
                ideias em realidade.
              </p>
              <p>
                Como <strong className="text-foreground">programador</strong>, desenvolvo aplicações web modernas e
                escaláveis, sempre buscando as melhores práticas e tecnologias de ponta. Minha experiência abrange desde
                front-end com React e Next.js até back-end com Node.js e bancos de dados relacionais e não-relacionais.
              </p>
              <p>
                Como <strong className="text-foreground">empreendedor</strong>, acredito no poder da inovação para
                resolver problemas reais. Tenho experiência em identificar oportunidades de mercado, validar ideias e
                transformá-las em produtos viáveis que agregam valor aos usuários.
              </p>
              <p>
                Como <strong className="text-foreground">pesquisador universitário</strong>, contribuo para o avanço do
                conhecimento científico na área de tecnologia. Meu trabalho acadêmico foca em inteligência artificial,
                aprendizado de máquina e suas aplicações práticas em diversos domínios.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
