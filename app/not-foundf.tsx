"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  notFoundEn,
  notFoundFr,
  notFoundNl,
} from "./translations/404.translate";
import { I404Translations } from "./interfaces/404.interface";

// adapte le chemin d'import selon ta structure de dossiers

const supportedLangs = ["fr", "en", "nl", "loading"] as const;
type SupportedLang = (typeof supportedLangs)[number];

export default function NotFound() {
  const pathname = usePathname();
  const [detectedLang, setDetectedLang] = useState<SupportedLang>("loading");

  useEffect(() => {
    const langFromPath = pathname.split("/")[1] as string | undefined;

    if (
      langFromPath &&
      supportedLangs.includes(langFromPath as SupportedLang)
    ) {
      setDetectedLang(langFromPath as SupportedLang);
    } else {
      const navLang = navigator.language.slice(0, 2);
      if (supportedLangs.includes(navLang as SupportedLang)) {
        setDetectedLang(navLang as SupportedLang);
      } else {
        setDetectedLang("en");
      }
    }
  }, [pathname]);

  if (!detectedLang) {
    // Ici tu peux ajouter un loader si tu veux (ex: spinner MUI)
    return null; // ou un spinner simple
  }

  const translations: I404Translations =
    detectedLang === "fr"
      ? notFoundFr
      : detectedLang === "nl"
        ? notFoundNl
        : notFoundEn;

  return (
    <html lang={detectedLang}>
      <body>
        {detectedLang !== "loading" && (
          <div style={{ padding: "2rem" }}>
            <h1>{translations.title}</h1>
            <p>{translations.text}</p>
          </div>
        )}
      </body>
    </html>
  );
}
