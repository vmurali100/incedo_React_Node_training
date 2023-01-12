import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUsersAsyncAction = createAsyncThunk(
  "/users/getAllUsersAsyncAction",
  async () => {
    const res = await axios.get("http://localhost:3000/users/");
    return res.data;
  }
);
export const addUserAsyncAction = createAsyncThunk(
  "/users/addUserAsyncAction",
  async (user) => {
    await axios.post("http://localhost:3000/users/createuser", user);
    const res = await axios.get("http://localhost:3000/users/");
    return res.data;
  }
);
export const deleteUserAsyncAction = createAsyncThunk(
  "/users/deleteUserAsyncAction",
  async (user) => {
    await axios.delete("http://localhost:3000/users/delete/" + user.email);
    const res = await axios.get("http://localhost:3000/users/");
    return res.data;
  }
);
export const updateUserAsyncAction = createAsyncThunk(
  "/users/updateUserAsyncAction",
  async (user) => {
    await axios.put("http://localhost:3000/users/update/" + user.email, user);
    const res = await axios.get("http://localhost:3000/users/");
    return res.data;
  }
);
const userSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    addUser: () => {},
    deleteUser: () => {},
    updateUser: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAsyncAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
    });
    builder.addCase(addUserAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(updateUserAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export default userSlice.reducer;
export const { addUser, deleteuser, updateuser } = userSlice.actions;
