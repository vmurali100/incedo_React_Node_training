
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const getData= createAsyncThunk(
    'user/getData',
    async () => {
      const response = await axios.get("http://localhost:3001/users/read");
      return response.data.data
    }
  )
  export const addData= createAsyncThunk(
    'user/addData',
    async (user) => {
      const response = await axios.post("http://localhost:3001/users/register",user);
      return response.data
    }
  )
  export const deleleteData= createAsyncThunk(
    'user/deleleteData',
    async (email) => {
      const response = await axios.delete("http://localhost:3001/users/delete/"+email);

      return response.data
    }
  )
  export const updateData= createAsyncThunk(
    'user/updateData',
    async (user) => {
      const response = await axios.put("http://localhost:3001/users/put/"+user.email,user);
      return response.data
    }
  )

const userSlice=createSlice(
    {
        name:"user",
        initialState:{user:[]},
        reducers:
        {
            setUser:(state,action)=>
            {
                state.user=action.payload;
            }
        },
        extraReducers: (builder) => {
            
            builder.addCase(addData.fulfilled, (state, action) => {
              state.user=action.payload;
            })
            builder.addCase(deleleteData.fulfilled, (state, action) => {
              state.user=action.payload;
            })
            builder.addCase(getData.fulfilled, (state, action) => {
              state.user=action.payload;
            })
            builder.addCase(updateData.fulfilled, (state, action) => {
              state.user=action.payload;
            })
          },
    }
)
export const {setUser} =userSlice.actions;
export default userSlice.reducer;