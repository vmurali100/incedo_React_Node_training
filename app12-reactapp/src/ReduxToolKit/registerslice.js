import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const InitialState = {
    registerUsers: [],
    registerUser: {username:"",company:"",email:"",phone:"",subject:""},
    isEdit: false
};
//Deleting the data from the databse 
export const deleteRegisteredUser = createAsyncThunk("deleteRegisteredUser",async (user)=>
    await axios.delete("http://localhost:3002/registerUsers/delete/"+user.userid).then(async (res)=>{
        const registeredUsers = await getAllRegisteredUsers();
        return registeredUsers;
    })
)
//updating data to database and updating the redux state
export const updateRegisteredUser = createAsyncThunk("updateRegisteredUser",async (user)=>
    await axios.put("http://localhost:3002/registerUsers/update/"+user.userid,user).then(res=>{
        const registeredUsers = getAllRegisteredUsers();
        return registeredUsers;
    })
)
//posting data to database and updating the redux state
export const postRegisteredUser = createAsyncThunk("postRegisteredUser", async (rUser) =>
    await axios.post("http://localhost:3002/registerUsers/save", rUser).then(res => {
        const registeredUsers = getAllRegisteredUsers();
        return registeredUsers;
    }
    )
);

//getting data from database by calling helper function and updating the reduxstate
export const getRegisteredUsers = createAsyncThunk("getRegisteredUsers", async () => {
    console.log("inside registered users");
    const users = await getAllRegisteredUsers()
    return users;
})

//helper function to get data from database
const getAllRegisteredUsers = async () => {
    return await axios.get("http://localhost:3002/registerUsers/get").then(res => { console.log(res); return res.data });
}
const registerSlice = createSlice({
    name: "registerSlice",
    initialState: InitialState,
    reducers: {
        addUser: (state, action) => {
            state.registerUser = action.payload;
            state.isEdit = !state.isEdit;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postRegisteredUser.fulfilled, (state, action) => {
            state.registerUsers = action.payload;
        });
        builder.addCase(getRegisteredUsers.fulfilled, (state, action) => {
            state.registerUsers = action.payload;
        });
        builder.addCase(updateRegisteredUser.fulfilled,(state,action)=>{
            state.registerUsers = action.payload;
            state.isEdit = !state.isEdit;
        });
        builder.addCase(deleteRegisteredUser.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.registerUsers = action.payload;
        })

    }
});

export default registerSlice.reducer;

export const { addUser } = registerSlice.actions;