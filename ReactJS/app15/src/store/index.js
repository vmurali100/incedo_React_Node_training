import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
export const Store = configureStore({
  reducer: {
    users: userSlice,
  },
});
