import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";
import axios from 'axios';


export const getRegisterAsyncAction=createAsyncThunk(
    "register/getRegisterAsyncAction",
    ()=> handleGetAllUsers()
);

export const addRegisterAsyncAction = createAsyncThunk(
    "register/addRegisterAsyncAction",
    (regis)=>
    axios.post("http://localhost:3000/register/",regis).then(async(res)=>{
        const finalPayload=await handleGetAllUsers();
        return finalPayload;
    })
);

const handleGetAllUsers=()=>
    axios.get("http://localhost:3000/register").then((res)=> res.data);

export const registerSlice = createSlice({
    name:"registers",
    initialState:defaultState,
    reducers: {
        addRegisterAction:(state,action)=>{
            state.register.push(action.payload);
        },
        deleteRegister:(state,action)=>{
            state.register.splice(action,1);
        },
    },
    extraReducers: (builder)=> {
        builder.addCase(getRegisterAsyncAction.fulfilled,(state,action)=>{
            state.register=action.payload;
        });
        builder.addCase(addRegisterAsyncAction.fulfilled,(state,action)=>{
            state.register=action.payload;
        });
    },
});

export default registerSlice.reducer;
export const {addRegisterAction,deleteRegister}=registerSlice.actions;