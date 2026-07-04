import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


const projects = [
  {
    title: "O GUARDIÃO DO CONHECIMENTO",
    description: "Arquitetura de conhecimento, pesquisa e tradução de ideias complexas em ecos claros.",
    icon: "📚",
  },
  {
    title: "FORJANDO MASTERPIECES",
    description: "Produtos digitais com precisão artesanal, foco em experiência e evolução contínua.",
    icon: "⚒️",
  },
  {
    title: "ENGSCAN: ALQUIMISTA DE IMAGENS",
    description: "Soluções visuais inteligentes que transformam imagens em narrativas acionáveis.",
    icon: "🏰",
    highlight: "🏆 1º LUGAR NO PICS",
  },
  {
    title: "TYTO.employer: O ESTANDARTE DO GESTOR",
    description: "Estratégia, visão de mercado e execução para marcas que desejam crescer com clareza.",
    icon: "🛍️",
  },
]

const skills = [
  "CÓDIGO (JavaScript / React / Node.js)",
  "INOVAÇÃO (IA / Pesquisa)",
  "EMPREENDEDORISMO (SaaS / TYTO.club)",
]

export default function HomePage() {
  const photoDayvid = 'https://github.com/user-attachments/assets/cc3f329a-9149-4405-9f7f-2e5e8129929b'
  return (
    <div className="container px-4 py-16 md:py-24">
      <img
        src={photoDayvid}
        alt="Dayvid"
        className="fixed right-4 top-4 z-20 h-24 w-24 rounded-full border border-white/20 object-cover shadow-xl opacity-70 md:right-8 md:top-8 md:h-32 md:w-32"
      />

      {/* Hero Section */}
      <div className="flex items-stretch justify-around">
        <section className="mb-24 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Olá, meu nome é
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent"> Dayvid</span>
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
      </div>

      {/* About Section */}
      <section className="mx-auto max-w-4xl">
        <Card>
          <CardContent className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-balance">Sobre mim</h2>
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
      <div className="mx-auto flex max-w-7xl justify-center">
        <section className="fantasy-shell w-full max-w-7xl p-4 sm:p-6 lg:p-8">
          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-[#7b4b22]/60 bg-[#160f0a]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(246,188,65,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,65,132,0.16),_transparent_25%)]" />

            <div className="relative space-y-8 lg:space-y-10">
              <header className="text-center">
                <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.45em] text-[#b68742] sm:text-xs">
                  Conselho do Guardião
                </p>
                <h1 className="gothic-title text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.4rem]">
                  DAYVID SANTANA
                </h1>
                <div className="parchment-panel mx-auto mt-5 max-w-3xl rounded-full border border-[#8c6034]/40 px-5 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.15)] sm:px-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b3a1c] sm:text-base">
                    PROGRAMADOR, PESQUISADOR E EMPREENDEDOR DA TYTO.CLUB
                  </p>
                </div>
              </header>

              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-stretch">
                <div className="parchment-panel rounded-[2rem] border border-[#8c6034]/35 p-4 sm:p-6 lg:p-8">
                  <div className="mb-5 flex items-center justify-between border-b border-[#8c6034]/20 pb-3">
                    <div>
                      <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[#8b5e2e]">Mapa do Reino</p>
                      <h2 className="text-lg font-semibold text-[#4f3114]">Terras do conhecimento</h2>
                    </div>
                    <div className="rounded-full border border-[#8c6034]/30 bg-[#fff1cb]/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.3em] text-[#7c4a1e]">
                      Compass rose
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-[#8c6034]/25 bg-[#24170d]/90 p-4 sm:p-6">
                    <svg viewBox="0 0 640 420" className="h-full w-full" role="img" aria-label="Mapa estilizado do reino com marcos para Engscan Keep e Flugo Village">
                      <rect x="36" y="42" width="568" height="336" rx="28" fill="#1f140a" stroke="#7e5225" strokeWidth="2" />
                      <path d="M96 134C166 88 219 90 275 124C334 159 348 242 397 257C447 272 501 248 553 204" stroke="#5d3922" strokeWidth="3" fill="none" />
                      <path d="M142 206C190 176 240 164 286 178C332 192 358 246 414 274C460 297 506 328 550 320" stroke="#6f4425" strokeWidth="2" fill="none" strokeDasharray="8 8" />
                      <path d="M160 300C228 274 266 274 314 292C362 310 440 300 500 246" stroke="#8a5b2e" strokeWidth="2" fill="none" opacity="0.75" />
                      <circle cx="318" cy="206" r="78" fill="none" stroke="#dcb65a" strokeWidth="2" opacity="0.85" />
                      <circle cx="318" cy="206" r="58" fill="none" stroke="#f6de87" strokeWidth="1.5" opacity="0.8" />
                      <circle cx="318" cy="206" r="10" fill="#ffd36d" />
                      <circle cx="318" cy="206" r="3" fill="#fff7d4" />
                      <path d="M318 138L318 206L272 176" fill="none" stroke="#f0c764" strokeWidth="4" strokeLinecap="round" />
                      <path d="M318 206L366 242" stroke="#f0c764" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="430" cy="144" r="12" fill="#d8a44b" />
                      <path d="M426 144H434" stroke="#1f140a" strokeWidth="2" />
                      <circle cx="214" cy="274" r="12" fill="#d8a44b" />
                      <path d="M210 274H218" stroke="#1f140a" strokeWidth="2" />
                      <rect x="408" y="120" width="88" height="44" rx="8" fill="#21150d" stroke="#8f6637" />
                      <text x="452" y="149" textAnchor="middle" fill="#f7e5b2" fontSize="12" fontFamily="Georgia, serif">ENGSCAN</text>
                      <rect x="178" y="250" width="92" height="44" rx="8" fill="#21150d" stroke="#8f6637" />
                      <text x="224" y="279" textAnchor="middle" fill="#f7e5b2" fontSize="12" fontFamily="Georgia, serif">FLUGO</text>
                      <path d="M312 118L318 104L324 118" stroke="#f2c96d" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <div className="parchment-panel rounded-[1.6rem] border border-[#8c6034]/35 p-5 sm:p-6">
                    <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[#8b5e2e]">Selo do ofício</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#4f3114]">Construo soluções com erudição e visão.</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5e4024] sm:text-base">
                      Entre pesquisa, software e empreendedorismo, minha missão é transformar complexidade em produtos claros, elegantes e úteis.
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-[#7f5225]/35 bg-[linear-gradient(135deg,_rgba(36,23,13,0.9),_rgba(16,10,7,0.95))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] sm:p-6">
                    <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[#d5ad64]">Presença em campo</p>
                    <div className="mt-3 space-y-3 text-sm leading-7 text-[#f2e0b7]">
                      <p>• Pesquisador em IA, automação e comunicação visual.</p>
                      <p>• Desenvolvedor de produtos com foco em clareza e escala.</p>
                      <p>• Fundador de iniciativas que conectam tecnologia e impacto.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-[#8c6034]/35 bg-[linear-gradient(135deg,_rgba(255,239,199,0.95),_rgba(232,209,156,0.92))] p-5 text-[#4d3216] shadow-[0_16px_40px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(114,68,14,0.1),_transparent_35%)]" />
                    <div className="relative flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[#7d4c21]">Projeto</p>
                        <h3 className="mt-2 text-lg font-semibold leading-tight">{project.title}</h3>
                      </div>
                      <div className="rounded-full border border-[#8c6034]/30 bg-[#fff3d3]/80 p-2 text-xl shadow-inner">
                        {project.icon}
                      </div>
                    </div>
                    <p className="relative mt-4 text-sm leading-7 text-[#5b4024] sm:text-[0.95rem]">{project.description}</p>
                    {project.highlight ? (
                      <div className="relative mt-4 inline-flex rounded-full border border-[#a06f2d]/30 bg-[#f8df9a] px-3 py-1 text-sm font-semibold text-[#7b4313] shadow-sm">
                        {project.highlight}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>

              <div className="parchment-panel rounded-[1.8rem] border border-[#8c6034]/35 px-5 py-5 sm:px-7">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[#8b5e2e]">Habilidades arquetípicas</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#4f3114]">HABILIDADES ARQUETÍPICAS</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#8c6034]/25 bg-[#fff9e9]/70 px-3 py-2 text-sm font-medium text-[#5f3d1f] shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <footer className="flex flex-col gap-4 rounded-[1.6rem] border border-[#7d5022]/35 bg-[#20140b]/80 px-5 py-5 text-sm text-[#f5e5b6] shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <p className="font-semibold uppercase tracking-[0.24em] text-[#d5ad64]">
                  Firme um acordo com o Guardião
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-[#8c6034]/35 px-3 py-2 transition hover:bg-[#8c6034]/20">
                    LinkedIn
                  </a>
                  <a href="https://github.com/Dayvid-San" target="_blank" rel="noreferrer" className="rounded-full border border-[#8c6034]/35 px-3 py-2 transition hover:bg-[#8c6034]/20">
                    GitHub
                  </a>
                  <a href="mailto:dayvid@example.com" className="rounded-full border border-[#8c6034]/35 px-3 py-2 transition hover:bg-[#8c6034]/20">
                    Email
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
