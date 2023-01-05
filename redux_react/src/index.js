import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import { empReducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import userSlice from './Slice/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({reducer:{user:userSlice,test:empReducer}});
console.log(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
