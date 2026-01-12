// hooks/useVoiceAnnouncement.ts
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Mapeamento de rotas para anúncios
const routeAnnouncements: Record<string, string> = {
  '/': 'Bem-vindo à página inicial',
  '/projetos': 'Bem-vindo ao portfólio',
  '/contato': 'Bem-vindo à página de contato',
  '/sobre': 'Bem-vindo à página sobre mim',
  // Adicione mais rotas conforme necessário
};

export function useVoiceAnnouncement() {
  const pathname = usePathname();

  useEffect(() => {
    // Verifica se o navegador suporta a API de síntese de voz
    if ('speechSynthesis' in window) {
      const announcement = routeAnnouncements[pathname] || `Bem-vindo à página ${pathname}`;
      
      // Pequeno delay para garantir que a página carregou
      const timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(announcement);
        
        // Configurações da voz
        utterance.lang = 'pt-BR'; // Português do Brasil
        utterance.rate = 1; // Velocidade (0.1 a 10)
        utterance.pitch = 1; // Tom (0 a 2)
        utterance.volume = 0.8; // Volume (0 a 1)
        
        // Tenta encontrar uma voz em português
        const voices = speechSynthesis.getVoices();
        const portugueseVoice = voices.find(voice => voice.lang.startsWith('pt'));
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
