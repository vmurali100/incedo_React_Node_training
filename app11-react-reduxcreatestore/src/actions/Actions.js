import { ACTION_TYPES } from "./ActionType";
import axios from 'axios';

export const addUser = (user)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3000/users/",user).then(async ()=>{
            const users = await getAllRegisterUsers();
            console.log(ACTION_TYPES);
            dispatch({
                type:ACTION_TYPES.ADD_USERS,
                payload:users
            });
        })
    }
}

const getAllRegisterUsers = ()=>{
    return axios.get("http://localhost:3000/users").then((res)=>res.data);
}

export const getUsers=()=>{
    return async (dispatch)=>{
        const users = await getAllRegisterUsers();
        dispatch({
            type:ACTION_TYPES.ADD_USERS,
            payload:users
        });
    }
}
export const deleteUser = (Id)=>{
    return {
        type:ACTION_TYPES.DELETE_USER,
        payload:Id
    };
};

export const setUser = (user)=>{
    return {
        type:ACTION_TYPES.ADD_USER,
        payload:user
    };
};