import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers"


const root = ReactDOM.createRoot(document.getElementById("root"));



// default state should be available across the application
//it can be in seperate file
const defaultState={
  employees:["Rohan","Arun","Sam","Ravi Kumar"],
  // products:["HP","Dell"]
}



// //Business logic condition
// const reducer=(state=defaultState,action)=>{
//   console.log(state)
//   switch(action.type){

//     default:
//       return state
//       // return state.products
//   }

// }




const store= createStore(reducer)
root.render(
  <React.StrictMode>
    <Provider store={store}>
   <App/>
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();