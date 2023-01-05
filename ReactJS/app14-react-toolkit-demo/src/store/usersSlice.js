<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";

=======
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
    axios.post("http://localhost:3201/users/", user).then(async (res) => {
      const finalPayload = await handleGetAllUsers();
      return finalPayload;
    })
);

const handleGetAllUsers = () =>
  axios.get("http://localhost:3201/users").then((res) => res.data);
  
>>>>>>> 1b49dce71a83faad60a4549fa49317479697c594
export const usersSlice = createSlice({
  name: "users",
  initialState: defaultState,
  reducers: {
    addUserAction: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users.splice(action, 1);
    },
  },
<<<<<<< HEAD
=======
  extraReducers: (builder) => {
    builder.addCase(getUsersAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(addUserAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    // builder.addCase(getUsersAsyncAction.pending, (state, action) => {
    //   console.log("getUsersAsyncAction Pending !!");
    // });
    // builder.addCase(getUsersAsyncAction.rejected, (state, action) => {
    //   console.log("getUsersAsyncAction rejected !!");
    // });
  },
>>>>>>> 1b49dce71a83faad60a4549fa49317479697c594
});

export default usersSlice.reducer;
export const { addUserAction, deleteUser } = usersSlice.actions;
