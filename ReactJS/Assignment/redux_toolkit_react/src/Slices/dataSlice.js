import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { data: [] },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    updateUser: (state, action) => {
      state.data.forEach((d, i) => {
        if (d.id === action.payload.id) state.data[i] = action.payload;
      });
    },
    setUser: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setUser, updateUser, deleteUser, addUser } = dataSlice.actions;
export default dataSlice.reducer;
