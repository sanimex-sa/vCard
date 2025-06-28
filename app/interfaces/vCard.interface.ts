export interface IvCard {
  type: "CUI" | "SNX";
  avatar: string;
  lastname: string;
  firstname: string;
  title: { fr: string; en: string; nl: string };
  phone: string;
  email: string;
}

export interface IvCards {
  sanimex1070: IvCard;
  abdelazizChahboun: IvCard;
  imadAyad: IvCard;
  hassanJbillo: IvCard;
}

export interface IVCardTranslations {
  addContact: string;
  phone: string;
  fixeCUI: string;
  fixeSNX: string;
  emailPerso: string;
  emailGlobal: string;
  address: string;
}
