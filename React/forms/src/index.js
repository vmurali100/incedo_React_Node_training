import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Practform1 from './Practform1';
import reportWebVitals from './reportWebVitals';
// import User1 from './User1';
// import User2 from './User2';
// import Form1 from './Form1';
// import Form2 from './Form2';
// import table1 from './Registration';
// import Registration from './Registration';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <User1 /> */}
    {/* <User2 /> */}
    {/* <Form1 /> */}
    {/* <Form2/> */}
    {/* <Registration /> */}<Practform1 />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
