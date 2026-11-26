import { es, type Dict } from "./es";
import { en } from "./en";
import { zh } from "./zh";

export type Locale = "es" | "en" | "zh";

export const LOCALES: Locale[] = ["es", "en", "zh"];

export const LOCALE_LABEL: Record<Locale, string> = { es: "ES", en: "EN", zh: "中文" };
export const LOCALE_HREFLANG: Record<Locale, string> = { es: "es", en: "en", zh: "zh-Hans" };

// Cada idioma vive en su propia URL: "/" (es), "/en/" y "/zh/".
function detectLocale(): Locale {
  const segment = window.location.pathname.split("/")[1];
  return segment === "en" || segment === "zh" ? segment : "es";
}

export const locale: Locale = detectLocale();

export const t: Dict = { es, en, zh }[locale];

// WhatsApp está bloqueado en China: la versión china usa email para todo.
export const usesWhatsApp = locale !== "zh";

export const localeHome = (l: Locale) => (l === "es" ? "/" : `/${l}/`);

// Guarda la elección del visitante para que middleware.ts no lo vuelva a redirigir por país.
export function switchLocale(l: Locale) {
  document.cookie = `lang=${l}; path=/; max-age=31536000; SameSite=Lax`;
  window.location.href = localeHome(l);
}
