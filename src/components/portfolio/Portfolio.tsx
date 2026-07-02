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
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import portrait from "@/assets/portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import projectApex from "@/assets/project-apex.jpg";
import projectVolt from "@/assets/project-volt.jpg";
import projectPulse from "@/assets/project-pulse.jpg";
import sports1 from "@/assets/sports-1.jpg";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Sports", href: "#sports" },
];

const TIMELINE = [
  {
    year: "2016",
    title: "First Line of Code",
    body: "Wrote my first HTML page at 12. Fell in love with the idea that logic could produce something visible.",
  },
  {
    year: "2018",
    title: "Track & Field Debut",
    body: "Joined my school's sprint team. Learned that improvement is measured in hundredths of a second — and thousands of reps.",
  },
  {
    year: "2020",
    title: "Regional Sprint Champion",
    body: "Placed 1st in the 100m at the regional championship. Discovered the parallel between race prep and shipping software.",
  },
  {
    year: "2022",
    title: "First Full-Stack Project Shipped",
    body: "Launched a PHP + JS platform used by my athletics club. Real users, real feedback, real bugs.",
  },
  {
    year: "2024",
    title: "Building at the Intersection",
    body: "Now focused on high-performance web apps for the sports & wellness space. Two identities, one obsession: speed.",
  },
];

const PROJECTS = [
  {
    title: "Apex Athlete Dashboard",
    description:
      "Custom telemetry platform for tracking sprint metrics, split times, and long-term progression trends.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    image: projectApex,
    href: "#",
  },
  {
    title: "Volt Commerce",
    description:
      "High-conversion e-commerce experience for a specialized track & field gear boutique.",
    tech: ["PHP", "JavaScript", "MySQL", "Tailwind"],
    image: projectVolt,
    href: "#",
  },
  {
    title: "Pulse Chat",
    description:
      "Real-time team messaging app with typing indicators, presence, and file sharing.",
    tech: ["React", "Node.js", "WebSockets"],
    image: projectPulse,
    href: "#",
  },
];

const TECH_SKILLS = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React / Next.js", level: 88 },
  { name: "PHP", level: 82 },
  { name: "Node.js", level: 80 },
  { name: "SQL / PostgreSQL", level: 78 },
];

const SOFT_SKILLS = [
  { icon: Brain, label: "Discipline" },
  { icon: Target, label: "Focus" },
  { icon: Users, label: "Teamwork" },
  { icon: Rocket, label: "Resilience" },
  { icon: MessagesSquare, label: "Communication" },
  { icon: Zap, label: "Adaptability" },
];

const ACHIEVEMENTS = [
  {
    icon: Medal,
    title: "Regional 100m Champion",
    year: "2020",
    body: "Gold medal in the U18 regional championship with a 10.98s personal best.",
  },
  {
    icon: Trophy,
    title: "National Finalist — 4x100m Relay",
    year: "2021",
    body: "Anchored the relay team to a 5th place national finish.",
  },
  {
    icon: Timer,
    title: "Personal Best — 100m",
    year: "2023",
    body: "10.42s wind-legal. Result of two years of biomechanics and strength focus.",
  },
  {
    icon: Dumbbell,
    title: "Strength Milestone",
    year: "2024",
    body: "Trap bar deadlift at 2.2× body weight. Off-season strength foundation.",
  },
];

export function Portfolio() {
  return (
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
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-xl tracking-tighter">
          J.LOGAN<span className="text-brand-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/60">
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
            Connect
          </a>
        </div>
        <button
          className="md:hidden text-white/70 text-xs uppercase tracking-widest"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
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
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-brand-accent"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
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
      <div
        className="absolute top-1/4 -right-20 w-[28rem] h-[28rem] bg-brand-primary/25 rounded-full blur-[140px] -z-10 animate-float"
      />
      <div
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-accent/15 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-4xl space-y-6 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface/70 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-brand-accent">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
          </span>
          Available for projects
        </div>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter">
          BUILDING <span className="text-white/20">SPEED</span>
          <br />
          <span className="gradient-text">SHIPPING CODE</span>
        </h1>
        <p className="max-w-xl text-lg text-white/60 leading-relaxed">
          Full-stack developer by day, competitive sprinter by dawn. I bridge
          the gap between high-performance athletics and resilient software
          architecture.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#story"
            className="px-8 py-4 bg-white text-brand-bg font-bold rounded-sm hover:bg-brand-accent transition-all inline-flex items-center gap-2"
          >
            Explore My Journey <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#work"
            className="px-8 py-4 border border-white/20 font-bold rounded-sm hover:bg-white/5 transition-all"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/30">
        Scroll ↓
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-24 grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
    >
      <div className="relative">
        <img
          src={portrait}
          alt="Portrait of J. Logan"
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
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">
          About Me
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          The Mindset of a{" "}
          <span className="text-brand-primary">Dual Athlete</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          I&apos;m a young developer and competitive sprinter. My belief is
          simple: the discipline of the track directly informs the quality of
          my code. Whether I&apos;m optimizing a React component or shaving
          milliseconds off a 100m sprint, the objective is the same — peak
          efficiency.
        </p>
        <p className="text-white/60 leading-relaxed">
          I approach every project like a season: build strong fundamentals,
          measure everything, iterate honestly. I&apos;m driven by clean
          architecture, fast interfaces, and personal bests.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <StatCard value="10.42s" label="100m Personal Best" accent="accent" />
          <StatCard value="500+" label="Github Contributions" accent="primary" />
          <StatCard value="12+" label="Projects Shipped" accent="primary" />
          <StatCard value="6 yrs" label="On the Track" accent="accent" />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: "primary" | "accent";
}) {
  return (
    <div className="glass-card rounded-xl p-5">
      <div
        className={`font-display text-2xl md:text-3xl font-bold mb-1 ${
          accent === "primary" ? "text-brand-primary" : "text-brand-accent"
        }`}
      >
        {value}
      </div>
      <div className="text-[10px] text-white/50 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section
      id="story"
      className="py-32 px-6 md:px-24 border-t border-white/5 bg-brand-surface/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">
          My Story
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 leading-tight max-w-2xl">
          A timeline forged by{" "}
          <span className="gradient-text">code and cadence</span>.
        </h2>

        <ol className="relative border-l border-white/10 ml-3 space-y-12">
          {TIMELINE.map((item, i) => (
            <li key={item.year} className="pl-8 relative group">
              <span className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-brand-bg border-2 border-brand-primary group-hover:border-brand-accent group-hover:scale-125 transition-all" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <span className="font-mono text-brand-accent text-sm">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 max-w-2xl leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
              {i === TIMELINE.length - 1 && (
                <span className="absolute -left-[13px] -bottom-6 text-brand-accent text-xs">
                  ●
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">
            Projects
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Selected <span className="text-white/20">Works</span>
          </h2>
        </div>
        <p className="text-white/50 max-w-md">
          A slice of things I&apos;ve built recently — from performance
          dashboards to commerce platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="group relative block"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/5 group-hover:border-brand-accent/40 transition-all">
              <img
                src={p.image}
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
                <h3 className="text-xl font-bold mb-2 tracking-tight truncate">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] border border-white/10 rounded-md text-white/60 font-mono"
                    >
                      {t}
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
  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-24 border-t border-white/5 bg-brand-surface/20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">
            Technical Skills
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
            <Code2 className="text-brand-primary" /> Stack &amp; Tooling
          </h2>
          <div className="space-y-6">
            {TECH_SKILLS.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-white/40 font-mono">{s.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full transition-all duration-1000"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">
            Soft Skills
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
            <Brain className="text-brand-primary" /> Mindset
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SOFT_SKILLS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass-card rounded-xl p-5 flex flex-col gap-3 hover:border-brand-accent/40 hover:-translate-y-1 transition-all"
              >
                <Icon className="size-6 text-brand-accent" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Sports() {
  return (
    <section id="sports" className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">
            Sports &amp; Achievements
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The track built the{" "}
            <span className="gradient-text">engineer</span>.
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Sprinting taught me that milliseconds matter — in a race, and in a
            render loop. Here are a few marks I&apos;m proud of, and the sports
            that shape how I work.
          </p>
          <div className="rounded-2xl overflow-hidden border border-white/5">
            <img
              src={sports1}
              alt="Sprinter in starting blocks at sunrise"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map(({ icon: Icon, title, year, body }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:border-brand-accent/40 transition-all flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="size-11 rounded-xl bg-brand-primary/15 border border-brand-primary/30 grid place-items-center">
                  <Icon className="size-5 text-brand-accent" />
                </div>
                <span className="font-mono text-xs text-white/40">{year}</span>
              </div>
              <h3 className="font-display text-lg font-bold leading-tight">
                {title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — I'll get back to you shortly.");
    }, 700);
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-24 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="max-w-md">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">
            Contact
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let&apos;s create something{" "}
            <span className="gradient-text">fast.</span>
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Available for freelance development, sports-tech collaborations, or
            just a good conversation about training and code.
          </p>
          <div className="flex gap-6">
            <SocialLink icon={Github} label="GitHub" href="https://github.com" />
            <SocialLink
              icon={Linkedin}
              label="LinkedIn"
              href="https://linkedin.com"
            />
            <SocialLink
              icon={Instagram}
              label="Instagram"
              href="https://instagram.com"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-brand-surface/60 border border-white/5 rounded-md focus:border-brand-accent/50 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full px-6 py-4 bg-brand-surface/60 border border-white/5 rounded-md focus:border-brand-accent/50 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-6 py-4 bg-brand-surface/60 border border-white/5 rounded-md focus:border-brand-accent/50 focus:outline-none transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-brand-primary text-white font-bold rounded-md hover:brightness-110 disabled:opacity-60 transition-all"
          >
            {submitting ? "Sending..." : "Send Message"}
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
      className="group flex items-center gap-2 text-sm font-bold text-white/70 hover:text-brand-accent transition-colors"
    >
      <Icon className="size-4" />
      <span className="border-b border-brand-accent/60 group-hover:border-brand-accent pb-0.5">
        {label}
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-24 pb-10">
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-white/30">
        <div>© {new Date().getFullYear()} J. Logan — Developer & Athlete</div>
        <div>Built with speed &amp; precision</div>
      </div>
    </footer>
  );
}
