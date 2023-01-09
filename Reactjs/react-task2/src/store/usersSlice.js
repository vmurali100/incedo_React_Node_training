import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";
import axios from "axios";

export const addUserAsyncAction = createAsyncThunk(
    "users/addUserAsyncAction",
    (user) => {
        axios.post('http://localhost:3000/users/', user).then(_ => {
            const finalPayload  =  handleGetAllUsers();
            return finalPayload;
       }
    ).catch(err => console.log(err))
    }
)

export const deleteUserAsyncAction = createAsyncThunk('users/deleteUserAsyncAction', (id) => {
    return axios.delete("http://localhost:3000/users/"+id)
    .then( _ => handleGetAllUsers())
    }
)

export const getUsersAsyncAction = createAsyncThunk(
    "users/getUsersAsyncAction", () => handleGetAllUsers()
)
const handleGetAllUsers = () => 
  axios.get("http://localhost:3000/users").then((res) =>(res.data));


export const userSlice  = createSlice({
    name: "users",
    initialState: defaultState,
    extraReducers: (builder) => {
        builder.addCase(addUserAsyncAction.fulfilled, (state,action) => {
            state.users = action.payload;
        });
        builder.addCase(getUsersAsyncAction.fulfilled, (state,action) => {
            console.log(action.payload)
            state.users = action.payload
        });
        builder.addCase(deleteUserAsyncAction.fulfilled, (state, action) => {
            console.log(action.payload)
            state.users = action.payload
        });
    }
})

export default userSlice.reducer;
// export const {addUserAction} = userSlice.actions;