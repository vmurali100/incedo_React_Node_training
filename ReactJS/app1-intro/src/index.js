import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Component1 from './Components/Component1';
import { Person } from './Classes/Person';
import User from './Forms/User';
import Registration from './Forms/Registration';
import Form1 from './Assignment_Day3/Form1/q1';
import UserForm from './Assignment_Day3/Form1/q1.function';
import User1 from './Assignment_Day3/Form2/q2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
