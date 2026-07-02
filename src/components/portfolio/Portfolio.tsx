import { useState, type FormEvent } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Code2,
  Trophy,
  Zap,
  Timer,
  Dumbbell,
  Medal,
  Target,
  Rocket,
  Users,
  Brain,
  MessagesSquare,
  Languages,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { LangProvider, useLang } from "./i18n";
import portrait from "@/assets/portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import projectApex from "@/assets/project-apex.jpg";
import projectVolt from "@/assets/project-volt.jpg";
import projectPulse from "@/assets/project-pulse.jpg";
import sports1 from "@/assets/sports-1.jpg";

const PROJECT_IMAGES = [projectApex, projectVolt, projectPulse];

const SOFT_ICONS = [Brain, Target, Users, Rocket, MessagesSquare, Zap];
const ACHIEVEMENT_ICONS = [Medal, Trophy, Timer, Dumbbell];

export function Portfolio() {
  return (
    <LangProvider>
      <div className="bg-brand-bg text-foreground font-body min-h-screen">
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
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="font-display font-bold text-xl tracking-tighter shrink-0">
          J.LOGAN<span className="text-brand-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/60">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand-accent transition-colors">
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
        <div className="md:hidden flex items-center gap-3">
          <LangToggle />
          <button
            className="text-white/70 text-xs uppercase tracking-widest"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-brand-bg/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm uppercase tracking-widest">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-brand-accent"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="text-brand-accent">
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
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden pt-24"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/60 via-brand-bg/70 to-brand-bg -z-10" />
      <div className="absolute top-1/4 -right-20 w-[28rem] h-[28rem] bg-brand-primary/25 rounded-full blur-[140px] -z-10 animate-float" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-accent/15 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl space-y-6 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface/70 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-brand-accent">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
          </span>
          {t.hero.badge}
        </div>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter">
          {t.hero.title1} <span className="text-white/20">{t.hero.title2}</span>
          <br />
          <span className="gradient-text">{t.hero.title3}</span>
        </h1>
        <p className="max-w-xl text-lg text-white/60 leading-relaxed">{t.hero.subtitle}</p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#story"
            className="px-8 py-4 bg-white text-brand-bg font-bold rounded-sm hover:bg-brand-accent transition-all inline-flex items-center gap-2"
          >
            {t.hero.cta1} <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#work"
            className="px-8 py-4 border border-white/20 font-bold rounded-sm hover:bg-white/5 transition-all"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/30">
        {t.hero.scroll}
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-32 px-6 md:px-24 grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
      <div className="relative">
        <img
          src={portrait}
          alt="Portrait"
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full aspect-[4/5] object-cover rounded-2xl border border-white/5"
        />
        <div className="absolute -bottom-4 -right-4 hidden md:block glass-card rounded-xl px-4 py-3">
          <div className="text-brand-accent font-mono text-xs">// v.2024</div>
        </div>
      </div>
      <div className="space-y-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">{t.about.kicker}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          {t.about.title1} <span className="text-brand-primary">{t.about.title2}</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">{t.about.p1}</p>
        <p className="text-white/60 leading-relaxed">{t.about.p2}</p>
        <div className="grid grid-cols-2 gap-4">
          <StatCard value="10.42s" label={t.about.stats.pb} accent="accent" />
          <StatCard value="500+" label={t.about.stats.contrib} accent="primary" />
          <StatCard value="12+" label={t.about.stats.projects} accent="primary" />
          <StatCard value="6" label={t.about.stats.years} accent="accent" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, accent }: { value: string; label: string; accent: "primary" | "accent" }) {
  return (
    <div className="glass-card rounded-xl p-5">
      <div
        className={`font-display text-2xl md:text-3xl font-bold mb-1 ${
          accent === "primary" ? "text-brand-primary" : "text-brand-accent"
        }`}
      >
        {value}
      </div>
      <div className="text-[10px] text-white/50 uppercase tracking-widest">{label}</div>
    </div>
  );
}

function Story() {
  const { t } = useLang();
  return (
    <section id="story" className="py-32 px-6 md:px-24 border-t border-white/5 bg-brand-surface/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">{t.story.kicker}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 leading-tight max-w-2xl">
          {t.story.title1} <span className="gradient-text">{t.story.title2}</span>.
        </h2>

        <ol className="relative border-l border-white/10 ml-3 space-y-12">
          {t.story.items.map((item) => (
            <li key={item.year} className="pl-8 relative group">
              <span className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-brand-bg border-2 border-brand-primary group-hover:border-brand-accent group-hover:scale-125 transition-all" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <span className="font-mono text-brand-accent text-sm">{item.year}</span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 max-w-2xl leading-relaxed">{item.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Projects() {
  const { t } = useLang();
  return (
    <section id="work" className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">{t.projects.kicker}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t.projects.title1} <span className="text-white/20">{t.projects.title2}</span>
          </h2>
        </div>
        <p className="text-white/50 max-w-md">{t.projects.intro}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {t.projects.items.map((p, i) => (
          <a key={p.title} href="#" className="group relative block">
            <div className="relative overflow-hidden rounded-xl border border-white/5 group-hover:border-brand-accent/40 transition-all">
              <img
                src={PROJECT_IMAGES[i]}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={800}
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent opacity-70" />
            </div>
            <div className="mt-6 flex justify-between items-start gap-4">
              <div className="min-w-0">
                <h3 className="text-xl font-bold mb-2 tracking-tight truncate">{p.title}</h3>
                <p className="text-white/50 text-sm mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] border border-white/10 rounded-md text-white/60 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 size-11 border border-white/10 rounded-full grid place-items-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-brand-bg transition-all">
                <ArrowUpRight className="size-5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const { t } = useLang();
  const levels = [95, 90, 88, 82, 80, 78];
  return (
    <section id="skills" className="py-32 px-6 md:px-24 border-t border-white/5 bg-brand-surface/20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">{t.skills.kicker1}</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
            <Code2 className="text-brand-primary" /> {t.skills.title1}
          </h2>
          <div className="space-y-6">
            {t.skills.tech.map((name, i) => (
              <div key={name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{name}</span>
                  <span className="text-white/40 font-mono">{levels[i]}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full transition-all duration-1000"
                    style={{ width: `${levels[i]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">{t.skills.kicker2}</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
            <Brain className="text-brand-primary" /> {t.skills.title2}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {t.skills.soft.map((label, i) => {
              const Icon = SOFT_ICONS[i];
              return (
                <div
                  key={label}
                  className="glass-card rounded-xl p-5 flex flex-col gap-3 hover:border-brand-accent/40 hover:-translate-y-1 transition-all"
                >
                  <Icon className="size-6 text-brand-accent" />
                  <span className="font-medium">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Sports() {
  const { t } = useLang();
  return (
    <section id="sports" className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">{t.sports.kicker}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t.sports.title1} <span className="gradient-text">{t.sports.title2}</span>.
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">{t.sports.intro}</p>
          <div className="rounded-2xl overflow-hidden border border-white/5">
            <img
              src={sports1}
              alt="Sprinter"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {t.sports.items.map((item, i) => {
            const Icon = ACHIEVEMENT_ICONS[i];
            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:border-brand-accent/40 transition-all flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="size-11 rounded-xl bg-brand-primary/15 border border-brand-primary/30 grid place-items-center">
                    <Icon className="size-5 text-brand-accent" />
                  </div>
                  <span className="font-mono text-xs text-white/40">{item.year}</span>
                </div>
                <h3 className="font-display text-lg font-bold leading-tight">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success(t.contact.success);
    }, 700);
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="max-w-md">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">{t.contact.kicker}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t.contact.title1} <span className="gradient-text">{t.contact.title2}</span>
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">{t.contact.intro}</p>
          <div className="flex gap-6">
            <SocialLink icon={Github} label="GitHub" href="https://github.com" />
            <SocialLink icon={Linkedin} label="LinkedIn" href="https://linkedin.com" />
            <SocialLink icon={Instagram} label="Instagram" href="https://instagram.com" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder={t.contact.name}
            className="w-full px-6 py-4 bg-brand-surface/60 border border-white/5 rounded-md focus:border-brand-accent/50 focus:outline-none transition-all"
          />
          <input
            name="email"
            type="email"
            required
            placeholder={t.contact.email}
            className="w-full px-6 py-4 bg-brand-surface/60 border border-white/5 rounded-md focus:border-brand-accent/50 focus:outline-none transition-all"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder={t.contact.message}
            className="w-full px-6 py-4 bg-brand-surface/60 border border-white/5 rounded-md focus:border-brand-accent/50 focus:outline-none transition-all resize-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-brand-primary text-white font-bold rounded-md hover:brightness-110 disabled:opacity-60 transition-all"
          >
            {submitting ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}

function SocialLink({ icon: Icon, label, href }: { icon: typeof Github; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center gap-2 text-sm font-bold text-white/70 hover:text-brand-accent transition-colors"
    >
      <Icon className="size-4" />
      <span className="border-b border-brand-accent/60 group-hover:border-brand-accent pb-0.5">{label}</span>
    </a>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="px-6 md:px-24 pb-10">
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-white/30">
        <div>© {new Date().getFullYear()} {t.footer.rights}</div>
        <div>{t.footer.built}</div>
      </div>
    </footer>
  );
}
