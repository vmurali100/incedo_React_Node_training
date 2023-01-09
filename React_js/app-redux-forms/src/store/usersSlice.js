import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";
import axios from "axios";

export const addUserAsyncAction = createAsyncThunk(
    "users/addUserAsyncAction",
    (user) => 
       axios.post('http://localhost:3000/users/', user).then(async (res) => {
            const finalPayload  = await handleGetAllUsers();
            return finalPayload;
       }
)
)

export const userSlice  = createSlice({
    name: "users",
    initialState: defaultState,
    reducers: {
        addUserAction : (state, action) => {
            state.users.push(action.payload);
        }
    },

    extraReducers: (builder) => {
        builder.addCase(addUserAsyncAction.fulfilled, (state,action) => {
            state.users = action.payload;
        })
    },
})

export default userSlice.reducer;
export const {addUserAction} = userSlice.actions;