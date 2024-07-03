import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.scss";
import { Provider } from "react-redux";
import { todoStore } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={todoStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
