import { configureStore } from "@reduxjs/toolkit";
import newSlice from "./newSlice";

export const store = configureStore({
    reducer:{
        users:newSlice,
    },
})