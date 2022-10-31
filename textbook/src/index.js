import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import ContextApp from "./Chapter10/ContextApp";
import ContextAppHook from "./Chapter10/ContextAppHook";
import PageColor from "./Chapter10/PageColor";

import App from "./Client/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContextApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
