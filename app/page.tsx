import React, { CSSProperties } from "react";
import Image from "next/image";

// --- Tipagens e Componentes Auxiliares ---

interface TransparentPhotoProps {
  imageUrl: string;
  opacity?: number;
  width?: string;
  height?: string;
  customStyles?: CSSProperties;
}

const TransparentPhoto: React.FC<TransparentPhotoProps> = ({
  imageUrl,
  opacity = 0.3,
  width = "300px",
  height = "300px",
  customStyles = {},
}) => {
  const containerStyles: CSSProperties = {
    position: "relative",
    width,
    height,
    opacity,
    pointerEvents: "none",
    ...customStyles,
  };

  return (
    <div style={containerStyles} className="transition-opacity duration-700 gray-scale hover:opacity-40">
      <Image
        src={imageUrl}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
};

// --- Dados Fixos ---

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
    title: "FLUGO: O ESTANDARTE DO GESTOR",
    description: "Estratégia, visão de mercado e execução para marcas que desejam crescer com clareza.",
    icon: "🛍️",
  },
];

const skills = [
  "CÓDIGO (JavaScript / React / Node.js)",
  "INOVAÇÃO (IA / Pesquisa)",
  "EMPREENDEDORISMO (SaaS / TYTO.club)",
];

// --- Componente Principal ---

export default function HomePage() {
  const photoDayvid = "/emBeloHorizonteInteira.jpeg";
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2000;

  const presentationText = `Sou Programador e pesquisador em Redes Neurais Artificiais. Tenho conhecimento em diferentes nichos, mas gosto principalmente de computadores, de automação e sinto satisfação em resolver problemas reais.`;
  
  const aboutMeText = `Programador, pesquisador, estudante de Ciência da Computação e enxadrista. Tenho ${age} anos. Nascido em Aracaju, Sergipe, sou responsável por muitos projetos de inovação e ciência no estado. Hoje, moro no Paraná onde tenho como base para a exportação desses projetos no Brasil e no mundo. Fundei um clube de computação que está presente em Sergipe, Piauí, São Paulo, Rio de janeiro, Paraná e Santa Catarina, além do Marrocos e Irlanda.`;

  return (
    <main className="relative min-h-screen bg-[#000000] text-[#f3eade] font-sans antialiased overflow-x-hidden selection:bg-[#amber-700] selection:text-white">
      
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-950/40 rounded-full blur-[120px] pointer-events-none" />
<div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-900/40 rounded-full blur-[150px] pointer-events-none" />
      {/* Foto de Fundo Flutuante Lateral */}
      <div className="fixed left-6 top-12 z-0 hidden lg:block border border-amber-900/20 rounded-2xl overflow-hidden shadow-2xl">
        <TransparentPhoto
          imageUrl={photoDayvid}
          opacity={0.15}
          width="240px"
          height="450px"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="space-y-16">
          
          {/* Header principal */}
          <header className="text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80">
              ⚔️ Engenheiro de Software
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#f3eade] via-[#e2c199] to-[#bfa17a]">
              DAYVID SANTANA
            </h1>
            <div className="mx-auto mt-4 max-w-xl border-y border-amber-900/30 py-2">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-200/60">
                Programador • Pesquisador • Empreendedor TYTO.club
              </p>
            </div>
          </header>

          {/* Grid: Sobre Mim & Presença */}
          <section className="grid gap-6 md:grid-cols-5">
            <div className="md:col-span-3 bg-[#14110e]/60 backdrop-blur-md border border-amber-900/20 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-500/60 font-mono">// Selo do ofício</span>
                <h2 className="text-2xl font-bold text-[#e2c199] mt-1 mb-4">Sobre Mim</h2>
                <p className="text-sm leading-relaxed text-[#d1c5b6] font-light">
                  {aboutMeText}
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-[#1c1712]/80 to-[#14110e]/90 border border-amber-800/30 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-500/60 font-mono">// Presença em campo</span>
                <h3 className="text-lg font-semibold text-[#e2c199] mt-1 mb-3">Manifesto</h3>
                <p className="text-sm leading-relaxed text-[#c4b8aa] font-light">
                  {presentationText}
                </p>
              </div>
              
              {/* Mini Mini-Mapa Simbólico Técnico (Substituindo o SVG gigante e infantil) */}
              <div className="mt-6 border border-amber-900/40 rounded-xl bg-black/40 p-3 font-mono text-[11px] text-amber-500/80 space-y-1">
                <div className="flex justify-between border-b border-amber-900/20 pb-1">
                  <span>🗺️ REGION_MAP</span>
                  <span className="text-amber-600">v2.0</span>
                </div>
                <div className="pt-1 text-[#a69a8a]">
                  <p>📍 Base: Paraná, BR</p>
                  <p>🔮 Node: ENGSCAN Keep (1º Lugar PICS)</p>
                  <p>🛡️ Hub: FLUGO Village</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projetos */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-900/20 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-500/60 font-mono">// Artefatos criados</span>
                <h2 className="text-2xl font-bold text-[#e2c199]">Grandes Projetos</h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl border border-amber-900/10 bg-[#14110e]/40 p-6 transition-all duration-300 hover:border-amber-700/40 hover:bg-[#1a1612]/60 hover:shadow-2xl hover:shadow-amber-950/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-amber-600">Projeto</span>
                      <h3 className="text-base font-bold text-[#f3eade] group-hover:text-amber-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-950/40 border border-amber-900/30 text-xl shadow-inner">
                      {project.icon}
                    </div>
                  </div>
                  
                  <p className="mt-3 text-xs leading-relaxed text-[#bfb3a4] font-light">
                    {project.description}
                  </p>

                  {project.highlight ? (
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-[11px] font-medium text-amber-400">
                      {project.highlight}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          {/* Conhecimentos / Skills */}
          <section className="bg-[#14110e]/40 border border-amber-900/20 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-amber-500/60 font-mono">// Conhecimentos forjados</span>
                <h3 className="text-xl font-bold text-[#e2c199]">Habilidades Arquetípicas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-amber-900/40 bg-amber-950/20 px-3 py-1.5 text-xs font-mono text-amber-200/80 hover:border-amber-700/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="flex flex-col gap-4 border-t border-amber-900/20 pt-8 sm:flex-row sm:items-center sm:justify-between text-xs">
            <p className="font-mono text-amber-500/60 tracking-wider">
              ⚡ Firme um acordo com o Guardião
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="px-3 py-1.5 border border-amber-900/30 rounded-md hover:border-amber-600/50 hover:bg-amber-950/20 transition-all text-[#c4b8aa] hover:text-[#f3eade]">
                LinkedIn
              </a>
              <a href="https://github.com/Dayvid-San" target="_blank" rel="noreferrer" className="px-3 py-1.5 border border-amber-900/30 rounded-md hover:border-amber-600/50 hover:bg-amber-950/20 transition-all text-[#c4b8aa] hover:text-[#f3eade]">
                GitHub
              </a>
              <a href="mailto:dayvid@example.com" className="px-3 py-1.5 border border-amber-900/30 rounded-md hover:border-amber-600/50 hover:bg-amber-950/20 transition-all text-[#c4b8aa] hover:text-[#f3eade]">
                Email
              </a>
            </div>
          </footer>

        </div>
      </div>

      {/* Ilustração do Personagem/Avatar */}
      <div className="pointer-events-none fixed bottom-20 right-0 z-20 hidden opacity-80 lg:block">
        <Image
          src="/1768628437181-removebg-preview.png"
          alt="Dayvid Santana Avatar"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>

    </main>
  );
}