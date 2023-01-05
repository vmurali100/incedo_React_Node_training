 import { defaultState } from "./defaultState";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:users,
    initialState:defaultState,
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload);
        },
        deleteUser:(state,action)=>{
            state.users.splice(action.payload,1)
        },
        editUser:(state,action)=>{
            newUser = [...state.users]
            newUser.forEach((e,i) => {
                if(e.email===action.payload.email){
                    newUser[i]=action.payload;
                }
            });
            state.users=newUser;
        }
    }
})