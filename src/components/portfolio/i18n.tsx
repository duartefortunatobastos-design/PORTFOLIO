import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

/** Número com indicativo internacional, sem + nem espaços (ex: 351912345678). */
export const WHATSAPP_PHONE = "351939743678";

export const WHATSAPP_MESSAGE =
  "Boas, tudo bem?\nVi o seu portfólio e gostaria de falar consigo.";

export function getWhatsAppHref(phone = WHATSAPP_PHONE, message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

type Dict = {
  nav: {
    about: string;
    story: string;
    work: string;
    skills: string;
    sports: string;
    connect: string;
    menu: string;
    close: string;
  };
  hero: {
    name: string;
    tagline1: string;
    tagline2: string;
    desc1: string;
    desc2: string;
    ctaProjects: string;
    ctaAbout: string;
    scroll: string;
  };
  about: {
    kicker: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    highlightsTitle: string;
    highlights: string[];
    location: { value: string; label: string };
    valuesTitle: string;
    values: string[];
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
    viewProject: string;
    code: string;
    items: {
      title: string;
      description: string;
      tech: string[];
      liveUrl: string;
      codeUrl: string;
    }[];
  };
  skills: {
    kicker: string;
    title1: string;
    title2: string;
    technicalTitle: string;
    otherTitle: string;
    learningLabel: string;
    languagesLabel: string;
    tech: string[];
    learning: string[];
  };
  sports: {
    kicker: string;
    title1: string;
    title2: string;
    intro: string;
    categories: { sport: string; highlights: string[] }[];
  };
  contact: {
    kicker: string;
    title1: string;
    title2: string;
    intro: string;
    linksLabel: string;
    social: { github: string; instagram: string; whatsapp: string };
  };
  footer: { name: string; rights: string; socialLabel: string };
  toggle: string;
};

const pt: Dict = {
  nav: {
    about: "Sobre",
    story: "História",
    work: "Projetos",
    skills: "Competências",
    sports: "Desporto",
    connect: "Contactos",
    menu: "Menu",
    close: "Fechar",
  },
  hero: {
    name: "Duarte Bastos",
    tagline1: "Desenvolvedor & Atleta",
    tagline2: "A Disciplina Constrói o Sucesso",
    desc1: "Desenvolvedor em formação, apaixonado por software, redes e cibersegurança.",
    desc2: "Atleta multidesportivo — Taekwondo, futebol e atletismo com foco e resiliência.",
    ctaProjects: "Ver Projetos",
    ctaAbout: "Sobre Mim",
    scroll: "Role",
  },
  about: {
    kicker: "Sobre Mim",
    title1: "Quem",
    title2: "sou eu",
    p1: "O meu nome é Duarte Bastos, tenho 18 anos e conclui o 12º ano no Curso Profissional de Técnico de Gestão e Programação de Sistemas Informáticos. Desde muito cedo que o desporto faz parte da minha vida. Comecei aos 4 anos no Taekwondo, uma arte marcial originária da Coreia do Sul, onde alcancei resultados de destaque. Sou também detentor do 1.º Dan de Taekwondo. E aos 9 anos iniciei o meu percurso no futebol, modalidade que continuo a praticar até hoje com dedicação e espírito competitivo.",
    p2: "Para além disso, pratico também atletismo, participando em várias provas onde já conquistei diversos primeiros lugares. Paralelamente ao desporto, tenho uma grande paixão pela área da tecnologia e da programação. Interesso-me por áreas como programação, redes, cibersegurança e desenvolvimento de software. Ao longo do tempo, adquiri conhecimentos em várias linguagens de programação, incluindo PHP, JavaScript, C++, C#, Python, bem como HTML e CSS. Considero-me uma pessoa disciplinada, focada e orientada para objetivos, procurando constantemente evoluir tanto a nível pessoal como profissional. O meu percurso reflete um equilíbrio entre o desporto e a tecnologia, combinando resiliência, dedicação e uma forte vontade de crescer.",
    highlightsTitle: "Destaques",
    highlights: ["18 anos", "Programador", "Atleta"],
    location: { value: "PT", label: "Baseado em Portugal" },
    valuesTitle: "Valores",
    values: ["Disciplina", "Consistência", "Evolução"],
  },
  story: {
    kicker: "A Minha História",
    title1: "A minha",
    title2: "jornada",
    items: [
      {
        year: "Dos 4 anos aos 9 anos",
        title: "Taekwondo",
        body: "Iniciei no Taekwondo — onde aprendi disciplina e a verdadeira competição, onde obtive os meus primeiros resultados a nível distrital e ibérico. Uma base que moldou a minha mentalidade.",
      },
      {
        year: "Dos 9 anos ao 18 anos",
        title: "Futebol",
        body: "Iniciei no Atético Clube de Arrentela, onde aprendi o espírito de equipa e vontade de competir ao longo das épocas. Uma paixão enorme por este clube, que foi a minha casa e que levo comigo até hoje.",
      },
      {
        year: "TGPSSI",
        title: "Técnico de Gestão e Programação de Sistemas Informáticos",
        body: "Entrei no 10º ano no curso, com o objetivo de aprender uma área que sempre gostei — a área da informática, envolvendo tudo sobre este mundo e a área da programação. Aprendi PHP, JavaScript, Python, HTML, CSS e as bases da informática.",
      },
      {
        year: "Presente",
        title: "Projetos",
        body: "Desenvolvo projetos reais, sejam pessoais ou para empresas. Já entreguei 2 projetos para clientes e empresas, incluindo a minha PAP e este portfólio.",
      },
    ],
  },
  projects: {
    kicker: "Projetos",
    title1: "O que",
    title2: "desenvolvi",
    intro:
      "Projetos reais — da PAP a soluções para clientes — com foco em funcionalidade, design e código limpo.",
    viewProject: "Ver Projeto",
    code: "Código",
    items: [
      {
        title: "Site PAP",
        description:
          "Projeto de Aptidão Profissional do curso TGPSI. Website completo com gestão de conteúdos, base de dados e interface responsiva.",
        tech: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
        liveUrl: "#",
        codeUrl: "https://github.com/duartefortunatobastos-design/PAP-LONE-WOLF---DUARTE-BASTOS",
      },
      {
        title: "Portfólio Duarte Bastos",
        description:
          "Portfólio pessoal, com secções de sobre mim, a minha história, projetos, skills e contacto, em PT e EN.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        liveUrl: "https://duartefortunatobastos-design.github.io/Portfolio-Duarte-Bastos/",
        codeUrl: "https://github.com/duartefortunatobastos-design/Portfolio-Duarte-Bastos",
      },
      {
        title: "Projeto para ASAPOL",
        description:
          "Website desenvolvido para Sindicato da Polícia de Segurança Pública, com foco em presença online, usabilidade, painel para os sócios e sistema de candidatura.",
        tech: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
        liveUrl: "https://duartefortunatobastos-design.github.io/SITE-ASAPOL--Duarte-Bastos/",
        codeUrl: "https://github.com/duartefortunatobastos-design/SITE-ASAPOL--Duarte-Bastos",
      },
    ],
  },
  skills: {
    kicker: "Competências",
    title1: "Capacidade",
    title2: "técnica",
    technicalTitle: "Técnicas",
    otherTitle: "Outras",
    learningLabel: "Gostaria de aprender:",
    languagesLabel: "Linguagens",
    tech: ["PHP", "JavaScript", "C++", "C#", "Python", "HTML & CSS"],
    learning: ["Redes", "Cibersegurança"],
  },
  sports: {
    kicker: "Desporto & Conquistas",
    title1: "O meu",
    title2: "diferencial",
    intro:
      "Mais do que código — anos de desporto a moldar disciplina, foco e vontade de competir. O que me distingue de outros perfis técnicos.",
    categories: [
      {
        sport: "Taekwondo",
        highlights: [
          "5x campeão distrital",
          "2x vice-campeão ibérico",
          "1º Dan",
        ],
      },
      {
        sport: "Futebol",
        highlights: [
          "Campeão Distrital 2018/2019",
          "Campeão Sesimbra Summer Cup 2018",
          "Campeão Moçarria Cup 2023/2024",
        ],
      },
      {
        sport: "Atletismo",
        highlights: [
          "Campeão do Trofeu de Atletismo do Seixal",
          "+10x - 1º lugar em provas no concelho",
          "+10x - 1º lugar em Corta matos",
        ],
      },
    ],
  },
  contact: {
    kicker: "Contactos",
    title1: "Entra em",
    title2: "contacto",
    intro:
      "Queres falar sobre um projeto, colaboração ou oportunidade? Contacta-me pelas redes ou envia-me uma mensagem no WhatsApp.",
    linksLabel: "Links",
    social: {
      github: "https://github.com/duartefortunatobastos-design",
      instagram: "https://www.instagram.com/13.bastos/",
      whatsapp: getWhatsAppHref(),
    },
  },
  footer: {
    name: "Duarte Bastos",
    rights: "Todos os direitos reservados.",
    socialLabel: "Redes sociais",
  },
  toggle: "EN",
};

const en: Dict = {
  nav: {
    about: "About",
    story: "Story",
    work: "Work",
    skills: "Skills",
    sports: "Sports",
    connect: "Connect",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    name: "Duarte Bastos",
    tagline1: "Developer & Athlete",
    tagline2: "Discipline Builds Success",
    desc1: "Developer in training with a passion for software, networking, and cybersecurity.",
    desc2: "Multi-sport athlete — taekwondo, football, and athletics with focus and resilience.",
    ctaProjects: "View Projects",
    ctaAbout: "About Me",
    scroll: "Scroll",
  },
  about: {
    kicker: "About Me",
    title1: "Who",
    title2: "I am",
    p1: "My name is Duarte Bastos, I'm 18 years old and I completed the 12th grade in a Professional Course in IT Systems Management and Programming. Sport has been part of my life from a very young age. I started Taekwondo at 4 — a martial art from South Korea — where I achieved standout results. I also hold a 1st Dan in Taekwondo. And at 9, I began football, a sport I still practice today with dedication and a competitive spirit.",
    p2: "I also compete in athletics, taking part in various events where I've earned several first-place finishes. Alongside sport, I have a deep passion for technology and programming. I'm interested in programming, networking, cybersecurity, and software development. Over time, I've gained skills in PHP, JavaScript, C++, C#, Python, HTML, and CSS. I consider myself disciplined, focused, and goal-oriented, constantly striving to grow both personally and professionally. My path reflects a balance between sport and technology — resilience, dedication, and a strong drive to improve.",
    highlightsTitle: "Highlights",
    highlights: ["18 years old", "Developer", "Athlete"],
    location: { value: "PT", label: "Based in Portugal" },
    valuesTitle: "Values",
    values: ["Discipline", "Consistency", "Growth"],
  },
  story: {
    kicker: "My Story",
    title1: "My",
    title2: "journey",
    items: [
      {
        year: "From age 4 to 9",
        title: "Taekwondo",
        body: "I began Taekwondo — where I learned discipline and true competition, and earned my first district and Iberian results. A foundation that shaped my mindset.",
      },
      {
        year: "From age 9 to 18",
        title: "Football",
        body: "I started football at Atlético Clube de Arrentela, where I learned team spirit and the drive to compete season after season. A deep passion for this club — my home — that I still carry with me today.",
      },
      {
        year: "TGPSSI",
        title: "Professional Course in IT Systems Management and Programming",
        body: "I entered the course in 10th grade with the goal of learning a field I've always loved — IT, covering everything about this world and programming. I learned PHP, JavaScript, Python, HTML, CSS, and the fundamentals of computing.",
      },
      {
        year: "Present",
        title: "Projects",
        body: "I build real projects — personal or for businesses. I've already delivered 2 projects for clients and companies, including my PAP and this portfolio.",
      },
    ],
  },
  projects: {
    kicker: "Projects",
    title1: "What I've",
    title2: "built",
    intro:
      "Real projects — from my PAP to client work — focused on functionality, design, and clean code.",
    viewProject: "View Project",
    code: "Code",
    items: [
      {
        title: "PAP Website",
        description:
          "Professional Aptitude Project for my TGPSI course. Full website with content management, database, and responsive UI.",
        tech: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
        liveUrl: "#",
        codeUrl: "https://github.com/duartefortunatobastos-design/PAP-LONE-WOLF---DUARTE-BASTOS",
      },
      {
        title: "Duarte Bastos Portfolio",
        description:
          "Personal portfolio with about me, my story, projects, skills, and contact sections, in PT and EN.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        liveUrl: "https://duartefortunatobastos-design.github.io/Portfolio-Duarte-Bastos/",
        codeUrl: "https://github.com/duartefortunatobastos-design/Portfolio-Duarte-Bastos",
      },
      {
        title: "ASAPOL Project",
        description:
          "Website built for the Public Security Police union, focused on online presence, usability, a member area, and an application system.",
        tech: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
        liveUrl: "https://duartefortunatobastos-design.github.io/SITE-ASAPOL--Duarte-Bastos/",
        codeUrl: "https://github.com/duartefortunatobastos-design/SITE-ASAPOL--Duarte-Bastos",
      },
    ],
  },
  skills: {
    kicker: "Skills",
    title1: "Technical",
    title2: "ability",
    technicalTitle: "Technical",
    otherTitle: "Other",
    learningLabel: "I'd like to learn:",
    languagesLabel: "Languages",
    tech: ["PHP", "JavaScript", "C++", "C#", "Python", "HTML & CSS"],
    learning: ["Networking", "Cybersecurity"],
  },
  sports: {
    kicker: "Sports & Achievements",
    title1: "My",
    title2: "edge",
    intro:
      "More than code — years of sport shaping discipline, focus, and a drive to compete. What sets me apart from other technical profiles.",
    categories: [
      {
        sport: "Taekwondo",
        highlights: [
          "5x district champion",
          "2x Iberian vice-champion",
          "1st Dan",
        ],
      },
      {
        sport: "Football",
        highlights: [
          "District Champion 2018/2019",
          "Sesimbra Summer Cup Champion 2018",
          "Moçarria Cup Champion 2023/2024",
        ],
      },
      {
        sport: "Athletics",
        highlights: [
          "Seixal Athletics Trophy Champion",
          "+10x - 1st-place finishes in municipal events",
          "+10x - 1st-place finishes in Corta Matos",
        ],
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title1: "Get in",
    title2: "touch",
    intro:
      "Want to talk about a project, collaboration, or opportunity? Reach me on social media or send me a WhatsApp message.",
    linksLabel: "Links",
    social: {
      github: "https://github.com/duartefortunatobastos-design",
      instagram: "https://www.instagram.com/13.bastos/",
      whatsapp: getWhatsAppHref(),
    },
  },
  footer: {
    name: "Duarte Bastos",
    rights: "All rights reserved.",
    socialLabel: "Social media",
  },
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
