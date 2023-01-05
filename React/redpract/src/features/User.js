import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Data";



export const userSlice =createSlice({
    name:"users",
    initialState :{value:UserData},
    reducers:{
        addUser :(state,action) =>{
            //Adding the user code will be written hereS
        }
    }
})
export default userSlice.reducer;