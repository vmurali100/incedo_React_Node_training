import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});