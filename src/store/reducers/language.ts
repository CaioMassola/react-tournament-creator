import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface ILanguageState {
  languageState: string;
}

const initialState: ILanguageState = {
  languageState: "pt",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguageState: (state, action: PayloadAction<string>) => {
      state.languageState = action.payload;
    },
  },
});

export const { setLanguageState } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;