import { Link, createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { useLang } from "@/components/portfolio/i18n";

function PrivacyPolicyContent() {
  const { t } = useLang();
  const privacy = t.legal.privacy;

  return (
    <>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">
        {privacy.kicker}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {privacy.title}
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base">
        {privacy.subtitle}
      </p>

      <dl className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm sm:grid-cols-3 sm:gap-4 sm:p-5">
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            {privacy.meta.domain.label}
          </dt>
          <dd className="mt-1 font-medium text-white/85">{privacy.meta.domain.value}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            {privacy.meta.lastUpdated.label}
          </dt>
          <dd className="mt-1 font-medium text-white/85">{privacy.meta.lastUpdated.value}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            {privacy.meta.owner.label}
          </dt>
          <dd className="mt-1 font-medium text-white/85">{privacy.meta.owner.value}</dd>
        </div>
      </dl>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/65 sm:text-base">
        {privacy.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-semibold text-white">{section.title}</h2>

            {section.intro && <p className="mt-3">{section.intro}</p>}

            {section.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-brand-accent">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {section.body && <p className="mt-3">{section.body}</p>}

            {(section.bodyBeforeEmail || section.bodyAfterEmail) && (
              <p className="mt-3">
                {section.bodyBeforeEmail}
                <a
                  href={`mailto:${privacy.contactEmail}`}
                  className="text-white underline underline-offset-2 transition-colors hover:text-brand-accent"
                >
                  {privacy.contactEmail}
                </a>
                {section.bodyAfterEmail}
              </p>
            )}

            {(section.cookiePolicyBefore || section.cookiePolicyAfter) && (
              <p className="mt-3">
                {section.cookiePolicyBefore}
                <Link
                  to="/cookie-policy"
                  className="text-white underline underline-offset-2 transition-colors hover:text-brand-accent"
                >
                  {t.cookies.cookieLink}
                </Link>
                {section.cookiePolicyAfter}
              </p>
            )}
          </section>
        ))}

        <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/55">
          {privacy.disclaimer}
        </p>
      </div>
    </>
  );
}

function PrivacyPolicyPage() {
  return (
    <LegalPageLayout>
      <PrivacyPolicyContent />
    </LegalPageLayout>
  );
}

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [{ title: "Política de Privacidade — Duarte Bastos" }],
  }),
});
