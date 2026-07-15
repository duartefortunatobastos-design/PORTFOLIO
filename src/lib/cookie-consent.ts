const STORAGE_KEY = "portfolio-cookie-consent";

export type CookieConsentStatus = "accepted" | "dismissed";

export function getCookieConsent(): CookieConsentStatus | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(STORAGE_KEY);
  if (value === "accepted" || value === "dismissed") return value;
  return null;
}

export function setCookieConsent(status: CookieConsentStatus) {
  localStorage.setItem(STORAGE_KEY, status);
}
