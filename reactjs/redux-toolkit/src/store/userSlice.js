import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

const defaultState = {

    users: [],
}


export const getUserAsync = createAsyncThunk( 
 

    "users/getUserAsync", 
    ()=>  handleGetAllUsers()

)


const handleGetAllUsers = () => {
 
    console.log( 'get');
    axios.get( 'https://jsonplaceholder.typicode.com/users').then( res => res.data)
      
    
}
export const userSlice =  createSlice ( {

    name:'user',
    initialState:defaultState,
    reducers : {

        addUser : ( state , action ) => {

            state.users.push( action.payload);

        },

        deleteUser : ( state , action) => {
                    
            // console.log(action.payload);
            return { ...state ,  users : state.users.filter((u) =>  u.username !== action.payload) }
             

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