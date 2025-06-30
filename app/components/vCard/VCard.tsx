"use client";
import React from "react";
import {
  VCardAddContact,
  VCardInfoContent,
  VCardInfoContentText,
  VCardInfoContentTextWrap,
  VCardInfoIcon,
  VCardInfoWrapper,
  VCardWhatsapp,
  VCardWrapper,
} from "./VCardStyle";
import {
  PhoneIphone,
  Phone,
  Mail,
  WhatsApp,
  ArrowForward,
  PersonAdd,
  LocationPin,
} from "@mui/icons-material";
import { IAppContext } from "@/app/interfaces/context.interface";
import { useAppContext } from "@/app/context";
import { address, emailGlobal, fixes } from "@/app/constants/vCards";
import { fontSizeBody1, fontSizeBody2, primaryColor } from "@/app/globalStyles";

const VCard = () => {
  type Locale = "fr" | "en" | "nl";

  const { vCard, vCardLang, locale }: IAppContext = useAppContext();

  const sizeIcon: string = "30px";

  type Contact = {
    photoUrl?: string;
    firstName: string;
    lastName: string;
    phone: string | string[];
    email: string | string[];
    company?: string;
    jobTitle?: string;
    address?: {
      street: any;
      city: any;
      postalCode: any;
      country: any;
    };
  };

  const contact: Contact = {
    photoUrl: vCard?.avatar,
    firstName: vCard?.firstname!,
    lastName: vCard?.lastname!,
    phone: [
      ...(vCard?.type === "CUI"
        ? [vCard?.phone!, (fixes as any)[vCard?.type]]
        : [vCard?.type && (fixes as any)[vCard?.type], vCard?.phone!]),
    ].filter(Boolean),
    email: [vCard?.email!, ...(vCard?.type === "CUI" ? [emailGlobal] : [])],
    company: "",
    jobTitle: vCard?.title[locale as "fr" | "en" | "nl"],
    address: {
      street:
        vCard?.type &&
        address[vCard?.type].street[locale as "fr" | "en" | "nl"],
      city:
        vCard?.type && address[vCard?.type].city[locale as "fr" | "en" | "nl"],
      postalCode: vCard?.type && address[vCard?.type].postalCode,
      country:
        vCard?.type &&
        address[vCard?.type].country[locale as "fr" | "en" | "nl"],
    },
  };

  const createVCard = async (contact: Contact) => {
    const phones = Array.isArray(contact.phone)
      ? contact.phone
      : [contact.phone];
    const emails = Array.isArray(contact.email)
      ? contact.email
      : [contact.email];

    const phoneLines = phones
      .map((p, i) => `TEL;TYPE=${i === 0 ? "CELL,VOICE" : "WORK,VOICE"}:${p}`)
      .join("\n");

    const emailLines = emails
      .map((e, i) => `EMAIL;TYPE=${i === 0 ? "INTERNET" : "WORK"}:${e}`)
      .join("\n");

    const addressLine = contact.address
      ? `ADR;TYPE=WORK:;;${contact.address.street};${contact.address.city};;${contact.address.postalCode};${contact.address.country}`
      : "";

    // Ajouter l'image (si fournie)
    let photoLine = "";
    if (contact.photoUrl) {
      const res = await fetch(contact.photoUrl);
      const blob = await res.blob();
      const arrayBuffer = await blob.arrayBuffer();
      const base64 = btoa(
        new Uint8Array(arrayBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${base64}`;
    }

    return `
BEGIN:VCARD
VERSION:3.0
N:${contact.lastName};${contact.firstName};;;
FN:${contact.firstName} ${contact.lastName}
ORG:${contact.company}
TITLE:${contact.jobTitle}
${phoneLines}
${emailLines}
${addressLine}
${photoLine}
END:VCARD
  `.trim();
  };

  const handleClick = async () => {
    const vcard = await createVCard(contact);
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.firstName}_${contact.lastName}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const infos = [
    {
      icon: <PhoneIphone sx={{ fontSize: sizeIcon }} />,
      label: vCardLang?.phone,
      value: vCard?.phone,
      action: `tel:${vCard?.phone}`,
    },
    {
      icon: <Phone sx={{ fontSize: sizeIcon }} />,
      label: vCard?.type && vCardLang?.fixe[vCard?.type],
      value: vCard?.type! && (fixes as any)[vCard?.type],
      action: `tel:${vCard?.type! && (fixes as any)[vCard?.type]}`,
    },
    {
      icon: <Mail sx={{ fontSize: sizeIcon }} />,
      label: vCardLang?.emailPerso,
      value: vCard?.email,
      action: `mailto:${vCard?.email}`,
    },
    {
      icon: <Mail sx={{ fontSize: sizeIcon }} />,
      label: vCard?.type! && vCardLang?.emailGlobal[vCard?.type],
      value: vCard?.type === "CUI" ? emailGlobal : vCard?.email,
      action: `mailto:${vCard?.email}`,
    },
    {
      icon: <LocationPin sx={{ fontSize: sizeIcon }} />,
      label: vCardLang?.address,
      value: `${vCard?.type! && address[vCard?.type].street[locale as Locale]}\n${vCard?.type! && address[vCard?.type].postalCode} ${vCard?.type! && address[vCard?.type].city[locale as Locale]}\n${vCard?.type! && address[vCard?.type].country[locale as Locale]}`,
      action: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        `${vCard?.type! && address[vCard?.type].street[locale as Locale]}, ${vCard?.type! && address[vCard?.type].postalCode} ${vCard?.type! && address[vCard?.type].city}, ${vCard?.type! && address[vCard?.type].country[locale as Locale]}`
      )}`,
    },
  ];

  return (
    <VCardWrapper>
      <VCardAddContact variant="contained" onClick={handleClick}>
        <PersonAdd />
        {vCardLang?.addContact}
      </VCardAddContact>

      <VCardWhatsapp
        variant="contained"
        color="success"
        href={`https://wa.me/${vCard?.phone?.replace(/\D/g, "")}`}
      >
        <WhatsApp />
        WhatsApp
        <ArrowForward />
      </VCardWhatsapp>
      {infos.map((info, id) => (
        <VCardInfoWrapper
          key={id}
          sx={{
            whiteSpace: "pre-line",
            display:
              (id === 0 || id === 2) && vCard?.type !== "CUI"
                ? "none !important"
                : "flex",
          }}
        >
          <VCardInfoContent>
            <VCardInfoContentTextWrap>
              <VCardInfoContentText
                variant="body2"
                sx={{
                  fontSize: fontSizeBody2,
                  fontWeight: "bold",
                  color: primaryColor,
                }}
              >
                {info.label}
              </VCardInfoContentText>
              <VCardInfoContentText
                variant="body1"
                sx={{ fontSize: fontSizeBody1 }}
              >
                {info.value}
              </VCardInfoContentText>
            </VCardInfoContentTextWrap>

            <VCardInfoIcon variant="contained" href={info.action}>
              {info.icon}
            </VCardInfoIcon>
          </VCardInfoContent>
        </VCardInfoWrapper>
      ))}
    </VCardWrapper>
  );
};

export default VCard;
