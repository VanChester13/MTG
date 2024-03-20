import { Action, ReduxState } from "../../types/interfaces";

const initialState = {
  list: {},
  lang: 'ru'
};

const dataReducer = (state: ReduxState = initialState, action: Action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, list: action.payload };
      case "SET_LANGUAGE":
        return { ...state, lang: action.payload }
    default:
      return state;
  }
};
export default dataReducer;
