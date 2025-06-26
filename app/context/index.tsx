"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IAppContext } from "../interfaces/context.interface";

const AppContext = createContext<IAppContext>({
  locale: "fr", // valeur par défaut
});

export const AppWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    if (pathname) {
      const firstSegment = pathname.split("/")[1];
      if (["fr", "nl", "en"].includes(firstSegment)) {
        setLocale(firstSegment);
      }
    }
  }, [pathname]);

  return (
    <AppContext.Provider value={{ locale }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
