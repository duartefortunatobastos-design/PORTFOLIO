import { useState, type FormEvent } from "react";
import {
  Github,
  Instagram,
  ArrowUpRight,
  Code2,
  Medal,
  Trophy,
  Timer,
  Brain,
  Languages,
  Network,
  Shield,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { LangProvider, useLang } from "./i18n";
import { TechLanguageIcon } from "./TechIcons";
import portrait from "@/assets/portrait.png";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import projectPap from "@/assets/project-pap.png";
import projectPortfolio from "@/assets/project-portfolio.png";
import projectAsapol from "@/assets/project-asapol.png";
import sports1 from "@/assets/sports-1.png";

const PROJECT_IMAGES = [projectPap, projectPortfolio, projectAsapol];

const PROJECT_BROWSER_PREVIEWS: ({ url: string; badge?: string } | null)[] = [
  { url: "lone-wolf-pap", badge: "PAP" },
  { url: "duarte-bastos-portfolio" },
  { url: "asapol" },
];

const LEARNING_ICONS = [Network, Shield];
const SPORT_ICONS = [Medal, Trophy, Timer];

const SECTION_Y = "py-20 sm:py-24 md:py-28 lg:py-32";
const SECTION_X = "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24";
const SECTION_TITLE = "font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl";

export function Portfolio() {
  return (
    <LangProvider>
      <div className="bg-brand-bg text-foreground font-body min-h-screen overflow-x-hidden">
        <Toaster />
        <Nav />
        <Hero />
        <About />
        <Story />
        <Projects />
        <Skills />
        <Sports />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  );
}

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, toggle, t } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch language to ${t.toggle}`}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-brand-surface/70 backdrop-blur text-[10px] uppercase tracking-widest font-bold text-white/80 hover:text-brand-accent hover:border-brand-accent/50 transition-colors ${className}`}
    >
      <Languages className="size-3.5" />
      <span>{lang.toUpperCase()}</span>
      <span className="text-white/30">/</span>
      <span className="text-brand-accent">{t.toggle}</span>
    </button>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const NAV = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.story, href: "#story" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.sports, href: "#sports" },
  ];
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-brand-bg/80 backdrop-blur-md supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <div className={`mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 sm:h-16 ${SECTION_X}`}>
        <a
          href="#top"
          className="font-display shrink-0 text-sm font-bold tracking-tight text-white sm:text-base lg:text-lg"
        >
          Duarte Bastos
        </a>
        <div className="hidden items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-white/60 lg:flex xl:gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-brand-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/40 rounded-full text-brand-accent hover:bg-brand-primary/20 transition-colors"
          >
            {t.nav.connect}
          </a>
          <LangToggle />
        </div>
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <LangToggle />
          <button
            className="min-h-11 min-w-11 px-2 text-[10px] uppercase tracking-widest text-white/70 sm:text-xs"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-brand-bg/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-3 sm:px-6 sm:py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm uppercase tracking-widest text-white/70 transition-colors hover:bg-white/5 hover:text-brand-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm uppercase tracking-widest text-brand-accent transition-colors hover:bg-brand-accent/10"
            >
              {t.nav.connect}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className={`relative flex min-h-[100dvh] items-center overflow-hidden ${SECTION_X}`}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden bg-brand-bg">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.22] animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-brand-bg/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/20 via-brand-bg/60 to-brand-bg" />
        <div className="hero-grain absolute inset-0 opacity-[0.35]" />
        <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-brand-primary/10 blur-[160px] animate-float" />
        <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-brand-accent/8 blur-[140px] animate-float [animation-delay:3s]" />
      </div>

      <div className="mx-auto w-full max-w-7xl pb-20 pt-24 sm:pb-24 sm:pt-28 md:pb-28 md:pt-32">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10 lg:flex-row lg:items-center lg:gap-16 lg:text-left xl:gap-20">
          <div
            className="shrink-0 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <img
              src={logo}
              alt="Duarte Bastos logo"
              className="mx-auto h-28 w-auto object-contain sm:h-36 md:h-44 lg:mx-0 lg:h-52 xl:h-60"
            />
          </div>

          <div className="w-full max-w-4xl">
            <h1
              className="font-display text-[clamp(2.5rem,10vw,7rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t.hero.name}
            </h1>

            <p
              className="mt-5 font-display text-base font-medium leading-snug tracking-[-0.02em] text-white/90 animate-fade-up sm:mt-6 sm:text-lg md:mt-8 md:text-2xl lg:text-[1.75rem]"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block sm:inline">{t.hero.tagline1}</span>
              <span className="mx-0 my-2 hidden text-white/25 sm:mx-3 sm:inline sm:my-0">|</span>
              <span className="block text-white/55 sm:inline">{t.hero.tagline2}</span>
            </p>

            <div
              className="mx-auto mt-6 max-w-xl space-y-1 text-sm leading-relaxed text-white/45 animate-fade-up sm:mt-8 sm:text-base md:text-lg lg:mx-0"
              style={{ animationDelay: "0.3s" }}
            >
              <p>{t.hero.desc1}</p>
              <p>{t.hero.desc2}</p>
            </div>

            <div
              className="mt-8 flex w-full flex-col gap-3 animate-fade-up sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#work"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-wide text-brand-bg transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 sm:w-auto sm:px-8 sm:py-3.5"
              >
                {t.hero.ctaProjects}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-3.5"
              >
                {t.hero.ctaAbout}
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section
      id="about"
      className={`mx-auto grid max-w-7xl items-start gap-10 sm:gap-12 md:grid-cols-2 md:gap-14 lg:gap-16 ${SECTION_Y} ${SECTION_X}`}
    >
      <div className="mx-auto w-full max-w-md md:max-w-none lg:sticky lg:top-28">
        <img
          src={portrait}
          alt="Duarte Bastos"
          loading="lazy"
          width={1024}
          height={1280}
          className="aspect-[4/5] w-full rounded-2xl border border-white/5 object-cover object-top"
        />
      </div>
      <div className="min-w-0 space-y-6 sm:space-y-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">
          {t.about.kicker}
        </div>
        <h2 className={SECTION_TITLE}>
          {t.about.title1} <span className="text-brand-primary">{t.about.title2}</span>
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-white/60 text-pretty sm:text-lg">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>

        <div className="space-y-4 pt-2">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            {t.about.highlightsTitle}
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {t.about.highlights.map((item) => (
              <div
                key={item}
                className="glass-card flex min-h-24 flex-col items-center justify-center rounded-xl border border-white/5 px-3 py-4 text-center transition-all duration-300 hover:border-brand-accent/40 hover:bg-brand-accent/5 hover:shadow-glow"
              >
                <span className="font-display text-sm font-bold text-white md:text-base">
                  {item}
                </span>
              </div>
            ))}
            <div className="glass-card flex min-h-24 flex-col items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-accent/5 px-3 py-4 text-center transition-all duration-300 hover:border-brand-accent/40 hover:shadow-glow">
              <div className="font-display text-xl font-bold text-brand-accent md:text-2xl">
                {t.about.location.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-white/70">
                {t.about.location.label}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent/70">
            {t.about.valuesTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {t.about.values.map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand-accent/20 bg-brand-accent/5 px-5 py-2 text-sm font-medium text-brand-accent backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const { t } = useLang();
  return (
    <section id="story" className={`border-t border-white/5 bg-brand-surface/20 ${SECTION_Y} ${SECTION_X}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">
          {t.story.kicker}
        </div>
        <h2 className={`mb-10 max-w-2xl sm:mb-12 md:mb-16 ${SECTION_TITLE}`}>
          {t.story.title1} <span className="gradient-text">{t.story.title2}</span>.
        </h2>

        <ol className="relative ml-2 space-y-10 border-l border-white/10 sm:ml-3 sm:space-y-12">
          {t.story.items.map((item) => (
            <li key={`${item.year}-${item.title}`} className="relative pl-6 group sm:pl-8">
              <span className="absolute -left-[9px] top-2 size-4 rounded-full border-2 border-brand-primary bg-brand-bg transition-all group-hover:scale-125 group-hover:border-brand-accent" />
              <div className="grid grid-cols-1 items-start gap-2 sm:gap-3 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-x-8 lg:grid-cols-[12rem_minmax(0,1fr)]">
                <span className="font-mono text-xs leading-snug text-brand-accent sm:text-sm md:pt-1">
                  {item.year}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-2 font-display text-lg font-bold leading-snug sm:mb-3 sm:text-xl md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 text-pretty sm:text-base">{item.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectBrowserPreview({
  image,
  title,
  url,
  badge,
}: {
  image: string;
  title: string;
  url: string;
  badge?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0b10] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:border-brand-accent/35 group-hover:shadow-glow sm:rounded-2xl sm:p-3">
      <div className="mb-2 flex items-center gap-1.5 border-b border-white/5 pb-2 sm:mb-3 sm:gap-2 sm:pb-3">
        <span className="size-2 rounded-full bg-red-500/70 sm:size-2.5" />
        <span className="size-2 rounded-full bg-yellow-500/70 sm:size-2.5" />
        <span className="size-2 rounded-full bg-green-500/70 sm:size-2.5" />
        <div className="ml-1 min-w-0 flex-1 truncate rounded-md border border-white/5 bg-white/[0.04] px-2 py-1 font-mono text-[9px] text-white/35 sm:px-3 sm:py-1.5 sm:text-[10px]">
          {url}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-black">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0b10] via-[#0b0b10]/40 to-transparent" />
      </div>
      {badge && (
        <span className="absolute top-7 right-5 rounded-full border border-brand-accent/30 bg-brand-bg/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-accent backdrop-blur-sm">
          {badge}
        </span>
      )}
    </div>
  );
}

function Projects() {
  const { t } = useLang();
  return (
    <section id="work" className={`mx-auto max-w-7xl ${SECTION_Y} ${SECTION_X}`}>
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-6">
        <div>
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent sm:mb-4">
            {t.projects.kicker}
          </div>
          <h2 className={SECTION_TITLE}>
            {t.projects.title1} <span className="text-brand-primary">{t.projects.title2}</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-white/50 text-pretty sm:text-base md:text-left">
          {t.projects.intro}
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {t.projects.items.map((project, i) => {
          const browserPreview = PROJECT_BROWSER_PREVIEWS[i];
          return (
          <article key={project.title} className="group flex flex-col">
            {browserPreview ? (
              <ProjectBrowserPreview
                image={PROJECT_IMAGES[i]}
                title={project.title}
                url={browserPreview.url}
                badge={browserPreview.badge}
              />
            ) : (
              <div className="relative overflow-hidden rounded-2xl border border-white/5 transition-colors group-hover:border-brand-accent/30">
                <img
                  src={PROJECT_IMAGES[i]}
                  alt={project.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent" />
              </div>
            )}

            <div className="mt-5 flex flex-1 flex-col sm:mt-6">
              <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55 text-pretty sm:mt-3">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                  rel={project.liveUrl.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-bg transition-all hover:bg-white/90 sm:w-auto"
                >
                  {t.projects.viewProject}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={project.codeUrl}
                  target={project.codeUrl.startsWith("http") ? "_blank" : undefined}
                  rel={project.codeUrl.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-brand-accent/40 hover:bg-brand-accent/10 sm:w-auto"
                >
                  {t.projects.code}
                  <Github className="size-4" />
                </a>
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  const { t } = useLang();
  return (
    <section
      id="skills"
      className={`border-t border-white/5 bg-brand-surface/20 ${SECTION_Y} ${SECTION_X}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent sm:mb-4">
            {t.skills.kicker}
          </div>
          <h2 className={SECTION_TITLE}>
            {t.skills.title1} <span className="text-brand-primary">{t.skills.title2}</span>
          </h2>
        </div>

        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <h3 className="mb-3 flex items-center gap-2 font-display text-xl font-bold sm:gap-3 sm:text-2xl md:text-3xl">
              <Code2 className="size-6 shrink-0 text-brand-accent sm:size-7" />
              {t.skills.technicalTitle}
            </h3>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:mb-6">
              {t.skills.languagesLabel}
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
              {t.skills.tech.map((name) => (
                <div
                  key={name}
                  className="flex w-full min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/35 hover:bg-brand-accent/5 hover:shadow-glow sm:gap-2.5 sm:px-3 sm:py-3 md:px-4"
                >
                  <TechLanguageIcon name={name} />
                  <span className="truncate text-[11px] font-medium text-white/85 sm:text-xs md:text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="mb-3 flex items-center gap-2 font-display text-xl font-bold sm:mb-4 sm:gap-3 sm:text-2xl md:text-3xl">
              <Brain className="size-6 shrink-0 text-brand-accent sm:size-7" />
              {t.skills.otherTitle}
            </h3>
            <p className="mb-6 text-sm text-white/50 sm:mb-8">{t.skills.learningLabel}</p>
            <div className="space-y-4">
              {t.skills.learning.map((label, i) => {
                const Icon = LEARNING_ICONS[i];
                return (
                  <div
                    key={label}
                    className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-glow"
                  >
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 transition-transform duration-500 group-hover:scale-110">
                      <Icon
                        className="size-5 animate-float text-brand-accent"
                        style={{ animationDelay: `${i * 0.8}s` }}
                      />
                    </div>
                    <span className="font-display text-lg font-semibold">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sports() {
  const { t } = useLang();
  return (
    <section id="sports" className={`${SECTION_Y} ${SECTION_X}`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
          <div className="flex min-w-0 flex-col">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent sm:mb-4">
              {t.sports.kicker}
            </div>
            <h2 className={`mb-4 sm:mb-6 ${SECTION_TITLE}`}>
              {t.sports.title1} <span className="gradient-text">{t.sports.title2}</span>
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-white/60 text-pretty sm:mb-8 sm:text-base">
              {t.sports.intro}
            </p>
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/5 sm:max-w-md md:mx-0">
              <img
                src={sports1}
                alt="Duarte Bastos a jogar futebol"
                loading="lazy"
                width={768}
                height={1024}
                className="aspect-[3/4] w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col justify-center gap-4 sm:gap-5">
            {t.sports.categories.map((category, i) => {
              const Icon = SPORT_ICONS[i];
              return (
                <div
                  key={category.sport}
                  className="glass-card flex w-full flex-col items-center gap-3 rounded-2xl p-4 text-center transition-all hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-glow sm:gap-4 sm:p-6"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-brand-primary/30 bg-brand-primary/15 sm:size-12">
                      <Icon className="size-4 text-brand-accent sm:size-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold sm:text-xl md:text-2xl">{category.sport}</h3>
                  </div>
                  <ul className="mx-auto w-full max-w-sm space-y-1.5 sm:space-y-2">
                    {category.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-left text-xs leading-relaxed text-white/60 sm:gap-3 sm:text-sm md:text-base"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const socialLinks = [
    { icon: Github, label: "GitHub", href: t.contact.social.github },
    { icon: Instagram, label: "Instagram", href: t.contact.social.instagram },
  ];

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  const isComplete =
    trimmedName.length > 0 && trimmedEmail.length > 0 && trimmedMessage.length > 0 && emailIsValid;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error(t.contact.fillAllFields);
      return;
    }

    if (!emailIsValid) {
      toast.error(t.contact.invalidEmail);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      toast.success(t.contact.success);
    }, 700);
  }

  return (
    <section id="contact" className={`border-t border-white/5 ${SECTION_Y} ${SECTION_X}`}>
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent sm:mb-4">
            {t.contact.kicker}
          </div>
          <h2 className={`mb-4 sm:mb-6 ${SECTION_TITLE}`}>
            {t.contact.title1} <span className="gradient-text">{t.contact.title2}</span>
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-white/60 text-pretty sm:mb-10 sm:text-base">
            {t.contact.intro}
          </p>

          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:mb-4">
            {t.contact.linksLabel}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <SocialLink key={label} icon={Icon} label={label} href={href} />
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="glass-card space-y-4 rounded-2xl border border-white/5 p-4 sm:space-y-5 sm:p-6 md:p-8"
        >
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder={t.contact.name}
            aria-label={t.contact.name}
            className="w-full rounded-xl border border-white/5 bg-brand-surface/60 px-4 py-3.5 text-base text-white placeholder:text-white/40 transition-all focus:border-brand-accent/50 focus:outline-none sm:px-5 sm:py-4"
          />
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder={t.contact.email}
            aria-label={t.contact.email}
            className="w-full rounded-xl border border-white/5 bg-brand-surface/60 px-4 py-3.5 text-base text-white placeholder:text-white/40 transition-all focus:border-brand-accent/50 focus:outline-none sm:px-5 sm:py-4"
          />
          <textarea
            id="contact-message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder={t.contact.message}
            aria-label={t.contact.message}
            className="w-full resize-none rounded-xl border border-white/5 bg-brand-surface/60 px-4 py-3.5 text-base text-white placeholder:text-white/40 transition-all focus:border-brand-accent/50 focus:outline-none sm:px-5 sm:py-4"
          />
          <button
            type="submit"
            disabled={submitting || !isComplete}
            className="min-h-11 w-full rounded-xl bg-brand-primary py-3.5 font-bold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 sm:py-4"
          >
            {submitting ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}

function SocialLink({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Github;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glass-card group inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/80 transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:text-brand-accent hover:shadow-glow sm:w-auto"
    >
      <Icon className="size-4 transition-transform group-hover:scale-110" />
      {label}
    </a>
  );
}

function Footer() {
  const { t } = useLang();
  const socialLinks = [
    { icon: Github, label: "GitHub", href: t.contact.social.github },
    { icon: Instagram, label: "Instagram", href: t.contact.social.instagram },
  ];

  return (
    <footer className={`pb-8 sm:pb-10 ${SECTION_X} supports-[padding:max(0px)]:pb-[max(2rem,env(safe-area-inset-bottom))]`}>
      <div className="mx-auto max-w-7xl border-t border-white/5 pt-8 sm:pt-10">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-white sm:text-xl md:text-2xl">{t.footer.name}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-xs">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              {t.footer.socialLabel}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:text-brand-accent hover:shadow-glow"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
