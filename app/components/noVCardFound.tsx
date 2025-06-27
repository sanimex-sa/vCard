"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { IAppContext } from "../interfaces/context.interface";
import { useAppContext } from "../context";
import { notFoundFr } from "../translations/404.translate";

const NoVCardFound = () => {
  return (
    <Box textAlign="center" py={6}>
      <Typography variant="body1" color="text.secondary">
        {notFoundFr.vCard404}
      </Typography>
    </Box>
  );
};

export default NoVCardFound;
