import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> 1b49dce71a83faad60a4549fa49317479697c594
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> 7958420f8ff5d27eb5071f5a10b7c2f92c70aa9f
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> e7e10d628cae7290683bb487fd664591b397d070
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
