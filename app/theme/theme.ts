import { createTheme } from "@mui/material";
import { Theme } from "@emotion/react";
import { globalColorBg, globalColorText, primaryColor } from "../globalStyles";

export const theme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor,
    },
    background: {
      default: globalColorBg,
    },
    text: {
      primary: globalColorText,
    },
  },
  typography: {
    fontFamily: "Daxline Regular, Arial, sans-serif",
    body1: {
      lineHeight: "1.6",
    },
    body2: {
      lineHeight: "1.6",
    },
    button: {
      textTransform: "none", // Pour ne pas forcer les majuscules si on ne veut pas
      fontWeight: 600,
      fontSize: "0.9rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.1rem",
      },
    },
  },
});
