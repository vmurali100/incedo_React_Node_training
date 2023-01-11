import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";
import axios from "axios";


const [editIndex,setEditIndex] = useState(null)

const editUser = (user,i)=>{
  setEditIndex(i)
  setUser(user)
}

const updateUser = ()=>{
  let newUsers = [...users]
  newUsers[editIndex] = user;
  setUsers(newUsers)
  setEditIndex(null)
  clearForm()
}

export const getUsersAsyncAction = createAsyncThunk(
  "users/getUsersAsyncAction",
  () => handleGetAllUsers()
);

export const addUserAsyncAction = createAsyncThunk(
  "users/addUserAsyncAction",
  (user) =>
    axios.post("https://jsonplaceholder.typicode.com/users", user).then(async (res) => {
      const finalPayload = await handleGetAllUsers();
      return finalPayload;
    })
);

const handleGetAllUsers = () =>
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => res.data);
  
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
    editUser: (state, action) => {
      let newUsers = [...users]
      newUsers[editIndex] = user;
      setUsers(newUsers)
      setEditIndex(null)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(addUserAsyncAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
   
  },
});

export default usersSlice.reducer;
export const { addUserAction, deleteUser } = usersSlice.actions;