import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Greeting from "./person";
import ComponentReact from "./componentReact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Greeting name="syahrul" />
    <ComponentReact />
  </React.StrictMode>,
  document.getElementById("root")
);
