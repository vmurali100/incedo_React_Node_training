import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";

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
});

export default usersSlice.reducer;
export const { addUserAction, deleteUser } = usersSlice.actions;