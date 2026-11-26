import { LOCALES, LOCALE_HREFLANG, LOCALE_LABEL, locale, localeHome, switchLocale, t } from "@/i18n";

export function LanguageSwitcher() {
  return (
    <nav
      aria-label={t.nav.language}
      className="flex shrink-0 items-center gap-0.5 bg-black/25 backdrop-blur-md rounded-full p-1 border border-white/30"
    >
      {LOCALES.map((l) => (
        <a
          key={l}
          href={localeHome(l)}
          hrefLang={LOCALE_HREFLANG[l]}
          lang={LOCALE_HREFLANG[l]}
          aria-current={l === locale ? "page" : undefined}
          onClick={(e) => {
            e.preventDefault();
            switchLocale(l);
          }}
          className={`px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
            l === locale ? "bg-white text-[#252b42]" : "text-white hover:bg-white/20"
          }`}
        >
          {LOCALE_LABEL[l]}
        </a>
      ))}
    </nav>
  );
}
