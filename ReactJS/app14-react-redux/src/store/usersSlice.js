import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";
import axios from "axios";

export const getUsersAsyncAction = createAsyncThunk(
  "users/getUsersAsyncAction",
  () => handleGetAllUsers()
);

export const addUserAsyncAction = createAsyncThunk(
  "users/addUserAsyncAction",
  (user) =>
    axios.post("http://localhost:3000/users", user).then(async (res) => {
      const finalPayload = await handleGetAllUsers();
      return finalPayload;
    })
);
export const editUserAsyncAction = createAsyncThunk(
    "users/editUserAsyncAction",
    (user)=>
    axios.put("http://localhost:3000/users/"+user.id,user).then(async(res)=>{
        const finalPayload =await handleGetAllUsers();
        return finalPayload;
    })
)
export const deleteUserAsyncAction = createAsyncThunk(
    "users/deleteUserAsyncAction",
    (user) =>
      axios.delete("http://localhost:3000/users/"+user.id).then(async (res) => {
        const finalPayload = await handleGetAllUsers();
        return finalPayload;
      })
  );
const handleGetAllUsers = async () =>{
  return await axios.get("http://localhost:3000/users").then((res) => res.data);
}
  
export const usersSlice = createSlice({
  name: "users",
  initialState: defaultState,
  reducers: {
    addUserAction: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users.splice(action, 1);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(addUserAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(deleteUserAsyncAction.fulfilled, (state, action) => {
        state.users = action.payload;
      });
    builder.addCase(editUserAsyncAction.fulfilled, (state,action)=> {
      state.users=action.payload;
      state.user={};
      state.isEdit = !state.isEdit;
    })
  },
});

export default usersSlice.reducer;
export const { addUserAction, deleteUser} = usersSlice.actions;
