import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { userSlice } from '../../../../app14-react-redux-toolkit/src/store/slice'
import { defaultState } from './defaultState'

export const addUserAction = createAsyncThunk(
    "users/addUser",
    (user)=>
    axios.post("http://localhost:3000/users/",user).then(async(res)=>{
        var data = await handleGetUsers();
        return data;
    })
)

handleGetUsers=async()=>axios.get("http://localhost:3000/users").then((res)=>res.data);

export const newSlice = createSlice({
    name:users,
    initialState:defaultState,
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload);
        },
        editUser:(state,action)=>{
            var user = [...state.users];
            user = user.forEach((usr,i)=>{
                if(usr.email===action.payload.email){
                    user[i]=action.payload;
                }
            })
            state.users = user;
        },
        delUser:(state,action)=>{
            state.users.splice(action.payload,1);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addUserAction.fulfilled,(state,action)=>{
            state.users=action.payload;
        })
    }
})

export default newSlice.reducer;
export const { addUser, delUser, editUser } = newSlice.actions;