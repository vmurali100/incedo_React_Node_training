import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsersAsyncAction = createAsyncThunk(
  "users/getAllUsersAsyncAction",
  async () => {
    const response = await (
      await fetch("http://localhost:3000/users/allUsers")
    ).json();
    return response;
  }
);

export const deleteUserAsyncAction = createAsyncThunk(
  "users/deleteUserAsyncAction",
  async (user) => {
    const response = await (
      await fetch("http://localhost:3000/users/deleteUser/" + user.email, {
        method: "DELETE",
      })
    ).json();
    return response;
  }
);
export const updateUserAsyncAction = createAsyncThunk(
  "users/updateUserAsyncAction",
  async (user) => {
    const response = await (
      await fetch("http://localhost:3000/users/updateUser/" + user.email, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
    ).json();
    return response;
  }
);

export const addUserAsyncAction = createAsyncThunk(
  "users/addUserAsyncAction",
  async (user) => {
    const response = await (
      await fetch("http://localhost:3000/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
    ).json();
    return response;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: () => {},
    deleteUser: () => {},
    updateUser: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(deleteUserAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(updateUserAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateUser } = userSlice.actions;
