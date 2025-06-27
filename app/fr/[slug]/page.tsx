"use client";
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useParams } from "next/navigation";
import { IAppContext } from "@/app/interfaces/context.interface";
import { useAppContext } from "@/app/context";
import { vCards } from "@/app/constants/vCards";
import NoVCardFound from "@/app/components/noVCardFound";
import VCard from "@/app/components/vCard/VCard";
import { vCardFr } from "@/app/translations/vCard.translate";

const VCardFr = () => {
  const { setVCard, vCard, setVCardLang }: IAppContext = useAppContext();
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    setVCard?.((vCards as any)[slug as string]);
    setVCardLang?.(vCardFr);

    return () => {
      // Lors du démontage, on remet vCard à undefined
      setVCard?.(undefined);
      setVCardLang?.(undefined);
    };
  }, []);

  return (
    <>
      {vCard ? (
        <>
          <Header />
          <VCard />
        </>
      ) : (
        <NoVCardFound />
      )}
    </>
  );
};

export default VCardFr;
