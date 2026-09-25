'use client'
import React, { useState, useEffect, useRef } from "react";
import { listStatusItems, type ApiStatusItem } from "@/lib/api";
import { useContent } from "@/components/content-provider";

interface StatusLine {
  id: string;
  text: string;
}

function toStatusLine(item: ApiStatusItem): StatusLine {
  const text = item.icon ? `${item.icon} ${item.label}: ${item.value}` : `${item.label}: ${item.value}`;
  return { id: item.id, text };
}

// Mesmos valores semeados por StatusItemSeeder.java no backend, traduzidos via
// content-registry. Ficam aqui como padrão do frontend para o widget nunca
// aparecer vazio (ex.: backend fora do ar ou tabela ainda sem itens) e para
// acompanhar o idioma da página; se o backend responder com itens reais, eles
// substituem esses valores (o backend não guarda um valor por idioma, então
// itens vindos de lá aparecem sempre no mesmo idioma em que foram cadastrados).
function buildDefaultStatusItems(t: (key: string) => string): StatusLine[] {
  return [
    { id: "default-cargo", text: `👑 ${t("home.status.default.cargo")}` },
    { id: "default-polis", text: `📍 ${t("home.status.default.polis")}` },
    { id: "default-esquadrao", text: `🛡️ ${t("home.status.default.esquadrao")}` },
    { id: "default-titulo", text: `🏙️ ${t("home.status.default.titulo")}` },
  ];
}

export const TypewriterStatus: React.FC = () => {
  const { t, locale } = useContent();
  const [statusItems, setStatusItems] = useState<StatusLine[]>(() => buildDefaultStatusItems(t));
  const [usingDefaults, setUsingDefaults] = useState(true);
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [currentLineText, setCurrentLineText] = useState<string>("");
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listStatusItems()
      .then((items) => {
        // Mantém os padrões (e o acompanhamento de idioma) se o backend ainda
        // não tiver nenhum item cadastrado.
        if (items.length > 0) {
          setUsingDefaults(false);
          setStatusItems(items.map(toStatusLine));
        }
      })
      .catch((error) => console.error("Error fetching status items: ", error));
  }, []);

  // Reaplica os padrões no novo idioma quando o visitante troca PT/EN, e
  // reinicia a digitação para não misturar texto de idiomas diferentes.
  useEffect(() => {
    if (!usingDefaults) return;
    setStatusItems(buildDefaultStatusItems(t));
    setVisibleCount(0);
    setCurrentLineIndex(0);
    setCurrentLineText("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  // Observa quando o elemento entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Efeito de digitação caractere por caractere
  useEffect(() => {
    if (!hasStarted || statusItems.length === 0 || currentLineIndex >= statusItems.length) return;

    const fullText = statusItems[currentLineIndex].text;

    if (currentLineText.length < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentLineText(fullText.slice(0, currentLineText.length + 1));
      }, 100); // Velocidade da digitação em ms

      return () => clearTimeout(timer);
    } else {
      // Quando termina uma linha, passa para a próxima
      const nextLineTimer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentLineText("");
      }, 250); 

      return () => clearTimeout(nextLineTimer);
    }
  }, [hasStarted, currentLineIndex, currentLineText]);

  return (
    <div
      ref={containerRef}
      className="mt-6 border border-purple-950/50 rounded-xl bg-black/40 p-3 font-mono text-[11px] text-purple-400/80 space-y-1"
    >
      <div className="flex justify-between border-b border-purple-950/30 pb-1">
        <span>{t("home.status.title")}</span>
        <span className="text-purple-500">{t("home.status.version")}</span>
      </div>

      <div className="pt-1 text-[#a69a8a] space-y-0.5 min-h-[80px]">
        {/* Linhas já totalmente digitadas */}
        {statusItems.slice(0, visibleCount).map((item) => (
          <p key={item.id}>{item.text}</p>
        ))}

        {/* Linha sendo digitada atualmente + Cursor */}
        {currentLineIndex < statusItems.length && hasStarted && (
          <p key={statusItems[currentLineIndex].id}>
            {currentLineText}
            <span className="inline-block w-1.5 h-3 ml-0.5 bg-purple-400 animate-pulse align-middle" />
          </p>
        )}
      </div>
    </div>
  );
};