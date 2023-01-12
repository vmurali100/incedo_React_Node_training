import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

// export const getUsersAsync = createAsyncThunk(
//     'users/getUsersAsync',
//    async ()=>{
//         var allUsers = await(await fetch("http://localhost:3000/data/users",{
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             mode:"no-cors"
//         }).json);
//         console.log(allUsers);
//         return allUsers;
//     }
// )
export const getUsersAsync = createAsyncThunk(
    "users/getUsersAsync",
    async () => {
      const response = await (await fetch("http://localhost:3000/data/users",{
        headers:{
            "Content-Type":"application/json",
            'Access-Control-Allow-Origin': '*',
        },
        mode:"cors"
      })).json();
      
      return response;
    }
  );

  export const addUserAsync = createAsyncThunk(
    'users/addUserAsync',
    async (user) =>{
      const response = await ( await fetch("http://localhost:3000/data/create",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
        mode:"cors"
      })).json();
      return response;
    }
  )

  export const deleteUserAsync = createAsyncThunk(
    'users/deleteUserAsync',
    async (user)=>{
      const response1 = await ( await fetch("http://localhost:3000/data/delete/"+user.email,{
        method:"DELETE",
        mode:"cors"
      })).json();
      return response1;
    }
  );

  export const editUserAsync = createAsyncThunk(
    'users/editUserAsync',
    async (user)=>{
      const response2 = await( await fetch("http://localhost:3000/data/update/"+user.email,{
        method:"PUT",
        body:JSON.stringify(user),
        headers:{
          "Content-type":"application/json",
        },
        mode:"cors"
      })).json();
      return response2;
    }
  )

export const dataSlice = createSlice({
    name:"users",
    initialState:{
        users:[],
    },
    reducers:{
        addAction:()=>{},
        delAction:()=>{},
        updAction:()=>{}
    },
    extraReducers:(builder)=>{
        builder.addCase(getUsersAsync.fulfilled,(state,action)=>{
            state.users = action.payload;
        })
        builder.addCase(addUserAsync.fulfilled,(state,action)=>{
          state.users = action.payload;
        })
        builder.addCase(deleteUserAsync.fulfilled,(state,action)=>{
          state.users = action.payload;
        })
        builder.addCase(editUserAsync.fulfilled,(state,action)=>{
          state.users = action.payload;
        })
    }
})

export default dataSlice.reducer;
export const { addAction, delAction, updAction } = dataSlice.actions;