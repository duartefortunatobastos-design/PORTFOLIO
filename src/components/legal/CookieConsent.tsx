import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getCookieConsent, setCookieConsent } from "@/lib/cookie-consent";
import { useLang } from "@/components/portfolio/i18n";

const BANNER_BODY_PADDING = "calc(11.5rem + env(safe-area-inset-bottom, 0px))";

export function CookieConsent() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousPadding = document.body.style.paddingBottom;
    document.body.style.paddingBottom = BANNER_BODY_PADDING;

    return () => {
      document.body.style.paddingBottom = previousPadding;
    };
  }, [visible]);

  if (!visible) return null;

  function hide(status: "accepted" | "dismissed") {
    setCookieConsent(status);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 supports-[padding:max(0px)]:pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6"
    >
      <div className="pointer-events-auto mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl border border-white/10 bg-[#1a1a22]/95 p-5 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6">
        <div className="min-w-0 space-y-2">
          <h2 id="cookie-consent-title" className="font-display text-lg font-bold text-white sm:text-xl">
            {t.cookies.title}
          </h2>
          <p id="cookie-consent-description" className="text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
            {t.cookies.descriptionBefore}{" "}
            <Link to="/privacy-policy" className="underline underline-offset-2 transition-colors hover:text-white">
              {t.cookies.privacyLink}
            </Link>{" "}
            {t.cookies.descriptionMiddle}{" "}
            <Link to="/cookie-policy" className="underline underline-offset-2 transition-colors hover:text-white">
              {t.cookies.cookieLink}
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => hide("dismissed")}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/45 hover:bg-white/5"
          >
            {t.cookies.close}
          </button>
          <button
            type="button"
            onClick={() => hide("accepted")}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-bg transition-colors hover:bg-white/90"
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
