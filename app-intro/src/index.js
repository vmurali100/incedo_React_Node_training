import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Person from './components/Person';
import DefaultUser, { MainUser, OtherUser } from './User';
import ParentComponent from './components/ParentComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <App />
    <Person />
    <DefaultUser />
    <MainUser />
    <OtherUser />
    <ParentComponent />
    </>
);