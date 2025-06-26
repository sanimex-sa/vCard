"use client";

import { usePathname } from "next/navigation";

const supportedLangs = ["fr", "en", "nl"] as const;
type SupportedLang = (typeof supportedLangs)[number];

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] as SupportedLang | undefined;

  const detectedLang: SupportedLang = supportedLangs.includes(
    lang as SupportedLang
  )
    ? (lang as SupportedLang)
    : "en";

  return (
    <html lang={detectedLang}>
      <body>
        <div style={{ padding: "2rem" }}>
          {detectedLang === "fr" && (
            <>
              <h1>404 - Page non trouvée</h1>
              <p>La page que vous cherchez n'existe pas.</p>
            </>
          )}
          {detectedLang === "en" && (
            <>
              <h1>404 - Page not found</h1>
              <p>The page you are looking for does not exist.</p>
            </>
          )}
          {detectedLang === "nl" && (
            <>
              <h1>404 - Pagina niet gevonden</h1>
              <p>De pagina die u zoekt bestaat niet.</p>
            </>
          )}
        </div>
      </body>
    </html>
  );
}
