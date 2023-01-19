import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const handleGetAllUsers=()=>
     (axios.get("http://localhost:3000/users").then((res)=>res.data));

export const getAllUsersAsyncAction=createAsyncThunk(
    "users/getAllUsersAsyncAction",
    ()=>handleGetAllUsers()
);

export const addUserAsyncAction=createAsyncThunk(
    "users/addUserAsyncAction",
    (user)=>
         axios.post("http://localhost:3000/users/",user).then(async (res)=>{
            const finalPayload=await handleGetAllUsers();
            return finalPayload;
         })
);
export const editUserAsyncAction=createAsyncThunk(
    "users/editUserAsyncAction",
    async (user)=>{
        console.log(user.email);
        const res = await axios.put("http://localhost:3000/users/"+user.id, user);
        const finalPayload = await handleGetAllUsers();
        return await finalPayload;
    }
);
export const userSlice=createSlice({
    name:"users",
    initialState:{
        users:[],
    },
    reducers:{
        addUserAction: (state,action)=>{
            state.users.push(action.payload);
        },
        deleteUser:(state,action)=>{
            state.users.splice(action.payload);
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllUsersAsyncAction.fulfilled,(state,action)=>{
            state.users=action.payload;
        });
        builder.addCase(addUserAsyncAction.fulfilled,(state,action)=>{
            state.users=action.payload;
        });
        builder.addCase(editUserAsyncAction.fulfilled,(state,action)=>{
            state.users=action.payload;
        })
    }
})

export default userSlice.reducer;
export const {addUserAction,deleteUser}=userSlice.actions;