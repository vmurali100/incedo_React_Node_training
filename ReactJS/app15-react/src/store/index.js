import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    middleware:[thunk]
  },
});
