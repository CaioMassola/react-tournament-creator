export const getLocales = (file: string) => {
    return {
        en: require(`@/global/locales/en/${file}.json`),
        pt: require(`@/global/locales/pt/${file}.json`)
    }
}