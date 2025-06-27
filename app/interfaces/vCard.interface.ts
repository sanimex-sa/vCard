export interface IvCard {
  avatar: string;
  lastname: string;
  firstname: string;
  title: { fr: string; en: string; nl: string };
  phone: string;
  email: string;
}

export interface IvCards {
  abdelazizChahboun: IvCard;
  hassanJbillo: IvCard;
}

export interface IVCardTranslations {
  addContact: string;
  phone: string;
  fixe: string;
  emailPerso: string;
  emailGlobal: string;
}
