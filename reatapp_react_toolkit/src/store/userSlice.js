import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import  defaultState  from './defaultState'
import axios from 'axios'

export const getUserAsyncAction = createAsyncThunk("users/getUserAsyncAction",()=>handleGetAllUsers());
const handleGetAllUsers = ()=>
    axios.get("http://localhost:3000/user").then((res)=>
        res.data)
export const addUserAsyncAction = createAsyncThunk("users/addUserAsyncAction",(user)=>
axios.post("http://localhost:3000/user/",user).then(async(res)=>{
        const finalPayload = await handleGetAllUsers();
        return finalPayload;
    })
);

    

export const userSlice = createSlice({
    name: "users",
    initialState: defaultState,
    reducers:{

        deleteUser : (state,action)=>{
            state.users.splice(action.payload,1)
        },
        addUser : (state,action)=>{

            state.users.push(action.payload)

        }

    },
    extraReducers : (builder)=>{
        builder.addCase(getUserAsyncAction.fulfilled,(state,action)=>
        {
            state.users = action.payload;
        });
        builder.addCase(addUserAsyncAction.fulfilled,(state,action)=>{
            state.users = action.payload;

        })
    }
})

export default userSlice.reducer
export const {deleteUser,addUser} = userSlice.actions;