import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "../reducers/employeeReducer";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: employeeReducer,
    middleware: [thunk]
});