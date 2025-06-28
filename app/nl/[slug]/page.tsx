"use client";
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useParams } from "next/navigation";
import { IAppContext } from "@/app/interfaces/context.interface";
import { useAppContext } from "@/app/context";
import { vCards } from "@/app/constants/vCards";
import NoVCardFound from "@/app/components/noVCardFound";
import VCard from "@/app/components/vCard/VCard";
import { Box, CircularProgress } from "@mui/material";
import { flexCenter } from "@/app/globalStyles";
import { vCardNl } from "@/app/translations/vCard.translate";

const VCardNl = () => {
  const { setVCard, vCard, setVCardLang, finding, setFinding }: IAppContext =
    useAppContext();
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVCard?.((vCards as any)[slug as string]);
      setVCardLang?.(vCardNl);
    }, 1000); // 3 secondes

    return () => {
      clearTimeout(timeout); // Nettoyage du timeout si le composant se démonte avant la fin
      setVCard?.(undefined);
      setVCardLang?.(undefined);
    };
  }, []);

  useEffect(() => {
    vCard !== null && setFinding?.(false);
  }, [vCard]);

  return (
    <>
      {finding ? (
        <Box
          sx={{ display: { ...flexCenter }, width: "100%", padding: "50px" }}
        >
          <CircularProgress size={50} />
        </Box>
      ) : vCard ? (
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

export default VCardNl;
