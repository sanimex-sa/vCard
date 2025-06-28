import { IvCards } from "../interfaces/vCard.interface";

const pathAvatars: string = "/images/avatars/";

export const fixe: string = "+32 2 527 37 60";

export const emailGlobal: string = "cuisines@sanimex.be";

export const address = {
  street: {
    fr: "Chaussée de Mons 669",
    nl: "Bergensesteenweg 669",
    en: "Chaussée de Mons 669",
  },
  city: "Anderlecht",
  postalCode: "1070",
  country: {
    fr: "Belgique",
    nl: "België",
    en: "Belgium",
  },
};

export const vCards: IvCards = {
  sanimex1070: {
    avatar: pathAvatars + "anderlecht.png",
    lastname: "Anderlecht",
    firstname: "Sanimex",
    title: {
      fr: "Cuisine - Carrelage - Salle de bains - Dressing",
      en: "Kitchen - Tiles - Bathroom - Wardrobe",
      nl: "Keuken - Tegels - Badkamer - Dressing",
    },
    phone: "+32 493 40 54 85",
    email: "mons@sanimex.be",
    type: "SNX",
  },
  abdelazizChahboun: {
    avatar: pathAvatars + "aziz.png",
    lastname: "Chahboun",
    firstname: "Abdelaziz",
    title: {
      fr: "Expert conseiller",
      en: "Expert advisor",
      nl: "Expert adviseur",
    },
    phone: "+32 499 88 04 89",
    email: "abdelaziz@sanimex.be",
    type: "CUI",
  },
  imadAyad: {
    avatar: pathAvatars + "imad.png",
    lastname: "Ayad",
    firstname: "Imad",
    title: {
      fr: "Expert conseiller",
      en: "Expert advisor",
      nl: "Expert adviseur",
    },
    phone: "+32 490 42 57 65",
    email: "imad@sanimex.be",
    type: "CUI",
  },
  hassanJbillo: {
    avatar: pathAvatars + "hassan.png",
    lastname: "Jbillo",
    firstname: "Hassan",
    title: {
      fr: "Expert conseiller",
      en: "Expert advisor",
      nl: "Expert adviseur",
    },
    phone: "+32 493 09 02 01",
    email: "hassan@sanimex.be",
    type: "CUI",
  },
};
