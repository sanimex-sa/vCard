// app/fr/layout.tsx
import { ReactNode } from "react";

export default function DutchLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl-NL">
      <body>{children}</body>
    </html>
  );
}
