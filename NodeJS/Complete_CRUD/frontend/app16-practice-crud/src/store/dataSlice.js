import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
        console.log(response);
      return response;
    }
  );

export const dataSlice = createSlice({
    name:"dataUsers",
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
    }

})

export default dataSlice.reducer;
export const { addAction, delAction, updAction } = dataSlice.actions;