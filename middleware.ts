import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Appliquer uniquement sur la racine "/"
  if (pathname === "/") {
    const supportedLocales = ["fr", "en", "nl"];

    // 1. Vérifie la présence d’un cookie
    const cookieLocale = request.cookies.get(
      "sanimex-vCard-lang-locale"
    )?.value;
    if (cookieLocale && supportedLocales.includes(cookieLocale)) {
      return NextResponse.redirect(new URL(`/${cookieLocale}`, request.url));
    }

    // 2. Sinon, détecte la langue du navigateur (extrait la partie avant le tiret s'il existe)
    const acceptLang = request.headers.get("accept-language");
    const browserLang = acceptLang
      ? acceptLang.split(",")[0].split("-")[0].toLowerCase()
      : null;

    // 3. Si la langue du navigateur est dans la liste supportée, on l’utilise,
    // sinon on force la langue par défaut "en"
    const locale = supportedLocales.includes(browserLang ?? "")
      ? browserLang
      : "en";

    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/", // Middleware actif uniquement sur la racine "/"
};
