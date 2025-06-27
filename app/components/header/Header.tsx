"use client";
import React from "react";
import {
  HeaderAvatarImg,
  HeaderAvatarWrap,
  HeaderName,
  HeaderTitle,
  HeaderWrapper,
} from "./HeaderStyle";
import { useAppContext } from "@/app/context";
import { IAppContext } from "@/app/interfaces/context.interface";
import { notFound, usePathname } from "next/navigation";
import {
  fontSizeH1,
  fontSizeH2,
  fontSizeH4,
  fontSizeH6,
  primaryColor,
} from "@/app/globalStyles";
import { Skeleton } from "@mui/material";

const Header = () => {
  const { vCard, locale }: IAppContext = useAppContext();

  return (
    <HeaderWrapper
      sx={{
        backgroundColor: primaryColor,
        clipPath: {
          xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 99.8%)",
          sm: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 99.8%)",
        },
      }}
    >
      <HeaderAvatarWrap>
        <HeaderAvatarImg
          src={vCard?.avatar!}
          alt="Avatar signature"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            height: "auto",
            width: "100%",
            objectFit: "cover",
          }}
          priority
        />
      </HeaderAvatarWrap>

      <HeaderName variant="h4" sx={{ fontSize: fontSizeH4 }}>
        {[vCard?.firstname, vCard?.lastname].filter(Boolean).join(" ")}
      </HeaderName>
      <HeaderTitle variant="h6" sx={{ fontSize: fontSizeH6 }}>
        {vCard?.title[locale as "fr" | "en" | "nl"]}
      </HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
