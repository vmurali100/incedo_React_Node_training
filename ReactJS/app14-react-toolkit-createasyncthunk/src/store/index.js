import { studentsSlice } from "./studentsSlice";

export const store=configureStore({
    reducer:{
        students:studentsSlice
    }
})