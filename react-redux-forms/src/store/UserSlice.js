import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {defaultState} from './defaultState';
import axios from 'axios';

export const postUsers = createAsyncThunk("users/postUsers",(developer)=>
    axios.post("http://localhost:3000/users/",developer).then(async (res)=>{
      
      return await handleGetAllDevelopers(); 
    })
);

export const deleteUsers = createAsyncThunk("users/deleteUsers",(id)=>
      axios.delete("http://localhost:3000/users/"+id).then(async (res)=>{
        return await handleGetAllDevelopers();
      }));

export const updateUsers = createAsyncThunk("users/updateUsers",(developer)=>
      axios.put("http://localhost:3000/users/"+developer.id,developer).then(async (res)=>{
        return await handleGetAllDevelopers();
      })
)

export const getUsers = createAsyncThunk("users/getUsers",()=>
             handleGetAllDevelopers());

const handleGetAllDevelopers = ()=> axios.get("http://localhost:3000/users").then((res)=> res.data);

