import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes/Router";

import "./index.css";
import MainLayout from "./commonComponents/MainLayout/MainLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainLayout>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </MainLayout>
  </BrowserRouter>
);
