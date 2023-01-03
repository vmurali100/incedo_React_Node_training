import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
console.log(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);