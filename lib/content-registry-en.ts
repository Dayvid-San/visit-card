// English defaults for every key in CONTENT_KEYS, used by t(key) when the locale is "en" and the
// backend has no real English override. __tests__/content-registry.test.ts keeps both files in sync.
export const DEFAULT_EN: Record<string, string> = {
  // Header
  "header.nav.home": "Home",
  "header.nav.programador": "Developer",
  "header.nav.empreendedor": "Entrepreneur",
  "header.nav.universitario": "Academic",
  "header.nav.portfolio": "Portfolio",
  "header.nav.contato": "Contact",
  "header.social.title": "Social Media",
  "header.audio.mute": "Mute Sound",
  "header.audio.unmute": "Unmute Sound",

  // Home
  "home.badge": "⚔️ Software Engineer ⚔️",
  "home.about.eyebrow": "// Seal of the craft",
  "home.about.heading": "About Me",
  "home.about.body": `I am a software engineer, artificial intelligence researcher and Computer Science student. I started programming on my own at 15 and, since then, I have been building solutions that combine engineering, science and software to solve real problems.

I founded an international applied computing community, took part in creating products used around the world and built systems involving automation, mathematical modeling, machine learning and software engineering.

My experience moves between research and development, turning complex problems into functional, scalable solutions. I am interested in challenges involving artificial intelligence, automation and distributed systems, contributing to teams that aim to build high-impact products.`,
  "home.manifesto.eyebrow": "// Presence in the field",
  "home.manifesto.heading": "Manifesto",
  "home.manifesto.body":
    "I believe software exists to solve real problems. I like understanding complex systems, questioning processes and building solutions that create measurable impact. Whether through software engineering, automation or artificial intelligence, my goal is to turn challenges into results.",
  "home.projects.eyebrow": "// Crafted artifacts",
  "home.projects.heading": "Main Projects",
  "home.projects.label": "Project",
  "home.projects.plantas.title": "Plant Monitor",
  "home.projects.hefesto.title": "Hefesto",
  "home.projects.maestro.title": "Maestro",
  "home.projects.engscan.title": "EngScan",
  "home.projects.tyto.title": "TYTO",
  "home.projects.atenas.title": "Athena",
  "home.projects.agora.title": "Ágora",
  "home.projects.plantas.description":
    "Home automatic watering system: ESP32 + sensors + camera monitor the plants and a PWA dashboard sends alerts to your phone, all without relying on the cloud.",
  "home.projects.hefesto.description":
    "Personal, local-first AI assistant that cites file, line and commit in every answer about my repositories, and coordinates writing agents under human approval.",
  "home.projects.hefesto.highlight": "🎙️ CHAT + VOICE + AGENTS",
  "home.projects.maestro.description":
    "Local orchestrator of 26 AI agents that plan, implement and test code in isolated Git worktrees, with its own CLI and API.",
  "home.projects.engscan.description": "A solution that cuts the time of surveys and inspections from months to a few hours.",
  "home.projects.engscan.highlight": "🏆 1ST PLACE IN COMPETITIONS",
  "home.projects.tyto.description":
    "International computing and science community. We study, test and build science-based products used in several countries.",
  "home.projects.tyto.highlight": "🏆 RECOGNIZED BY UNIVERSITIES",
  "home.projects.atenas.description":
    "AI assistant for managing routines, automatically creating meeting documents and administering the TYTO community.",
  "home.projects.agora.description": "An application that automatically predicts property appreciation in specific regions.",
  "home.skills.eyebrow": "// Special abilities",
  "home.skills.heading": "Archetypal Skills",
  "home.skills.item1": "{years} years of experience with code and electronics",
  "home.skills.item2": "Good communication",
  "home.skills.item3": "Broad business vision",
  "home.skills.item4": "Dedication to delivering results",
  "home.skills.item5": "Dedication to the team",
  "home.languages.eyebrow": "// Communication & Dialects",
  "home.languages.heading": "Language Mastery",
  "home.languages.pt": "Portuguese",
  "home.languages.en": "English",
  "home.languages.ru": "Russian",
  "home.languages.sergipanes": "Sergipanese",
  "home.languages.altovaliriano": "High Valyrian",
  "home.footer.quip": '() => isHuman ? "Connect using the buttons on the side" : "error 404: human not found"',
  "home.status.title": "Status at TYTO",
  "home.status.version": "v2.0",

  // Programador
  "programador.title": "Software Engineer",
  "programador.intro": `My path in technology began in an environment naturally geared toward experimentation. I grew up surrounded by electronics, programming and video games, and I wanted to understand how everything worked on the inside.

At the end of high school, I picked that interest back up in a more structured way, studying programming, data structures, databases and software development. One of the first projects I built was a virtual assistant using Java and Python, created to support my studies, organize information and make it easier to memorize academic content.

Since then, I have kept a problem-driven approach to engineering: identify a need, understand the context and build tools that create value. During my degree at UFS, I kept developing applications to automate tasks, explore new technologies and solve real challenges for myself and the people around me.`,
  "programador.skills.heading": "Technical Skills",
  "programador.skills.frontend.title": "Front-end",
  "programador.skills.frontend.description": "Design and development of UI- and UX-driven interfaces.",
  "programador.skills.backend.title": "Back-end",
  "programador.skills.backend.description":
    "Focused on optimizing resources and scalability, assessing the feasibility of each process and the best trade-off for each operation.",
  "programador.skills.web.title": "Other Web Technologies",
  "programador.skills.web.description": "System integration through REST, GraphQL and WebSockets.",
  "programador.skills.ai.title": "Artificial Intelligence",
  "programador.skills.ai.description": "Using, adapting and developing models according to what the application needs.",

  // Empreendedor
  "empreendedor.title": "Entrepreneur",
  "empreendedor.story.p1":
    "My entrepreneurial path grew out of the same purpose that led me to technology: the desire to create, experiment and turn ideas into real solutions. Even before programming, I was already exploring different ways of building things and solving problems, through activities like woodworking and electronics.",
  "empreendedor.story.p2":
    "When I started programming, I found a new way to create: instead of building only physical objects, I began developing systems able to automate processes, organize information and meet the needs of people and businesses.",
  "empreendedor.story.p3":
    "Along the way, I came into contact with different fields and professionals, building a broad view of how real problems arise and how digital solutions can create value. That experience led me to start my own company, TYTO, in July 2021.",
  "empreendedor.story.p4":
    "The opportunity came from a real need of a client who required a web app. The project marked my transition from developer and designer to someone responsible for understanding business problems, defining solutions, building products and delivering results.",
  "empreendedor.story.p5":
    "During that phase, I explored different markets looking for relevant problems that could be solved through software, including sectors like condominiums, hospitality and investments. That process taught me one of the main lessons of software engineering applied to business: technology only has value when it solves real problems.",
  "empreendedor.story.p6":
    "That search later led me to an unexpected opportunity in diagnostic engineering, where I began developing a solution involving structural analysis, mathematical models and artificial intelligence.",
  "empreendedor.principles.heading": "Entrepreneurial Principles",
  "empreendedor.principles.money.title": "More money with less work",
  "empreendedor.principles.money.description":
    "I worked so that small and medium-sized businesses have the tooling they need to do more with less.",
  "empreendedor.principles.education.title": "Encouraging teaching and learning",
  "empreendedor.principles.education.description":
    "I believe education is one of the few resources that cannot be taken from us. That is why I promoted events, communities, leagues and grant programs so that anyone I could help would have the same opportunities education gave me.",
  "empreendedor.principles.community.title": "Communities and cooperation",
  "empreendedor.principles.community.description":
    "I founded a computing community called TYTO.code to bring professionals together and apply independent academic development to civil society. I also founded and encouraged the creation of academic leagues and computing and innovation clubs.",
  "empreendedor.principles.startups.title": "Companies and Startups",
  "empreendedor.principles.startups.description":
    "Together with the community, I founded companies and startups to meet real needs, from ordinary people to large companies. We won awards, built a reputation and remain active in the market in areas like civil engineering, healthcare, finance and agronomy.",
  "empreendedor.vision.heading": "Worldview",
  "empreendedor.vision.body": "There is always more than one path to solving a problem.",

  // Universitário
  "universitario.title": "Academic",
  "universitario.story.heading": "University and community building",
  "universitario.story.p1":
    "When I joined the Federal University of Sergipe in 2020, I chose Computer Science as a way to deepen a passion that was already part of my path: turning ideas into solutions through technology.",
  "universitario.story.p2":
    "During my degree, I built my foundation in computing fundamentals, mathematical logic and software development, while looking for ways to apply that knowledge in practical projects. Beyond the technical learning, I started organizing study groups and collaborative projects, bringing together people with similar interests to share knowledge and build solutions together.",
  "universitario.story.p3":
    "In 2021, together with other computing students, I founded TYTO, initially as a study community focused on knowledge sharing, technical growth and collaboration among students. The group grew from the idea that learning technology collaboratively speeds up everyone's progress.",
  "universitario.story.p4":
    "From those connections, we began turning ideas and experiments into more structured projects. Some initiatives started as academic research and prototypes and later evolved into products and startups, such as EngScan and Ágora.",
  "universitario.story.p5":
    "That experience was essential to my development as an engineer: I learned that building software is not only about technology, but also about communication, leadership, collaboration and the ability to turn collective knowledge into applicable solutions.",
  "universitario.research.heading": "Research Areas",
  "universitario.research.civil.title": "Neural Networks applied to Diagnostic Civil Engineering",
  "universitario.research.civil.description": "Machine Learning, Deep Learning, NLP",
  "universitario.research.blockchain.title": "Blockchain",
  "universitario.research.blockchain.description": "Data analysis, visualization, statistics",
  "universitario.research.animal.title": "Animal mapping in livestock farming",
  "universitario.research.animal.description": "Architecture, patterns, methodologies",
  "universitario.research.applied.title": "Applied Research",
  "universitario.research.applied.description": "Practical solutions to real problems",
  "universitario.contributions.heading": "Academic Contributions",
  "universitario.contributions.p1":
    "As founder of the technology and computing club (TYTO.club) and co-founder of the UFS Academic League of Web Development, I have worked at the intersection of teaching, research and practical application. Over the years, I have taught many students from different programs how to code, building bridges between theory and practice.",
  "universitario.contributions.p2":
    "I started independent academic research and, within TYTO.club, set up a research lab and a clear transformation flow: from investigation, to prototyping, to social implementation. That process allowed the club to expand to other states and ensure academic results create real impact in the community, whether through tools, partnerships or applied projects.",

  // Shared project detail labels
  "projectDetail.back": "Back to Portfolio",
  "projectDetail.techSheet": "Tech Sheet",
  "projectDetail.period": "Period",
  "projectDetail.status": "Status",

  // Atenas (Athena)
  "atenas.title": "Goddess Athena",
  "atenas.subtitle": "The intelligence behind TYTO.club: gamification, automation and AI mentoring",
  "atenas.date": "2023 - Present",
  "atenas.role": "Creator & Lead AI/Backend Developer",
  "atenas.labels.role": "Role",
  "atenas.labels.techStack": "Technologies Involved",
  "atenas.status": "Active and Evolving",
  "atenas.overview.heading": "Athena Overview",
  "atenas.overview.body":
    "Athena is TYTO.club's central intelligent assistant. She centralizes and manages gamification (XP and tokens), automates task and role management on platforms like Discord and WhatsApp, schedules meetings, proposes hands-on development challenges and, in an innovative way, evaluates code solutions submitted by members. With the 'Oracle', Athena offers instant answers, ensuring an interactive, gamified experience for every club member.",
  "atenas.challenges.heading": "The Challenges of Building It",
  "atenas.challenges.item1": "Integrate multiple platforms (Discord, WhatsApp) and AI APIs in a cohesive way.",
  "atenas.challenges.item2": "Build a robust real-time gamification system with XP and tokens.",
  "atenas.challenges.item3": "Create an AI-based code evaluator that provides useful, accurate feedback.",
  "atenas.challenges.item4": "Manage persistence of complex data (gamification, tasks, history) in a scalable way.",
  "atenas.solutions.heading": "The Solutions Implemented",
  "atenas.solutions.item1": "Modular architecture based on microservices (or well-defined modules) for each integration.",
  "atenas.solutions.item2": "Node.js backend with TypeScript to manage the gamification logic and interactions.",
  "atenas.solutions.item3": "OpenAI API for natural language processing and intelligent code evaluation.",
  "atenas.solutions.item4": "A PostgreSQL database for relational data and Redis for high-performance caching.",
  "atenas.solutions.item5": "A queue system (RabbitMQ) to process asynchronous AI requests and chat interactions without bottlenecks.",
  "atenas.features.heading": "Key Features and Capabilities",
  "atenas.features.intro": "Athena is not just a bot, but an intelligent ecosystem that drives engagement and learning at TYTO.club.",
  "atenas.features.gamification.title": "Centralized Gamification",
  "atenas.features.gamification.description": "Manages XP, tokens and rewards to keep club members engaged.",
  "atenas.features.automation.title": "Smart Automation",
  "atenas.features.automation.description": "Handles tasks, roles and organization on Discord and WhatsApp.",
  "atenas.features.mentoring.title": "AI Mentoring and Code Review",
  "atenas.features.mentoring.description": "Proposes coding challenges and evaluates solutions, offering constructive feedback.",
  "atenas.features.oracle.title": "Instant Answer Oracle",
  "atenas.features.oracle.description": "Provides a channel for quick answers to club members' questions.",
  "atenas.flow.placeholder": "[Athena Interaction Flow: User → Discord/WhatsApp → Athena Bot (Node.js) → OpenAI API / PostgreSQL]",
  "atenas.links.demo": "Visit TYTO.club",
  "atenas.links.github": "View Repository (Example)",

  // Portfolio: TYTO.club
  "tyto.title": "TYTO.club",
  "tyto.subtitle":
    "International technology community I founded in 2021, now a platform with a gamified economy, simulated governance and real projects for squads",
  "tyto.date": "2021 - Present",
  "tyto.role": "Founder & Lead Engineer",
  "tyto.status": "In Production",
  "tyto.architectureValue": "SPA + dedicated REST",
  "tyto.labels.role": "Role",
  "tyto.labels.techStack": "Tech Stack",
  "tyto.labels.architecture": "Architecture",
  "tyto.overview.heading": "Overview",
  "tyto.overview.body":
    "I founded TYTO.club in 2021, initially as a study community among computing students, and led its growth into the current platform: an ecosystem where members earn XP, rise through ranks, earn Drachmas (the internal currency) by completing missions, lead or join real projects and run a simulated governance layer with Kingdoms, Poleis, elections and a monetary court. I architected and built the platform from scratch: a React 19 + TypeScript + Vite frontend, Firebase (Auth + Firestore) as the primary database for real-time reads, and a dedicated REST backend for the most sensitive business rules, such as the economy and missions.",
  "tyto.features.heading": "What the platform does",
  "tyto.features.progression.title": "Progression",
  "tyto.features.progression.description":
    "XP and 14 ranks (from Neophyte to Dominator), each with real perks for project access and benefits. Achievements granted through atomic transactions.",
  "tyto.features.economy.title": "Economy (Drachmas)",
  "tyto.features.economy.description":
    "Internal currency with a full transaction history, an automatic monthly fee, loans and a reserve backed by real money.",
  "tyto.features.governance.title": "Governance",
  "tyto.features.governance.description":
    "Kingdoms and Poleis with elected offices (Tribune, Councilor, Dux Vecturium, Praetorian Guard), fixed terms and impeachment by vote.",
  "tyto.features.projects.title": "Projects & Squads",
  "tyto.features.projects.description":
    "Leader/partner/contributor roles per project, with real business metrics (MRR, burn rate, churn) summarized into a single progress index.",
  "tyto.challenges.heading": "The Challenge",
  "tyto.challenges.item1":
    "Granting achievements without duplicating or losing records when two app routines fired the same check at almost the same time, for different members competing for the same goals.",
  "tyto.challenges.item2":
    "Protecting financial and hierarchy fields (balance, rank, elected offices) without relying only on the interface: in a system where XP and Drachmas are worth \"real currency\" inside the community, any direct-write loophole becomes a way to cheat.",
  "tyto.challenges.item3":
    "Modeling an entire governance structure in code (Kingdom, Polis, Colonies/Metropolises, elected offices with terms and impeachment, a monetary court), keeping everything faithful to regulations written in prose that evolve along with the community.",
  "tyto.solutions.heading": "The Solution",
  "tyto.solutions.item1":
    "Achievements are granted inside an atomic Firestore transaction instead of plain writes: the transaction always reads the already-committed state (not what is in memory) and, as a bonus, repairs on its own any duplicate records left behind by past races.",
  "tyto.solutions.item2":
    "Firestore rules with more than 950 lines act as the real access authority, not just the UI: dedicated functions block any direct user write to balance, rank or office, and automatic suspension for negative balance is enforced on both the client and the server.",
  "tyto.solutions.item3":
    "The internal regulations (the \"Institutional Charter\", in Markdown) are the domain's source of truth, and the code is their implementation: elected offices, terms and the monetary court become dedicated types and services, reviewable independently of the institutional text.",
  "tyto.architecture.heading": "System Architecture",
  "tyto.architecture.body":
    "By design, the frontend talks to two distinct backends: most reads (and some writes) go straight from the browser to Firestore in real time, while the economy, projects and missions (the most sensitive business logic) go through a dedicated REST backend, authenticated with the Firebase token.",
  "tyto.architecture.diagram.frontend": "React 19 + Vite + TypeScript: Firebase Auth, user state subscribed in real time (onSnapshot)",
  "tyto.architecture.diagram.arrow1": "↓ two data paths",
  "tyto.architecture.diagram.firestoreTag": "[Direct Firestore]",
  "tyto.architecture.diagram.firestore": "Simple reads and writes through the client SDK, real time",
  "tyto.architecture.diagram.backend": "Economy, projects, missions: fetch + Bearer <ID token>",
  "tyto.architecture.diagram.arrow2": "↓ access control",
  "tyto.architecture.diagram.rules": "950+ lines: the real access authority, not the interface",
  "tyto.security.heading": "Security as a Real Layer, not a Convenience",
  "tyto.security.intro":
    "More than 45 collections have dedicated Firestore rules, each deriving read/write access from a combination of authentication, Polis/Kingdom/project membership, an active elected office or global admin:",
  "tyto.security.item1":
    "Sensitive fields (balance, rank, offices) are never editable by the users themselves through direct writes, only through server-side/admin transactions.",
  "tyto.security.item2":
    "Project permissions are derived directly from the member's role (leader, partner, contributor), validated in the rules, not just hidden in the UI.",
  "tyto.links.demo": "Open Platform",
  "tyto.links.github": "Organization Repository",

  // Portfolio: Maestro
  "maestro.title": "Maestro",
  "maestro.subtitle":
    "Local AI agent orchestrator for software development: a CLI and API that plan, implement and test code in isolated Git worktrees",
  "maestro.date": "2026",
  "maestro.role": "Creator & Solo Architect",
  "maestro.status": "In active development",
  "maestro.agentsValue": "26 specialized",
  "maestro.testsValue": "108 automated",
  "maestro.labels.role": "Role",
  "maestro.labels.techStack": "Tech Stack",
  "maestro.labels.agents": "Agents",
  "maestro.labels.tests": "Tests",
  "maestro.terminal.task": "Add CPF validation",
  "maestro.terminal.planCreated": "plan created, clean repository, awaiting confirmation",
  "maestro.terminal.planId": "plan-id",
  "maestro.terminal.branchCreated": "branch maestro/<id> created in an isolated worktree",
  "maestro.terminal.pipeline": "pipeline: context → requirements → implementation → tests → review",
  "maestro.terminal.done": "status: done",
  "maestro.overview.heading": "Overview",
  "maestro.overview.body":
    "Maestro is a local tool that coordinates AI-assisted development tasks in any project that declares a maestro.yaml. The CLI (Typer) talks over HTTP to a local FastAPI API, which triggers an Orchestrator responsible for selecting context, building a plan, requiring explicit confirmation and only then carrying out the write on an isolated Git branch and worktree. The production integration with the model goes exclusively through the Codex CLI already installed on the machine; tests use fakes and never call a real provider.",
  "maestro.features.heading": "What the tool does",
  "maestro.features.pipeline.title": "Phased pipeline",
  "maestro.features.pipeline.description":
    "A fixed state machine (context → plan → architectural decision → execution → tests/review). Future phases like DOCUMENTING and ROLLED_BACK are already declared for expansion.",
  "maestro.features.agents.title": "26 specialized agents",
  "maestro.features.agents.description":
    "From ContextAgent to SecurityAgent, each one handles a single step and returns a structured SubAgentResult, never raw conversation history.",
  "maestro.features.worktrees.title": "Isolated writes in worktrees",
  "maestro.features.worktrees.description":
    "Every task that writes runs on its own Git branch and worktree, requiring a clean repository and explicit confirmation before touching the main checkout.",
  "maestro.features.cli.title": "CLI + local API",
  "maestro.features.cli.description":
    "Typer commands talk over HTTP to a FastAPI API restricted to 127.0.0.1:8765. No authentication, no external network, no multi-user, by design.",
  "maestro.challenges.heading": "The Challenge",
  "maestro.challenges.item1":
    "Make sure agents with write permission never corrupt the main checkout or step on each other's work during a task.",
  "maestro.challenges.item2":
    "Prevent a poorly specified goal from triggering a structural change on its own (authentication, database migration, public contract) without human review.",
  "maestro.challenges.item3":
    "Select enough context for each agent without blowing the token budget or leaking irrelevant instructions to the wrong agent.",
  "maestro.solutions.heading": "The Solution",
  "maestro.solutions.item1":
    "The Orchestrator serializes the write phases with a process lock, and every run happens on a maestro/<id> branch inside its own Git worktree, created only after confirming a clean repository and the user's explicit consent.",
  "maestro.solutions.item2":
    "Structural terms in the goal force the ARCHITECTURAL DECISION REQUIRED format: execution stays blocked until a decision is recorded, even when --confirm is passed.",
  "maestro.solutions.item3":
    "The ContextAgent builds a ContextPacket per task: the root AGENTS.md always goes in, a nested AGENTS.md only goes in if a file from its directory was selected, and the specialized contexts in agent-context/ only load when the goal or the paths match the link's keywords.",
  "maestro.architecture.heading": "System Architecture",
  "maestro.architecture.body":
    "The CLI never instantiates agents directly: it is just an HTTP client of the local API, which forwards to the Orchestrator. The Orchestrator reads the context and the agent catalog, delegates filesystem, Git, terminal and test tools, and talks to the Codex provider behind its own model-independent protocol.",
  "maestro.architecture.diagram.cli": "Typer, a pure HTTP client that does not import agents",
  "maestro.architecture.diagram.arrow1": "↓ local HTTP, 127.0.0.1:8765",
  "maestro.architecture.diagram.api": "validates requests and forwards them to the Orchestrator or the job manager",
  "maestro.architecture.diagram.arrow2": "↓ orchestrates",
  "maestro.architecture.diagram.context": "selects AGENTS.md, code, tests and diff",
  "maestro.architecture.diagram.tools": "filesystem, Git, terminal, search, tests",
  "maestro.architecture.diagram.provider": "actual model execution, behind its own protocol",
  "maestro.security.heading": "Autonomy with a Handbrake",
  "maestro.security.intro":
    "Maestro's goal is to give AI agents real autonomy without giving up control over what they can do on their own:",
  "maestro.security.item1":
    "No write happens without a clean Git repository and explicit confirmation; no agent pushes or changes the global Git configuration.",
  "maestro.security.item2": "A dedicated redactor avoids writing secrets, keys or .env contents to logs, context, plans or answers.",
  "maestro.security.item3":
    "The local API deliberately implements no authentication or multi-user isolation: it must never be exposed beyond 127.0.0.1, and CORS only accepts two local dev servers.",
  "maestro.links.github": "View Repository",

  // Portfolio: Hefesto
  "hefesto.title": "Hefesto",
  "hefesto.subtitle":
    "Personal, local-first AI assistant that truly knows my repositories: it cites file, line and commit instead of making things up, and coordinates writing agents under explicit human approval",
  "hefesto.date": "2026",
  "hefesto.role": "Creator & Solo Architect",
  "hefesto.status": "In active development",
  "hefesto.servicesValue": "2 repositories + orchestrator",
  "hefesto.testsValue": "244 backend + 152 frontend",
  "hefesto.labels.role": "Role",
  "hefesto.labels.techStack": "Tech Stack",
  "hefesto.labels.services": "Services",
  "hefesto.labels.tests": "Tests",
  "hefesto.chatDemo.question": "How does the front end reconnect the stream without losing events?",
  "hefesto.chatDemo.answer":
    "The endpoint keeps an append-only log per run. On reconnect, the browser sends the Last-Event-ID and the API replays only the missing events, without duplicating anything.",
  "hefesto.overview.heading": "Overview",
  "hefesto.overview.body":
    "Hefesto was born from two problems in my day-to-day work as a developer: generic AI assistants hallucinate about a repository when the context is just an ad hoc snippet, and tools that 'write code on their own' tend to hide how much real autonomy they are exercising. Instead of a chatbot plugged into a repository, it is an assistant with structured memory of the project's history (commits → documents → decisions → open questions → conversations) and a separate autonomous execution layer, with mandatory human approval and real write isolation.",
  "hefesto.features.heading": "What the assistant does",
  "hefesto.features.sourced.title": "Answers with sources, always",
  "hefesto.features.sourced.description":
    "Every answer about documentation or code cites the path, start/end line and commit hash the information came from. Without evidence in the repository, the answer says so instead of making something up.",
  "hefesto.features.voice.title": "End-to-end voice conversation",
  "hefesto.features.voice.description":
    "It records, transcribes locally with Whisper (CPU), answers and reads the reply back using the browser's native Web Speech API, with no extra audio pipeline and no required API key.",
  "hefesto.features.streaming.title": "Reconnect-resilient streaming",
  "hefesto.features.streaming.description":
    "The streamed chat keeps an append-only log per run; reconnecting replays only the missing events via Last-Event-ID, without duplicating or losing anything.",
  "hefesto.features.isolated.title": "Isolated, approved writes",
  "hefesto.features.isolated.description":
    "The agents screen leads to the writing orchestrator: each task runs on an isolated branch and worktree, with explicit human approval before any change on disk.",
  "hefesto.challenges.heading": "The Challenge",
  "hefesto.challenges.item1":
    "Make sure the streamed chat survives a browser reconnect without duplicating or losing any event, even with EventSource trying to reconnect on its own after an answer has already finished.",
  "hefesto.challenges.item2":
    "Make every answer cite a real file, line and commit, not an approximation: inventing a citation would be worse than admitting no evidence was found.",
  "hefesto.challenges.item3":
    "Coordinating multiple AI agents over the same repository exposed non-deterministic behavior: sometimes a provider answered as if it had no access to a file that was, in fact, available in the sandbox.",
  "hefesto.solutions.heading": "The Solution",
  "hefesto.solutions.item1":
    "Each run keeps an append-only event log behind the stream endpoint; reconnecting uses the browser's Last-Event-ID to resume exactly where it left off, instead of restarting the answer.",
  "hefesto.solutions.item2":
    "The default scope is always 'documentation only'; code is only included with an explicit --scope code, and every answer carries the path, lines and commit hash the information came from, or says it does not know.",
  "hefesto.solutions.item3":
    "The lesson became an engineering practice: treat every agent response as potentially inconsistent, never as a guaranteed function call, and isolate any write on its own branch and worktree, reviewable before any merge.",
  "hefesto.architecture.heading": "System Architecture",
  "hefesto.architecture.body":
    "Three independent local services, each in its own repository, talking over loopback HTTP and never exposed outside the machine. The web front end is the visual entry point for both the documentation chat and the writing-agent orchestrator.",
  "hefesto.architecture.diagram.front":
    "React 19 + TanStack Router/Query, localhost:5174, chat, commit timeline, read-aloud, agents screen",
  "hefesto.architecture.diagram.frontTag": "[Web front end]",
  "hefesto.architecture.diagram.chatTag": "[Chat backend]",
  "hefesto.architecture.diagram.orchestratorTag": "[Agent orchestrator]",
  "hefesto.architecture.diagram.arrow": "↓ local HTTP, typed OpenAPI contract",
  "hefesto.architecture.diagram.chat": "FastAPI, 127.0.0.1:8000, indexes commits/docs in SQLite, cites path + line + commit in every answer",
  "hefesto.architecture.diagram.orchestrator": "FastAPI, 127.0.0.1:8765, isolated writes on a branch/worktree, under human approval",
  "hefesto.architecture.maestroNote": "The agent orchestrator is a project of its own, with a dedicated page:",
  "hefesto.architecture.maestroLink": "see Maestro",
  "hefesto.security.heading": "Truly Local-First by Default",
  "hefesto.security.intro": "Local-first here is not marketing talk, it is the design premise:",
  "hefesto.security.item1":
    "All three APIs listen only on 127.0.0.1, without authentication, because they should never leave the machine; CORS is restricted to the known local origins of their own dev servers.",
  "hefesto.security.item2":
    "Nothing is written without explicit approval, whether a single file edit in the chat or a full agent task, and writes are always isolated on their own branch and worktree.",
  "hefesto.security.item3":
    "Multi-layer secret redaction: environment variables never end up in the persisted configuration, and key/token/password patterns are stripped from context, diffs, logs and answers before being stored.",
  "hefesto.security.item4Prefix": "Destructive Git/terminal commands",
  "hefesto.security.item4Suffix": "and equivalents) are blocked by policy unless explicitly confirmed.",
  "hefesto.links.backend": "Backend on GitHub",
  "hefesto.links.frontend": "Frontend on GitHub",

  // Portfolio: Monitor de Plantas
  "plantas.title": "Plant Monitor",
  "plantas.subtitle":
    "Home automatic watering system: sensors and a camera assess the plants in real time, an ESP32 waters them on its own when needed, and a PWA dashboard shows everything without relying on the cloud",
  "plantas.date": "2026",
  "plantas.role": "Creator & Solo Architect (hardware, firmware and backend)",
  "plantas.status": "Working, running at home",
  "plantas.partsValue": "2 firmwares + backend + PWA",
  "plantas.databaseValue": "Local SQLite (WAL)",
  "plantas.labels.role": "Role",
  "plantas.labels.techStack": "Tech Stack",
  "plantas.labels.parts": "System parts",
  "plantas.labels.database": "Database",
  "plantas.noLinkNotice": "Local project, physical hardware assembled at home. No demo link or public repository at the moment.",
  "plantas.demo.humidity": "moisture",
  "plantas.demo.windowTitle": "Plant Monitor - dashboard",
  "plantas.demo.plant.fern": "Fern",
  "plantas.demo.plant.succulent": "Succulent",
  "plantas.demo.plant.pothos": "Pothos",
  "plantas.demo.status.healthy": "healthy",
  "plantas.demo.status.attention": "attention",
  "plantas.demo.status.dry": "dry",
  "plantas.demo.watered.fern": "Watered 3h ago",
  "plantas.demo.watered.succulent": "Watered 9h ago",
  "plantas.demo.watered.pothos": "Watered 1d ago",
  "plantas.overview.heading": "Overview",
  "plantas.overview.body":
    "Plant Monitor looks after the houseplants when there is no time to: it measures soil moisture, temperature, air humidity and light, waters automatically when needed, takes periodic photos and alerts your phone if something is wrong, all without relying on the cloud, running on the home Wi-Fi network itself. It is made of three independently deployed parts talking HTTP/JSON and a raw WebSocket on the local network: one ESP32 per pot reads the sensors and drives the pump, an optional ESP32-CAM photographs the plants, and a Java (Javalin) backend stores the history in SQLite, evaluates the photos and pushes live updates to the dashboard.",
  "plantas.features.heading": "What the system does",
  "plantas.features.watering.title": "Automatic watering per plant",
  "plantas.features.watering.description":
    "Each ESP32 decides on its own when to open the pump relay by comparing soil moisture to the configured threshold, with a minimum time between waterings so the pot does not get soaked.",
  "plantas.features.photos.title": "Periodic photos + color-based health",
  "plantas.features.photos.description":
    "An optional ESP32-CAM photographs the plants; a color heuristic (green vs. yellow/brown) estimates health, without relying on the cloud or an ML model.",
  "plantas.features.push.title": "Push notifications even with the app closed",
  "plantas.features.push.description":
    "Web Push with VAPID alerts your phone when the soil has been dry for too long, the pump turned on and did not fix it, a photo indicates a problem, or a sensor stopped responding.",
  "plantas.features.realtime.title": "Real time over WebSocket, no cloud",
  "plantas.features.realtime.description":
    "A PWA dashboard installable on your phone, updated live over its own WebSocket (no Socket.IO), running entirely on the home Wi-Fi network.",
  "plantas.challenges.heading": "The Challenge",
  "plantas.challenges.item1":
    "If the backend went down (the computer turned off, for example), the plants could not go without water until someone noticed.",
  "plantas.challenges.item2":
    "The ESP32-CAM has very little free RAM beyond the image's own framebuffer, so buffering the whole photo before sending it risked running out of memory.",
  "plantas.challenges.item3":
    "Timestamps arrived in different formats depending on the source: SQLite stores UTC without a 'Z', WebSocket events come with a 'Z', and that already caused a real bug: live readings showing 'NaN min ago'.",
  "plantas.solutions.heading": "The Solution",
  "plantas.solutions.item1":
    "The automatic watering logic lives entirely in the ESP32 firmware, not in the backend: it decides on its own when to open the relay by comparing the reading to the threshold stored in memory. The dashboard only adjusts that threshold remotely; if the server goes down, the plant keeps being watered with the last configured value.",
  "plantas.solutions.item2":
    "The photo upload is multipart, written in three separate HTTP calls (header, raw JPEG bytes, footer) instead of concatenating everything into a single buffer, avoiding doubling RAM usage on top of the camera's framebuffer.",
  "plantas.solutions.item3":
    "Every timestamp that goes through the frontend passes through a single helper (toUtcDate()) instead of each screen handling the format its own way; the bug's root cause became a rule for any new code that touches dates.",
  "plantas.architecture.heading": "System Architecture",
  "plantas.architecture.body":
    "Three independently deployed parts, with no message queue or broker: the sensor ESP32 talks HTTP directly to the backend, the ESP32-CAM uploads photos via multipart, and the backend pushes everything in real time to the dashboard over its own WebSocket.",
  "plantas.architecture.diagram.esp32": "reads sensors per plant, decides and waters on its own",
  "plantas.architecture.diagram.cam": "periodic photos, streaming multipart upload",
  "plantas.architecture.diagram.arrow1": "↓ HTTP POST readings / photo",
  "plantas.architecture.diagram.backend": "stores history in SQLite, assesses health by color, schedules offline-device alerts",
  "plantas.architecture.diagram.arrow2": "↓ WebSocket + Web Push",
  "plantas.architecture.diagram.dashboard": "real time in the browser, installable on your phone, receives push even when closed",
  "plantas.limitations.heading": "No Cloud, No Magic Diagnosis",
  "plantas.limitations.intro": "The system runs entirely on the home network, on purpose, and is honest about what it does not do yet:",
  "plantas.limitations.item1":
    "It does not identify specific diseases or plant species; the photo assessment is a color heuristic (greener = better), not a diagnosis.",
  "plantas.limitations.item2": "It does not work outside the home \"out of the box\": access from outside the Wi-Fi network requires setting up remote access separately.",
  "plantas.limitations.item3Prefix": "No ORM, no connection pool: a single",
  "plantas.limitations.item3Suffix": "over plain JDBC, on purpose, to keep the backend easy to audit.",
  "plantas.limitations.item4": "No test suite or linter configured in the backend yet.",

  // Portfolio: Ágora
  "agora.title": "Ágora",
  "agora.subtitle":
    "Property appreciation forecasting for investors and real estate funds: public and proprietary data become a decision dashboard for buying, selling and timing",
  "agora.date": "2026 - Present",
  "agora.role": "Frontend Developer & Team Coordination",
  "agora.status": "In validation (pitches and grant programs)",
  "agora.labels.role": "Role",
  "agora.labels.techStack": "Roadmap Target Technologies",
  "agora.tags.statistics": "Statistical Modeling",
  "agora.tags.ml": "Machine Learning",
  "agora.tags.backtesting": "Backtesting",
  "agora.tags.geospatial": "Geospatial Data",
  "agora.tags.macro": "Macroeconomic Analysis",
  "agora.noLinkNotice":
    "Project in the validation phase: it takes part in innovation programs and has applied to grant programs. No product in production or public link yet.",
  "agora.overview.heading": "Overview",
  "agora.overview.body":
    "Ágora predicts property appreciation and depreciation over time, crossing public and macroeconomic data with proprietary soil and topography data, and turning proximity to points of interest (schools, colleges, planned public works) into an appreciation score. It is aimed at investors and real estate funds that need to decide on buying, selling and timing with more than market intuition. I am responsible for the product's frontend and for coordinating the project's multidisciplinary team.",
  "agora.features.heading": "What the platform proposes",
  "agora.features.prediction.title": "Appreciation forecasting model",
  "agora.features.prediction.description":
    "A statistical and machine learning core that projects the appreciation of a property or region over time.",
  "agora.features.data.title": "Combined data sources",
  "agora.features.data.description":
    "Public and macroeconomic data combined with proprietary soil and topography data, kept traceable by source.",
  "agora.features.proximity.title": "Proximity scoring",
  "agora.features.proximity.description":
    "Measures the property's proximity to schools, colleges and planned public works, and converts it into an appreciation score.",
  "agora.features.scenarios.title": "Scenario simulation",
  "agora.features.scenarios.description":
    "Compares different macroeconomic and urban scenarios and the impact of each one on the projected appreciation.",
  "agora.challenges.heading": "The Challenge",
  "agora.challenges.item1":
    "Forecasting property appreciation requires validating a statistical model against real historical data, not just promising accuracy.",
  "agora.challenges.item2":
    "Combining public and macroeconomic data with proprietary soil and topography data into a single consistent forecast, without duplicating collection or losing source traceability.",
  "agora.challenges.item3":
    "Defining the right forecast granularity (region, neighborhood or individual property) without promising a level of precision the available data volume cannot yet support.",
  "agora.solutions.heading": "The Solution",
  "agora.solutions.item1":
    "A temporal backtesting validation methodology: train the model only on historical data up to a cutoff and compare the projected appreciation against what actually happened in public market indexes.",
  "agora.solutions.item2":
    "A data pipeline that keeps public/macroeconomic and proprietary sources separate, making it possible to audit where each model variable came from.",
  "agora.solutions.item3":
    "Initial granularity set by region and neighborhood, not by individual property, until there is enough transaction volume per address to support a statistically reliable forecast.",

  // Portfolio: EngScan
  "engscan.title": "EngScan",
  "engscan.subtitle": "A microservices-based solution for image analysis and automatic reports",
  "engscan.date": "2024 - 2026",
  "engscan.role": "Lead Full-stack Developer & ML Engineer",
  "engscan.status": "In Production",
  "engscan.labels.role": "Role",
  "engscan.labels.year": "Year",
  "engscan.labels.techStack": "Tech Stack",
  "engscan.overview.heading": "Overview",
  "engscan.overview.body":
    "EngScan is a microservices-based solution for image analysis and automatic report generation. An Angular interface, APIs and business logic in NestJS, a Python library for composing reports and machine learning models (a neural network and a CNN) that perform automated diagnosis from the data and images.",
  "engscan.challenges.heading": "The Challenge",
  "engscan.challenges.item1": "Processing high-resolution images caused bottlenecks in the main API.",
  "engscan.challenges.item2": "The Python (ML) environment needed to be isolated from the application's Node.js core.",
  "engscan.challenges.item3": "Generating complex PDFs with the technical layout required by ABNT standards.",
  "engscan.solutions.heading": "The Solution",
  "engscan.solutions.item1": "An event-driven microservices architecture using RabbitMQ for asynchronous communication.",
  "engscan.solutions.item2": "A dedicated Python GPU service to run the CNN (Convolutional Neural Network) models.",
  "engscan.solutions.item3": "A background processing queue (BullMQ) for generating reports without freezing the user interface.",
  "engscan.architecture.heading": "System Architecture",
  "engscan.architecture.body":
    "The system uses a decoupled approach. The Angular frontend communicates with a NestJS API Gateway. Heavy processes (AI and PDF generation) are delegated to queues (RabbitMQ) and consumed by specialized Python workers.",
  "engscan.architecture.placeholder": "[Microservices Architecture Diagram: Angular → NestJS Gateway → RabbitMQ → Python Workers]",
  "engscan.links.demo": "Open Online Demo",
  "engscan.links.github": "Learn More",

  // Portfolio: Flugo
  "flugo.title": "Flugo",
  "flugo.subtitle": "Smart employee onboarding and registration system",
  "flugo.date": "2026",
  "flugo.role": "Full-stack Developer",
  "flugo.status": "Completed",
  "flugo.labels.role": "Role",
  "flugo.labels.year": "Year",
  "flugo.labels.techStack": "Technologies Used",
  "flugo.overview.heading": "About the Project",
  "flugo.overview.body":
    "Flugo is a centralized platform for managing the intake of new talent. The project focuses on a dynamic registration form, making sure sensitive data and employee documents are collected securely, validated and with a smooth user experience (UX), eliminating manual paper processes.",
  "flugo.challenges.heading": "The Challenge",
  "flugo.challenges.item1": "Validate complex data flows (CPF, CEP, PIS) in real time without losing performance.",
  "flugo.challenges.item2": "Manage the upload and secure storage of scanned documents.",
  "flugo.challenges.item3": "Create a responsive interface that guides the user through multiple steps without causing fatigue.",
  "flugo.solutions.heading": "The Solution",
  "flugo.solutions.item1": "Multi-step forms with local state persistence to prevent data loss.",
  "flugo.solutions.item2": "Strict schema validation using Zod integrated with React Hook Form.",
  "flugo.solutions.item3": "Integration with external APIs (such as ViaCEP) to autofill addresses and reduce input errors.",
  "flugo.architecture.heading": "Data Architecture",
  "flugo.architecture.body":
    "The form was built with a state-driven architecture, where each step is validated independently before allowing the user to move on. Data is processed by a Next.js server (API Routes) and stored securely in the database through Prisma ORM.",
  "flugo.architecture.placeholder": "[Flow Diagram: User → React Hook Form (Zod) → Next.js API → Prisma → PostgreSQL]",
  "flugo.links.demo": "See the Live Form",
  "flugo.links.github": "Repository",

  // Contato
  "contato.info.email.label": "Email",
  "contato.info.email.description": "I reply within 24 hours",
  "contato.info.linkedin.label": "LinkedIn",
  "contato.info.linkedin.description": "I reply within 42 hours",
  "contato.info.github.label": "GitHub",
  "contato.info.github.description": "Check out my projects",
  "contato.info.location.label": "Location",
  "contato.info.location.description": "Available for remote work",
  "contato.form.heading": "Send a message",
  "contato.form.intro": "Fill out the form below and I will get back to you as soon as possible.",
  "contato.form.name": "Name *",
  "contato.form.email": "Email *",
  "contato.form.subject": "Subject",
  "contato.form.message": "Message *",
  "contato.form.success": "Message sent successfully!",
  "contato.form.genericError": "Your message could not be sent.",
  "contato.form.submit": "Send message",

  // Currículos
  "curriculos.title": "Résumés",
  "curriculos.intro": "A catalog of my résumé versions. Pick one, read it right in the browser or download the PDF.",
  "curriculos.empty": "No résumés available yet.",
  "curriculos.updatedPrefix": "Updated",
  "curriculos.view": "View",
  "curriculos.download": "Download",
  "curriculos.geral.idioma": "Portuguese",
  "curriculos.geral.titulo": "Résumé - General",
  "curriculos.geral.descricao": "An overview of my experience as a software engineer and AI researcher.",
  "curriculos.geral.atualizado": "September 2026",

  // 404
  "notFound.title": "Page Not Found",
  "notFound.description": "The page you are looking for does not exist.",
  "notFound.backHome": "Back to the Home Page",

  // Portfolio (index)
  "portfolio.loading": "Loading portfolio...",
  "portfolio.title": "Portfolio",
  "portfolio.intro":
    "A selection of my projects as a developer and researcher, showing the practical application of modern technologies and scientific and academic contributions.",
  "portfolio.programmer.heading": "Developer",
  "portfolio.researcher.heading": "Researcher",
  "portfolio.button.details": "Details",
};
