"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { IAppContext } from "../interfaces/context.interface";
import { useAppContext } from "../context";
import {
  notFoundEn,
  notFoundFr,
  notFoundNl,
  notFoundAr,
} from "../translations/404.translate";

const NoVCardFound = () => {
  const { locale }: IAppContext = useAppContext();

  const message =
    locale === "fr"
      ? notFoundFr.vCard404
      : locale === "nl"
        ? notFoundNl.vCard404
        : locale === "ar"
          ? notFoundAr.vCard404
          : notFoundEn.vCard404;

  const isRTL = locale === "ar";

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={6}
      textAlign="center"
      sx={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      <ContactMailIcon color="action" sx={{ fontSize: 60, mb: 2 }} />
      <Typography variant="h6" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default NoVCardFound;
