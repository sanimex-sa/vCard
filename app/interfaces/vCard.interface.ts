export interface IvCard {
  type: "CUI" | "SNX" | "SNX2";
  avatar: string;
  lastname: string;
  firstname: string;
  title: { fr: string; en: string; nl: string; ar: string };
  phone: string;
  email: string;
  slug: string;
}

export interface IvCards {
  sanimex1070: IvCard;
  sanimex1000: IvCard;
  manager: IvCard;
  mchahboun: IvCard;
  abdelazizChaboun: IvCard;
  imadAyad: IvCard;
  hassanJbillo: IvCard;
}

export interface IVCardTranslations {
  addContact: string;
  phone: string;
  fixe: { CUI: string; SNX: string; SNX2: string };
  emailPerso: string;
  emailGlobal: { CUI: string; SNX: string; SNX2: string };
  address: string;
}
