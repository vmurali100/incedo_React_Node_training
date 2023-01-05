import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {defaultState} from './defaultState';
import axios from 'axios';

export const postDevelopersInDbJson = createAsyncThunk("developers/postDevelopersInDbJson",(developer)=>
    axios.post("http://localhost:3000/developers/",developer).then(async (res)=>{
      
      return await handleGetAllDevelopers(); 
    })
);

export const deleteDeveloperInDbJson = createAsyncThunk("developers/deleteDeveloperInDbJson",(id)=>
      axios.delete("http://localhost:3000/developers/"+id).then(async (res)=>{
        return await handleGetAllDevelopers();
      }));

export const updateDeveloperInDbJson = createAsyncThunk("developers/updateDeveloperInDbJson",(developer)=>
      axios.put("http://localhost:3000/developers/"+developer.id,developer).then(async (res)=>{
        return await handleGetAllDevelopers();
      })
)

export const getDevelopersInDbJson = createAsyncThunk("developers/getDevelopersInDbJson",()=>
             handleGetAllDevelopers());

const handleGetAllDevelopers = ()=> axios.get("http://localhost:3000/developers").then((res)=> res.data);

export const developerSlice = createSlice({
    name:"developers",
    initialState:defaultState,
    reducers:{
        setDeveloper:(state,action)=>{
           state.developer=action.payload;
           state.isEdit = !state.isEdit
        } 
    },
    extraReducers:(builder)=>{
        builder.addCase(postDevelopersInDbJson.fulfilled,(state,action)=>{
            console.log("inside post builder");
            console.log(action);
            state.developers = action.payload;
        });
        builder.addCase(getDevelopersInDbJson.fulfilled,(state,action)=>{
            state.developers = action.payload;
        });
        builder.addCase(deleteDeveloperInDbJson.fulfilled,(state,action)=>{
            state.developers = action.payload;
        });
        builder.addCase(updateDeveloperInDbJson.fulfilled,(state,action)=>{
            state.developers = action.payload;
            state.developer = {};
            state.isEdit = !state.isEdit;
        });

    }
});

export default developerSlice.reducer;
export const {setDeveloper} = developerSlice.actions;