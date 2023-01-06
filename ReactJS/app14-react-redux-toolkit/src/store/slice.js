 import { defaultState } from "./defaultState";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUsersAction = createAsyncThunk("users/getAllUsersAction", ()=> getUsers())

export const addUserAsyncAction = createAsyncThunk(
    "users/addUserAsyncAction",
    (user) =>
      axios.post("http://localhost:3000/users/", user).then(async (res) => {
        const finalPayload = await getUsers();
        return finalPayload;
      })
  );
// export const addUserAction = createAsyncThunk("users/addUserAction",(user)=> axios.post("http://localhost:3000/users/",user).then( async (res) => {
//     const data = await getUsers();
//     return data;
// }));

const getUsers=async()=> axios.get("http://localhost:3000/users").then((res)=> res.data);


export const userSlice = createSlice({
    name:"users",
    initialState:defaultState,
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload);
        },
        deleteUser:(state,action)=>{
            state.users.splice(action.payload,1)
        },
        editUser:(state,action)=>{
            var newUser = [...state.users]
            newUser.forEach((e,i) => {
                if(e.email===action.payload.email){
                    newUser[i]=action.payload;
                }
            });
            state.users=newUser;
        },
        getUser:(state,action)=>{
            return state;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllUsersAction.fulfilled,(state,action)=>{
            state.users=action.payload;
        })
        builder.addCase(addUserAsyncAction.fulfilled,(state,action)=>{
            state.users=action.payload;
        })
    }
})
export default userSlice.reducer;
export const { addUser, deleteUser, editUser, getUser } = userSlice.actions;