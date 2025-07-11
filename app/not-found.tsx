"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  notFoundEn,
  notFoundFr,
  notFoundNl,
} from "./translations/404.translate";
import { I404Translations } from "./interfaces/404.interface";
import { Box, Container, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

const supportedLangs = ["fr-BE", "en-GB", "nl-NL"] as const;
type SupportedLang = (typeof supportedLangs)[number];

export default function NotFound() {
  const pathname = usePathname();
  const [detectedLang, setDetectedLang] = useState<SupportedLang>("fr-BE");

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
        setDetectedLang("fr-BE");
      }
    }
  }, [pathname]);

  if (!detectedLang) {
    // Ici tu peux ajouter un loader si tu veux (ex: spinner MUI)
    return null; // ou un spinner simple
  }

  const translations: I404Translations =
    detectedLang === "fr-BE"
      ? notFoundFr
      : detectedLang === "nl-NL"
        ? notFoundNl
        : notFoundEn;

  return (
    <html lang={detectedLang}>
      <body style={{ margin: 0, fontFamily: "Roboto, sans-serif" }}>
        <Container maxWidth="sm">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            textAlign="center"
          >
            <ErrorOutline color="error" sx={{ fontSize: 80, mb: 2 }} />
            <Typography variant="h3" component="h1" gutterBottom>
              {translations.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              {translations.text}
            </Typography>
          </Box>
        </Container>
      </body>
    </html>
  );
}
