import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsersAsyncAction = createAsyncThunk(
  "users/getAllUsersAsyncAction",
  async () => {
    const response = await (await fetch("http://localhost:3000/users")).json();
    console.log("all users:", response)
    return response;
  }
);

export const deleteUserAsyncAction = createAsyncThunk(
  "users/deleteUserAsyncAction",
  async (user) => {
    const response = await ( await fetch("http://localhost:3000/users/delete/" + user.email, {
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
      await fetch("http://localhost:3000/users/update/" + user.email, {
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
      await fetch("http://localhost:3000/users/createUser/", {
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

export default usersSlice.reducer;
export const { addUser, deleteUser, updateUser } = usersSlice.actions;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

// export const getAllUsersAsyncAction = createAsyncThunk(
//   "users/getAllUsersAsyncAction", async () => {
//     const users = await getUsers();
//       return users; }
// );

// export const getUsers = async () =>
// await axios.get("http://localhost:3000/users").then((res)=> res.data)


// export const deleteUserAsyncAction = createAsyncThunk(
//   "users/deleteUserAsyncAction",
//   async (user) => {
//     await axios.delete("http://localhost:3000/users/delete/" + user.email).then(async(res)=> {
//       const users = await getUsers();
//       return users; })
//   }
// )


// export const updateUserAsyncAction = createAsyncThunk(
//   "users/updateUserAsyncAction",
//   async (user) => {
//   await axios.put("http://localhost:3000/users/update/" + user.email, user).then(async(res)=>{
//     const users = await getUsers();
//       return users; })
//   }
// );

// export const addUserAsyncAction = createAsyncThunk(
//   "users/addUserAsyncAction",
//   async (user) => {
//   await axios.post("http://localhost:3000/users/createUser/",user).then(async(res)=>{
//     const users = await getUsers();
//       return users; })
//   }
// );

// export const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     users: [],
//   },
//   reducers: {
//     // addUser: () => {},
//     // deleteUser: () => {},
//     // updateUser: () => {},
//     addUser: (state, action) => {
//       state.users = action.payload;
//   }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getAllUsersAsyncAction.fulfilled, (state, action) => {
//       state.users = action.payload;
//     });
//     builder.addCase(deleteUserAsyncAction.fulfilled, (state, action) => {
//       state.users = action.payload;
//     });
//     builder.addCase(updateUserAsyncAction.fulfilled, (state, action) => {
//       state.users = action.payload;
//     });
//   },
// });

// export default usersSlice.reducer;
//export const { addUser, deleteUser, updateUser } = usersSlice.actions;







