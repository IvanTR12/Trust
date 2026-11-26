import { locale, usesWhatsApp } from "@/i18n";

export const WHATSAPP_NUMBER = "584244742482";
export const SALES_EMAIL = "ventas1@trustcontainer.com";

const LANGUAGE_NAME = { es: "Español", en: "Inglés (English)", zh: "Chino (中文)" } as const;

// Los mensajes al equipo comercial van en español. Si el cliente viene de la versión
// en inglés o chino, se añade una línea para que sepan en qué idioma responderle.
function tagLanguage(message: string) {
  return locale === "es" ? message : `🌐 *Idioma del cliente:* ${LANGUAGE_NAME[locale]}\n\n${message}`;
}

export function mailtoUrl(subject: string, body: string) {
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openEmail(subject: string, body: string) {
  // En el email no hay negritas de WhatsApp: se quitan los asteriscos.
  window.location.href = mailtoUrl(subject, tagLanguage(body).replace(/\*/g, ""));
}

// Envía una solicitud de cotización: WhatsApp en es/en, email en zh.
export function sendInquiry(subject: string, message: string) {
  if (usesWhatsApp) {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tagLanguage(message))}`, "_blank");
  } else {
    openEmail(subject, message);
  }
}
