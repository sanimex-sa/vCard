import { IVCardTranslations } from "../interfaces/vCard.interface";

export const vCardFr: IVCardTranslations = {
  addContact: "Ajouter contact",
  phone: "Numéro direct",
  fixe: {
    CUI: "Numéro cuisine général",
    SNX: "Numéro général",
    SNX2: "Numéro général",
  },
  emailPerso: "Email direct",
  emailGlobal: { CUI: "Email cuisine général", SNX: "Email", SNX2: "Email" },
  address: "Adresse",
};

export const vCardEn: IVCardTranslations = {
  addContact: "Add Contact",
  phone: "Direct Number",
  fixe: { CUI: "Main Kitchen Number", SNX: "Main Number", SNX2: "Main Number" },
  emailPerso: "Direct Email",
  emailGlobal: { CUI: "Main Kitchen Email", SNX: "Email", SNX2: "Email" },
  address: "Address",
};

export const vCardNl: IVCardTranslations = {
  addContact: "Contact toevoegen",
  phone: "Direct nummer",
  fixe: {
    CUI: "Algemeen keukennummer",
    SNX: "Algemeen nummer",
    SNX2: "Algemeen nummer",
  },
  emailPerso: "Persoonlijk e-mailadres",
  emailGlobal: {
    CUI: "Algemeen keukene-mailadres",
    SNX: "Email",
    SNX2: "Email",
  },
  address: "Adres",
};
