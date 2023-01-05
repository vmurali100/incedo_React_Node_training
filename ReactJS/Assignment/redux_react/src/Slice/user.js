import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const getFromApi=createAsyncThunk()
const userSlice=createSlice(
    {
        name:"user",
        initialState:{users:[]},
        reducers:{
            addUser:(state,action)=>
            {
                console.log(action.payload)
                state.users.push(action.payload);
            },
            deleteUser:(state,action)=>
            {
                state.users.splice(action.payload,1);
            },
            setUser:(state,action)=>
            {
               state.users=action.payload;
            },
            updateUser:(state,action)=>
            {
                state.users.forEach((user,i)=>
                {
                    if(user.id==action.payload.id)
                       state.users[i]=action.payload;
                })
            }
        }
    }
 )
export default userSlice.reducer;
 export const {updateUser,deleteUser,addUser,setUser}=userSlice.actions;