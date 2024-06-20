export const getLocales = (file: string) => {
    return {
        en: require(`@/app/global/locales/en/${file}.json`),
        pt: require(`@/app/global/locales/pt/${file}.json`)
    }
}