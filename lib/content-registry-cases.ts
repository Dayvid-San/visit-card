// Texts for the case-study pages rendered by components/project-case-study.tsx (Ártemis,
// Chatminusis, Edge Node) plus the headings they share. Kept apart from content-registry.ts only
// because of size: each entry carries both defaults, and content-registry.ts / content-registry-en.ts
// spread them into CONTENT_KEYS / DEFAULT_EN, so t(key) and the admin editor see them as usual.
export interface CaseKeyDef {
  key: string;
  page: string;
  label: string;
  pt: string;
  en: string;
  multiline?: boolean;
}

const shared: CaseKeyDef[] = [
  { key: "projectDetail.coverAlt", page: "portfolio", label: "Texto alternativo da capa (antes do nome)", pt: "Capa do projeto", en: "Project cover:" },
  { key: "caseStudy.overview", page: "portfolio", label: "Estudo de caso: título Visão Geral", pt: "Visão Geral", en: "Overview" },
  { key: "caseStudy.features", page: "portfolio", label: "Estudo de caso: título O que faz", pt: "O que o sistema faz", en: "What the system does" },
  { key: "caseStudy.challenges", page: "portfolio", label: "Estudo de caso: título Desafios", pt: "O Desafio", en: "The Challenge" },
  { key: "caseStudy.solutions", page: "portfolio", label: "Estudo de caso: título Soluções", pt: "A Solução", en: "The Solution" },
  { key: "caseStudy.architecture", page: "portfolio", label: "Estudo de caso: título Arquitetura", pt: "Arquitetura do Sistema", en: "System Architecture" },
  { key: "caseStudy.decisions", page: "portfolio", label: "Estudo de caso: título Decisões", pt: "Decisões e trade-offs", en: "Decisions and Trade-offs" },
  { key: "caseStudy.decisionsIntro", page: "portfolio", label: "Estudo de caso: introdução Decisões", pt: "O que escolhi, o que deixei de lado e o preço de cada escolha:", en: "What I chose, what I left out and the price of each choice:" },
  { key: "caseStudy.limitations", page: "portfolio", label: "Estudo de caso: título Limitações", pt: "O que ainda não está pronto", en: "What Is Not Done Yet" },
  { key: "caseStudy.role", page: "portfolio", label: "Estudo de caso: rótulo Papel", pt: "Papel", en: "Role" },
  { key: "caseStudy.techStack", page: "portfolio", label: "Estudo de caso: rótulo Tecnologias", pt: "Tecnologias", en: "Tech Stack" },
  { key: "caseStudy.github", page: "portfolio", label: "Estudo de caso: botão repositório", pt: "Ver Repositório", en: "View Repository" },
];

const p = (page: string, key: string, label: string, pt: string, en: string, multiline = false): CaseKeyDef => ({
  key,
  page,
  label,
  pt,
  en,
  multiline,
});

const A = "portfolio/artemis";
const artemis: CaseKeyDef[] = [
  p(A, "artemis.title", "Título", "Ártemis", "Ártemis"),
  p(A, "artemis.subtitle", "Subtítulo", "Minha assistente pessoal com IA, no estilo Jarvis: Claude com ferramentas, memória própria e nenhuma ação importante sem a minha confirmação", "My personal AI assistant, Jarvis style: Claude with tools, its own memory and no important action without my confirmation", true),
  p(A, "artemis.date", "Período", "2026 - Atual", "2026 - Present"),
  p(A, "artemis.role", "Papel", "Criador e arquiteto solo", "Creator & Solo Architect"),
  p(A, "artemis.status", "Status", "Em uso pessoal, em desenvolvimento ativo", "In personal use, actively developed"),
  p(A, "artemis.labels.parts", "Rótulo: partes", "Partes", "Parts"),
  p(A, "artemis.partsValue", "Valor: partes", "API + frontend web + agente local", "API + web front end + local agent"),
  p(A, "artemis.labels.tests", "Rótulo: testes", "Testes", "Tests"),
  p(A, "artemis.testsValue", "Valor: testes", "100+ automatizados (pytest)", "100+ automated (pytest)"),
  p(A, "artemis.notice", "Aviso sem link", "Repositório privado, porque guarda dados pessoais. A arquitetura abaixo é a que está em uso.", "Private repository, because it holds personal data. The architecture below is the one in use.", true),
  p(A, "artemis.overview.body", "Visão Geral: texto", "Ártemis é a minha assistente pessoal: conversa por texto e voz, lembra do que importa (notas, planejamento, dossiês de contatos), organiza e-mail, agenda e tarefas e executa ações no meu computador. O backend em Python/FastAPI concentra o raciocínio (Claude com ferramentas), a base de conhecimento e a autenticação; o frontend em TypeScript cuida da voz no próprio navegador; e um agente local separado roda na minha máquina Linux para as ações no computador. É um sistema de usuário único, desenhado para gastar o mínimo de processamento no servidor e o mínimo de tokens do modelo.", "Ártemis is my personal assistant: it talks by text and voice, remembers what matters (notes, planning, contact dossiers), organizes email, calendar and tasks, and carries out actions on my computer. The Python/FastAPI backend holds the reasoning (Claude with tools), the knowledge base and authentication; the TypeScript front end handles voice in the browser itself; and a separate local agent runs on my Linux machine for computer actions. It is a single-user system, designed to spend as little server processing and as few model tokens as possible.", true),
  p(A, "artemis.features.memory.title", "Recurso: memória (título)", "Memória organizada por nível de risco", "Memory organized by risk level"),
  p(A, "artemis.features.memory.description", "Recurso: memória (texto)", "Notas pessoais só mudam com confirmação; planejamento e dossiês ela edita direto. Toda sobrescrita arquiva a versão anterior.", "Personal notes only change with confirmation; planning and dossiers it edits directly. Every overwrite archives the previous version.", true),
  p(A, "artemis.features.agents.title", "Recurso: agentes (título)", "E-mail, agenda e tarefas em rascunho", "Email, calendar and tasks as drafts"),
  p(A, "artemis.features.agents.description", "Recurso: agentes (texto)", "A assistente prepara o rascunho; nada é enviado ou marcado sem a minha confirmação, e cada ação fica registrada.", "The assistant prepares the draft; nothing is sent or booked without my confirmation, and every action is logged.", true),
  p(A, "artemis.features.executor.title", "Recurso: executor (título)", "Ações no computador com allowlist", "Computer actions behind an allowlist"),
  p(A, "artemis.features.executor.description", "Recurso: executor (texto)", "Um agente local abre e lista arquivos só dentro de pastas permitidas. Não existe shell genérico, de propósito.", "A local agent opens and lists files only inside allowed folders. There is no generic shell, on purpose.", true),
  p(A, "artemis.features.voice.title", "Recurso: voz (título)", "Voz sem serviço pago", "Voice without a paid service"),
  p(A, "artemis.features.voice.description", "Recurso: voz (texto)", "Palavra de ativação, reconhecimento e fala pela Web Speech API do navegador; o backend só ajusta o estilo da resposta para ser ouvida.", "Wake word, recognition and speech through the browser's Web Speech API; the backend only adapts the answer's style to be heard.", true),
  p(A, "artemis.challenges.item1", "Desafio 1", "O Railway tem disco efêmero: notas e conversas sumiriam a cada deploy.", "Railway has an ephemeral disk: notes and conversations would vanish on every deploy.", true),
  p(A, "artemis.challenges.item2", "Desafio 2", "Dar à IA poder de escrever (notas, e-mails, reuniões) sem que um erro do modelo vire uma ação irreversível.", "Giving the AI write power (notes, emails, meetings) without letting a model mistake become an irreversible action.", true),
  p(A, "artemis.challenges.item3", "Desafio 3", "O Firebase só autentica: qualquer conta criada no projeto conseguiria entrar na API.", "Firebase only authenticates: any account created in the project would be able to call the API.", true),
  p(A, "artemis.solutions.item1", "Solução 1", "SQLite em modo WAL num Volume persistente; no primeiro boot o volume é preenchido a partir da cópia versionada no repositório.", "SQLite in WAL mode on a persistent Volume; on first boot the volume is seeded from the copy versioned in the repository.", true),
  p(A, "artemis.solutions.item2", "Solução 2", "Um único mecanismo de rascunho + confirmação explícita para e-mail, reunião e notas pessoais. O modelo não tem ferramenta de remoção, de propósito.", "A single draft + explicit confirmation mechanism for email, meetings and personal notes. The model has no delete tool, on purpose.", true),
  p(A, "artemis.solutions.item3", "Solução 3", "Uma lista de e-mails permitidos é o que autoriza, com falha fechada: sem a lista, ninguém entra. Tokens de sessão ficam gravados só como hash SHA-256.", "An allowlist of emails is what authorizes, failing closed: without the list, nobody gets in. Session tokens are stored only as SHA-256 hashes.", true),
  p(A, "artemis.architecture.body", "Arquitetura: texto", "Três partes com responsabilidades separadas: o navegador cuida da voz, a API no Railway cuida do raciocínio e da memória, e o agente local é o único que toca no computador.", "Three parts with separate responsibilities: the browser handles voice, the API on Railway handles reasoning and memory, and the local agent is the only one that touches the computer.", true),
  p(A, "artemis.diagram.front", "Diagrama: frontend", "voz no navegador, lê a resposta em streaming com fetch", "voice in the browser, reads the streamed answer with fetch"),
  p(A, "artemis.diagram.arrow1", "Diagrama: seta 1", "↓ HTTPS + Bearer (ID token do Firebase)", "↓ HTTPS + Bearer (Firebase ID token)"),
  p(A, "artemis.diagram.api", "Diagrama: API", "Claude com ferramentas, streaming de texto, SQLite + Volume, agendador", "Claude with tools, text streaming, SQLite + Volume, scheduler"),
  p(A, "artemis.diagram.arrow2", "Diagrama: seta 2", "↓ canais autenticados", "↓ authenticated channels"),
  p(A, "artemis.diagram.agent", "Diagrama: agente local", "executa ações só dentro da allowlist", "runs actions only inside the allowlist"),
  p(A, "artemis.diagram.google", "Diagrama: Google", "e-mail e agenda reais, OAuth de usuário único", "real email and calendar, single-user OAuth"),
  p(A, "artemis.decisions.item1", "Decisão 1", "Streaming por HTTP simples em vez de WebSocket: uma pergunta gera uma resposta, então não vale gerenciar reconexão e estado. WebSocket volta à mesa se houver avisos proativos em tempo real.", "Plain HTTP streaming instead of WebSocket: one question produces one answer, so managing reconnection and state is not worth it. WebSocket comes back to the table if real-time proactive alerts are needed.", true),
  p(A, "artemis.decisions.item2", "Decisão 2", "SQLite no volume em vez de um Postgres gerenciado: um usuário, custo e processamento mínimos. O preço é migrar se um dia houver vários usuários.", "SQLite on the volume instead of a managed Postgres: one user, minimal cost and processing. The price is a migration if there are ever multiple users.", true),
  p(A, "artemis.decisions.item3", "Decisão 3", "Busca na base de conhecimento por sobreposição de palavras, sem embeddings por enquanto: mais barata e fácil de auditar. A troca por embeddings está registrada como decisão em aberto.", "Knowledge-base search by word overlap, no embeddings for now: cheaper and easy to audit. Moving to embeddings is recorded as an open decision.", true),
  p(A, "artemis.decisions.item4", "Decisão 4", "Voz no navegador em vez de um TTS pago: zero custo por resposta, ao preço de uma voz menos natural.", "Voice in the browser instead of a paid TTS: zero cost per answer, at the price of a less natural voice.", true),
  p(A, "artemis.limitations.item1", "Limitação 1", "A integração com a Atena (assistente externa) ainda roda em modo simulado, porque o endpoint real não existe.", "The integration with Atena (an external assistant) still runs in mock mode, because the real endpoint does not exist yet.", true),
  p(A, "artemis.limitations.item2", "Limitação 2", "No computador, só existem ações de risco baixo. As de risco médio e alto ainda vão passar pelo mesmo fluxo de rascunho e confirmação.", "On the computer, only low-risk actions exist. Medium and high-risk ones will go through the same draft and confirmation flow.", true),
];

const C = "portfolio/chatminusis";
const chatminusis: CaseKeyDef[] = [
  p(C, "chatminusis.title", "Título", "Chatminusis", "Chatminusis"),
  p(C, "chatminusis.subtitle", "Subtítulo", "Chat com criptografia ponta a ponta usando MLS (RFC 9420): núcleo em Rust exposto ao Flutter por FFI e um servidor que só entrega e apaga envelopes", "End-to-end encrypted chat using MLS (RFC 9420): a Rust core exposed to Flutter over FFI and a server that only delivers and deletes envelopes", true),
  p(C, "chatminusis.date", "Período", "2026 - Atual", "2026 - Present"),
  p(C, "chatminusis.role", "Papel", "Criador e desenvolvedor", "Creator & Developer"),
  p(C, "chatminusis.status", "Status", "Em desenvolvimento", "In development"),
  p(C, "chatminusis.labels.backends", "Rótulo: backends", "Backends", "Backends"),
  p(C, "chatminusis.backendsValue", "Valor: backends", "Firebase e Supabase", "Firebase and Supabase"),
  p(C, "chatminusis.labels.protocol", "Rótulo: protocolo", "Protocolo", "Protocol"),
  p(C, "chatminusis.protocolValue", "Valor: protocolo", "MLS (RFC 9420)", "MLS (RFC 9420)"),
  p(C, "chatminusis.overview.body", "Visão Geral: texto", "Chatminusis é um app de mensagens em que o servidor nunca lê o conteúdo. A criptografia usa o protocolo MLS (Messaging Layer Security, RFC 9420), implementado em Rust e exposto ao app Flutter por FFI. O servidor faz papel de carteiro: recebe envelopes cifrados, entrega e apaga. Há dois backends intercambiáveis, Firebase e Supabase, cada um com testes das próprias regras de acesso, e um modelo de ameaças documentado no repositório.", "Chatminusis is a messaging app where the server never reads the content. Encryption uses the MLS protocol (Messaging Layer Security, RFC 9420), implemented in Rust and exposed to the Flutter app over FFI. The server acts as a mail carrier: it receives encrypted envelopes, delivers them and deletes them. There are two interchangeable backends, Firebase and Supabase, each with tests for its own access rules, and a threat model documented in the repository.", true),
  p(C, "chatminusis.features.mls.title", "Recurso: MLS (título)", "Criptografia de grupo com MLS", "Group encryption with MLS"),
  p(C, "chatminusis.features.mls.description", "Recurso: MLS (texto)", "Protocolo padronizado pela IETF para mensagens em grupo, em vez de um esquema caseiro.", "An IETF-standardized protocol for group messaging, instead of a homemade scheme.", true),
  p(C, "chatminusis.features.rust.title", "Recurso: Rust (título)", "Núcleo em Rust via FFI", "Rust core over FFI"),
  p(C, "chatminusis.features.rust.description", "Recurso: Rust (texto)", "A parte criptográfica vive em Rust e o app Flutter a chama por FFI, sem reimplementar nada em Dart.", "The cryptographic part lives in Rust and the Flutter app calls it over FFI, with nothing reimplemented in Dart.", true),
  p(C, "chatminusis.features.carrier.title", "Recurso: carteiro (título)", "Servidor carteiro", "Mail-carrier server"),
  p(C, "chatminusis.features.carrier.description", "Recurso: carteiro (texto)", "O servidor guarda envelopes cifrados só até a entrega e depois apaga.", "The server keeps encrypted envelopes only until delivery and then deletes them.", true),
  p(C, "chatminusis.features.backends.title", "Recurso: backends (título)", "Dois backends testados", "Two tested backends"),
  p(C, "chatminusis.features.backends.description", "Recurso: backends (texto)", "Regras do Firestore e RLS do Postgres (Supabase) com testes próprios, e CI no repositório.", "Firestore rules and Postgres RLS (Supabase) with their own tests, and CI in the repository.", true),
  p(C, "chatminusis.challenges.item1", "Desafio 1", "A criptografia precisa de uma linguagem com segurança de memória, mas a interface é Flutter/Dart.", "Encryption needs a memory-safe language, but the interface is Flutter/Dart.", true),
  p(C, "chatminusis.challenges.item2", "Desafio 2", "Um servidor de chat tende a virar um arquivo permanente de mensagens, que é exatamente o que um vazamento expõe.", "A chat server tends to become a permanent archive of messages, which is exactly what a breach exposes.", true),
  p(C, "chatminusis.challenges.item3", "Desafio 3", "Ficar preso a um único provedor de backend logo no começo do projeto.", "Getting locked into a single backend provider right at the start of the project.", true),
  p(C, "chatminusis.solutions.item1", "Solução 1", "Núcleo MLS em Rust, chamado pelo app por FFI: a parte sensível fica numa linguagem segura e o app continua multiplataforma.", "An MLS core in Rust, called by the app over FFI: the sensitive part stays in a safe language and the app stays cross-platform.", true),
  p(C, "chatminusis.solutions.item2", "Solução 2", "O servidor só vê envelopes cifrados e apaga cada um depois da entrega.", "The server only sees encrypted envelopes and deletes each one after delivery.", true),
  p(C, "chatminusis.solutions.item3", "Solução 3", "Dois backends atrás da mesma interface, cada um com testes das regras de acesso (Firestore e RLS).", "Two backends behind the same interface, each with tests for its access rules (Firestore and RLS).", true),
  p(C, "chatminusis.architecture.body", "Arquitetura: texto", "As chaves e a criptografia ficam no aparelho; o backend escolhido só transporta envelopes que não consegue abrir.", "Keys and encryption stay on the device; the chosen backend only carries envelopes it cannot open.", true),
  p(C, "chatminusis.diagram.app", "Diagrama: app", "interface, chaves guardadas no aparelho", "interface, keys stored on the device"),
  p(C, "chatminusis.diagram.arrow1", "Diagrama: seta 1", "↓ FFI", "↓ FFI"),
  p(C, "chatminusis.diagram.core", "Diagrama: núcleo", "grupos, chaves e cifragem MLS", "MLS groups, keys and encryption"),
  p(C, "chatminusis.diagram.arrow2", "Diagrama: seta 2", "↓ envelopes cifrados", "↓ encrypted envelopes"),
  p(C, "chatminusis.diagram.firebase", "Diagrama: Firebase", "regras do Firestore testadas", "tested Firestore rules"),
  p(C, "chatminusis.diagram.supabase", "Diagrama: Supabase", "RLS do Postgres testado", "tested Postgres RLS"),
  p(C, "chatminusis.decisions.item1", "Decisão 1", "MLS em vez de um esquema próprio: mais complexo de integrar, mas é um padrão revisado publicamente e pensado para grupos.", "MLS instead of a custom scheme: harder to integrate, but it is a publicly reviewed standard designed for groups.", true),
  p(C, "chatminusis.decisions.item2", "Decisão 2", "Rust + FFI em vez de criptografia em Dart: duas linguagens e uma ponte para manter, em troca de segurança de memória onde um erro custa caro.", "Rust + FFI instead of encryption in Dart: two languages and a bridge to maintain, in exchange for memory safety where a bug is expensive.", true),
  p(C, "chatminusis.decisions.item3", "Decisão 3", "Dois backends em vez de um: mais testes para manter, em troca de não depender de um único provedor.", "Two backends instead of one: more tests to maintain, in exchange for not depending on a single provider.", true),
];

const E = "portfolio/edge-node";
const edgenode: CaseKeyDef[] = [
  p(E, "edgenode.title", "Título", "Portable Inspection Edge Node", "Portable Inspection Edge Node"),
  p(E, "edgenode.subtitle", "Subtítulo", "Nó de inspeção portátil em ESP32-CAM, escrito em C++17: captura imagens em campo e classifica cada uma com um modelo de visão plugável", "A portable inspection node on an ESP32-CAM, written in C++17: it captures images in the field and classifies each one with a pluggable vision model", true),
  p(E, "edgenode.date", "Período", "2026", "2026"),
  p(E, "edgenode.role", "Papel", "Criador (hardware e firmware)", "Creator (hardware and firmware)"),
  p(E, "edgenode.status", "Status", "Em desenvolvimento", "In development"),
  p(E, "edgenode.labels.hardware", "Rótulo: hardware", "Hardware", "Hardware"),
  p(E, "edgenode.hardwareValue", "Valor: hardware", "ESP32-CAM", "ESP32-CAM"),
  p(E, "edgenode.labels.language", "Rótulo: linguagem", "Linguagem", "Language"),
  p(E, "edgenode.languageValue", "Valor: linguagem", "C++17", "C++17"),
  p(E, "edgenode.overview.body", "Visão Geral: texto", "O Edge Node leva para o campo a mesma pergunta da minha pesquisa em redes neurais para patologias das construções e do EngScan: dá para apoiar uma inspeção com visão computacional direto no local? É um dispositivo ESP32-CAM que captura imagens durante a inspeção e passa cada uma por um pipeline de classificação. O firmware isola o hardware atrás de interfaces (HAL), o que permite testar o pipeline sem a placa, e o classificador de visão é injetado, então o modelo pode mudar sem reescrever o resto.", "The Edge Node takes into the field the same question behind my research on neural networks for building pathologies and behind EngScan: can computer vision support an inspection right on site? It is an ESP32-CAM device that captures images during an inspection and runs each one through a classification pipeline. The firmware isolates the hardware behind interfaces (HAL), which makes it possible to test the pipeline without the board, and the vision classifier is injected, so the model can change without rewriting the rest.", true),
  p(E, "edgenode.features.hal.title", "Recurso: HAL (título)", "Hardware atrás de interfaces", "Hardware behind interfaces"),
  p(E, "edgenode.features.hal.description", "Recurso: HAL (texto)", "Câmera e periféricos ficam atrás de uma HAL, então a lógica de inspeção não conhece a placa.", "Camera and peripherals sit behind a HAL, so the inspection logic does not know about the board.", true),
  p(E, "edgenode.features.pipeline.title", "Recurso: pipeline (título)", "Pipeline de inspeção", "Inspection pipeline"),
  p(E, "edgenode.features.pipeline.description", "Recurso: pipeline (texto)", "Captura, classificação e resultado em etapas separadas, cada uma testável sozinha.", "Capture, classification and result in separate stages, each testable on its own.", true),
  p(E, "edgenode.features.classifier.title", "Recurso: classificador (título)", "Classificador de visão plugável", "Pluggable vision classifier"),
  p(E, "edgenode.features.classifier.description", "Recurso: classificador (texto)", "O classificador é injetado por interface; hoje pode ser um LLM com visão.", "The classifier is injected through an interface; today it can be a vision LLM.", true),
  p(E, "edgenode.features.failsafe.title", "Recurso: segurança (título)", "Falha nunca vira \"nada encontrado\"", "A failure never becomes \"nothing found\""),
  p(E, "edgenode.features.failsafe.description", "Recurso: segurança (texto)", "Erro de captura ou de classificação é reportado como falha, não como ausência de problema.", "A capture or classification error is reported as a failure, not as the absence of a problem.", true),
  p(E, "edgenode.challenges.item1", "Desafio 1", "Firmware costuma ser testado só na placa, o que deixa cada mudança lenta e arriscada.", "Firmware is usually tested only on the board, which makes every change slow and risky.", true),
  p(E, "edgenode.challenges.item2", "Desafio 2", "Em inspeção, um erro silencioso é perigoso: um falso \"sem patologia\" pode fazer alguém ignorar uma trinca.", "In an inspection, a silent error is dangerous: a false \"no pathology\" can make someone ignore a crack.", true),
  p(E, "edgenode.challenges.item3", "Desafio 3", "O melhor modelo de visão para o problema ainda vai mudar.", "The best vision model for the problem is still going to change.", true),
  p(E, "edgenode.solutions.item1", "Solução 1", "HAL por interfaces: o pipeline roda nos testes com implementações falsas do hardware.", "A HAL built on interfaces: the pipeline runs in tests with fake hardware implementations.", true),
  p(E, "edgenode.solutions.item2", "Solução 2", "Regra de segurança explícita no pipeline: qualquer falha vira resultado de falha, nunca \"nada encontrado\".", "An explicit safety rule in the pipeline: any failure becomes a failure result, never \"nothing found\".", true),
  p(E, "edgenode.solutions.item3", "Solução 3", "Classificador atrás de uma interface, injetado na montagem do pipeline.", "The classifier sits behind an interface and is injected when the pipeline is assembled.", true),
  p(E, "edgenode.architecture.body", "Arquitetura: texto", "Cada camada só conhece a interface da camada de baixo, e o resultado tem três estados possíveis, não dois.", "Each layer only knows the interface of the layer below, and the result has three possible states, not two.", true),
  p(E, "edgenode.diagram.device", "Diagrama: dispositivo", "captura a imagem em campo", "captures the image in the field"),
  p(E, "edgenode.diagram.arrow1", "Diagrama: seta 1", "↓ interfaces de câmera e periféricos", "↓ camera and peripheral interfaces"),
  p(E, "edgenode.diagram.pipeline", "Diagrama: pipeline", "captura → classificação → resultado", "capture → classification → result"),
  p(E, "edgenode.diagram.arrow2", "Diagrama: seta 2", "↓ classificador injetado", "↓ injected classifier"),
  p(E, "edgenode.diagram.classifier", "Diagrama: classificador", "LLM com visão hoje, trocável", "vision LLM today, replaceable"),
  p(E, "edgenode.diagram.result", "Diagrama: resultado", "patologia encontrada / nada encontrado / falha", "pathology found / nothing found / failure"),
  p(E, "edgenode.decisions.item1", "Decisão 1", "C++17 com interfaces em vez de chamar a API da placa direto: um pouco mais de código, em troca de testar o pipeline fora do hardware.", "C++17 with interfaces instead of calling the board's API directly: a little more code, in exchange for testing the pipeline off the hardware.", true),
  p(E, "edgenode.decisions.item2", "Decisão 2", "Começar com um LLM de visão atrás da interface: o fluxo de ponta a ponta funciona sem treinar um modelo embarcado, ao preço de depender de rede.", "Starting with a vision LLM behind the interface: the end-to-end flow works without training an embedded model, at the price of depending on a network.", true),
  p(E, "edgenode.decisions.item3", "Decisão 3", "Resultado com três estados em vez de sim/não: mais casos para tratar, mas nenhuma falha passa por inspeção limpa.", "A three-state result instead of yes/no: more cases to handle, but no failure passes as a clean inspection.", true),
];

const home: CaseKeyDef[] = [
  p("home", "home.projects.artemis.title", "Projeto Ártemis: nome no card", "Ártemis", "Ártemis"),
  p("home", "home.projects.artemis.description", "Projeto Ártemis: descrição", "Minha assistente pessoal com IA: Claude com ferramentas, memória própria, e-mail e agenda em rascunho e ações no computador só com confirmação.", "My personal AI assistant: Claude with tools, its own memory, email and calendar as drafts, and computer actions only with confirmation.", true),
  p("home", "home.projects.artemis.highlight", "Projeto Ártemis: destaque", "🛡️ IA COM CONFIRMAÇÃO HUMANA", "🛡️ AI WITH HUMAN CONFIRMATION"),
  p("home", "home.projects.chatminusis.title", "Projeto Chatminusis: nome no card", "Chatminusis", "Chatminusis"),
  p("home", "home.projects.chatminusis.description", "Projeto Chatminusis: descrição", "Chat com criptografia ponta a ponta (MLS) em Rust, exposto ao Flutter por FFI, com um servidor que nunca lê as mensagens.", "End-to-end encrypted chat (MLS) in Rust, exposed to Flutter over FFI, with a server that never reads the messages.", true),
  p("home", "home.projects.chatminusis.highlight", "Projeto Chatminusis: destaque", "🔐 CÓDIGO ABERTO", "🔐 OPEN SOURCE"),
  p("home", "home.projects.edgenode.title", "Projeto Edge Node: nome no card", "Edge Node de Inspeção", "Inspection Edge Node"),
  p("home", "home.projects.edgenode.description", "Projeto Edge Node: descrição", "Dispositivo ESP32-CAM em C++17 que captura imagens de inspeção e classifica com um modelo de visão plugável.", "An ESP32-CAM device in C++17 that captures inspection images and classifies them with a pluggable vision model.", true),
];

const engscan: CaseKeyDef[] = [
  p("portfolio/engscan", "engscan.labels.recognition", "Rótulo: reconhecimento", "Reconhecimento", "Recognition"),
  p("portfolio/engscan", "engscan.recognition", "Valor: reconhecimento", "1º lugar em competição estadual de startups", "1st place in a state startup competition"),
  p("portfolio/engscan", "engscan.diagram.front", "Diagrama: frontend", "envio de imagens e leitura dos laudos", "image upload and report viewing"),
  p("portfolio/engscan", "engscan.diagram.arrow1", "Diagrama: seta 1", "↓ HTTP", "↓ HTTP"),
  p("portfolio/engscan", "engscan.diagram.gateway", "Diagrama: gateway", "regras de negócio, delega o trabalho pesado", "business rules, hands off the heavy work"),
  p("portfolio/engscan", "engscan.diagram.arrow2", "Diagrama: seta 2", "↓ filas RabbitMQ (assíncrono)", "↓ RabbitMQ queues (asynchronous)"),
  p("portfolio/engscan", "engscan.diagram.ai", "Diagrama: IA", "detecção (YOLO) e depois classificação (ResNet)", "detection (YOLO), then classification (ResNet)"),
  p("portfolio/engscan", "engscan.diagram.reports", "Diagrama: laudos", "composição do laudo em PDF", "PDF report composition"),
  p("portfolio/hefesto", "hefesto.noLinkNotice", "Aviso sem link", "Repositórios privados no momento.", "Repositories are private at the moment."),
];

export const CASE_KEYS: CaseKeyDef[] = [...shared, ...artemis, ...chatminusis, ...edgenode, ...home, ...engscan];
