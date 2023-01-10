import registeredUser from './registerslice';
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer:{
        registeredusers:registeredUser,
    }
});