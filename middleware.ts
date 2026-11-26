// Vercel Routing Middleware: elige el idioma según el país del visitante.
// Solo se ejecuta en la portada ("/"). Las páginas /en/ y /zh/ se sirven tal cual.
//
//   - Si el visitante ya eligió idioma con el selector (cookie "lang"), se respeta.
//   - Buscadores y vistas previas de enlaces (Google, WhatsApp, LinkedIn...) no se redirigen,
//     para que indexen la versión en español; las otras las encuentran por hreflang.
//   - China, Hong Kong, Macao, Taiwán y Singapur -> /zh/
//   - Países de habla hispana -> se quedan en español
//   - Resto del mundo -> /en/

export const config = { matcher: "/" };

const CHINESE = new Set(["CN", "HK", "MO", "TW", "SG"]);

const SPANISH = new Set([
  "VE", "ES", "MX", "CO", "AR", "PE", "CL", "EC", "GT", "CU", "BO", "DO", "HN", "PY",
  "SV", "NI", "CR", "PA", "UY", "PR", "GQ",
]);

const BOT = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|skype|embedly|preview|lighthouse/i;

export default function middleware(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  const chosen = cookie.match(/(?:^|;\s*)lang=(es|en|zh)(?:;|$)/)?.[1];

  if (chosen) {
    return chosen === "es" ? undefined : redirect(request, `/${chosen}/`);
  }

  if (BOT.test(request.headers.get("user-agent") ?? "")) return undefined;

  // Vercel añade este encabezado con el país (código ISO) del visitante.
  const country = (request.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
  if (!country || SPANISH.has(country)) return undefined;

  return redirect(request, CHINESE.has(country) ? "/zh/" : "/en/");
}

function redirect(request: Request, path: string) {
  const url = new URL(path, request.url);
  url.search = new URL(request.url).search; // conserva ?utm_... de las campañas
  return new Response(null, {
    status: 307,
    headers: {
      Location: url.toString(),
      // La respuesta depende del país y de la cookie: que ninguna caché la comparta.
      "Cache-Control": "private, no-store",
      Vary: "Cookie",
    },
  });
}
