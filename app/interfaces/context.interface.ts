import { OverridableStringUnion } from "@mui/types";
import { IvCard, IVCardTranslations } from "./vCard.interface";
import { Dispatch } from "react";

export interface IAppContext {
  locale?: string;
  vCard?: IvCard;
  setVCard?: Dispatch<React.SetStateAction<IvCard | undefined>>;
  vCardLang?: IVCardTranslations;
  setVCardLang?: Dispatch<React.SetStateAction<IVCardTranslations | undefined>>;
}
