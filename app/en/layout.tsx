// app/fr/layout.tsx
import { ReactNode } from "react";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
