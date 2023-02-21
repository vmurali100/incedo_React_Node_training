import UserSlice from "./Slice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        users:UserSlice,
    }
});