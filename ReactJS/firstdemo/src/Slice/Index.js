import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getAllusers = createAsyncThunk(
    "getData",
    ()=> fetch("http://localhost:8080/demo/get").then((res)=>res.json())
);

export const checkUser = createAsyncThunk(
    "checkUser",
    async (obj)=>{
        console.log("inside checkUser");
        return await fetch(`http://localhost:8080/demo/login/${obj.email}/${obj.password}`).then((res)=>res.json());  
    }
);

export const DataSlice = createSlice({
    name:"data",
    initialState:{
        users:[],
        check:"hello",
    },
    reducer:{
        getdata:(state,action)=>{
            return state.users;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllusers.fulfilled,(state, action)=>{
            state.users = action.payload;
        });
        builder.addCase(checkUser.fulfilled,(state, action)=>{
            state.check = action.payload;
        });
    }
})

export default DataSlice.reducer;
export const {getdata} = DataSlice.actions;