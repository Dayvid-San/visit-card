"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Mapeamento de rotas para anúncios
const routeAnnouncements: Record<string, string> = {
  "/": "...Olá! Meu nome é Ártemes e vou lhe guiar por aqui. Caso queira desativar minha voz, clique no botão com para desligar o som da página!",
  "/portfolio": "...Essa é uma seleção dos projetos de Dayvid como programador e pesquisador. Aqui você verá tanto projetos acadêmicos de pesquisa quanto projetos pessoais que contruiram de forma signícativa na vida das pessoas. Por questão de contrato, Dayvid não pode dar detalhes sobre os seus projetos.",
};

export function useVoiceAnnouncement() {
  const pathname = usePathname();

  useEffect(() => {
    // Verifica se o navegador suporta a API de síntese de voz
    if ("speechSynthesis" in window) {
      const announcement =
        routeAnnouncements[pathname] || `Bem-vindo à página ${pathname}`;

      // Pequeno delay para garantir que a página carregou
      const timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(announcement);

        // Configurações da voz
        utterance.lang = "pt-BR"; // Português do Brasil
        utterance.rate = 1.2; // Velocidade (0.1 a 10)
        utterance.pitch = 1; // Tom (0 a 2)
        utterance.volume = 0.8; // Volume (0 a 1)

        // Tenta encontrar uma voz em português
        const voices = speechSynthesis.getVoices();
        const portugueseVoice = voices.find((voice) =>
          voice.lang.startsWith("pt"),
        );
        if (portugueseVoice) {
          utterance.voice = portugueseVoice;
        }

        speechSynthesis.speak(utterance);
      }, 500); // Delay de 500ms

      return () => {
        clearTimeout(timer);
        speechSynthesis.cancel(); // Cancela qualquer fala em andamento
      };
    }
  }, [pathname]);
}
