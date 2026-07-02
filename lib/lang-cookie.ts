const COOKIE_NAME = "nf_lang";
const VALID_LANGS = ["pl", "en", "de", "es"];
const MAX_AGE_DAYS = 365;

export function getStoredLang(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  const value = match ? decodeURIComponent(match[1]) : null;
  return value && VALID_LANGS.includes(value) ? value : null;
}

export function setStoredLang(lang: string): void {
  if (typeof document === "undefined" || !VALID_LANGS.includes(lang)) return;
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(lang)}; path=/; max-age=${MAX_AGE_DAYS * 24 * 60 * 60}; SameSite=Lax`;
}
