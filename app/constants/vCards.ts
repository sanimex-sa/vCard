import { IvCards } from "../interfaces/vCard.interface";

const pathAvatars: string = "/images/avatars/";

export const fixe: string = "+32 2 527 37 60";

export const emailGlobal: string = "cuisines@sanimex.be";

export const address = {
  street: "Chaussée de Mons 669",
  city: "Anderlecht",
  postalCode: "1070",
  country: "Belgique",
};

export const vCards: IvCards = {
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
  },
};
