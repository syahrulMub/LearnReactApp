import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Greeting from "./person";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Greeting name="syahrul" />
  </React.StrictMode>,
  document.getElementById("root")
);
