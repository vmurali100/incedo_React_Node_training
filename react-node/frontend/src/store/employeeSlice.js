const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const getAllUsersAsyncAction = createAsyncThunk(
  "/users/getAllUsers",
  async () => {
    const response = await (await fetch("http://localhost:3000/users/")).json();
    return response;
  }
);
export const addUserAsyncAction = createAsyncThunk(
  "/users/adduser",
  async (user) => {
    const response = await await fetch("");
  }
);
const employeeSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    addUser: () => {},
    deleteuser: () => {},
    updateuser: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
