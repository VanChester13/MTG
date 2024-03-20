import { ResponseList } from "../../types/interfaces";

// используется для наглядности полученных данных
export const setDataInState = (obj: ResponseList) => ({
  type: "SET_DATA",
  payload: obj,
});

export const setLanguage = (lang: string) => ({
  type: "SET_LANGUAGE",
  payload: lang
})