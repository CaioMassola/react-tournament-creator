"use client"
import { useAppSelector } from "@/store/store";
import { I18n } from "i18n-js";
import { getLocales } from "@/global/locales/locales"

const TranslateText = (text: string, file: string) => {
    const languageState = useAppSelector((state) => state.language.languageState);

        const i18n = new I18n(getLocales(file.toLowerCase()));

        i18n.defaultLocale = languageState;
        i18n.locale = languageState;

        return i18n.t(text);
    }

export { TranslateText }