import { useRouter } from "next/router";
import en from "locales/en.json";
import pl from "locales/pl.json";

type Rec = Record<string, string>;

export const useTranslation = (key?: string) => {
  const { query } = useRouter();

  switch (query.locale) {
    case "en":
      return { t: key ? (en[key] as Rec) : (en as unknown as Rec) };
    case "pl":
      return { t: key ? (pl[key] as Rec) : (pl as unknown as Rec) };
    default:
      return { t: key ? (en[key] as Rec) : (en as unknown as Rec) };
  }
};
