import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";

/** Redux Store */
import store from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <provider store={store}>
    <App />
  </provider>
);
