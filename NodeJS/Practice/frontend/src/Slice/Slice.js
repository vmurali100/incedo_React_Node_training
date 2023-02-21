import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { defaultState } from './defaultState';

export const getUsersAction = createAsyncThunk(
    'getUsers',
    async ()=>{
        var users = await ( await fetch('http://localhost:3000/data/')).json();
        return users;
    }
)

export const addUserAction = createAsyncThunk(
    'addUser',
    async (user) => {
        var payload = await ( await fetch(`http://localhost:3000/data/create`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            mode:'cors'
        })).json();
        return payload;
    }
)

export const updateUserAction = createAsyncThunk(
    'updateUser',
    async (user) => {
        console.log(user);
        var users = await ( await fetch(`http://localhost:3000/data/update/${user.id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            mode:'cors'
        })).json();
        return users;
    }
);

export const deleteUserAction = createAsyncThunk(
    'deleteUser',
    async (user) =>{
        var users = await ( await fetch(`http://localhost:3000/data/delete/${user.id}`,{
            method:'DELETE'
        })).json();
        return users;
    })

export const UserSlice = createSlice({
    name:'data',
    initialState: defaultState,
    reducers:{
        addUser:(state,action)=>{
            var newData1 = [...state.users];
            newData1.push(action.payload);
            state.users=newData1;
        },
        delUser:(state,action)=>{
            var newData2 = [...state.users];
            newData2.splice(action.payload,1);
            state.users=newData2;
        },
        updUser:(state,action)=>{
            var newData3 = [...state.users];
            newData3.forEach((user,i)=>{
                if(user.id===action.payload.id){
                    newData3[i]=action.payload;
                }
            })
            state.users=newData3;
        },
        getUser:(state,action)=>{
            return state;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getUsersAction.fulfilled,(state,action)=>{
            state.users = action.payload;
        });
        builder.addCase(addUserAction.fulfilled,(state,action)=>{
            state.users = action.payload;
        });
        builder.addCase(updateUserAction.fulfilled,(state,action)=>{
            state.users = action.payload;
        });
    }
});

export default UserSlice.reducer;
export const {addUser,delUser,updUser,getUser} = UserSlice.actions;