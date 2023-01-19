import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";


export const getAllUsersAsyncAction=createAsyncThunk(
    "users/getAllUsersAsyncAction",
    async ()=>{
        const response=await(await fetch("http://localhost:3009/users/db/display")).json();
        console.log("get all users is called");
        return response;
    }
);

export const deleteUserAsyncAction=createAsyncThunk(
    "users/deleteUserAsyncAction",
    async (user)=>{
        await fetch("http://localhost:3009/users/db/delete/"+user.email,{
            method:"DELETE"
        });
        const response=await(await fetch("http://localhost:3009/users/db/display")).json();
        console.log(response);
        return response;
    }
);

export const updateUserAsyncAction=createAsyncThunk(
    "users/updateUserAsyncAction",
    async (user)=>{
        console.log("Async update function");
        console.log(user);
        await fetch("http://localhost:3009/users/db/update/"+user.email,{
            method:"PUT",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json",
            },
            mode:"cors",
        })
        const response=await(await fetch("http://localhost:3009/users/db/display")).json();
        console.log(response);
        return response;
    }
)

export const addUserAsyncAction=createAsyncThunk(
    "users/addUserAsyncAction",
    async (user)=>{
        await fetch("http://localhost:3009/users/db/addUser",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json",
            },
            mode:"cors",
        })
        const response=await(await fetch("http://localhost:3009/users/db/display")).json();
        console.log(response);
        return response;
    }
);

export const userSlice=createSlice({
    name:"users",
    initialState:{
        users:[],
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllUsersAsyncAction.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.users=action.payload;
        });
        builder.addCase(addUserAsyncAction.fulfilled,(state,action)=>{
            state.users=action.payload;
        });
        builder.addCase(deleteUserAsyncAction.fulfilled,(state,action)=>{
            state.users=action.payload;
        });
        builder.addCase(updateUserAsyncAction.fulfilled,(state,action)=>{
            state.users=action.payload;
        });
    }
});

export default userSlice.reducer;
