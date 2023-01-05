import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";
import axios from "axios";

export const getStudentsAsyncAction = createAsyncThunk(
  "Students/getStudentsAsyncAction",
  () => handleGetAllStudents()
);
export const addStudentAsyncAction = createAsyncThunk(
  "Students/addStudentAsyncAction",
  (Student) =>
    axios.post("http://localhost:3201/Students/", Student).then(async (res) => {
      const finalPayload = await handleGetAllStudents();
      return finalPayload;
    })
);/* 
export const deleteStudentAsyncAction = createAsyncThunk(
  "Students/deleteStudentAsyncAction",
  (Student) =>
    axios.delete("http://localhost:3201/Students/", Student).then(async (res) => {
      const finalPayload = await handleGetAllStudents();
      return finalPayload;
    })
); */

const handleGetAllStudents = () =>
  axios.get("http://localhost:3201/Students").then((res) => res.data);
  
export const StudentsSlice = createSlice({
  name: "Students",
  initialState: defaultState,
  reducers: {
    addStudentAction: (state, action) => {
      state.Students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.Students.splice(action, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStudentsAsyncAction.fulfilled, (state, action) => {
      state.Students = action.payload;
    });
    builder.addCase(addStudentAsyncAction.fulfilled, (state, action) => {
      state.Students = action.payload;
    });
    builder.addCase(deleteStudentAsyncAction.fulfilled, (state, action) => {
      state.Students = action.payload;
    });
  },
});

export default StudentsSlice.reducer;
export const { addStudentAction, deleteStudent } = StudentsSlice.actions;
