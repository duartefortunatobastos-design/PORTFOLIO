import { useState, type ComponentType } from "react";
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
import { LangProvider, useLang } from "./i18n";
import { TechLanguageIcon } from "./TechIcons";
import { FadeIn, FadeInItem } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import portrait from "@/assets/portrait.png";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import projectPap from "@/assets/project-pap.png";
import projectPortfolio from "@/assets/project-portfolio.png";
import projectAsapol from "@/assets/project-asapol.png";
import sports1 from "@/assets/sports-1.png";
import { CookieConsent } from "@/components/legal/CookieConsent";

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function useSocialLinks() {
  const { t } = useLang();

  return [
    { icon: Github, label: "GitHub", href: t.contact.social.github },
    { icon: Instagram, label: "Instagram", href: t.contact.social.instagram },
    { icon: WhatsAppIcon, label: "WhatsApp", href: t.contact.social.whatsapp },
  ];
}

export function Portfolio() {
  return (
    <LangProvider>
      <div className="bg-brand-bg text-foreground font-body min-h-screen overflow-x-hidden">
        <Nav />
        <Hero />
        <About />
        <Story />
        <Projects />
        <Skills />
        <Sports />
        <Contact />
        <Footer />
        <CookieConsent />
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
  const { activeId, scrolled } = useScrollSpy();
  const NAV = [
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.story, href: "#story", id: "story" },
    { label: t.nav.work, href: "#work", id: "work" },
    { label: t.nav.skills, href: "#skills", id: "skills" },
    { label: t.nav.sports, href: "#sports", id: "sports" },
  ];
  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)] ${
        scrolled
          ? "border-white/10 bg-brand-bg/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-white/5 bg-brand-bg/70 backdrop-blur-md"
      }`}
    >
      <div className={`mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 sm:h-16 ${SECTION_X}`}>
        <a
          href="#top"
          className="font-display shrink-0 text-sm font-bold tracking-tight text-white transition-colors hover:text-brand-accent sm:text-base lg:text-lg"
        >
          Duarte Bastos
        </a>
        <div className="hidden items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-white/60 lg:flex xl:gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={activeId === item.id}
              className="nav-link transition-colors hover:text-brand-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            data-active={activeId === "contact"}
            className="rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 py-2 text-brand-accent transition-all duration-300 hover:scale-[1.03] hover:bg-brand-primary/20 hover:shadow-glow"
          >
            {t.nav.connect}
          </a>
          <LangToggle />
        </div>
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <LangToggle />
          <button
            className="min-h-11 min-w-11 px-2 text-[10px] uppercase tracking-widest text-white/70 transition-colors hover:text-brand-accent sm:text-xs"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden border-t border-white/5 bg-brand-bg/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-3 sm:px-6 sm:py-4">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`rounded-lg px-2 py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white/5 hover:text-brand-accent ${
                activeId === item.id ? "text-brand-accent" : "text-white/70"
              } ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
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
        <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-brand-primary/10 blur-[160px] animate-float-slow" />
        <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-brand-accent/8 blur-[140px] animate-float-slow [animation-delay:3s]" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/5 blur-[100px] animate-pulse-glow" />
      </div>

      <div className="mx-auto w-full max-w-7xl pb-20 pt-24 sm:pb-24 sm:pt-28 md:pb-28 md:pt-32">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10 lg:flex-row lg:items-center lg:gap-16 lg:text-left xl:gap-20">
          <FadeIn immediate delay={80} className="shrink-0">
            <img
              src={logo}
              alt="DB13 — Duarte Bastos logo"
              className="mx-auto h-36 w-auto max-w-[min(100%,20rem)] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-transform duration-700 hover:scale-[1.02] sm:h-44 md:h-52 lg:mx-0 lg:h-60 xl:h-72"
            />
          </FadeIn>

          <div className="w-full max-w-4xl">
            <FadeIn immediate delay={160}>
              <h1 className="font-display text-[clamp(2.5rem,10vw,7rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white text-shimmer">
                {t.hero.name}
              </h1>
            </FadeIn>

            <FadeIn immediate delay={240}>
              <p className="mt-5 font-display text-base font-medium leading-snug tracking-[-0.02em] text-white/90 sm:mt-6 sm:text-lg md:mt-8 md:text-2xl lg:text-[1.75rem]">
                <span className="block sm:inline">{t.hero.tagline1}</span>
                <span className="mx-0 my-2 hidden text-white/25 sm:mx-3 sm:inline sm:my-0">|</span>
                <span className="block text-white/55 sm:inline">{t.hero.tagline2}</span>
              </p>
            </FadeIn>

            <FadeIn immediate delay={320}>
              <div className="mx-auto mt-6 max-w-xl space-y-1 text-sm leading-relaxed text-white/45 sm:mt-8 sm:text-base md:text-lg lg:mx-0">
                <p>{t.hero.desc1}</p>
                <p>{t.hero.desc2}</p>
              </div>
            </FadeIn>

            <FadeIn immediate delay={400}>
              <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#work"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-wide text-brand-bg shadow-[0_4px_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.03] hover:bg-white/90 hover:shadow-[0_8px_32px_rgba(255,255,255,0.18)] sm:w-auto sm:px-8 sm:py-3.5"
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
            </FadeIn>
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
      className={`mx-auto grid max-w-7xl items-start gap-10 sm:gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14 lg:gap-16 ${SECTION_Y} ${SECTION_X}`}
    >
      <FadeIn className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none md:sticky md:top-28 md:self-start">
        <div className="group relative overflow-hidden rounded-2xl border border-white/5">
          <img
            src={portrait}
            alt="Duarte Bastos"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </FadeIn>

      <div className="min-w-0 space-y-8">
        <SectionHeader
          kicker={t.about.kicker}
          title={
            <>
              {t.about.title1} <span className="text-brand-primary">{t.about.title2}</span>
            </>
          }
          className="!mb-0"
        />

        <FadeIn delay={80}>
          <p className="max-w-2xl text-[1.05rem] font-medium leading-relaxed text-white/82 text-pretty sm:text-lg sm:leading-[1.75]">
            {t.about.lead}
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {t.about.blocks.map((block, i) => (
            <FadeIn key={block.title} delay={120 + i * 80}>
              <article className="glass-card h-full rounded-2xl border border-white/5 p-5 sm:p-6">
                <h3 className="mb-3 font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                  {block.title}
                </h3>
                <p className="text-sm leading-[1.8] text-white/58 text-pretty sm:text-[0.95rem]">
                  {block.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={280}>
          <div className="rounded-2xl border border-brand-accent/15 bg-brand-accent/[0.04] px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-sm leading-relaxed text-white/72 text-pretty sm:text-[0.98rem] sm:leading-[1.75]">
              {t.about.closing}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={360}>
          <div className="space-y-4 border-t border-white/5 pt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              {t.about.highlightsTitle}
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {t.about.highlights.map((item, i) => (
                <FadeInItem key={item} index={i} baseDelay={0} step={70}>
                  <div className="glass-card card-interactive flex h-24 flex-col items-center justify-center rounded-xl border border-white/5 px-3 py-3 text-center sm:h-[6.25rem]">
                    <span className="font-display text-sm font-bold text-white md:text-base">
                      {item}
                    </span>
                  </div>
                </FadeInItem>
              ))}
              <FadeInItem index={t.about.highlights.length} baseDelay={0} step={70}>
                <div className="glass-card card-interactive flex h-24 flex-col items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-accent/5 px-3 py-3 text-center sm:h-[6.25rem]">
                  <span className="font-display text-sm font-bold text-brand-accent md:text-base">
                    {t.about.location.value}
                  </span>
                  <span className="mt-1 max-w-[8rem] text-[10px] leading-tight uppercase tracking-widest text-white/70">
                    {t.about.location.label}
                  </span>
                </div>
              </FadeInItem>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={420}>
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent/70">
              {t.about.valuesTitle}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {t.about.values.map((item, i) => (
                <FadeInItem key={item} index={i} baseDelay={0} step={60}>
                  <span className="rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-2 text-sm font-medium text-brand-accent backdrop-blur-sm transition-all duration-300 hover:border-brand-accent/40 hover:bg-brand-accent/10">
                    {item}
                  </span>
                </FadeInItem>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Story() {
  const { t } = useLang();
  return (
    <section id="story" className={`border-t border-white/5 bg-brand-surface/20 ${SECTION_Y} ${SECTION_X}`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker={t.story.kicker}
          title={
            <>
              {t.story.title1} <span className="gradient-text">{t.story.title2}</span>.
            </>
          }
          className="max-w-2xl"
        />

        <ol className="relative ml-2 space-y-10 border-l border-white/10 sm:ml-3 sm:space-y-12">
          {t.story.items.map((item, i) => (
            <FadeInItem key={`${item.year}-${item.title}`} index={i} baseDelay={80} step={100}>
              <li className="relative pl-6 group sm:pl-8">
                <span className="absolute -left-[9px] top-2 size-4 rounded-full border-2 border-brand-primary bg-brand-bg shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:scale-125 group-hover:border-brand-accent group-hover:shadow-glow" />
                <div className="grid grid-cols-1 items-start gap-2 rounded-2xl border border-transparent p-4 transition-all duration-500 group-hover:border-white/5 group-hover:bg-white/[0.02] sm:gap-3 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-x-8 lg:grid-cols-[12rem_minmax(0,1fr)]">
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
            </FadeInItem>
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
        <SectionHeader
          kicker={t.projects.kicker}
          title={
            <>
              {t.projects.title1} <span className="text-brand-primary">{t.projects.title2}</span>
            </>
          }
          className="!mb-0"
        />
        <FadeIn delay={160} className="md:max-w-md">
          <p className="text-sm leading-relaxed text-white/50 text-pretty sm:text-base md:text-left">
            {t.projects.intro}
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {t.projects.items.map((project, i) => {
          const browserPreview = PROJECT_BROWSER_PREVIEWS[i];
          return (
          <FadeInItem key={project.title} index={i} baseDelay={80} step={100}>
          <article className="group flex flex-col">
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
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-bg transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] sm:w-auto"
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
          </FadeInItem>
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
        <SectionHeader
          kicker={t.skills.kicker}
          title={
            <>
              {t.skills.title1} <span className="text-brand-primary">{t.skills.title2}</span>
            </>
          }
        />

        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="min-w-0">
              <h3 className="mb-3 flex items-center gap-2 font-display text-xl font-bold sm:gap-3 sm:text-2xl md:text-3xl">
                <Code2 className="size-6 shrink-0 text-brand-accent sm:size-7" />
                {t.skills.technicalTitle}
              </h3>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:mb-6">
                {t.skills.languagesLabel}
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                {t.skills.tech.map((name, i) => (
                  <FadeInItem key={name} index={i} baseDelay={0} step={60}>
                    <div className="card-interactive flex w-full min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2.5 sm:gap-2.5 sm:px-3 sm:py-3 md:px-4">
                      <TechLanguageIcon name={name} />
                      <span className="truncate text-[11px] font-medium text-white/85 sm:text-xs md:text-sm">
                        {name}
                      </span>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
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
                    <FadeInItem key={label} index={i} baseDelay={0} step={100}>
                      <div className="glass-card card-interactive group flex items-center gap-4 rounded-2xl p-5">
                        <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 transition-transform duration-500 group-hover:scale-110">
                          <Icon
                            className="size-5 animate-float text-brand-accent"
                            style={{ animationDelay: `${i * 0.8}s` }}
                          />
                        </div>
                        <span className="font-display text-lg font-semibold">{label}</span>
                      </div>
                    </FadeInItem>
                  );
                })}
              </div>
            </div>
          </FadeIn>
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
        <div className="grid items-start gap-10 sm:gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
          <FadeIn className="flex min-w-0 flex-col">
            <SectionHeader
              kicker={t.sports.kicker}
              title={
                <>
                  {t.sports.title1} <span className="gradient-text">{t.sports.title2}</span>
                </>
              }
              description={t.sports.intro}
              className="!mb-6 sm:!mb-8"
            />
            <FadeIn delay={200}>
              <div className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/5 sm:max-w-md md:mx-0">
                <img
                  src={sports1}
                  alt="Duarte Bastos a jogar futebol"
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </FadeIn>
          </FadeIn>

          <div className="flex w-full min-w-0 flex-col gap-4 sm:gap-5 md:mt-36 lg:mt-44">
            {t.sports.categories.map((category, i) => {
              const Icon = SPORT_ICONS[i];
              return (
                <FadeInItem key={category.sport} index={i} baseDelay={80} step={100}>
                <div
                  className="glass-card card-interactive flex w-full flex-col items-center gap-3 rounded-2xl p-4 text-center sm:gap-4 sm:p-6"
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
                </FadeInItem>
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
  const socialLinks = useSocialLinks();

  return (
    <section id="contact" className={`border-t border-white/5 ${SECTION_Y} ${SECTION_X}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker={t.contact.kicker}
          title={
            <>
              {t.contact.title1} <span className="gradient-text">{t.contact.title2}</span>
            </>
          }
          description={t.contact.intro}
          className="!mb-8 sm:!mb-10"
        />

        <FadeIn delay={240}>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:mb-4">
            {t.contact.linksLabel}
          </p>
        </FadeIn>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {socialLinks.map(({ icon: Icon, label, href }, i) => (
            <FadeInItem key={label} index={i} baseDelay={320} step={100}>
              <SocialLink icon={Icon} label={label} href={href} />
            </FadeInItem>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  icon: Icon,
  label,
  href,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glass-card card-interactive group inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/80 hover:text-brand-accent sm:w-auto"
    >
      <Icon className="size-4 transition-transform group-hover:scale-110" />
      {label}
    </a>
  );
}

function Footer() {
  const { t } = useLang();
  const socialLinks = useSocialLinks();

  return (
    <footer className={`pb-8 sm:pb-10 ${SECTION_X} supports-[padding:max(0px)]:pb-[max(2rem,env(safe-area-inset-bottom))]`}>
      <FadeIn className="mx-auto max-w-7xl border-t border-white/5 pt-8 sm:pt-10">
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
              {socialLinks.map(({ icon: Icon, label, href }, i) => (
                <FadeInItem key={label} index={i} baseDelay={80} step={80}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:text-brand-accent hover:shadow-glow"
                  >
                    <Icon className="size-4" />
                  </a>
                </FadeInItem>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
