import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//non-null 단언
// const root = ReactDOM.createRoot(document.getElementById("root")!);

// 직관적인 단언
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
