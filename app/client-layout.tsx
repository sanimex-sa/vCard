// app/client-layout.tsx (client)
"use client"; // Important pour indiquer que ce fichier est côté client

import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import { AppWrapper } from "./context";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation (en ms)
      once: true, // Animation une seule fois
      mirror: false,
      offset: 100, // Décalage (en px) avant déclenchement
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  );
}
