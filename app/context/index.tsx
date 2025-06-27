"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IAppContext } from "../interfaces/context.interface";
import { IvCard, IVCardTranslations } from "../interfaces/vCard.interface";

const AppContext = createContext<IAppContext>({
  locale: "fr", // valeur par défaut
});

const supportedLangs = ["fr", "en", "nl"] as const;
type SupportedLang = (typeof supportedLangs)[number];

export const AppWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const [locale, setLocale] = useState<SupportedLang>("fr");
  const [vCard, setVCard] = useState<IvCard | undefined>(undefined);
  const [vCardLang, setVCardLang] = useState<IVCardTranslations | undefined>(
    undefined
  );

  useEffect(() => {
    if (pathname) {
      const firstSegment: SupportedLang = pathname.split(
        "/"
      )[1] as SupportedLang;
      if (["fr", "nl", "en"].includes(firstSegment)) {
        setLocale(firstSegment);
      }
    }
  }, [pathname]);

  return (
    <AppContext.Provider
      value={{ locale, vCard, setVCard, vCardLang, setVCardLang }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
