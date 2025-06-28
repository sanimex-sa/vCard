import { IvCard, IVCardTranslations } from "./vCard.interface";
import { Dispatch } from "react";

export interface IAppContext {
  locale?: string;
  finding?: boolean;
  vCard?: IvCard | null | undefined;
  setVCard?: Dispatch<React.SetStateAction<IvCard | undefined | null>>;
  setFinding?: Dispatch<React.SetStateAction<boolean>>;
  vCardLang?: IVCardTranslations;
  setVCardLang?: Dispatch<React.SetStateAction<IVCardTranslations | undefined>>;
}
