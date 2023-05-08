import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Router from "./router/router";
import Context from "./db/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>
);
