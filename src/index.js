import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.js";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather defaultCity="Odessa" />
    <App />
  </React.StrictMode>
);

reportWebVitals();
