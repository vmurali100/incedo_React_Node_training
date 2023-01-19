import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./book/reducers"
import reportWebVitals from './reportWebVitals';
import reducer from './ReducerForm/Reducers'
import Question17 from './Mid_Assignment/Question17';
import ApI from './Mid_Assignment/Question20';
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(store)
root.render(
  <React.StrictMode>
    <ApI/>
  </React.StrictMode>
);

{/*
import Component1 from './Components/Component1';
import { Person } from './Classes/Person';
import User from './Forms/User';
import Registration from './Forms/Registration';
import Form1 from './Assignment_Day3/Form1/q1';
import UserForm from './Assignment_Day3/Form1/q1.function';
import User1 from './Assignment_Day3/Form2/q2';
import Question17 from './Mid_Assignment/Question17';
import Question19 from './Mid_Assignment/Question19';

import Counter from './Mid_Assignment/Counter';
import Registration from './Form2/Registration';
import EmpRegistration from './Form3/EmpRegistration';
*/}


{/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Question17/>
  </React.StrictMode>
);*/}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
