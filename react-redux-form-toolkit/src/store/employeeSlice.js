import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultState } from "./defaultState";

export const getUsersAsyncAction = createAsyncThunk("employeeslice/getUsersAsyncAction", () => getUsers());

const getUsers = () => (
    axios.get("http://localhost:3000/users").then((res)=>res.data)
    )

export const addUsersAsyncAction = createAsyncThunk("employeeslice/addUsersAsyncAction", (emp) => (
    axios.post("http://localhost:3000/users/",emp).then(async(res)=>{
        const finalPayload = await getUsers();
        return finalPayload;
    })
)
 )

 export const deleteUsersAsyncAction = createAsyncThunk("employeeslice/deleteUsersAsyncAction",(id)=>
 axios.delete("http://localhost:3000/users/"+id).then(async (res)=>{
   return await getUsers();
 }));

 
export const updateUsersAsyncAction = createAsyncThunk("employeeslice/updateUsersAsyncAction",(employee)=>
axios.put("http://localhost:3000/users/"+employee.id,employee).then(async (res)=>{
  return await getUsers();
})
);

export const employeeSlice = createSlice({
   name: "employeeslice",
   initialState: defaultState,
   reducers: {
        setDeveloper:(state,action)=>{
        state.developer=action.payload;
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
        builder.addCase(deleteUsersAsyncAction.fulfilled,(state,action)=>{
        state.employees = action.payload;
        });
        builder.addCase(updateUsersAsyncAction.fulfilled,(state,action)=>{
        state.employees = action.payload;
        });
        },
});

export default employeeSlice.reducer;
export const {addUsers} = employeeSlice.actions;