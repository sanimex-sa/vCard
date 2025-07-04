// app/fr/layout.tsx
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sanimex vCard",
  description: "Sanimex vCard",
};

export default function DutchLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl-NL">
      <body>{children}</body>
    </html>
  );
}
