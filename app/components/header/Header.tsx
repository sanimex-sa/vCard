"use client";
import React from "react";
import {
  HeaderAvatarImg,
  HeaderAvatarWrap,
  HeaderName,
  HeaderTitle,
  HeaderWrapper,
  Lang,
  LangWrapper,
} from "./HeaderStyle";
import { useAppContext } from "@/app/context";
import { IAppContext } from "@/app/interfaces/context.interface";
import { useRouter } from "next/navigation";
import { fontSizeH4, fontSizeH6, primaryColor } from "@/app/globalStyles";

const Header = () => {
  const { vCard, locale }: IAppContext = useAppContext();
  const langs: string[] = ["FR", "NL", "EN"];

  const router = useRouter();

  const formatNames = (first: string, last: string) => {
    const f = first.toLowerCase();
    const l = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();
    return f + l;
  };

  return (
    <HeaderWrapper
      sx={{
        backgroundColor: primaryColor,
        clipPath: {
          xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 99.8%)",
          md: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 99.8%)",
        },
      }}
    >
      <LangWrapper>
        {langs.map((lang: string, id: number) => (
          <Lang
            key={id}
            onClick={() => {
              const slug = formatNames(vCard?.firstname!, vCard?.lastname!);
              window.location.href = `/${lang.toLowerCase()}/${slug}`;
            }}
            sx={{
              color: lang.toLowerCase() === locale ? primaryColor : "white",
              backgroundColor:
                lang.toLowerCase() === locale ? "white" : primaryColor,
              marginRight: id === langs.length - 1 ? "0" : "10px",
            }}
          >
            {lang}
          </Lang>
        ))}
      </LangWrapper>

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
