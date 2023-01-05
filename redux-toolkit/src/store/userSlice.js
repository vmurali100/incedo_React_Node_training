import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {axios} from 'axios';

const defaultState = {

    users: [],
}


export const getUserAsync = createAsyncThunk( 

    "users/getUserAsync", 
    ()=> handleGetAllUsers()

)


const handleGetAllUsers = () => {

    axios.get('https://jsonplaceholder.typicode.com/user').then( res => res.data)
      
    
}
export const userSlice =  createSlice ( {

    name:'user',
    initialState:defaultState,
    reducers : {

        addUser : ( state , action ) => {

            state.users.push( action.payload);

        },

        delelteUser : ( state , action) => {
             console.log(state);
             return state;
             

        } ,

    } ,

    extraReducers: ( buidler) => {

        buidler.addCase( getUserAsync.fulfilled , ( state , action) => {

            state.users = action.payload;
        } )
    }
})

export default userSlice.reducer;
export  const {  addUser , deleteUser }  = userSlice.actions;