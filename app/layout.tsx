// app/layout.tsx (serveur)
import { ReactNode } from "react"; // Import du layout client
import ClientRootLayout from "./client-layout";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClientRootLayout>
      <div style={{ overflowX: "hidden" }}>{children}</div>
    </ClientRootLayout>
  );
}
