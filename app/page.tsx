import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { CSSProperties } from "react";
import Image from "next/image";

// --- Componente Reutilizável ---
interface TransparentPhotoProps {
  imageUrl: any;
  opacity?: number;
  width?: string;
  height?: string;
  background?: string;
  customStyles?: CSSProperties;
}

const TransparentPhoto: React.FC<TransparentPhotoProps> = ({
  imageUrl,
  opacity = 0.5,
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

  const gradientOverlayStyles: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 10,
    width: "100%",
    height: "100%",
    background: `
      linear-gradient(to right, transparent 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, transparent 100%)
    `,
    zIndex: 1,
    pointerEvents: "none",
  };

  return (
    <div style={containerStyles}>
      <Image
        src={imageUrl}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div style={gradientOverlayStyles} />
    </div>
  );
};

// --- Página Principal ---
export default function HomePage() {
  const photoDayvid = "/emBeloHorizonteInteira.jpeg";
  const date = new Date();
  const titlePresentation = "Olá, meu nome é";
  const namePresentation = "Dayvid";
  const presentationText = `Sou Programador e pesquisador em Redes Neurais Artificiais. Tenho
            conhecimento em diferentes nichos, mas gosto principalmente de
            computadores, de automação e sinto satisfação em resolver problemas
            reais.`;
  const aboutMeText = `Programador, pesquisador, estudante de Ciência da Computação e enxadrista. Tenho ${date.getFullYear() - 2000} anos. Nascido em Aracaju, Sergipe, sou responsável por muitos projetos de inovação e ciência no estado. Hoje, moro no Paraná onde tenho como base exportação desses projetos para o resto do Brasil.`;

  return (
    <div className="container relative px-4 py-16 md:py-24">
      {/* Photo pinned to viewport top-left */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 10 }}>
        <TransparentPhoto
          imageUrl={photoDayvid}
          opacity={0.3}
          width="300px"
          height="600px"
        />
      </div>
      {/* Hero Section */}
      <div className="relative z-20 flex items-stretch justify-around">
        <section className="mb-24 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            {titlePresentation}
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              {" "}
              {namePresentation}
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl">
            {presentationText}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/portfolio-">
                Projetos Recentes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contato">Vamos Conversar</Link>
            </Button>
          </div>
        </section>
      </div>
      {/* About Section */}
      <section className="relative z-20 mx-auto max-w-4xl">
        <Card>
          <CardContent className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-balance">Sobre mim</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{aboutMeText}</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}