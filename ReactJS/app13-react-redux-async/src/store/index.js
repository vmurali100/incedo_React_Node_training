import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../reducers/usersReducer";
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: usersReducer,
  middleware:[thunk]
});