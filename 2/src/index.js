import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CounterContainer from "./pages/Counter/containers/CounterContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterContainer />
  </React.StrictMode>
);
reportWebVitals();
