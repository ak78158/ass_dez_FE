import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Context from "./context/context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Context>
    <App />
  </Context>,
  rootElement
);
