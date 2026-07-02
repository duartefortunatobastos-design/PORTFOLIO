import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = {
  nav: { about: string; story: string; work: string; skills: string; sports: string; connect: string; menu: string; close: string };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    scroll: string;
  };
  about: {
    kicker: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    stats: { pb: string; contrib: string; projects: string; years: string };
  };
  story: {
    kicker: string;
    title1: string;
    title2: string;
    items: { year: string; title: string; body: string }[];
  };
  projects: {
    kicker: string;
    title1: string;
    title2: string;
    intro: string;
    items: { title: string; description: string; tech: string[] }[];
  };
  skills: {
    kicker1: string;
    kicker2: string;
    title1: string;
    title2: string;
    soft: string[];
    tech: string[];
  };
  sports: {
    kicker: string;
    title1: string;
    title2: string;
    intro: string;
    items: { title: string; year: string; body: string }[];
  };
  contact: {
    kicker: string;
    title1: string;
    title2: string;
    intro: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
  };
  footer: { rights: string; built: string };
  toggle: string;
};

const pt: Dict = {
  nav: { about: "Sobre", story: "História", work: "Projetos", skills: "Skills", sports: "Esporte", connect: "Contato", menu: "Menu", close: "Fechar" },
  hero: {
    badge: "Disponível para projetos",
    title1: "CONSTRUINDO",
    title2: "VELOCIDADE",
    title3: "ENTREGANDO CÓDIGO",
    subtitle:
      "Desenvolvedor full-stack durante o dia, velocista competitivo ao amanhecer. Uno a alta performance do atletismo à arquitetura de software resiliente.",
    cta1: "Explorar Minha Jornada",
    cta2: "Ver Projetos",
    scroll: "Role ↓",
  },
  about: {
    kicker: "Sobre Mim",
    title1: "A mentalidade de um",
    title2: "Atleta Dual",
    p1: "Sou um jovem desenvolvedor e velocista competitivo. Minha crença é simples: a disciplina da pista influencia diretamente a qualidade do meu código. Otimizando um componente React ou raspando milésimos numa prova de 100m, o objetivo é o mesmo — eficiência máxima.",
    p2: "Encaro cada projeto como uma temporada: construir fundamentos sólidos, medir tudo, iterar com honestidade. Sou movido por arquitetura limpa, interfaces rápidas e records pessoais.",
    stats: { pb: "Recorde 100m", contrib: "Contribuições no Github", projects: "Projetos Entregues", years: "Anos na Pista" },
  },
  story: {
    kicker: "Minha História",
    title1: "Uma linha do tempo forjada por",
    title2: "código e cadência",
    items: [
      { year: "2016", title: "Primeira Linha de Código", body: "Escrevi minha primeira página HTML aos 12 anos. Me apaixonei pela ideia de que a lógica podia produzir algo visível." },
      { year: "2018", title: "Estreia no Atletismo", body: "Entrei na equipe de velocidade da escola. Aprendi que a evolução é medida em centésimos — e milhares de repetições." },
      { year: "2020", title: "Campeão Regional de Velocidade", body: "1º lugar nos 100m no campeonato regional. Descobri o paralelo entre preparar uma prova e entregar software." },
      { year: "2022", title: "Primeiro Projeto Full-Stack em Produção", body: "Lancei uma plataforma em PHP + JS usada pelo meu clube de atletismo. Usuários reais, feedback real, bugs reais." },
      { year: "2024", title: "Construindo na Interseção", body: "Hoje foco em apps web de alta performance para o mundo do esporte e bem-estar. Duas identidades, uma obsessão: velocidade." },
    ],
  },
  projects: {
    kicker: "Projetos",
    title1: "Trabalhos",
    title2: "Selecionados",
    intro: "Uma amostra do que construí recentemente — de dashboards de performance a plataformas de e-commerce.",
    items: [
      {
        title: "Apex Athlete Dashboard",
        description: "Plataforma de telemetria para acompanhar métricas de sprint, tempos parciais e evolução a longo prazo.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
      },
      {
        title: "Volt Commerce",
        description: "Experiência de e-commerce de alta conversão para uma boutique especializada em produtos de atletismo.",
        tech: ["PHP", "JavaScript", "MySQL", "Tailwind"],
      },
      {
        title: "Pulse Chat",
        description: "App de mensagens em tempo real com indicadores de digitação, presença e envio de arquivos.",
        tech: ["React", "Node.js", "WebSockets"],
      },
    ],
  },
  skills: {
    kicker1: "Habilidades Técnicas",
    kicker2: "Soft Skills",
    title1: "Stack & Ferramentas",
    title2: "Mentalidade",
    soft: ["Disciplina", "Foco", "Trabalho em Equipe", "Resiliência", "Comunicação", "Adaptabilidade"],
    tech: ["HTML & CSS", "JavaScript / TypeScript", "React / Next.js", "PHP", "Node.js", "SQL / PostgreSQL"],
  },
  sports: {
    kicker: "Esporte & Conquistas",
    title1: "A pista formou o",
    title2: "engenheiro",
    intro: "O sprint me ensinou que milésimos importam — numa prova e num render loop. Aqui estão algumas marcas das quais me orgulho.",
    items: [
      { title: "Campeão Regional 100m", year: "2020", body: "Ouro no campeonato regional Sub-18 com recorde pessoal de 10,98s." },
      { title: "Finalista Nacional — Revezamento 4x100m", year: "2021", body: "Ancorei a equipe até um 5º lugar no nacional." },
      { title: "Recorde Pessoal — 100m", year: "2023", body: "10,42s com vento legal. Resultado de dois anos focados em biomecânica e força." },
      { title: "Marca de Força", year: "2024", body: "Levantamento terra com trap bar em 2,2× o peso corporal. Base da pré-temporada." },
    ],
  },
  contact: {
    kicker: "Contato",
    title1: "Vamos criar algo",
    title2: "rápido.",
    intro: "Disponível para desenvolvimento freelance, colaborações em sports-tech ou uma boa conversa sobre treino e código.",
    name: "Seu Nome",
    email: "Endereço de Email",
    message: "Conte sobre seu projeto...",
    send: "Enviar Mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada — retorno em breve.",
  },
  footer: { rights: "J. Logan — Desenvolvedor & Atleta", built: "Feito com velocidade & precisão" },
  toggle: "EN",
};

const en: Dict = {
  nav: { about: "About", story: "Story", work: "Work", skills: "Skills", sports: "Sports", connect: "Connect", menu: "Menu", close: "Close" },
  hero: {
    badge: "Available for projects",
    title1: "BUILDING",
    title2: "SPEED",
    title3: "SHIPPING CODE",
    subtitle:
      "Full-stack developer by day, competitive sprinter by dawn. I bridge the gap between high-performance athletics and resilient software architecture.",
    cta1: "Explore My Journey",
    cta2: "View Projects",
    scroll: "Scroll ↓",
  },
  about: {
    kicker: "About Me",
    title1: "The Mindset of a",
    title2: "Dual Athlete",
    p1: "I'm a young developer and competitive sprinter. My belief is simple: the discipline of the track directly informs the quality of my code. Whether I'm optimizing a React component or shaving milliseconds off a 100m sprint, the objective is the same — peak efficiency.",
    p2: "I approach every project like a season: build strong fundamentals, measure everything, iterate honestly. I'm driven by clean architecture, fast interfaces, and personal bests.",
    stats: { pb: "100m Personal Best", contrib: "Github Contributions", projects: "Projects Shipped", years: "On the Track" },
  },
  story: {
    kicker: "My Story",
    title1: "A timeline forged by",
    title2: "code and cadence",
    items: [
      { year: "2016", title: "First Line of Code", body: "Wrote my first HTML page at 12. Fell in love with the idea that logic could produce something visible." },
      { year: "2018", title: "Track & Field Debut", body: "Joined my school's sprint team. Learned that improvement is measured in hundredths of a second — and thousands of reps." },
      { year: "2020", title: "Regional Sprint Champion", body: "Placed 1st in the 100m at the regional championship. Discovered the parallel between race prep and shipping software." },
      { year: "2022", title: "First Full-Stack Project Shipped", body: "Launched a PHP + JS platform used by my athletics club. Real users, real feedback, real bugs." },
      { year: "2024", title: "Building at the Intersection", body: "Now focused on high-performance web apps for the sports & wellness space. Two identities, one obsession: speed." },
    ],
  },
  projects: {
    kicker: "Projects",
    title1: "Selected",
    title2: "Works",
    intro: "A slice of things I've built recently — from performance dashboards to commerce platforms.",
    items: [
      { title: "Apex Athlete Dashboard", description: "Custom telemetry platform for tracking sprint metrics, split times, and long-term progression trends.", tech: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"] },
      { title: "Volt Commerce", description: "High-conversion e-commerce experience for a specialized track & field gear boutique.", tech: ["PHP", "JavaScript", "MySQL", "Tailwind"] },
      { title: "Pulse Chat", description: "Real-time team messaging app with typing indicators, presence, and file sharing.", tech: ["React", "Node.js", "WebSockets"] },
    ],
  },
  skills: {
    kicker1: "Technical Skills",
    kicker2: "Soft Skills",
    title1: "Stack & Tooling",
    title2: "Mindset",
    soft: ["Discipline", "Focus", "Teamwork", "Resilience", "Communication", "Adaptability"],
    tech: ["HTML & CSS", "JavaScript / TypeScript", "React / Next.js", "PHP", "Node.js", "SQL / PostgreSQL"],
  },
  sports: {
    kicker: "Sports & Achievements",
    title1: "The track built the",
    title2: "engineer",
    intro: "Sprinting taught me that milliseconds matter — in a race, and in a render loop. Here are a few marks I'm proud of.",
    items: [
      { title: "Regional 100m Champion", year: "2020", body: "Gold medal in the U18 regional championship with a 10.98s personal best." },
      { title: "National Finalist — 4x100m Relay", year: "2021", body: "Anchored the relay team to a 5th place national finish." },
      { title: "Personal Best — 100m", year: "2023", body: "10.42s wind-legal. Result of two years of biomechanics and strength focus." },
      { title: "Strength Milestone", year: "2024", body: "Trap bar deadlift at 2.2× body weight. Off-season strength foundation." },
    ],
  },
  contact: {
    kicker: "Contact",
    title1: "Let's create something",
    title2: "fast.",
    intro: "Available for freelance development, sports-tech collaborations, or just a good conversation about training and code.",
    name: "Your Name",
    email: "Email Address",
    message: "Tell me about your project...",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent — I'll get back to you shortly.",
  },
  footer: { rights: "J. Logan — Developer & Athlete", built: "Built with speed & precision" },
  toggle: "PT",
};

const DICTS: Record<Lang, Dict> = { pt, en };

type Ctx = { lang: Lang; t: Dict; toggle: () => void };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const value: Ctx = {
    lang,
    t: DICTS[lang],
    toggle: () => setLang((l) => (l === "pt" ? "en" : "pt")),
  };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
