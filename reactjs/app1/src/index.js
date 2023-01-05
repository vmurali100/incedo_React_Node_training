import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux' 
import {reducer}  from  './reducers'

const store = createStore(  reducer ); 
console.log(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}> 
    <App />

    </Provider>
  </React.StrictMode>
);

