import { combineReducers } from "@reduxjs/toolkit";
import { ADD_USER, DELETE_USER, SET_USER, UPDATE_USER } from "../actions/actionTypes";
const initialState = { employees: [] };
export const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
    return { ...state, employees:action.payload };
    case ADD_USER:
        console.log("Test",action.payload)
      const newEmp = [...state.employees];
      newEmp.push(action.payload);
      return { ...state, employees: newEmp };
    case UPDATE_USER:
      const newEmp1 = [...state.employees];
      newEmp1.forEach((arr, i) => {
        console.log("arr", arr);
        console.log("arr", action.payload.username);
        newEmp1[i] = action.payload;
      });
      console.log(newEmp1);
      return { ...state, employees: newEmp1 };
    case DELETE_USER:
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.username != action.payload
        ),
      };
    default:
      console.log("test default add");
      return state;
  }
};
