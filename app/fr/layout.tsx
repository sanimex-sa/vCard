// app/fr/layout.tsx
import { ReactNode } from "react";

export default function FrenchLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr-BE">
      <body>{children}</body>
    </html>
  );
}
