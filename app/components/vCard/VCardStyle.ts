import {
  container,
  flexCenter,
  globalColorBg,
  globalColorText,
  marginAuto,
  primaryColor,
  secondaryColor,
} from "@/app/globalStyles";
import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const VCardAddContact = styled(Button)`
  position: relative;
  z-index: 2;
  overflow: visible;
  margin: 50px auto 0 auto;
  ${flexCenter}
  justify-content: space-evenly;
  max-width: 300px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110%; /* légèrement plus grand que le bouton */
    height: 120%;
    background-color: ${primaryColor};
    border-radius: 10px;
    transform: translate(-50%, -50%) scale(0.9);
    z-index: -1; /* derrière le bouton */
    animation: pulseRadar 1s infinite ease-out;
  }

  @keyframes pulseRadar {
    0% {
      transform: translate(-50%, -50%) scale(0.9);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
`;

export const VCardWhatsapp = styled(Button)`
  position: relative;
  z-index: 2;
  overflow: visible;
  margin: 50px auto 0 auto;
  ${flexCenter}
  justify-content: space-evenly;
  max-width: 300px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110%; /* légèrement plus grand que le bouton */
    height: 120%;
    background-color: #128c7e;
    border-radius: 10px;
    transform: translate(-50%, -50%) scale(0.9);
    z-index: -1; /* derrière le bouton */
    animation: pulseRadar 1s infinite ease-out;
  }

  @keyframes pulseRadar {
    0% {
      transform: translate(-50%, -50%) scale(0.9);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
`;

export const VCardInfoContentText = styled(Typography)`
  user-select: text;
  text-align: center;
`;

export const VCardInfoContentTextWrap = styled(Box)``;

export const VCardInfoContent = styled(Box)`
  outline: 2px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  ${flexCenter}
  flex-direction: column;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #ddd;
  }
`;

export const VCardInfoIcon = styled(Button)`
  position: relative;
  z-index: 1;
  overflow: visible;
  margin-top: 20px;
  max-width: 300px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110%; /* légèrement plus grand que le bouton */
    height: 120%;
    background: ${primaryColor}; /* pulse discret */
    border-radius: 10px;
    transform: translate(-50%, -50%) scale(0.9);
    z-index: -1; /* derrière le bouton */
    animation: pulseRadar 1s infinite ease-out;
  }

  @keyframes pulseRadar {
    0% {
      transform: translate(-50%, -50%) scale(0.9);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
`;

export const VCardInfoWrapper = styled(Box)`
  width: 100%;
  ${flexCenter}
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 50px;
`;

export const VCardWrapper = styled(Box)`
  max-width: 700px;
  padding: 0 20px 50px 20px;
  ${marginAuto};
`;
