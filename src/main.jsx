import React from "react";
import ReactDOM from "react-dom/client";
import { ReduxBundlerProvider } from "redux-bundler-hook";
import getStore from "./app-bundles";
import App from "./App.jsx";
import "../lib/styles.css";

const store = getStore();

if (import.meta.env.MODE === "development") window.store = store;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxBundlerProvider store={store}>
      <App />
    </ReduxBundlerProvider>
  </React.StrictMode>,
);
