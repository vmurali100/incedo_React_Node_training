import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./Index";
export const Store = configureStore({
    reducer:{
        data:DataSlice,
    }
})