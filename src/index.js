import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Greeting from "./person";
import ComponentReact from "./componentReact";
import Car from "./Car";
import ChangeColor from "./CangeColor";
import Garage from "./ListCar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Greeting name="syahrul" />
    <ComponentReact />
    <Car color="blue" />
    <ChangeColor />
    <Garage />
  </React.StrictMode>,
  document.getElementById("root")
);
