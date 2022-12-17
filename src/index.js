import React from "react";
import ReactDOM from "react-dom/client";
import { Master } from "./master";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Master />
    </Router>
  </React.StrictMode>
);
