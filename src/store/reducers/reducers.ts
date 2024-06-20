
import { persistReducer } from "redux-persist";
import { themeReducer } from "@/store/reducers/theme";
import { languageReducer } from "@/store/reducers/language";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem(_key: string, value: number) {
        return Promise.resolve(value);
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  };

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
      'themeState',
      'languageState',
    ],
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedLanguageReducer = persistReducer(persistConfig, languageReducer);

export { persistedThemeReducer, persistedLanguageReducer }