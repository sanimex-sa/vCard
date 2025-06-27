import {
  container,
  flexCenter,
  globalColorText,
  marginAuto,
  primaryColor,
  secondaryColor,
} from "@/app/globalStyles";
import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const HeaderTitle = styled(Typography)`
  text-align: center;
  color: white;
`;

export const HeaderName = styled(Typography)`
  text-align: center;
  margin-top: 20px;
  color: ${secondaryColor};
`;

export const HeaderAvatarImg = styled(Image)``;

export const HeaderAvatarWrap = styled(Box)`
  width: 170px;
  height: 170px;
  overflow: hidden;
  border-radius: 50%;
  ${flexCenter}
  ${marginAuto}
  outline: 3px solid white;

  img {
    transition: all 0.2s ease-in;
  }

  &:hover img {
    transform: scale(1.15);
  }
`;

export const HeaderWrapper = styled(Box)`
  padding: 50px 20px;
`;
