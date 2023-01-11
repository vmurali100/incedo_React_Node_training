import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../store/employeeSlice";
export const store = configureStore({
  reducer: {
    users: employeeSlice,
  },
});
