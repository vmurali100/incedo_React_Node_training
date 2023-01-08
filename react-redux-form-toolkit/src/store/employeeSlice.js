import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultState } from "./defaultState";

export const getUsersAsyncAction = createAsyncThunk("employeeslice/getUsersAsyncAction", () => getUsers());

const getUsers = () => (
    axios.get("http://localhost:3000/users").then((res)=>res.data)
    )

export const addUsersAsyncAction = createAsyncThunk("employeeslice/addUsersAsyncAction", () => (
    axios.post("http://localhost:3000/users/", {
        username:"Tejasree",
        name:"Teju",
        email:"te@123",
        stack:"Reactjs"
    }).then(async(res)=>{
        const finalPayload = await getUsers();
        return finalPayload;
    })
)
 )

export const employeeSlice = createSlice({
   name: "employeeslice",
   initialState: defaultState,
   reducers: {
      
        deleteEmployee: (state,action) =>{
        state.employees.splice(action,1);
        },
        addUsers : (state, action) => {
        state.employees.push(action.payload);
        },
   },
   extraReducers: (builder) => {
        builder.addCase(getUsersAsyncAction.fulfilled, (state,action) => {
        state.employees = action.payload;
        });
        builder.addCase(addUsersAsyncAction.fulfilled, (state, action) => {
        state.employees = action.payload;
        });
        },
});

export default employeeSlice.reducer;
export const {addUsers, deleteEmployee} = employeeSlice.actions;