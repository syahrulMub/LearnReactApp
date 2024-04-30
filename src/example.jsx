import React from "react";
import reactDOM from "react-dom/client";

const myElement = <h1>React is {20 * 2} times more better using JSX</h1>;
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(myElement);
