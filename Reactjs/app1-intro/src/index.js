import React from 'react';
import ReactDOM from 'react-dom/client';

import Component1 from './Components/comp1';
import { Person } from './Components/User';
const root = ReactDOM.createRoot(document.getElementById('Incedo'));
root.render(
  <React.StrictMode>
    <Component1/>
    <Person/>
  </React.StrictMode>
);

