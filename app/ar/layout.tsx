// app/fr/layout.tsx
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sanimex vCard",
  description: "Sanimex vCard",
};

export default function ArabicLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
