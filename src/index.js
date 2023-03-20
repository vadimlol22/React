import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Router from "./routes/Router";

import "./index.css";
import MainLayout from "./commonComponents/MainLayout/MainLayout";

import { store } from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainLayout>
        <React.StrictMode>
          <Router />
        </React.StrictMode>
      </MainLayout>
    </Provider>
  </BrowserRouter>
);