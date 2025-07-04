// app/fr/layout.tsx
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sanimex vCard",
  description: "Sanimex vCard",
};

export default function FrenchLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr-BE">
      <body>{children}</body>
    </html>
  );
}
