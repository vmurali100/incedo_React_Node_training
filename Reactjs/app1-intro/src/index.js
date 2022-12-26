import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import App from './App.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>
);


reportWebVitals();
