import React from "react";
import ReactDOM from "react-dom/client";
import { ReduxBundlerProvider } from "redux-bundler-hook";
import getStore from "./app-bundles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";

const store = getStore();

if (process.env.NODE_ENV === "development") window.store = store;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxBundlerProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ReduxBundlerProvider>
  </React.StrictMode>
);
