import { Link } from "@tanstack/react-router";
import { ArrowLeft, Languages } from "lucide-react";
import { type ReactNode } from "react";
import { LangProvider, useLang } from "@/components/portfolio/i18n";
import { CookieConsent } from "./CookieConsent";

function LegalPageShell({ children }: { children: ReactNode }) {
  const { lang, toggle, t } = useLang();

  return (
    <div className="bg-brand-bg text-foreground font-body min-h-screen">
      <header className="border-b border-white/5 bg-brand-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-brand-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t.legal.backHome}
          </Link>
          <button
            type="button"
            onClick={toggle}
            aria-label={t.toggle}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-brand-surface/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors hover:border-brand-accent/50 hover:text-brand-accent"
          >
            <Languages className="size-3.5" aria-hidden="true" />
            <span>{lang === "pt" ? "PT" : "EN"}</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-accent">{t.toggle}</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">{children}</main>

      <CookieConsent />
    </div>
  );
}

export function LegalPageLayout({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <LegalPageShell>{children}</LegalPageShell>
    </LangProvider>
  );
}
