import { IvCards } from "../interfaces/vCard.interface";

const pathAvatars: string = "/images/avatars/";

export const fixes = {
  CUI: "+32 2 527 37 60",
  SNX: "+32 2 527 37 60",
  SNX2: "+32 2 203 66 25",
};

export const emailGlobal: string = "cuisines@sanimex.be";

export const address = {
  CUI: {
    street: {
      fr: "Chaussée de Mons 669",
      nl: "Bergensesteenweg 669",
      en: "Chaussée de Mons 669",
    },
    city: {
      fr: "Anderlecht",
      nl: "Anderlecht",
      en: "Anderlecht",
    },
    postalCode: "1070",
    country: {
      fr: "Belgique",
      nl: "België",
      en: "Belgium",
    },
  },
  SNX: {
    street: {
      fr: "Chaussée de Mons 669",
      nl: "Bergensesteenweg 669",
      en: "Chaussée de Mons 669",
    },
    city: {
      fr: "Anderlecht",
      nl: "Anderlecht",
      en: "Anderlecht",
    },
    postalCode: "1070",
    country: {
      fr: "Belgique",
      nl: "België",
      en: "Belgium",
    },
  },
  SNX2: {
    street: {
      fr: "Rue Masui 1",
      nl: "Masuistraat 1",
      en: "1 Masui Street",
    },
    city: {
      fr: "Bruxelles",
      nl: "Brussel",
      en: "Brussels",
    },
    postalCode: "1070",
    country: {
      fr: "Belgique",
      nl: "België",
      en: "Belgium",
    },
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
    slug: "sanimex1070",
  },
  sanimex1000: {
    avatar: pathAvatars + "masui.png",
    lastname: "Masui",
    firstname: "Sanimex",
    title: {
      fr: "Cuisine - Carrelage - Salle de bains - Dressing",
      en: "Kitchen - Tiles - Bathroom - Wardrobe",
      nl: "Keuken - Tegels - Badkamer - Dressing",
    },
    phone: "+32 465 44 11 22",
    email: "masui@sanimex.be",
    type: "SNX2",
    slug: "sanimex1000",
  },
  manager: {
    avatar: pathAvatars + "aziz.png",
    lastname: "Chahboun",
    firstname: "Abdelaziz",
    title: {
      fr: "Directeur général",
      en: "General Manager",
      nl: "Algemeen Directeur",
    },

    phone: "+32 499 88 04 89",
    email: "a.chahboun@sanimex.be",
    type: "SNX",
    slug: "manager",
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
    slug: "abdelazizChahboun",
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
    slug: "imadAyad",
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
    slug: "hassanJbillo",
  },
};
