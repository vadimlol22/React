import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Router from "./routes/Router";

import "./index.css";
import MainLayout from "./commonComponents/MainLayout/MainLayout";
import { persistor, store } from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout>
          <React.StrictMode>
            <Router />
          </React.StrictMode>
        </MainLayout>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
