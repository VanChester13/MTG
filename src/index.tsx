import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./redux/reducers/dataReducer";

import "../src/styles/index.scss";

export const store = configureStore({ reducer: dataReducer });
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
