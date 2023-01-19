import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsersAsyncAction = createAsyncThunk(
  "users/getAllUsersAsyncAction",
  async () => {
    const response = await (await fetch("http://localhost:5000/users/db/display")).json();
    console.log("get all Users action response : ",response);
    return response;
  }
);

export const deleteUserAsyncAction = createAsyncThunk(
  "users/deleteUserAsyncAction",
  async (user) => {
       await fetch("http://localhost:5000/users/db/delete/" + user.email, {
        method: "DELETE",
      });
    const response = await (await fetch("http://localhost:5000/users/db/display")).json();
    console.log("get all Users action response : ",response);
    return response;  
  }
);
export const updateUserAsyncAction = createAsyncThunk(
  "users/updateUserAsyncAction",
  async (user) => {
    const response = await (
      await fetch("http://localhost:5000/users/db/update/" + user.email, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
    ).json();
    console.log("Update User action response : ",response);
    return response;
  }
);

export const addUserAsyncAction = createAsyncThunk(
  "users/addUserAsyncAction",
  async (user) => {
    const response = await (await fetch("http://localhost:5000/users/db/addUser", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
    ).json();
    console.log("addUser action response : ",response);
    return response;
  }
);

export const usersSlice = createSlice({
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
        console.log("get all Users actions : ",action.payload);
      state.users = action.payload;
    });
    builder.addCase(deleteUserAsyncAction.fulfilled, (state, action) => {
      console.log("delete action :",action.payload);
      state.users = action.payload;
    });
    
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUser, updateUser } = usersSlice.actions;
