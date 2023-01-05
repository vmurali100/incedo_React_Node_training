import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./studentSlice";

export const store = configureStore({
  reducer: {
    students: StudentSlice,
  },
});